import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          root:     '#060C18',
          surface:  '#0D1628',
          elevated: '#111E35',
          border:   '#1C2C47',
        },
        navy:  '#1B2A4A',
        gold: {
          DEFAULT: '#C8921A',
          light:   '#E0A820',
          dim:     '#7A5810',
          bright:  '#F0BE40',
        },
        content: {
          primary:   '#EDE8E0',
          secondary: '#8A95A8',
          muted:     '#4A5568',
        },
        success: '#3DB87A',
        danger:  '#E05252',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['56px', { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'display-md': ['40px', { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'display-sm': ['28px', { lineHeight: '1.3',  letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        card:    '0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(28,44,71,1)',
        gold:    '0 0 0 1px rgba(122,88,16,0.5), 0 4px 24px rgba(200,146,26,0.12)',
        'gold-lg': '0 0 60px rgba(200,146,26,0.2), 0 0 0 1px rgba(122,88,16,0.4)',
        terminal: '0 24px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(28,44,71,0.8)',
      },
      backgroundImage: {
        'circuit': "radial-gradient(circle, rgba(200,146,26,0.07) 1px, transparent 1px)",
        'gold-gradient': 'linear-gradient(135deg, #C8921A 0%, #F0BE40 50%, #C8921A 100%)',
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(28,44,71,0.5) 0%, transparent 70%)',
        'cta-glow':  'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(200,146,26,0.1) 0%, transparent 70%)',
        'fade-up':   'linear-gradient(to top, rgba(6,12,24,1) 0%, transparent 100%)',
      },
      backgroundSize: {
        'circuit': '28px 28px',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-right': {
          '0%':   { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        'pipeline': {
          '0%, 15%':   { opacity: '0', transform: 'translateX(-8px)' },
          '25%, 85%':  { opacity: '1', transform: 'translateX(0)' },
          '95%, 100%': { opacity: '0', transform: 'translateX(-8px)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(200,146,26,0.3)' },
          '50%':      { boxShadow: '0 0 0 8px rgba(200,146,26,0)' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.5s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in':    'fade-in 0.4s ease both',
        'slide-right':'slide-right 0.5s cubic-bezier(0.22,1,0.36,1) both',
        'blink':      'blink 1s step-start infinite',
        'pipeline':   'pipeline 1.5s ease both',
        'pulse-gold': 'pulse-gold 2s ease infinite',
      },
    },
  },
  plugins: [],
}

export default config
