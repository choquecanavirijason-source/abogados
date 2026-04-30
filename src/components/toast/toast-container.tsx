'use client'

import { useEffect } from 'react'
import { useToastContext } from '@/presentation/hooks/toast/use-toast'
import { registerToastFunction } from '@/lib/toast/toast'
import ToastCard from '@/components/toast/toast-card'

export default function ToastContainer() {
  const { toasts, addToast, removeToast, clearAll } = useToastContext()

  // Register the toast function globally
  useEffect(() => {
    registerToastFunction(addToast)
  }, [addToast])

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col gap-3 max-w-md pointer-events-none">
      {toasts.map((toast) => (
        <ToastCard
          key={toast.id}
          toast={toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  )
}
