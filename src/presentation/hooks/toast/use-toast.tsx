'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

export type ToastVariant = 'success' | 'error' | 'warning' | 'info' | 'loading'

export interface Toast {
  id: string
  title: string
  description?: string
  variant: ToastVariant
  icon?: ReactNode
  image?: string
  duration?: number
  timestamp: number
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id' | 'timestamp'>) => string
  removeToast: (id: string) => void
  clearAll: () => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, 'id' | 'timestamp'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    const newToast: Toast = {
      ...toast,
      id,
      timestamp: Date.now(),
    }

    setToasts((prev) => [...prev, newToast])

    // Auto-remove toast after duration (default 5000ms)
    const duration = toast.duration ?? (toast.variant === 'loading' ? Infinity : 5000)
    if (duration !== Infinity) {
      const timer = setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, duration)

      return id
    }

    return id
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const clearAll = useCallback(() => {
    setToasts([])
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, clearAll }} >
      {children}
    </ToastContext.Provider>
  )
}

export function useToastContext() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToastContext must be used within ToastProvider')
  }
  return context
}
