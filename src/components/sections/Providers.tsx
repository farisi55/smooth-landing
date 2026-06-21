'use client'

import { useLanguage } from '@/context/LanguageContext'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { providersTitle, providersSub, providers, routingTable } from '@/lib/content'

export function Providers() {
  const { t } = useLanguage()

  return (
    <section id="providers" className="py-24 bg-bg-surface">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">

        <ScrollReveal>
          <h2 className="font-display font-bold text-display-md text-content-primary mb-4">
            {t(providersTitle)}
          </h2>
          <p className="text-content-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            {t(providersSub)}
          </p>
        </ScrollReveal>

        {/* Provider pills */}
        <ScrollReveal delay={80}>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {providers.map(p => (
              <span
                key={p.name}
                className={`
                  px-4 py-2 rounded-full font-mono text-sm
                  border transition-all duration-200
                  ${p.priority
                    ? 'border-gold-dim bg-gold/10 text-gold shadow-gold text-base px-5 py-2.5'
                    : 'border-bg-border bg-bg-elevated text-content-secondary hover:border-gold-dim hover:text-content-primary'
                  }
                `}
              >
                {p.priority && <span className="mr-1.5 opacity-70">⬡</span>}
                {p.name}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Routing table */}
        <ScrollReveal delay={160}>
          <div className="overflow-hidden rounded-xl border border-bg-border text-left">
            <div className="grid grid-cols-[1fr_2fr] bg-bg-elevated border-b border-bg-border px-6 py-3">
              <span className="text-xs font-mono text-content-muted uppercase tracking-widest">Task Type</span>
              <span className="text-xs font-mono text-content-muted uppercase tracking-widest">Auto-selected Provider Chain</span>
            </div>
            {routingTable.map((row, i) => (
              <div
                key={row.task.en}
                className={`
                  grid grid-cols-[1fr_2fr] px-6 py-4
                  ${i % 2 === 0 ? 'bg-bg-root' : 'bg-bg-surface'}
                  ${i < routingTable.length - 1 ? 'border-b border-bg-border' : ''}
                `}
              >
                <span className="font-display font-semibold text-sm text-content-primary">
                  {t(row.task)}
                </span>
                <span className="font-mono text-sm text-gold">
                  {row.providers}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
