import { ToastVariant } from '@/presentation/hooks/toast/use-toast'

let toastAddFunction: ((toast: {
  title: string
  description?: string
  variant: ToastVariant
  icon?: React.ReactNode
  image?: string
  duration?: number
}) => string) | null = null

// Register the toast function when the provider is ready
export function registerToastFunction(
  fn: (toast: {
    title: string
    description?: string
    variant: ToastVariant
    icon?: React.ReactNode
    image?: string
    duration?: number
  }) => string
) {
  toastAddFunction = fn
}

function showToast(
  variant: ToastVariant,
  title: string,
  description?: string,
  options?: { icon?: React.ReactNode; image?: string; duration?: number }
): string {
  if (!toastAddFunction) {
    console.warn('Toast function not yet initialized. Make sure ToastProvider is mounted.')
    return ''
  }

  return toastAddFunction({
    title,
    description,
    variant,
    icon: options?.icon,
    image: options?.image,
    duration: options?.duration,
  })
}

export const toast = {
  success: (title: string, description?: string, options?: { icon?: React.ReactNode; image?: string; duration?: number }) =>
    showToast('success', title, description, options),

  error: (title: string, description?: string, options?: { icon?: React.ReactNode; image?: string; duration?: number }) =>
    showToast('error', title, description, options),

  warning: (title: string, description?: string, options?: { icon?: React.ReactNode; image?: string; duration?: number }) =>
    showToast('warning', title, description, options),

  info: (title: string, description?: string, options?: { icon?: React.ReactNode; image?: string; duration?: number }) =>
    showToast('info', title, description, options),

  loading: (title: string, description?: string, options?: { icon?: React.ReactNode; image?: string; duration?: number }) =>
    showToast('loading', title, description, options),

  dismiss: (id: string) => {
    // Will be implemented by the ToastContainer
  },

  dismissAll: () => {
    // Will be implemented by the ToastContainer
  },
}
