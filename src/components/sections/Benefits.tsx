'use client'

import { useLanguage } from '@/context/LanguageContext'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { benefitsTitle, benefits } from '@/lib/content'

export function Benefits() {
  const { t } = useLanguage()

  return (
    <section id="benefits" className="py-24 bg-bg-root">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <ScrollReveal className="text-center mb-14">
          <h2 className="font-display font-bold text-display-md text-content-primary">
            {t(benefitsTitle)}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title.en} delay={i * 60}>
              <div className="group h-full rounded-xl p-6 bg-bg-elevated border border-bg-border
                              hover:border-gold-dim hover:shadow-gold transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-lg bg-gold/10 border border-gold-dim/50
                                   flex items-center justify-center text-gold font-mono
                                   group-hover:bg-gold/20 transition-colors">
                    {b.icon}
                  </span>
                  <h3 className="font-display font-semibold text-content-primary text-base">
                    {t(b.title)}
                  </h3>
                </div>
                <p className="text-content-secondary text-sm leading-relaxed">
                  {t(b.body)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
