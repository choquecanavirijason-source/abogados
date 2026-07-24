'use client'

import { useLocale } from 'next-intl'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from '@/i18n/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FLAG_BASE = '/images/languages'

interface Language {
  code: string
}

const languages: Language[] = [
  { code: 'en' },
  { code: 'es' },
  { code: 'cn' },
  { code: 'in' },
]

export default function SwitchLanguage() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(false)

  const current = languages.find((l) => l.code === locale) ?? languages[0]

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (newLocale: string) => {
    if (newLocale === locale) {
      setIsOpen(false)
      return
    }
    router.replace(pathname, { locale: newLocale })
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className="relative inline-block text-white">
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        className="flex items-center gap-1.5 py-1.5 px-2 rounded-md !bg-black text-white border border-white/10 hover:bg-zinc-900 transition-colors focus:outline-none focus:ring-0 cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Cambiar idioma"
      >
        <Image
          src={`${FLAG_BASE}/${current.code}.webp`}
          alt=""
          width={20}
          height={14}
          className="h-3.5 w-5 object-cover rounded-sm shrink-0"
          aria-hidden
        />
        <span className="text-xs font-medium uppercase tracking-wide text-white">
          {current.code}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            role="listbox"
            aria-label="Idiomas"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 min-w-20 py-1 z-50 rounded-md !bg-black shadow-lg border border-white/10"
          >
            {languages.map((lang) => (
              <li key={lang.code} role="option" aria-selected={lang.code === locale}>
                <button
                  type="button"
                  onClick={() => handleSelect(lang.code)}
                  className="w-full flex items-center gap-2 py-2 px-3 text-left text-sm text-white bg-transparent hover:bg-zinc-900 transition-colors focus:outline-none focus:ring-0 cursor-pointer"
                >
                  <Image
                    src={`${FLAG_BASE}/${lang.code}.webp`}
                    alt=""
                    width={20}
                    height={14}
                    className="h-3.5 w-5 object-cover rounded-sm shrink-0"
                  />
                  <span className="font-medium uppercase tracking-wide">
                    {lang.code}
                  </span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
