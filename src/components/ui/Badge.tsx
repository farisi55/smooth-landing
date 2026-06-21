import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'gold' | 'muted' | 'success'
  className?: string
}

const variants = {
  gold:    'border border-gold-dim bg-gold/10 text-gold font-mono text-xs',
  muted:   'border border-bg-border bg-bg-elevated text-content-secondary text-xs',
  success: 'border border-success/30 bg-success/10 text-success text-xs',
}

export function Badge({ children, variant = 'gold', className = '' }: BadgeProps) {
  return (
    <span className={`
      inline-flex items-center gap-1.5 px-3 py-1 rounded-full
      font-mono tracking-wide
      ${variants[variant]} ${className}
    `}>
      {children}
    </span>
  )
}
