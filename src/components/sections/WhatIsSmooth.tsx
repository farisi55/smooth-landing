'use client'

import { useLanguage } from '@/context/LanguageContext'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { whatIs } from '@/lib/content'

export function WhatIsSmooth() {
  const { t } = useLanguage()

  const bodyParagraphs = t(whatIs.body).split('\n\n')

  return (
    <section id="what" className="py-24 bg-bg-root">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left: Copy */}
          <div>
            <ScrollReveal>
              <span className="text-gold font-mono text-xs uppercase tracking-widest block mb-4">
                {t(whatIs.eyebrow)}
              </span>
              <h2 className="font-display font-bold text-display-md text-content-primary mb-6">
                {t(whatIs.title)}
              </h2>
            </ScrollReveal>

            {bodyParagraphs.map((para, i) => (
              <ScrollReveal key={i} delay={80 + i * 60}>
                <p className="text-content-secondary text-base leading-relaxed mb-4">
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Right: Stats */}
          <ScrollReveal delay={120} className="grid grid-cols-2 gap-4 lg:pt-14">
            {whatIs.stats.map((stat, i) => (
              <div
                key={stat.value}
                className={`
                  group relative rounded-2xl p-6 border
                  transition-all duration-300
                  ${i === 0
                    ? 'border-gold-dim bg-gold/8 shadow-gold'
                    : 'border-bg-border bg-bg-elevated hover:border-gold-dim hover:shadow-gold'
                  }
                `}
              >
                {/* Gold top accent for first stat */}
                {i === 0 && (
                  <div className="absolute top-0 left-6 right-6 h-px bg-gold opacity-60 rounded-full" />
                )}

                <div className="font-display font-extrabold text-4xl text-gold-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-content-secondary text-sm font-body">
                  {t(stat.label)}
                </div>
              </div>
            ))}
          </ScrollReveal>

        </div>

        {/* Architecture callout */}
        <ScrollReveal delay={200}>
          <div className="mt-14 bg-bg-elevated border border-bg-border rounded-xl p-6 font-mono text-sm">
            <div className="text-content-muted text-xs uppercase tracking-widest mb-4">
              {t({ en: 'Request flow', id: 'Alur request' })}
            </div>
            <div className="flex flex-wrap items-center gap-2 text-content-secondary">
              {[
                { en: 'User Input', id: 'Input User' },
                { en: 'Memory Extractor', id: 'Memory Extractor' },
                { en: 'Reasoning Engine', id: 'Reasoning Engine' },
                { en: 'ProviderRouter', id: 'ProviderRouter' },
                { en: 'ReAct Loop', id: 'ReAct Loop' },
                { en: 'Response', id: 'Respons' },
              ].map((step, i, arr) => (
                <span key={step.en} className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full border text-xs ${
                    i === 0 || i === arr.length - 1
                      ? 'border-gold-dim bg-gold/10 text-gold'
                      : 'border-bg-border bg-bg-root text-content-secondary'
                  }`}>
                    {t(step)}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-content-muted">→</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
