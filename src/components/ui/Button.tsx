'use client'

import type { ReactNode, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  href?: string
  children: ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary: [
    'bg-gold text-bg-root font-display font-semibold',
    'hover:bg-gold-light active:bg-gold-dim',
    'shadow-[0_1px_0_rgba(255,255,255,0.15)_inset]',
  ].join(' '),
  outline: [
    'border border-gold text-gold font-display font-semibold',
    'hover:bg-gold/10 hover:border-gold-light hover:text-gold-light',
  ].join(' '),
  ghost: [
    'text-content-secondary font-body font-medium underline-offset-4',
    'hover:text-content-primary hover:underline',
  ].join(' '),
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-sm rounded-lg',
  lg: 'px-7 py-3.5 text-base rounded-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center gap-2 transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg-root disabled:opacity-40 disabled:cursor-not-allowed'
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
