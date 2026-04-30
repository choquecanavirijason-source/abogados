'use client'

import React from 'react'

interface NotFoundTitleProps {
  code?: string
  subtitle?: string
  className?: string
}

export default function NotFoundTitle({ code = '404', subtitle = 'Página no encontrada', className }: NotFoundTitleProps) {
  return (
    <div className={className}>
      <h1 className="text-4xl md:text-5xl font-bold text-[#00d9ff] mb-4">
        {code}
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-slate-200">
        {subtitle}
      </h2>
    </div>
  )
}
