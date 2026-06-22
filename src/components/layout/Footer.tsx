'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { footerTagline, footerAbout, footerColumns, GITHUB_URL, DOCS_URL } from '@/lib/content'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-bg-border bg-bg-surface mt-0">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1: Brand */}
        <div className="lg:col-span-1">
          <Image
            src="/smooth-logo-cropped.png"
            alt="smooth"
            width={1093}
            height={502}
            className="mb-4 h-auto w-48 max-w-full object-contain"
          />
          <p className="text-content-secondary text-sm leading-relaxed">
            {t(footerTagline)}
          </p>
        </div>

        {/* Col 2 & 3: Link columns */}
        {footerColumns.map(col => (
          <div key={col.heading.en}>
            <h4 className="font-display font-semibold text-sm text-content-primary mb-4 uppercase tracking-wider">
              {t(col.heading)}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {col.links.map(link => (
                <li key={link.label.en}>
                  <a
                    href={link.href}
                    className="text-sm text-content-secondary hover:text-gold
                               transition-colors duration-150"
                  >
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Col 4: Powered by / About */}
        <div>
          <h4 className="font-display font-semibold text-sm text-content-primary mb-4 uppercase tracking-wider">
            {t(footerAbout.heading)}
          </h4>
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/openclaw-icon.png"
              alt="Native OpenClaw"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-display font-semibold text-content-primary text-sm">
              Native OpenClaw
            </span>
          </div>
          <p className="text-xs text-content-secondary leading-relaxed mb-2">
            {t(footerAbout.sub)}
          </p>
          <span className="text-xs text-content-muted font-mono">
            {t(footerAbout.license)}
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-bg-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-content-muted">
          <span>© {new Date().getFullYear()} smooth / native-openclaw · MIT License</span>
          <div className="flex items-center gap-4">
            <a href={GITHUB_URL}
               className="hover:text-gold transition-colors">GitHub</a>
            <a href={DOCS_URL} className="hover:text-gold transition-colors">Docs</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
