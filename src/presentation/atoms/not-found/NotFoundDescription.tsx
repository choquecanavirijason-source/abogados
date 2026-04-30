'use client'

import React from 'react'

interface NotFoundDescriptionProps {
  children: React.ReactNode
  className?: string
}

export default function NotFoundDescription({ children, className }: NotFoundDescriptionProps) {
  return (
    <p className={`text-slate-400 text-base md:text-lg leading-relaxed ${className ?? ''}`}>
      {children}
    </p>
  )
}
