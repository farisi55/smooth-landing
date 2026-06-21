'use client'

import { useLanguage } from '@/context/LanguageContext'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { featuresTitle, features } from '@/lib/content'

export function Features() {
  const { t } = useLanguage()

  return (
    <section id="features" className="py-24 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <h2 className="font-display font-bold text-display-md text-content-primary">
            {t(featuresTitle)}
          </h2>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title.en} delay={i * 50}>
              <FeatureCard
                icon={feature.icon}
                title={t(feature.title)}
                description={t(feature.description)}
              />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div className="
      group relative h-full
      bg-bg-elevated rounded-xl p-6
      border border-bg-border
      hover:border-gold-dim hover:shadow-gold
      transition-all duration-300 cursor-default
    ">
      {/* Gold top line on hover */}
      <div className="
        absolute top-0 left-6 right-6 h-px
        bg-gold opacity-0 group-hover:opacity-100
        transition-opacity duration-300 rounded-full
      " />

      {/* Icon */}
      <div className="
        w-10 h-10 rounded-lg mb-4
        bg-gold/10 border border-gold-dim/50
        flex items-center justify-center
        text-gold font-mono text-lg
        group-hover:bg-gold/15 transition-colors duration-300
      ">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-content-primary text-base mb-2 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-content-secondary text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}
