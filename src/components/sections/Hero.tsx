'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { hero, GITHUB_URL } from '@/lib/content'

export function Hero() {
  const { lang, t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Circuit dot pattern background */}
      <div className="absolute inset-0 bg-circuit-pattern bg-circuit opacity-100" />

      {/* Radial hero glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-root to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div>
            {/* Eyebrow badge */}
            <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
              <Badge className="mb-6">
                <span className="text-gold">⬡</span>
                {t(hero.badge)}
              </Badge>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-extrabold leading-[1.05] tracking-tight mb-6 animate-fade-up"
              style={{ animationDelay: '200ms', fontSize: 'clamp(40px, 6vw, 68px)' }}
            >
              <span className="text-content-primary">
                {lang === 'en' ? hero.headline.en[0] : hero.headline.id[0]}
              </span>
              <br />
              <span className="text-gold-gradient">
                {lang === 'en' ? hero.headline.en[1] : hero.headline.id[1]}
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-content-secondary text-lg leading-relaxed max-w-xl mb-8 animate-fade-up"
              style={{ animationDelay: '340ms' }}
            >
              {t(hero.sub)}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 mb-6 animate-fade-up"
              style={{ animationDelay: '460ms' }}
            >
              <Button
                href={GITHUB_URL}
                variant="primary"
                size="lg"
              >
                {t(hero.ctaPrimary)}
                <ArrowIcon />
              </Button>
              <Button
                href={GITHUB_URL}
                variant="outline"
                size="lg"
              >
                <GithubIcon />
                {t(hero.ctaSecondary)}
              </Button>
            </div>

            {/* Trust line */}
            <p
              className="text-content-muted text-sm font-mono animate-fade-up"
              style={{ animationDelay: '560ms' }}
            >
              {t(hero.trust)}
            </p>
          </div>

          {/* ── Right: Terminal mockup ── */}
          <div
            className="animate-slide-right hidden lg:block"
            style={{ animationDelay: '350ms' }}
          >
            <TerminalMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function TerminalMockup() {
  return (
    <div className="rounded-xl overflow-hidden shadow-terminal border border-bg-border relative">
      {/* Gold ambient glow */}
      <div className="absolute -inset-0.5 bg-gold/5 rounded-xl blur-sm pointer-events-none" />

      {/* Title bar */}
      <div className="relative flex items-center gap-2 px-4 py-3 bg-bg-elevated border-b border-bg-border">
        <span className="w-3 h-3 rounded-full bg-danger/60" />
        <span className="w-3 h-3 rounded-full bg-gold-dim/60" />
        <span className="w-3 h-3 rounded-full bg-success/40" />
        <span className="ml-auto text-content-muted font-mono text-xs">smooth — cli</span>
      </div>

      {/* Terminal body */}
      <div className="relative bg-[#06090F] p-5 font-mono text-sm leading-relaxed space-y-1">
        <Line prompt>docker compose up -d smooth</Line>
        <Line status="success">[✓] Starting smooth... done</Line>
        <Line empty />
        <Line comment># Switch providers in real-time</Line>
        <Line prompt>/provider groq</Line>
        <Line status="success">✓ Provider: groq (llama-3.3-70b)</Line>
        <Line empty />
        <Line prompt>fix the bug in src/router.ts</Line>
        <Line status="process">[⟳ reasoning] Analyzing error trace...</Line>
        <Line status="process">[⟳ tool] reading src/router.ts</Line>
        <Line status="process">[⟳ patch] Writing 3-line fix...</Line>
        <Line status="success">[✓ test] npm run test — passed</Line>
        <Line status="success">✓ Bug patched and verified.</Line>
        <Line empty />
        <div className="flex items-center gap-1 text-content-muted">
          <span>smooth</span>
          <span className="text-gold">›</span>
          <span className="w-2 h-4 bg-gold/80 animate-blink ml-0.5" />
        </div>
      </div>
    </div>
  )
}

type LineStatus = 'success' | 'process' | 'comment' | 'normal'

function Line({
  children,
  prompt = false,
  comment = false,
  status,
  empty = false,
}: {
  children?: React.ReactNode
  prompt?: boolean
  comment?: boolean
  status?: LineStatus
  empty?: boolean
}) {
  if (empty) return <div className="h-2" />
  if (comment) return (
    <div className="text-content-muted italic text-xs">{children}</div>
  )

  const colorMap: Record<LineStatus, string> = {
    success: 'text-success',
    process: 'text-gold',
    comment: 'text-content-muted',
    normal:  'text-content-secondary',
  }

  const color = status ? colorMap[status] : 'text-content-primary'

  return (
    <div className={`flex items-start gap-2 ${color}`}>
      {prompt && (
        <span className="text-gold select-none mt-px">$</span>
      )}
      <span>{children}</span>
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}
