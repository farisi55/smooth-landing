'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { selfHeal, pipelineSteps } from '@/lib/content'

const stepClasses = [
  'pipeline-step-1',
  'pipeline-step-2',
  'pipeline-step-3',
  'pipeline-step-4',
  'pipeline-step-5',
]

const statusStyles = {
  default: 'border-bg-border bg-bg-elevated text-content-secondary',
  success: 'border-success/40 bg-success/10 text-success',
  warning: 'border-gold-dim bg-gold/10 text-gold',
}

export function SelfHealing() {
  const { t } = useLanguage()

  return (
    <section
      id="selfheal"
      className="py-24 bg-bg-root relative overflow-hidden"
    >
      {/* Subtle circuit pattern, just in this section */}
      <div className="absolute inset-0 bg-circuit-pattern bg-circuit opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div>
            <ScrollReveal>
              <span className="text-gold font-mono text-xs uppercase tracking-widest mb-4 block">
                {t(selfHeal.eyebrow)}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h2 className="font-display font-bold text-display-md text-content-primary mb-5">
                {t(selfHeal.title)}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p className="text-content-secondary text-lg leading-relaxed mb-8">
                {t(selfHeal.body)}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={220}>
              <Button href="#" variant="outline" size="md">
                {t(selfHeal.cta)}
                <DocIcon />
              </Button>
            </ScrollReveal>
          </div>

          {/* ── Right: Pipeline animation ── */}
          <ScrollReveal delay={100} className="lg:pl-8">
            <div className="relative bg-bg-elevated rounded-2xl border border-bg-border p-8 shadow-gold">

              {/* Pipeline label */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse-gold" />
                <span className="text-xs font-mono text-content-muted uppercase tracking-widest">
                  self-healing pipeline
                </span>
              </div>

              {/* Steps */}
              <div className="flex flex-col gap-3">
                {pipelineSteps.map((step, i) => (
                  <div key={step.label.en} className={`${stepClasses[i]}`}>
                    <div className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg border
                      transition-all duration-300
                      ${statusStyles[step.status]}
                    `}>
                      <span className="font-mono text-base w-5 text-center flex-shrink-0">
                        {step.icon}
                      </span>
                      <span className="font-mono text-sm">
                        {t(step.label)}
                      </span>

                      {/* Status dot */}
                      <div className="ml-auto flex-shrink-0">
                        {step.status === 'success' && (
                          <span className="w-2 h-2 rounded-full bg-success block" />
                        )}
                        {step.status === 'warning' && (
                          <span className="w-2 h-2 rounded-full bg-gold block animate-pulse" />
                        )}
                        {step.status === 'default' && (
                          <span className="w-2 h-2 rounded-full bg-bg-border block" />
                        )}
                      </div>
                    </div>

                    {/* Connector line */}
                    {i < pipelineSteps.length - 1 && (
                      <div className="ml-[22px] w-px h-3 bg-bg-border" />
                    )}
                  </div>
                ))}
              </div>

              {/* Rollback note */}
              <div className="mt-5 pt-5 border-t border-bg-border">
                <p className="text-xs text-content-muted font-mono text-center">
                  auto-rollback on failure · full report generated
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}

function DocIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  )
}
