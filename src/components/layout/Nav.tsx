'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { Button } from '@/components/ui/Button'
import { navLinks, navCta, GITHUB_URL } from '@/lib/content'

export function Nav() {
  const { lang, toggleLang, t } = useLanguage()
  const [menuOpen, setMenuOpen]   = useState(false)

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-bg-border bg-bg-root/95 backdrop-blur-md"
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <a href="#" className="flex-shrink-0 flex items-center group" aria-label="smooth home">
          <span className="relative block h-12 w-36 overflow-hidden xl:w-44">
            <Image
              src="/smooth-logo-cropped.png"
              alt="smooth"
              fill
              sizes="(min-width: 1280px) 176px, 144px"
              className="object-contain object-left"
              priority
            />
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-2.5 py-1.5 text-sm text-content-secondary hover:text-content-primary
                           rounded-md hover:bg-bg-elevated transition-colors duration-150"
              >
                {t(link.label)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            aria-label="Switch language"
            className="hidden sm:flex items-center gap-1 text-xs font-mono px-2.5 py-1.5
                       rounded-md border border-bg-border hover:border-gold-dim
                       hover:text-gold transition-all duration-150"
          >
            <span className={lang === 'en' ? 'text-gold' : 'text-content-muted'}>EN</span>
            <span className="text-content-muted">/</span>
            <span className={lang === 'id' ? 'text-gold' : 'text-content-muted'}>ID</span>
          </button>

          {/* CTA */}
          <Button
            href={GITHUB_URL}
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex"
          >
            {t(navCta)}
            <ArrowIcon />
          </Button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(m => !m)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden p-2 text-content-secondary hover:text-content-primary
                       rounded-md hover:bg-bg-elevated transition-colors"
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-bg-border bg-bg-root/95 backdrop-blur-md">
          <ul className="px-5 py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 text-sm text-content-secondary
                             hover:text-content-primary hover:bg-bg-elevated
                             rounded-md transition-colors"
                >
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-5 pb-5 flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="text-xs font-mono px-3 py-2 rounded-md border border-bg-border
                         hover:border-gold-dim hover:text-gold transition-all"
            >
              <span className={lang === 'en' ? 'text-gold' : 'text-content-muted'}>EN</span>
              <span className="text-content-muted mx-1">/</span>
              <span className={lang === 'id' ? 'text-gold' : 'text-content-muted'}>ID</span>
            </button>
            <Button href={GITHUB_URL} size="sm" className="flex-1 justify-center">
              {t(navCta)} <ArrowIcon />
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6"  x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6"  x2="6"  y2="18" />
      <line x1="6"  y1="6"  x2="18" y2="18" />
    </svg>
  )
}
