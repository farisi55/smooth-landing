'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { cta, GITHUB_URL, DOCS_URL } from '@/lib/content'

export function CTA() {
  const { t } = useLanguage()

  return (
    <section
      id="cta"
      className="relative py-32 bg-bg-root overflow-hidden"
    >
      {/* Ambient gold glow */}
      <div className="absolute inset-0 bg-cta-glow pointer-events-none" />

      {/* Circuit pattern (subtle) */}
      <div className="absolute inset-0 bg-circuit-pattern bg-circuit opacity-30 pointer-events-none" />

      {/* Gold border top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gold-gradient opacity-60" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-display font-extrabold text-display-lg text-content-primary mb-4 leading-tight">
            {t(cta.title)}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <p className="text-content-secondary text-lg mb-10 font-mono">
            {t(cta.sub)}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href={GITHUB_URL}
              variant="primary"
              size="lg"
            >
              {t(cta.primary)}
              <ArrowIcon />
            </Button>
            <Button
              href={GITHUB_URL}
              variant="outline"
              size="lg"
            >
              <DockerIcon />
              {t(cta.docker)}
            </Button>
            <Button
              href={DOCS_URL}
              variant="ghost"
              size="lg"
            >
              {t(cta.docs)} →
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  )
}

function DockerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.98 11.08h2.12v-2.1h-2.12zm-3.06 0h2.12v-2.1h-2.12zm-3.06 0h2.12v-2.1h-2.12zm-3.06 0h2.12v-2.1h-2.12zm6.12-3.06h2.12V5.92h-2.12zm3.06 0h2.12V5.92h-2.12zm0 0M22.7 11.61c-.3-.22-.98-.29-1.49-.19-.06-.5-.35-.96-.82-1.29l-.16-.11-.12.15c-.23.28-.3.76-.27 1.12.02.26.11.52.25.74-.11.06-.34.14-.63.12H.39l-.05.29c-.1.54-.1 2.22.96 3.5.79.97 1.96 1.46 3.46 1.46 3.28 0 5.72-1.52 6.85-4.27.45.01.9-.02 1.27-.17a2 2 0 00.82-.65l.05-.07-.06-.07a1.73 1.73 0 00-.95-.56z"/>
    </svg>
  )
}
