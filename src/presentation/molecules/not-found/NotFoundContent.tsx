'use client'

import React from 'react'
import NotFoundIcon from '@/presentation/atoms/not-found/NotFoundIcon'
import NotFoundTitle from '@/presentation/atoms/not-found/NotFoundTitle'
import NotFoundDescription from '@/presentation/atoms/not-found/NotFoundDescription'

interface NotFoundContentProps {
  titleCode?: string
  titleSubtitle?: string
  description?: React.ReactNode
  className?: string
}

export default function NotFoundContent({
  titleCode = '404',
  titleSubtitle = 'Página no encontrada',
  description = 'Lo sentimos, la página que buscas no existe o ha sido movida. Por favor, vuelve al inicio.',
  className,
}: NotFoundContentProps) {
  return (
    <div className={`text-center max-w-md w-full ${className ?? ''}`}>
      <div className="mb-8 flex justify-center">
        <NotFoundIcon />
      </div>
      <NotFoundTitle code={titleCode} subtitle={titleSubtitle} />
      <NotFoundDescription className="mb-8">
        {description}
      </NotFoundDescription>
    </div>
  )
}
