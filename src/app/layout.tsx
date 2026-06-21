import type { Metadata } from 'next'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'smooth — Make your life easier',
  description:
    'smooth is a self-hosted AI agent that reasons, executes tools, heals its own bugs, and upgrades itself. One agent. Many providers. Full control.',
  keywords: [
    'AI agent', 'self-hosted AI', 'native-openclaw', 'TypeScript AI agent',
    'multi-provider AI', 'self-healing', 'llama.cpp', 'Docker AI',
  ],
  openGraph: {
    title:       'smooth — Make your life easier',
    description: 'Self-hosted AI agent. Multi-provider. Self-healing. Local AI ready.',
    url:         'https://smooth.yourdomain.com',
    siteName:    'smooth',
    type:        'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'smooth — Make your life easier',
    description: 'Self-hosted AI agent. Multi-provider. Self-healing. Local AI ready.',
  },
  icons: {
    icon: '/smooth-icon.png',
    apple: '/smooth-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-bg-root font-body text-content-primary antialiased"
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
