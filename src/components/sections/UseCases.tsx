'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useCasesTitle, useCases } from '@/lib/content'

export function UseCases() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState(useCases[0].key)

  const activeCase = useCases.find(u => u.key === activeTab)!

  return (
    <section id="usecases" className="py-24 bg-bg-root">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">

        <ScrollReveal className="text-center mb-12">
          <h2 className="font-display font-bold text-display-md text-content-primary">
            {t(useCasesTitle)}
          </h2>
        </ScrollReveal>

        {/* Tab bar */}
        <ScrollReveal delay={80}>
          <div className="flex justify-center gap-1 mb-10 p-1.5 bg-bg-elevated rounded-xl border border-bg-border w-fit mx-auto">
            {useCases.map(uc => (
              <button
                key={uc.key}
                onClick={() => setActiveTab(uc.key)}
                className={`
                  px-5 py-2 rounded-lg text-sm font-display font-semibold
                  transition-all duration-200 cursor-pointer
                  ${activeTab === uc.key
                    ? 'bg-gold text-bg-root shadow-sm'
                    : 'text-content-secondary hover:text-content-primary'
                  }
                `}
              >
                {t(uc.tab)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Case items */}
        <div key={activeTab} className="animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activeCase.items.map((item, i) => (
              <div
                key={item.en}
                className="flex items-start gap-3 p-4 rounded-xl
                           bg-bg-elevated border border-bg-border
                           hover:border-gold-dim transition-colors duration-200"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <span className="text-success mt-0.5 flex-shrink-0 text-base">✓</span>
                <span className="text-content-secondary text-sm leading-relaxed">
                  {t(item)}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
