'use client'

import { useLanguage } from '@/context/LanguageContext'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { TabSwitcher } from '@/components/ui/TabSwitcher'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { installTitle, installNote, installTabs } from '@/lib/content'

export function Install() {
  const { t } = useLanguage()

  const tabs = installTabs.map(tab => ({
    key: tab.key,
    label: tab.label,
    content: <CodeBlock code={tab.code} language={tab.label} />,
  }))

  return (
    <section id="install" className="py-24 bg-bg-root">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        <ScrollReveal>
          <h2 className="font-display font-bold text-display-sm text-content-primary mb-3 text-center">
            {t(installTitle)}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <TabSwitcher tabs={tabs} defaultTab="docker" className="mt-8" />
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <p className="mt-5 text-center text-sm text-content-muted font-mono leading-relaxed">
            {t(installNote)}
          </p>
        </ScrollReveal>

      </div>
    </section>
  )
}
