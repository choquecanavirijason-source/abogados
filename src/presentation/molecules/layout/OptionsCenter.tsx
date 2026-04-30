'use client'

import { useState, useRef, useEffect } from 'react'
import { Link } from '@/i18n/navigation'
import HeaderOptions, { type NavigationItem } from './utils/Optionts'
import { ChevronDown, Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

function scrollToSection(sectionId: string) {
  if (typeof window === 'undefined') return

  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${sectionId}`)
    return
  }

  window.location.href = `/#${sectionId}`
}

function ThemeToggleNavButton({ isMobile }: { isMobile?: boolean }) {
  const t = useTranslations('Header.nav')
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const storedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark

    root.classList.toggle('dark', shouldUseDark)
    setIsDark(shouldUseDark)
    setMounted(true)
  }, [])

  const handleThemeToggle = () => {
    const nextThemeIsDark = !isDark
    document.documentElement.classList.toggle('dark', nextThemeIsDark)
    window.localStorage.setItem('theme', nextThemeIsDark ? 'dark' : 'light')
    setIsDark(nextThemeIsDark)
  }

  return (
    <button
      type="button"
      onClick={handleThemeToggle}
      className={cn(
        'flex items-center gap-1.5 text-white/90 hover:text-white text-sm font-medium transition-colors focus:outline-none cursor-pointer',
        isMobile && 'w-full justify-between rounded-lg px-3 py-2 hover:bg-white/10'
      )}
      aria-label={t('themeToggleAriaLabel')}
    >
      {mounted && isDark ? (
        <Moon className="w-4 h-4 shrink-0" />
      ) : (
        <Sun className="w-4 h-4 shrink-0" />
      )}
      <span>{mounted && isDark ? t('dark') : t('light')}</span>
    </button>
  )
}

function NavLink({ option, isMobile }: { option: NavigationItem; isMobile?: boolean }) {
  const t = useTranslations('Header.nav')
  const showIcon = option.isIconVisible?.() ?? true
  const label = option.translationKey ? t(option.translationKey) : option.name

  if (option.kind === 'theme-toggle') {
    return <ThemeToggleNavButton isMobile={isMobile} />
  }

  if (option.kind === 'section' && option.sectionId) {
    const sectionId = option.sectionId

    return (
      <button
        type="button"
        onClick={() => scrollToSection(sectionId)}
        className={cn(
          'flex items-center gap-1.5 text-white/90 hover:text-white text-sm font-medium transition-colors focus:outline-none cursor-pointer',
          isMobile && 'w-full justify-between rounded-lg px-3 py-2 hover:bg-white/10'
        )}
      >
        {showIcon && option.icon && <option.icon className="w-4 h-4 shrink-0" />}
        <span>{label}</span>
      </button>
    )
  }

  const href = option.route ?? '/'

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-1.5 text-white/90 hover:text-white text-sm font-medium transition-colors cursor-pointer',
        isMobile && 'w-full justify-between rounded-lg px-3 py-2 hover:bg-white/10'
      )}
    >
      {showIcon && option.icon && <option.icon className="w-4 h-4 shrink-0" />}
      <span>{label}</span>
    </Link>
  )
}

function NavDropdown({ option, isMobile }: { option: NavigationItem; isMobile?: boolean }) {
  const t = useTranslations('Header.nav')
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const showIcon = option.isIconVisible?.() ?? true
  const optionLabel = option.translationKey ? t(option.translationKey) : option.name

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          'flex items-center gap-1.5 text-white/90 hover:text-white text-sm font-medium transition-colors focus:outline-none cursor-pointer',
          isMobile && 'w-full justify-between rounded-lg px-3 py-2 hover:bg-white/10'
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {showIcon && option.icon && <option.icon className="w-4 h-4 shrink-0" />}
        <span>{optionLabel}</span>
        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && option.subitems && option.subitems.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className={cn(
              'py-1 bg-[#0f172a]/95 backdrop-blur border border-white/10 rounded-lg shadow-xl z-50',
              isMobile ? 'mt-2 w-full' : 'absolute top-full left-0 mt-1 min-w-48'
            )}
          >
            {option.subitems.map((sub) => (
              <li key={`${sub.kind}-${sub.route ?? sub.sectionId ?? sub.name}`}>
                {sub.kind === 'section' && sub.sectionId ? (
                  <button
                    type="button"
                    onClick={() => {
                      scrollToSection(sub.sectionId as string)
                      setOpen(false)
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition-colors text-left cursor-pointer"
                  >
                    {sub.isIconVisible?.() && sub.icon && (
                      <sub.icon className="w-4 h-4 shrink-0" />
                    )}
                    <span>{sub.translationKey ? t(sub.translationKey) : sub.name}</span>
                  </button>
                ) : (
                  <Link
                    href={sub.route ?? '/'}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {sub.isIconVisible?.() && sub.icon && (
                      <sub.icon className="w-4 h-4 shrink-0" />
                    )}
                    <span>{sub.translationKey ? t(sub.translationKey) : sub.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

interface OptionsCenterProps {
  isMobile?: boolean
  className?: string
}

export default function OptionsCenter({ isMobile, className }: OptionsCenterProps) {
  const options = HeaderOptions()

  return (
    <nav
      className={cn(
        'text-white',
        isMobile ? 'flex flex-col items-stretch gap-2' : 'flex items-center justify-end gap-20',
        className
      )}
      aria-label="Navegación principal"
    >
      {options.map((option) => (
        <div key={option.name}>
          {option.kind === 'dropdown' && option.subitems && option.subitems.length > 0 ? (
            <NavDropdown option={option} isMobile={isMobile} />
          ) : (
            <NavLink option={option} isMobile={isMobile} />
          )}
        </div>
      ))}
    </nav>
  )
}
