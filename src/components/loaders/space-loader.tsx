'use client'

import React from 'react'
import Image from 'next/image'

interface SpaceLoaderProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'fullscreen'
  text?: string
  color?: string // Un solo color para todo
}

export function SpaceLoader({
  size = 'md',
  variant = 'default',
  text,
  color = '#00d9ff', // Color por defecto
}: SpaceLoaderProps) {
  
  const sizeMap = {
    sm: 'w-24 h-24',
    md: 'w-36 h-36',
    lg: 'w-52 h-52',
  }

  const logoSizeMap = {
    sm: 'h-14 w-14',
    md: 'h-24 w-24',
    lg: 'h-36 w-36',
  }

  const content = (
    <>
      <style jsx global>{`
        @keyframes pulseScale {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>
      
      <div className="relative flex flex-col items-center justify-center">
        {/* Contenedor del Logo con animación de crecimiento */}
        <div
          className={`relative ${logoSizeMap[size]} flex items-center justify-center`}
          style={{
            animation: 'pulseScale 2.5s ease-in-out infinite'
          }}
        >
          <Image
            src="/images/logos/logo-icon.svg"
            alt="Loading..."
            fill
            className="object-contain"
            priority
          />
        </div>

        {text && (
          <p
            className="mt-4 text-xs font-bold tracking-[0.3em] uppercase opacity-80"
            style={{ color: color }}
          >
            {text}
          </p>
        )}
      </div>
    </>
  )

  if (variant === 'fullscreen') {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#050A14]">
        {content}
      </div>
    )
  }

  return (
    <div className={`${sizeMap[size]} mx-auto flex items-center justify-center`}>
      {content}
    </div>
  )
}

export default SpaceLoader