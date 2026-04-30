'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle, Loader2 } from 'lucide-react'
import type { Toast } from '@/presentation/hooks/toast/use-toast'
import { getToastStyles } from '@/lib/toast/toast-styles'

interface ToastCardProps {
  toast: Toast
  onClose: () => void
}

export default function ToastCard({ toast, onClose }: ToastCardProps) {
  const [progress, setProgress] = useState(100)
  const styles = getToastStyles(toast.variant)
  const duration = toast.duration ?? (toast.variant === 'loading' ? Infinity : 5000)

  useEffect(() => {
    if (duration === Infinity) return

    const startTime = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100)
      setProgress(remaining)

      if (remaining === 0) {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [duration])

  const getIcon = () => {
    switch (toast.variant) {
      case 'success':
        return <CheckCircle className="w-6 h-6" />
      case 'error':
        return <AlertCircle className="w-6 h-6" />
      case 'warning':
        return <AlertTriangle className="w-6 h-6" />
      case 'info':
        return <Info className="w-6 h-6" />
      case 'loading':
        return <Loader2 className="w-6 h-6 animate-spin" />
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -40, x: 120, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      exit={{ opacity: 0, y: -40, x: 120, scale: 0.9 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="pointer-events-auto"
    >
      <div
        className={`relative w-full max-w-md rounded-2xl overflow-hidden backdrop-blur-2xl border-2 ${styles.bg} ${styles.border} transition-all duration-300 hover:shadow-2xl`}
        style={{
          boxShadow: `0 0 60px ${styles.glowColor}30, inset 0 1px 1px rgba(255,255,255,0.15)`,
        }}
      >
        {/* Neon glow background */}
        <div
          className="absolute inset-0 opacity-25 mix-blend-screen pointer-events-none"
          style={{
            background: `radial-gradient(circle at top right, ${styles.glowColor}50, transparent 70%)`,
          }}
        />

        {/* Animated gradient border glow */}
        <div
          className="absolute -inset-0.5 opacity-20 rounded-2xl pointer-events-none blur"
          style={{
            background: `linear-gradient(135deg, ${styles.glowColor}40, transparent)`,
          }}
        />

        {/* Main content */}
        <div className="relative z-10 p-6 flex gap-5">
          {/* Icon/Image */}
          <div className="shrink-0 flex items-start pt-1">
            {toast.image ? (
              <div className="relative group">
                <div
                  className="absolute inset-0 rounded-xl blur-md opacity-60 transition-all duration-300 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, ${styles.glowColor}60, ${styles.glowColor}20)`,
                  }}
                />
                <img
                  src={toast.image}
                  alt="toast"
                  className="relative w-14 h-14 rounded-xl object-cover border border-white/20 shadow-lg"
                />
              </div>
            ) : (
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-xl ${styles.iconBg} ${styles.iconColor} shadow-lg transition-all duration-300`}
                style={{
                  boxShadow: `0 0 30px ${styles.glowColor}40, inset 0 1px 0 rgba(255,255,255,0.1)`,
                }}
              >
                {getIcon()}
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="flex-1 min-w-0 pt-1">
            <h3 className={`text-base font-bold leading-tight ${styles.text}`}>
              {toast.title}
            </h3>
            {toast.description && (
              <p className={`text-sm leading-relaxed mt-2 ${styles.textMuted}`}>
                {toast.description}
              </p>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className={`shrink-0 p-2 rounded-lg transition-all duration-200 hover:bg-white/10 active:scale-95 ${styles.closeText}`}
            aria-label="Close toast"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Animated progress bar */}
        {duration !== Infinity && (
          <motion.div
            className={`h-1.5 ${styles.progress} relative`}
            initial={{ scaleX: 1 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ type: 'tween', duration: 0.05 }}
            style={{ transformOrigin: 'left' }}
          >
            <div className="absolute inset-0 opacity-50 blur-sm bg-inherit" />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
