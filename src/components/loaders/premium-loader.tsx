'use client'

import { motion, ValueTransition } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PremiumLoaderProps {
  variant?: 'default' | 'minimal' | 'fullscreen' | 'inline'
  size?: 'sm' | 'md' | 'lg'
  text?: string
  colorTheme?: 'blue' | 'steel' | 'dark'
}

export function PremiumLoader({
  variant = 'default',
  size = 'md',
  text,
  colorTheme = 'blue',
}: PremiumLoaderProps) {
  const sizeMap = {
    sm: { container: 'w-16 h-16', dot: 'w-2 h-2' },
    md: { container: 'w-24 h-24', dot: 'w-3 h-3' },
    lg: { container: 'w-32 h-32', dot: 'w-4 h-4' },
  }

  const colorMap = {
    blue: {
      primary: '#0ea5e9',
      secondary: '#06b6d4',
      accent: '#3b82f6',
    },
    steel: {
      primary: '#64748b',
      secondary: '#475569',
      accent: '#0f172a',
    },
    dark: {
      primary: '#0f172a',
      secondary: '#1e293b',
      accent: '#0ea5e9',
    },
  }

  const colors = colorMap[colorTheme]
  const sizes = sizeMap[size]

  if (variant === 'fullscreen') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
        <div className="flex flex-col items-center gap-6">
          <div className={cn(sizes.container, 'relative')}>
            <OrbitalLoader colors={colors} size={size} />
          </div>
          {text && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center text-sm font-medium text-white/80"
            >
              {text}
            </motion.p>
          )}
        </div>
      </div>
    )
  }

  if (variant === 'minimal') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-3"
      >
        <div className={cn(sizes.container, 'relative')}>
          <MinimalLoader colors={colors} size={size} />
        </div>
        {text && (
          <p className="text-xs font-medium text-gray-400">{text}</p>
        )}
      </motion.div>
    )
  }

  if (variant === 'inline') {
    return (
      <div className="flex items-center gap-3">
        <div className={cn(sizes.container, 'relative')}>
          <InlineLoader colors={colors} size={size} />
        </div>
        {text && (
          <p className="text-sm font-medium text-gray-300">{text}</p>
        )}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-4"
    >
      <div className={cn(sizes.container, 'relative')}>
        <DefaultLoader colors={colors} size={size} />
      </div>
      {text && (
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-medium text-white/70"
        >
          {text}
        </motion.p>
      )}
    </motion.div>
  )
}

interface LoaderComponentProps {
  colors: { primary: string; secondary: string; accent: string }
  size: 'sm' | 'md' | 'lg'
}

function DefaultLoader({ colors }: LoaderComponentProps) {
  return (
    <div className="relative w-full h-full">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-transparent"
        style={{
          borderTopColor: colors.primary,
          borderRightColor: colors.secondary,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Middle pulsing ring */}
      <motion.div
        className="absolute inset-2 rounded-full border border-transparent"
        style={{
          borderTopColor: colors.accent,
          borderBottomColor: colors.secondary,
        }}
        animate={{ rotate: -360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Inner glowing center */}
      <motion.div
        className="absolute inset-4 rounded-full bg-linear-to-br from-blue-400/20 to-cyan-400/10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Center dot glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle, ${colors.primary}80, transparent)`,
        }}
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

function MinimalLoader({ colors }: LoaderComponentProps) {
  return (
    <div className="relative w-full h-full">
      {/* Animated gradient bar */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="gradientBar" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.primary} />
            <stop offset="50%" stopColor={colors.secondary} />
            <stop offset="100%" stopColor={colors.accent} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.rect
          x="0"
          y="45"
          width="100"
          height="10"
          fill="url(#gradientBar)"
          filter="url(#glow)"
          animate={{
            x: [-100, 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  )
}

function OrbitalLoader({ colors }: LoaderComponentProps) {
  const orbitVariants = {
    animate: {
      rotate: 360,
    },
  }

  return (
    <div className="relative w-full h-full">
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl opacity-20"
        style={{
          background: `radial-gradient(circle, ${colors.primary}, transparent)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Outer orbit */}
      <motion.div
        className="absolute inset-0 rounded-full border border-white/10"
        variants={orbitVariants}
        animate="animate"
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <motion.div
          className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.primary}, ${colors.secondary})`,
            boxShadow: `0 0 12px ${colors.primary}`,
          }}
        />
      </motion.div>

      {/* Middle orbit */}
      <motion.div
        className="absolute inset-3 rounded-full border border-white/5"
        variants={orbitVariants}
        animate="animate"
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
          direction: 'reverse' as any,
        }}
      >
        <motion.div
          className="absolute right-0 top-1/2 w-2 h-2 -translate-y-1/2 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.secondary}, ${colors.accent})`,
            boxShadow: `0 0 10px ${colors.secondary}`,
          }}
        />
      </motion.div>

      {/* Inner orbit */}
      <motion.div
        className="absolute inset-6 rounded-full border border-white/5"
        variants={orbitVariants}
        animate="animate"
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <motion.div
          className="absolute bottom-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.accent}, ${colors.primary})`,
            boxShadow: `0 0 10px ${colors.accent}`,
          }}
        />
      </motion.div>

      {/* Center glow */}
      <motion.div
        className="absolute inset-8 rounded-full"
        style={{
          background: `radial-gradient(circle, ${colors.primary}30, transparent)`,
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

function InlineLoader({ colors }: LoaderComponentProps) {
  return (
    <div className="relative w-full h-full">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="inlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.primary} />
            <stop offset="100%" stopColor={colors.secondary} />
          </linearGradient>
        </defs>

        {/* Animated dots */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={i}
            cx={25 + i * 20}
            cy="50"
            r="4"
            fill="url(#inlineGradient)"
            animate={{
              cy: [50, 30, 50],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  )
}
