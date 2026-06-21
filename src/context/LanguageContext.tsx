'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Lang, BilingualText } from '@/types'

interface LanguageContextValue {
  lang: Lang
  toggleLang: () => void
  t: (text: BilingualText) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'smooth_lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  // Fade-transition state
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null
    if (stored === 'en' || stored === 'id') setLang(stored)
  }, [])

  const toggleLang = () => {
    setTransitioning(true)
    setTimeout(() => {
      setLang(prev => {
        const next: Lang = prev === 'en' ? 'id' : 'en'
        localStorage.setItem(STORAGE_KEY, next)
        return next
      })
      setTransitioning(false)
    }, 120)
  }

  const t = (text: BilingualText): string => text[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      <div
        style={{ transition: 'opacity 0.12s ease' }}
        className={transitioning ? 'opacity-0' : 'opacity-100'}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
