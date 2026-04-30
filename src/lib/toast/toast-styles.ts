import { ToastVariant } from '@/presentation/hooks/toast/use-toast'

interface ToastStyle {
  bg: string
  border: string
  text: string
  textMuted: string
  iconBg: string
  iconColor: string
  closeText: string
  progress: string
  glowColor: string
}

const styles: Record<ToastVariant, ToastStyle> = {
  success: {
    bg: 'bg-gradient-to-br from-slate-900/90 to-blue-900/90 dark:from-slate-950/95 dark:to-blue-950/95',
    border: 'border-emerald-500/40 dark:border-emerald-500/50',
    text: 'text-emerald-300 dark:text-emerald-200',
    textMuted: 'text-emerald-200/70 dark:text-emerald-200/60',
    iconBg: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/10 dark:from-emerald-500/30 dark:to-teal-500/20',
    iconColor: 'text-emerald-400 dark:text-emerald-300',
    closeText: 'text-emerald-300/80 hover:text-emerald-200 dark:text-emerald-300/80 dark:hover:text-emerald-200',
    progress: 'bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400',
    glowColor: '#10b981',
  },
  error: {
    bg: 'bg-gradient-to-br from-slate-900/90 to-blue-900/90 dark:from-slate-950/95 dark:to-blue-950/95',
    border: 'border-red-500/40 dark:border-red-500/50',
    text: 'text-red-300 dark:text-red-200',
    textMuted: 'text-red-200/70 dark:text-red-200/60',
    iconBg: 'bg-gradient-to-br from-red-500/20 to-rose-500/10 dark:from-red-500/30 dark:to-rose-500/20',
    iconColor: 'text-red-400 dark:text-red-300',
    closeText: 'text-red-300/80 hover:text-red-200 dark:text-red-300/80 dark:hover:text-red-200',
    progress: 'bg-gradient-to-r from-red-500 via-rose-400 to-pink-400',
    glowColor: '#ef4444',
  },
  warning: {
    bg: 'bg-gradient-to-br from-slate-900/90 to-blue-900/90 dark:from-slate-950/95 dark:to-blue-950/95',
    border: 'border-amber-500/40 dark:border-amber-500/50',
    text: 'text-amber-300 dark:text-amber-200',
    textMuted: 'text-amber-200/70 dark:text-amber-200/60',
    iconBg: 'bg-gradient-to-br from-amber-500/20 to-orange-500/10 dark:from-amber-500/30 dark:to-orange-500/20',
    iconColor: 'text-amber-400 dark:text-amber-300',
    closeText: 'text-amber-300/80 hover:text-amber-200 dark:text-amber-300/80 dark:hover:text-amber-200',
    progress: 'bg-gradient-to-r from-amber-500 via-orange-400 to-red-400',
    glowColor: '#f59e0b',
  },
  info: {
    bg: 'bg-gradient-to-br from-slate-900/90 to-blue-900/90 dark:from-slate-950/95 dark:to-blue-950/95',
    border: 'border-cyan-500/40 dark:border-cyan-500/50',
    text: 'text-cyan-300 dark:text-cyan-200',
    textMuted: 'text-cyan-200/70 dark:text-cyan-200/60',
    iconBg: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/10 dark:from-cyan-500/30 dark:to-blue-500/20',
    iconColor: 'text-cyan-400 dark:text-cyan-300',
    closeText: 'text-cyan-300/80 hover:text-cyan-200 dark:text-cyan-300/80 dark:hover:text-cyan-200',
    progress: 'bg-gradient-to-r from-cyan-500 via-blue-400 to-violet-400',
    glowColor: '#06b6d4',
  },
  loading: {
    bg: 'bg-gradient-to-br from-slate-900/90 to-blue-900/90 dark:from-slate-950/95 dark:to-blue-950/95',
    border: 'border-blue-500/40 dark:border-blue-500/50',
    text: 'text-blue-300 dark:text-blue-200',
    textMuted: 'text-blue-200/70 dark:text-blue-200/60',
    iconBg: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/10 dark:from-blue-500/30 dark:to-cyan-500/20',
    iconColor: 'text-blue-400 dark:text-blue-300',
    closeText: 'text-blue-300/80 hover:text-blue-200 dark:text-blue-300/80 dark:hover:text-blue-200',
    progress: 'bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400',
    glowColor: '#3b82f6',
  },
}

export function getToastStyles(variant: ToastVariant): ToastStyle {
  return styles[variant]
}
