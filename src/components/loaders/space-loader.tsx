'use client'

import React from 'react'
import Image from 'next/image'

interface SpaceLoaderProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'fullscreen'
  text?: string
  colorTheme?: 'blue' | 'cyan' | 'purple'
}

const COLOR_MAP = {
  blue: { primary: '#00d9ff', secondary: '#0099ff', accent: '#78e8ff', background: '#0a0e27' },
  cyan: { primary: '#00ffff', secondary: '#00ccff', accent: '#7bfff5', background: '#081b24' },
  purple: { primary: '#b344ff', secondary: '#9933ff', accent: '#d49bff', background: '#170a2a' },
} as const

export function SpaceLoader({
  size = 'md',
  variant = 'default',
  text,
  colorTheme = 'blue',
}: SpaceLoaderProps) {
  const sizeMap = {
    sm: 'w-28 h-28',
    md: 'w-40 h-40',
    lg: 'w-60 h-60',
  }

  const { primary, secondary, background } = COLOR_MAP[colorTheme]
  const ringClasses = 'absolute inset-0 rounded-full border border-white/10'

  if (variant === 'fullscreen') {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center z-50" style={{ backgroundColor: background }}>
        <div className="relative w-44 h-44">
          <div
            className="pointer-events-none absolute -inset-8 rounded-full blur-2xl opacity-45"
            style={{ background: `radial-gradient(circle, ${primary}33 0%, ${secondary}00 70%)` }}
          />
          <div className={ringClasses} style={{ borderColor: `${primary}88`, animation: 'spin 2.2s linear infinite' }} />
          <div
            className={ringClasses}
            style={{
              borderColor: `${secondary}80`,
              transform: 'scale(0.82)',
              animation: 'spin 1.6s linear infinite reverse',
            }}
          />
          <div
            className={ringClasses}
            style={{
              borderColor: `${primary}66`,
              transform: 'scale(0.64)',
              animation: 'spin 1.2s linear infinite',
            }}
          />
          <span
            className="absolute h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: primary, top: '10%', left: '50%', boxShadow: `0 0 14px ${primary}` }}
          />
          <span
            className="absolute h-2 w-2 rounded-full"
            style={{ backgroundColor: secondary, top: '72%', right: '14%', boxShadow: `0 0 12px ${secondary}` }}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div
              className="relative h-14 w-14 overflow-hidden rounded-xl border border-white/25 bg-white/10 shadow-[0_0_25px_rgba(255,255,255,0.12)] backdrop-blur-sm"
              style={{ boxShadow: `0 0 30px ${primary}55` }}
            >
              <Image src="/images/logos/logo-icon.svg" alt="Logo" fill className="object-contain p-2" priority />
            </div>
          </div>
        </div>

        {text && (
          <p
            className="mt-4 text-sm font-medium tracking-wide animate-pulse"
            style={{ color: primary }}
          >
            {text}
          </p>
        )}

        <div className="flex gap-1.5 mt-3">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-1.5 h-1.5 rounded-full animate-bounce"
              style={{
                backgroundColor: primary,
                animationDelay: `${i * 0.15}s`,
                animationDuration: '0.8s',
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={`${sizeMap[size]} mx-auto flex flex-col items-center justify-center`}>
      <div className="relative h-full w-full">
        <div
          className="pointer-events-none absolute -inset-4 rounded-full blur-xl opacity-45"
          style={{ background: `radial-gradient(circle, ${primary}30 0%, ${secondary}00 72%)` }}
        />
        <div className={ringClasses} style={{ borderColor: `${primary}88`, animation: 'spin 2s linear infinite' }} />
        <div
          className={ringClasses}
          style={{
            borderColor: `${secondary}80`,
            transform: 'scale(0.8)',
            animation: 'spin 1.5s linear infinite reverse',
          }}
        />
        <div
          className={ringClasses}
          style={{
            borderColor: `${primary}66`,
            transform: 'scale(0.62)',
            animation: 'spin 1.1s linear infinite',
          }}
        />
        <span
          className="absolute h-2 w-2 rounded-full"
          style={{ backgroundColor: primary, top: '11%', left: '50%', boxShadow: `0 0 10px ${primary}` }}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div
            className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm"
            style={{ boxShadow: `0 0 16px ${primary}45` }}
          >
            <Image src="/images/logos/logo-icon.svg" alt="Logo" fill className="object-contain p-1.5" />
          </div>
        </div>
      </div>
      {text && (
        <p
          className="mt-2 text-xs font-medium tracking-wide animate-pulse"
          style={{ color: primary }}
        >
          {text}
        </p>
      )}
    </div>
  )
}

export default SpaceLoader
