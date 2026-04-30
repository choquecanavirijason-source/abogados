'use client'

import { cn } from '@/lib/utils'

interface BadgeProps {
  badge_text: string
  className?: string
  textClassName?: string
}

const DEFAULT_RING =
  'bg-linear-to-r from-[var(--section-accent-light)] via-[var(--section-accent-light)]/80 to-[var(--section-muted-light)] dark:from-[var(--section-accent-dark)] dark:via-[var(--section-accent-dark)]/80 dark:to-[var(--section-muted-dark)]'

export default function BadgeGeneral({ badge_text, className, textClassName }: BadgeProps) {
  return (
    <div
      className={cn(
        'max-w-fit overflow-hidden rounded-lg p-px',
        className?.trim() ? className : DEFAULT_RING
      )}
    >
      <div className="rounded-lg bg-[var(--section-bg-light)]/90 px-2 py-1 md:px-3 md:py-2 2xl:px-4 2xl:py-2 dark:bg-[#0C0F14]">
        <span
          className={cn(
            'font-euclid text-xs font-bold uppercase tracking-wide text-[#2E3E59] transition-all duration-150 sm:text-[16px] md:text-sm xl:text-base 2xl:text-sm dark:text-[#D1D5DB]',
            textClassName
          )}
        >
          {badge_text}
        </span>
      </div>
    </div>
  )
}
