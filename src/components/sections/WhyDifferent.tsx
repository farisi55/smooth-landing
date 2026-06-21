'use client'

import { useLanguage } from '@/context/LanguageContext'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { whyTitle, whyCards } from '@/lib/content'

export function WhyDifferent() {
  const { t } = useLanguage()

  return (
    <section id="why" className="py-24 bg-bg-surface">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <ScrollReveal className="text-center mb-14">
          <h2 className="font-display font-bold text-display-md text-content-primary">
            {t(whyTitle)}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyCards.map((card, i) => (
            <ScrollReveal key={card.title.en} delay={i * 80}>
              <div className="
                group relative h-full
                bg-bg-elevated rounded-2xl p-7
                border border-bg-border
                hover:border-gold-dim hover:shadow-gold
                transition-all duration-300
              ">
                {/* Icon circle */}
                <div className="
                  w-12 h-12 rounded-xl mb-5
                  bg-gold/10 border border-gold-dim/60
                  flex items-center justify-center
                  text-gold text-xl
                  group-hover:bg-gold/20 transition-colors
                ">
                  {card.icon}
                </div>

                <h3 className="font-display font-bold text-content-primary text-lg mb-3 leading-snug">
                  {t(card.title)}
                </h3>

                <p className="text-content-secondary text-sm leading-relaxed">
                  {t(card.body)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
