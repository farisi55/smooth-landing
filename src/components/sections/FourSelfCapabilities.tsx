'use client'

import { useLanguage } from '@/context/LanguageContext'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const intro = {
  eyebrow: {
    en: 'The Four Self Capabilities',
    id: 'Empat Kemampuan Self',
  },
  title: {
    en: 'Built to improve, configure, heal, and upgrade itself.',
    id: 'Dirancang untuk improve, configure, heal, dan upgrade dirinya sendiri.',
  },
  body: {
    en: 'Most AI assistants can answer questions. smooth is designed to go further: it learns from your workflow, configures its own tools, repairs bugs, and adds new capabilities to its own codebase through controlled execution paths.',
    id: 'Kebanyakan AI assistant berhenti di menjawab pertanyaan. smooth dirancang lebih jauh: ia belajar dari workflow, mengatur tool-nya sendiri, memperbaiki bug, dan menambahkan kemampuan baru ke codebase melalui jalur eksekusi yang terkontrol.',
  },
}

const capabilities = [
  {
    number: '01',
    name: 'Self-Improvement',
    purpose: {
      en: 'Improve agent behavior',
      id: 'Meningkatkan perilaku agent',
    },
    changes: {
      en: 'Skills and reusable knowledge',
      id: 'Skill dan knowledge yang bisa dipakai ulang',
    },
    example: {
      en: 'Auto-generate a skill from repeated workflow patterns.',
      id: 'Membuat skill otomatis dari pola workflow yang berulang.',
    },
    body: {
      en: 'Learns from previous interactions and turns repeated tasks, coding style, SOPs, or documentation formats into reusable skills.',
      id: 'Belajar dari interaksi sebelumnya dan mengubah task berulang, coding style, SOP, atau format dokumentasi menjadi skill reusable.',
    },
  },
  {
    number: '02',
    name: 'Self-Configuration',
    purpose: {
      en: 'Configure runtime and tools',
      id: 'Mengatur runtime dan tool',
    },
    changes: {
      en: 'Config files, MCP YAML, runtime settings',
      id: 'File config, MCP YAML, dan runtime settings',
    },
    example: {
      en: 'Add an MCP server from a natural-language request.',
      id: 'Menambahkan MCP server dari instruksi natural language.',
    },
    body: {
      en: 'Updates structured configuration safely, validates the result, and makes new tool capabilities available without manual YAML editing.',
      id: 'Mengupdate konfigurasi terstruktur secara aman, memvalidasi hasilnya, dan membuat capability baru tersedia tanpa edit YAML manual.',
    },
  },
  {
    number: '03',
    name: 'Self-Healing',
    purpose: {
      en: 'Fix broken behavior',
      id: 'Memperbaiki perilaku yang rusak',
    },
    changes: {
      en: 'Existing source code',
      id: 'Source code yang sudah ada',
    },
    example: {
      en: 'Analyze a bug, patch code, run QA, and roll back if unsafe.',
      id: 'Menganalisis bug, patch code, menjalankan QA, dan rollback jika tidak aman.',
    },
    body: {
      en: 'Detects failures, isolates root cause, writes a targeted patch, runs build or tests, and keeps rollback as the safety boundary.',
      id: 'Mendeteksi error, mencari root cause, menulis patch yang tepat, menjalankan build atau test, dan memakai rollback sebagai batas keamanan.',
    },
  },
  {
    number: '04',
    name: 'Self-Upgrade',
    purpose: {
      en: 'Add missing capabilities',
      id: 'Menambahkan capability yang belum ada',
    },
    changes: {
      en: 'New source code, docs, tests, and config',
      id: 'Source code baru, docs, test, dan config',
    },
    example: {
      en: 'Implement a new provider, command, connector, or workflow.',
      id: 'Mengimplementasikan provider, command, connector, atau workflow baru.',
    },
    body: {
      en: 'Plans and implements new features when a requested capability does not exist yet, then runs QA before the capability is registered.',
      id: 'Merencanakan dan mengimplementasikan fitur baru saat capability yang diminta belum ada, lalu menjalankan QA sebelum capability didaftarkan.',
    },
  },
]

const flowRows = [
  ['Self-Improvement', 'Extract patterns', 'Generate skill', 'Reuse later'],
  ['Self-Configuration', 'Parse intent', 'Update config', 'Validate runtime'],
  ['Self-Healing', 'Analyze bug', 'Patch existing code', 'QA and rollback'],
  ['Self-Upgrade', 'Analyze missing feature', 'Implement capability', 'QA and register'],
]

export function FourSelfCapabilities() {
  const { lang } = useLanguage()

  return (
    <section id="self-capabilities" className="relative bg-bg-surface py-24 overflow-hidden">
      <div className="absolute inset-0 bg-circuit-pattern bg-circuit opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 h-px w-64 -translate-x-1/2 bg-gold-gradient opacity-70" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <ScrollReveal className="max-w-3xl">
          <span className="text-gold font-mono text-xs uppercase tracking-widest block mb-4">
            {intro.eyebrow[lang]}
          </span>
          <h2 className="font-display font-bold text-display-md text-content-primary mb-5 leading-tight">
            {intro.title[lang]}
          </h2>
          <p className="text-content-secondary text-lg leading-relaxed">
            {intro.body[lang]}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-14">
          {capabilities.map((capability, index) => (
            <ScrollReveal key={capability.name} delay={index * 60}>
              <article className="h-full bg-bg-elevated border border-bg-border rounded-xl p-6 hover:border-gold-dim hover:shadow-gold transition-all duration-300">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <span className="text-gold font-mono text-xs tracking-widest">
                      {capability.number}
                    </span>
                    <h3 className="font-display font-bold text-content-primary text-xl mt-2">
                      {capability.name}
                    </h3>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-gold mt-2 shadow-[0_0_18px_rgba(200,146,26,0.7)]" />
                </div>

                <p className="text-content-secondary text-sm leading-relaxed mb-5">
                  {capability.body[lang]}
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <CapabilityMeta label="Purpose" value={capability.purpose[lang]} />
                  <CapabilityMeta label="Changes" value={capability.changes[lang]} />
                  <CapabilityMeta label="Example" value={capability.example[lang]} />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={260} className="mt-8">
          <div className="overflow-hidden rounded-xl border border-bg-border bg-bg-root">
            <div className="hidden sm:grid grid-cols-4 gap-4 bg-bg-elevated px-5 py-3 text-xs font-mono uppercase tracking-widest text-content-muted">
              <span>Capability</span>
              <span>Step 1</span>
              <span>Step 2</span>
              <span>Outcome</span>
            </div>
            {flowRows.map((row, index) => (
              <div
                key={row[0]}
                className={`grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4 px-5 py-4 text-sm ${
                  index < flowRows.length - 1 ? 'border-b border-bg-border' : ''
                }`}
              >
                <span className="font-display font-semibold text-content-primary">{row[0]}</span>
                <span className="font-mono text-content-secondary">{row[1]}</span>
                <span className="font-mono text-content-secondary">{row[2]}</span>
                <span className="font-mono text-gold">{row[3]}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function CapabilityMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-content-muted uppercase tracking-widest mb-1">{label}</div>
      <div className="text-content-primary leading-relaxed">{value}</div>
    </div>
  )
}
