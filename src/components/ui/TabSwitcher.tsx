'use client'

import { useState, type ReactNode } from 'react'

interface Tab {
  key: string
  label: string
  content: ReactNode
}

interface TabSwitcherProps {
  tabs: Tab[]
  defaultTab?: string
  className?: string
}

export function TabSwitcher({ tabs, defaultTab, className = '' }: TabSwitcherProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.key)

  const currentContent = tabs.find(t => t.key === active)?.content

  return (
    <div className={className}>
      {/* Tab bar */}
      <div className="relative z-10 flex gap-1 mb-4 p-1 bg-bg-elevated rounded-lg border border-bg-border w-fit">
        {tabs.map(tab => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={active === tab.key}
            onPointerDown={() => setActive(tab.key)}
            onClick={() => setActive(tab.key)}
            className={`
              px-4 py-1.5 rounded-md text-sm font-mono transition-all duration-200 cursor-pointer
              ${active === tab.key
                ? 'bg-gold text-bg-root font-medium shadow-sm'
                : 'text-content-secondary hover:text-content-primary'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div key={active} className="animate-fade-in">
        {currentContent}
      </div>
    </div>
  )
}
