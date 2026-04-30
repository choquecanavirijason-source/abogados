'use client'

import { AlertCircle } from 'lucide-react'

interface NotFoundIconProps {
  className?: string
  iconClassName?: string
}

export default function NotFoundIcon({ className, iconClassName }: NotFoundIconProps) {
  return (
    <div
      className={className}
      role="img"
      aria-hidden
    >
      <div className="bg-[#00d9ff]/20 p-4 rounded-full inline-flex">
        <AlertCircle className={`w-10 h-10 text-[#00d9ff] ${iconClassName ?? ''}`} />
      </div>
    </div>
  )
}
