'use client'

import type { ReactNode, CSSProperties } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.15,
}: ScrollRevealProps) {
  const { ref, ready, visible } = useScrollReveal<HTMLDivElement>(threshold)

  const style: CSSProperties = delay > 0 ? { transitionDelay: `${delay}ms` } : {}
  const revealClass = !ready || visible ? 'reveal reveal-visible' : 'reveal'

  return (
    <div ref={ref} className={`${revealClass} ${className}`} style={style}>
      {children}
    </div>
  )
}
