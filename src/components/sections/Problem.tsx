'use client'

import { useLanguage } from '@/context/LanguageContext'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { problem } from '@/lib/content'

export function Problem() {
  const { t } = useLanguage()

  return (
    <section id="problem" className="py-24 bg-bg-surface">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        <ScrollReveal className="text-center mb-14">
          <span className="text-gold font-mono text-xs uppercase tracking-widest block mb-4">
            {t(problem.eyebrow)}
          </span>
          <h2 className="font-display font-bold text-display-md text-content-primary mb-5">
            {t(problem.title)}
          </h2>
          <p className="text-content-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            {t(problem.body)}
          </p>
        </ScrollReveal>

        {/* Problem → Fix table */}
        <ScrollReveal delay={100}>
          <div className="overflow-hidden rounded-xl border border-bg-border">
            {/* Header */}
            <div className="grid grid-cols-2 bg-bg-elevated border-b border-bg-border">
              <div className="px-6 py-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-danger/70" />
                <span className="text-xs font-mono text-content-muted uppercase tracking-widest">
                  {t({ en: 'The Problem', id: 'Masalahnya' })}
                </span>
              </div>
              <div className="px-6 py-3 border-l border-bg-border flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success" />
                <span className="text-xs font-mono text-content-muted uppercase tracking-widest">
                  {t({ en: 'smooth fixes it', id: 'smooth menyelesaikannya' })}
                </span>
              </div>
            </div>

            {/* Rows */}
            {problem.items.map((item, i) => (
              <div
                key={item.problem.en}
                className={`grid grid-cols-2 ${i < problem.items.length - 1 ? 'border-b border-bg-border' : ''}`}
              >
                <div className={`px-6 py-4 flex items-center gap-3 ${i % 2 === 0 ? 'bg-bg-root' : 'bg-bg-surface'}`}>
                  <span className="text-danger/70 text-sm flex-shrink-0">✕</span>
                  <span className="text-content-secondary text-sm">{t(item.problem)}</span>
                </div>
                <div className={`px-6 py-4 border-l border-bg-border flex items-center gap-3 ${i % 2 === 0 ? 'bg-bg-root' : 'bg-bg-surface'}`}>
                  <span className="text-success text-sm flex-shrink-0">✓</span>
                  <span className="text-content-primary text-sm font-medium">{t(item.fix)}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Solution statement */}
        <ScrollReveal delay={160}>
          <p className="mt-8 text-center text-content-muted text-sm font-mono leading-relaxed max-w-2xl mx-auto">
            {t(problem.solution)}
          </p>
        </ScrollReveal>

      </div>
    </section>
  )
}
