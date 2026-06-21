import type {
  NavLink, Feature, UseCase, Provider,
  RoutingRow, PipelineStep, WhyCard, InstallTab,
} from '@/types'

export const GITHUB_URL = 'https://github.com/farisi55/native-openclaw'
export const DOCS_URL   = 'https://github.com/farisi55/native-openclaw#readme'

// ─── Nav ─────────────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: { en: 'Superpowers', id: 'Keunggulan'      }, href: '#self-capabilities' },
  { label: { en: 'Features',    id: 'Fitur'           }, href: '#features'          },
  { label: { en: 'Self-Heal',   id: 'Self-Heal'       }, href: '#selfheal'          },
  { label: { en: 'Providers',   id: 'Provider'        }, href: '#providers'         },
  { label: { en: 'Use Cases',   id: 'Kasus Penggunaan'}, href: '#usecases'          },
  { label: { en: 'GitHub',      id: 'GitHub'          }, href: GITHUB_URL           },
]

export const navCta = { en: 'Get Started', id: 'Mulai' }

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  badge: { en: 'Self-Hosted AI Agent', id: 'AI Agent Self-Hosted' },
  headline: {
    en: ['Make your workflow', 'actually flow.'],
    id: ['Buat workflow kamu', 'benar-benar lancar.'],
  },
  sub: {
    en: 'smooth is a self-hosted AI agent built on native-openclaw. It reasons, executes tools, heals its own bugs, and upgrades itself — across CLI, Web UI, Telegram, and Docker. One agent. Many providers. Full control.',
    id: 'smooth adalah AI agent self-hosted yang dibangun di atas native-openclaw. Ia berpikir, menjalankan tool, memperbaiki bug sendiri, dan upgrade otomatis — lewat CLI, Web UI, Telegram, dan Docker. Satu agent. Banyak provider. Kendali penuh.',
  },
  ctaPrimary:   { en: 'Get Started',    id: 'Mulai Sekarang'  },
  ctaSecondary: { en: 'View on GitHub', id: 'Lihat di GitHub' },
  trust: {
    en: 'Open source · TypeScript · Zero framework lock-in',
    id: 'Open source · TypeScript · Tanpa framework lock-in',
  },
  pitch: {
    en: 'One agent. Many providers. Self-healing. Self-upgrade. Runs local. Integrates into your workflow.',
    id: 'Satu agent. Banyak provider. Self-healing. Self-upgrade. Bisa jalan lokal. Terintegrasi ke workflow kamu.',
  },
}

// ─── Problem Statement ────────────────────────────────────────────────────────

export const problem = {
  eyebrow: { en: 'The problem with AI tools today', id: 'Masalah tools AI saat ini' },
  title: {
    en: 'Powerful AI, but locked, limited, and disconnected.',
    id: 'AI yang powerful, tapi terkunci, terbatas, dan terputus.',
  },
  body: {
    en: 'Most AI tools are locked to one provider, limited to chat, disconnected from your local workflow, and difficult to customize. You need an AI that runs in your environment, remembers project context, uses multiple providers, executes tools safely, automates recurring tasks, and helps maintain your codebase.',
    id: 'Sebagian besar tools AI terkunci ke satu provider, hanya bisa chat, terputus dari workflow lokal kamu, dan sulit dikustomisasi. Kamu butuh AI yang bisa jalan di environment sendiri, mengingat konteks project, memakai banyak provider, menjalankan tool dengan aman, mengotomasi task berulang, dan membantu maintenance codebase.',
  },
  solution: {
    en: 'smooth solves that by combining a lightweight AI agent runtime with provider routing, local workspace, tool execution, self-healing, and optional local AI inference.',
    id: 'smooth menyelesaikan itu dengan menggabungkan lightweight AI agent runtime dengan provider routing, workspace lokal, eksekusi tool, self-healing, dan optional local AI inference.',
  },
  items: [
    {
      problem: { en: 'Locked to one AI provider',        id: 'Terkunci ke satu provider AI'     },
      fix:     { en: '12 providers, auto-fallback',       id: '12 provider, auto-fallback'       },
    },
    {
      problem: { en: 'Only chat, no action',              id: 'Hanya chat, tidak ada aksi'       },
      fix:     { en: 'ReAct loop, tools, shell exec',     id: 'ReAct loop, tools, shell exec'    },
    },
    {
      problem: { en: 'No memory between sessions',        id: 'Tidak ada memory antar sesi'      },
      fix:     { en: 'Semantic memory + MEMORY.md',       id: 'Semantic memory + MEMORY.md'      },
    },
    {
      problem: { en: 'Bugs need manual debugging',        id: 'Bug perlu debug manual'           },
      fix:     { en: 'Self-healing with auto rollback',   id: 'Self-healing dengan rollback'     },
    },
    {
      problem: { en: 'All compute goes to the cloud',     id: 'Semua compute ke cloud'           },
      fix:     { en: 'llama.cpp & Ollama local inference',id: 'llama.cpp & Ollama lokal'         },
    },
  ],
}

// ─── What is smooth ───────────────────────────────────────────────────────────

export const whatIs = {
  eyebrow: { en: 'What is smooth?', id: 'Apa itu smooth?' },
  title: {
    en: 'More than a chatbot. An agent runtime.',
    id: 'Lebih dari chatbot. Sebuah agent runtime.',
  },
  body: {
    en: 'smooth is an AI agent terminal and web assistant designed to help with daily technical work: coding, debugging, automation, API testing, documentation, monitoring, scheduler, workflow execution, and external tool integration.\n\nUnlike a regular chatbot, smooth has a reasoning-first architecture, semantic memory, ReAct loop, ProviderRouter, AgentGateway, and a local workspace system. It understands context, picks the best AI provider, runs tools, stores memory, patches code, runs QA, and rolls back if a fix fails.',
    id: 'smooth adalah AI agent terminal dan web assistant yang dirancang untuk membantu pekerjaan teknis sehari-hari: coding, debugging, automation, API testing, dokumentasi, monitoring, scheduler, workflow execution, dan integrasi tool eksternal.\n\nBerbeda dari chatbot biasa, smooth memiliki arsitektur reasoning-first, semantic memory, ReAct loop, ProviderRouter, AgentGateway, dan sistem workspace lokal. Ia memahami konteks, memilih provider AI terbaik, menjalankan tool, menyimpan memory, melakukan patch code, menjalankan QA, dan rollback bila perbaikan gagal.',
  },
  stats: [
    { value: '12',  label: { en: 'AI Providers',    id: 'Provider AI'     } },
    { value: '18+', label: { en: 'Built-in Tools',  id: 'Tool Bawaan'     } },
    { value: '4',   label: { en: 'ReAct Steps/Turn',id: 'ReAct per Turn'  } },
    { value: '∞',   label: { en: 'Your Control',    id: 'Kontrol Penuh'   } },
  ],
}

// ─── Install tabs ─────────────────────────────────────────────────────────────

export const installTitle = {
  en: 'Up and running in seconds.',
  id: 'Berjalan dalam hitungan detik.',
}

export const installNote = {
  en: 'Supports Groq, Mistral, Gemini, OpenRouter, Cloudflare, GitHub Models, llama.cpp, Ollama, and 4 more providers.',
  id: 'Mendukung Groq, Mistral, Gemini, OpenRouter, Cloudflare, GitHub Models, llama.cpp, Ollama, dan 4 provider lainnya.',
}

export const installTabs: InstallTab[] = [
  {
    key: 'docker',
    label: 'Docker',
    code: `# Clone & configure
git clone https://github.com/farisi55/native-openclaw.git
cd native-openclaw
cp .env.example .env
# Add at least one provider API key in .env

# Start the agent
docker compose up -d --build

# Attach to the CLI
docker attach native-openclaw`,
  },
  {
    key: 'npm',
    label: 'npm',
    code: `# Install globally
npm install -g native-openclaw

# Configure
cp .env.example .env
# Add at least one provider API key in .env

# Launch
smooth start`,
  },
  {
    key: 'dev',
    label: 'Dev Mode',
    code: `# Clone & install
git clone https://github.com/farisi55/native-openclaw.git
cd native-openclaw && npm install

# Configure
cp .env.example .env

# Run without build step
npm run dev`,
  },
]

// ─── Features ─────────────────────────────────────────────────────────────────

export const featuresTitle = {
  en: "Everything you need. Nothing you don't.",
  id: 'Semua yang kamu butuhkan. Tidak lebih.',
}

export const featuresSub = {
  en: 'smooth combines 18+ capabilities in one lightweight TypeScript runtime. Use what you need, ignore what you don\'t.',
  id: 'smooth menggabungkan 18+ kemampuan dalam satu TypeScript runtime yang ringan. Pakai apa yang kamu butuhkan, abaikan yang tidak.',
}

export const features: Feature[] = [
  {
    icon: '⟳',
    title:       { en: 'Multi-Provider Router',         id: 'Multi-Provider Router'        },
    description: {
      en: 'Route tasks to the best provider automatically — Groq for speed, SambaNova for reasoning, Gemini for vision. Auto-fallback when any provider fails or hits a rate limit.',
      id: 'Arahkan task ke provider terbaik — Groq untuk kecepatan, SambaNova untuk reasoning, Gemini untuk vision. Auto-fallback bila provider gagal atau kena rate limit.',
    },
  },
  {
    icon: '◈',
    title:       { en: 'Reasoning-First Orchestrator',  id: 'Orchestrator Reasoning-First' },
    description: {
      en: 'Before answering or running a tool, smooth reasons internally to understand what the task needs: a tool call, a specific provider, or a direct answer.',
      id: 'Sebelum menjawab atau menjalankan tool, smooth melakukan reasoning internal untuk memahami apa yang dibutuhkan task: tool call, provider tertentu, atau jawaban langsung.',
    },
  },
  {
    icon: '↺',
    title:       { en: 'ReAct Loop',                    id: 'ReAct Loop'                   },
    description: {
      en: 'Reason → Action → Observe → Answer. Up to 4 steps per turn for complex multi-step workflows. Perfect for debugging, automation, and API testing.',
      id: 'Reason → Action → Observe → Answer. Hingga 4 langkah per turn untuk workflow multi-step. Cocok untuk debugging, automation, dan API testing.',
    },
  },
  {
    icon: '⬡',
    title:       { en: 'Semantic Memory',               id: 'Semantic Memory'              },
    description: {
      en: 'TF-IDF local semantic store — no external vector DB required. Remembers project context, user preferences, and decisions across sessions.',
      id: 'Penyimpanan semantik lokal berbasis TF-IDF — tanpa vector DB eksternal. Mengingat konteks project, preferensi user, dan keputusan antar sesi.',
    },
  },
  {
    icon: '⚕',
    title:       { en: 'Self-Healing',                  id: 'Self-Healing'                 },
    description: {
      en: 'Detects bugs, generates patches, runs QA, and rolls back automatically if the fix fails. Supports OpenCode as an external coding agent. No manual debugging required.',
      id: 'Mendeteksi bug, membuat patch, menjalankan QA, dan rollback otomatis bila perbaikan gagal. Mendukung OpenCode sebagai external coding agent. Tidak perlu debugging manual.',
    },
  },
  {
    icon: '↑',
    title:       { en: 'Self-Upgrade',                  id: 'Self-Upgrade'                 },
    description: {
      en: 'Add new features to the codebase through a controlled upgrade flow: analyze request, patch, QA, report, and auto-restart. Grows with your project.',
      id: 'Tambahkan fitur baru ke codebase melalui alur upgrade terkontrol: analisis request, patch, QA, report, dan auto-restart. Berkembang bersama project kamu.',
    },
  },
  {
    icon: '◇',
    title:       { en: 'Skill System',                  id: 'Skill System'                 },
    description: {
      en: 'Skills are plain Markdown files. Inject custom coding style, review rules, SOP, or domain knowledge. Git-versionable, zero database, team-shareable.',
      id: 'Skill adalah file Markdown biasa. Injeksi custom coding style, review rules, SOP, atau domain knowledge. Bisa di-versioning Git, tanpa database, bisa dishare ke tim.',
    },
  },
  {
    icon: '⊕',
    title:       { en: 'MCP Integration',               id: 'Integrasi MCP'                },
    description: {
      en: 'Connect external tools via Model Context Protocol: filesystem, Tavily, Firecrawl, Brevo, E2B, and more. Configurable via natural language commands.',
      id: 'Hubungkan tool eksternal via Model Context Protocol: filesystem, Tavily, Firecrawl, Brevo, E2B, dan lainnya. Konfigurasi via perintah bahasa natural.',
    },
  },
  {
    icon: '▷',
    title:       { en: 'Workspace System',              id: 'Workspace System'             },
    description: {
      en: 'Local agent home with MEMORY.md, WORKFLOW.md, HEARTBEAT.md, reports, artifacts, backup, and trash. Your agent has its own persistent home directory.',
      id: 'Home agent lokal dengan MEMORY.md, WORKFLOW.md, HEARTBEAT.md, reports, artifacts, backup, dan trash. Agent kamu punya home directory persisten sendiri.',
    },
  },
  {
    icon: '⊞',
    title:       { en: 'Web · CLI · API · Telegram',    id: 'Web · CLI · API · Telegram'   },
    description: {
      en: 'Access smooth from terminal, lightweight Web UI, REST API with auth token, or Telegram bot. All interfaces share the same orchestrator, memory, and tools.',
      id: 'Akses smooth dari terminal, Web UI ringan, REST API berautentikasi, atau Telegram bot. Semua interface berbagi orchestrator, memory, dan tool yang sama.',
    },
  },
  {
    icon: '⏱',
    title:       { en: 'Scheduler & Cronjob',           id: 'Scheduler & Cronjob'          },
    description: {
      en: 'Create and run cronjobs from natural language with timezone support. Daily news, health checks, reports, follow-ups — all automated with email notification.',
      id: 'Buat dan jalankan cronjob dari bahasa natural dengan dukungan timezone. Berita harian, health check, laporan, follow-up — semua terotomasi dengan notifikasi email.',
    },
  },
  {
    icon: '⚙',
    title:       { en: 'AgentGateway',                  id: 'AgentGateway'                 },
    description: {
      en: 'Lightweight delegation layer for specialized tasks: coding patches via OpenCode, MCP config via MCP Agent, browser/research/spreadsheet via optional Docker profiles.',
      id: 'Lapisan delegasi ringan untuk task khusus: patch coding via OpenCode, konfigurasi MCP via MCP Agent, browser/research/spreadsheet via optional Docker profile.',
    },
  },
]

// ─── Self-Healing section ─────────────────────────────────────────────────────

export const selfHeal = {
  eyebrow: { en: 'Autonomous bug repair',    id: 'Perbaikan bug otonom'             },
  title:   { en: 'Your agent fixes itself.', id: 'Agent kamu memperbaiki dirinya sendiri.' },
  body: {
    en: "When something breaks, smooth doesn't wait for you. It analyzes the error, isolates the root cause, writes a targeted patch, runs your test suite, and rolls back cleanly if anything fails. You get a full report every time.",
    id: 'Ketika ada yang rusak, smooth tidak menunggu. Ia menganalisis error, mengisolasi root cause, menulis patch yang tepat, menjalankan test suite, dan rollback bersih bila ada yang gagal. Kamu mendapat laporan lengkap setiap saat.',
  },
  cta: { en: 'Read the docs', id: 'Baca dokumentasi' },
}

export const pipelineSteps: PipelineStep[] = [
  { icon: '◈', label: { en: 'Bug Detected',         id: 'Bug Terdeteksi'       }, status: 'warning' },
  { icon: '⟳', label: { en: 'Analyzing root cause', id: 'Analisis root cause'  }, status: 'default' },
  { icon: '✎', label: { en: 'Writing patch',        id: 'Menulis patch'        }, status: 'default' },
  { icon: '▷', label: { en: 'Running QA tests',     id: 'Menjalankan QA tests' }, status: 'default' },
  { icon: '✓', label: { en: 'Patch applied',        id: 'Patch diterapkan'     }, status: 'success' },
]

// ─── Providers section ────────────────────────────────────────────────────────

export const providersTitle = {
  en: 'Never locked to one AI provider.',
  id: 'Tidak pernah terkunci ke satu provider AI.',
}

export const providersSub = {
  en: 'smooth routes every request to the best available model based on task type. If one provider fails, another takes over instantly — no workflow interruption.',
  id: 'smooth mengarahkan setiap request ke model terbaik berdasarkan jenis task. Bila satu provider gagal, yang lain langsung mengambil alih — tanpa interupsi workflow.',
}

export const providers: Provider[] = [
  { name: 'Groq',                  priority: true  },
  { name: 'Mistral',               priority: false },
  { name: 'Gemini',                priority: true  },
  { name: 'OpenRouter',            priority: false },
  { name: 'SambaNova',             priority: false },
  { name: 'Z.ai',                  priority: false },
  { name: 'Cloudflare Workers AI', priority: false },
  { name: 'GitHub Models',         priority: false },
  { name: 'llama.cpp',             priority: true  },
  { name: 'Ollama',                priority: false },
  { name: 'Hugging Face',          priority: false },
  { name: 'Cohere',                priority: false },
]

export const routingTable: RoutingRow[] = [
  { task: { en: 'Fast Chat',       id: 'Chat Cepat'       }, providers: 'Groq → SambaNova → Cloudflare'       },
  { task: { en: 'Reasoning',       id: 'Reasoning'        }, providers: 'SambaNova → Gemini → GitHub Models'  },
  { task: { en: 'Coding',          id: 'Coding'           }, providers: 'SambaNova → Groq → GitHub Models'    },
  { task: { en: 'Vision',          id: 'Vision'           }, providers: 'Gemini → GitHub Models → OpenRouter' },
  { task: { en: 'Local / Offline', id: 'Lokal / Offline'  }, providers: 'llama.cpp → Ollama'                  },
]

// ─── Use Cases ────────────────────────────────────────────────────────────────

export const useCasesTitle = {
  en: 'Built for people who build things.',
  id: 'Dibuat untuk orang yang membangun sesuatu.',
}

export const useCases: UseCase[] = [
  {
    key: 'developer',
    tab: { en: 'Developer', id: 'Developer' },
    items: [
      { en: 'Debug and patch code autonomously',             id: 'Debug dan patch kode secara otonom'              },
      { en: 'Run build/test cycles via natural language',    id: 'Jalankan build/test cycle via bahasa natural'    },
      { en: 'Code review with custom Markdown skill rules',  id: 'Code review dengan aturan skill Markdown kustom' },
      { en: 'Generate and maintain API specification',       id: 'Generate dan maintain API specification'         },
      { en: 'Maintain project memory across sessions',       id: 'Pertahankan memory project antar sesi'           },
      { en: 'Self-healing application with OpenCode',        id: 'Self-healing aplikasi dengan OpenCode'           },
      { en: 'Self-upgrade — add features autonomously',      id: 'Self-upgrade — tambah fitur secara otonom'       },
    ],
  },
  {
    key: 'devops',
    tab: { en: 'DevOps / IT', id: 'DevOps / IT' },
    items: [
      { en: 'Automate daily server diagnostics',             id: 'Otomatisasi diagnostik server harian'            },
      { en: 'Schedule health checks in natural language',    id: 'Jadwalkan health check via bahasa natural'       },
      { en: 'Send Telegram or email alerts on anomalies',    id: 'Kirim alert Telegram atau email saat anomali'    },
      { en: 'Run internal API checks via scheduler',         id: 'Jalankan cek API internal via scheduler'         },
      { en: 'Monitor command output and persist reports',    id: 'Monitor output command dan simpan laporan'        },
      { en: 'Docker deployment with optional profiles',      id: 'Docker deployment dengan optional profiles'      },
    ],
  },
  {
    key: 'founder',
    tab: { en: 'Tech Founder', id: 'Founder Teknis' },
    items: [
      { en: 'Manage multiple technical projects in one agent',id: 'Kelola banyak project teknis dalam satu agent'  },
      { en: 'Generate documentation and project wikis',      id: 'Generate dokumentasi dan wiki project'           },
      { en: 'Build repeatable automation workflows',         id: 'Bangun workflow otomasi yang bisa diulang'       },
      { en: 'Provider fallback reduces AI downtime risk',    id: 'Provider fallback meminimalkan risiko downtime'  },
      { en: 'Institutional memory lives in MEMORY.md',      id: 'Institutional memory tersimpan di MEMORY.md'    },
    ],
  },
  {
    key: 'poweruser',
    tab: { en: 'Power User', id: 'Power User' },
    items: [
      { en: 'Personal AI assistant — self-hosted',           id: 'AI assistant pribadi — self-hosted'              },
      { en: 'Local AI experiments with llama.cpp/Ollama',    id: 'Eksperimen AI lokal dengan llama.cpp/Ollama'     },
      { en: 'Web + CLI + Telegram in one backend',           id: 'Web + CLI + Telegram dalam satu backend'         },
      { en: 'Persistent memory and workspace across tools',  id: 'Memory dan workspace persisten lintas tool'      },
      { en: 'Custom skills and MCP tool integrations',       id: 'Custom skill dan integrasi tool MCP'             },
    ],
  },
]

// ─── Benefits ─────────────────────────────────────────────────────────────────

export const benefitsTitle = {
  en: 'What you actually gain.',
  id: 'Apa yang benar-benar kamu dapatkan.',
}

export const benefits = [
  {
    icon: '◈',
    title:  { en: 'More Reliable',     id: 'Lebih Andal'        },
    body:   { en: 'Auto-fallback keeps workflows running even when a provider fails or hits a rate limit.',
               id: 'Auto-fallback menjaga workflow tetap berjalan meski provider gagal atau kena rate limit.' },
  },
  {
    icon: '⬡',
    title:  { en: 'More Private',      id: 'Lebih Privat'       },
    body:   { en: 'Self-hosted architecture keeps data, workspace, and memory entirely under your control.',
               id: 'Arsitektur self-hosted menjaga data, workspace, dan memory sepenuhnya di bawah kontrolmu.' },
  },
  {
    icon: '⟳',
    title:  { en: 'More Flexible',     id: 'Lebih Fleksibel'    },
    body:   { en: 'Use cloud AI, local AI, MCP tools, external agents, and custom skills all together.',
               id: 'Gunakan cloud AI, local AI, tool MCP, external agent, dan custom skill secara bersamaan.' },
  },
  {
    icon: '▷',
    title:  { en: 'More Productive',   id: 'Lebih Produktif'    },
    body:   { en: 'Automate debugging, documentation, cronjobs, API testing, and project maintenance.',
               id: 'Otomasi debugging, dokumentasi, cronjob, API testing, dan maintenance project.' },
  },
  {
    icon: '◇',
    title:  { en: 'More Maintainable', id: 'Lebih Maintainable' },
    body:   { en: 'Reports, memory, sessions, and workflow files are stored locally and easy to audit.',
               id: 'Laporan, memory, sesi, dan file workflow tersimpan lokal dan mudah diaudit.' },
  },
  {
    icon: '⊕',
    title:  { en: 'More Lightweight',  id: 'Lebih Ringan'       },
    body:   { en: 'Core stays small. Heavy runtimes — browser, research, local AI — are optional and isolated.',
               id: 'Core tetap kecil. Runtime berat — browser, research, local AI — bersifat optional dan terisolasi.' },
  },
]

// ─── Why Different ────────────────────────────────────────────────────────────

export const whyTitle = {
  en: 'Why smooth is different.',
  id: 'Kenapa smooth berbeda.',
}

export const whyCards: WhyCard[] = [
  {
    icon: '◇',
    title: { en: 'Not just a chatbot.',         id: 'Bukan sekadar chatbot.'     },
    body:  {
      en: "smooth is an agent runtime that reasons, selects providers, executes tools, maintains memory, runs workflows, heals bugs, and upgrades itself. It's a local-first automation layer, not a chat window.",
      id: 'smooth adalah agent runtime yang berpikir, memilih provider, menjalankan tool, menyimpan memory, menjalankan workflow, memperbaiki bug, dan meng-upgrade dirinya sendiri. Bukan sekadar jendela chat.',
    },
  },
  {
    icon: '⬡',
    title: { en: 'Local-first. Cloud-ready.',   id: 'Local-first. Cloud-ready.'  },
    body:  {
      en: 'Run fully offline with llama.cpp or Ollama. Or connect to Groq, Gemini, Mistral, and 9 more cloud providers. Switch mid-session. Your choice, your environment.',
      id: 'Jalankan sepenuhnya offline dengan llama.cpp atau Ollama. Atau hubungkan ke Groq, Gemini, Mistral, dan 9 provider cloud lainnya. Ganti di tengah sesi. Pilihan dan environment kamu.',
    },
  },
  {
    icon: '⊕',
    title: { en: 'Lightweight core. Optional power.', id: 'Core ringan. Kekuatan opsional.' },
    body:  {
      en: 'Browser agents, research agents, spreadsheet agents, and local model servers are optional Docker profiles — disabled by default. Core stays fast and small.',
      id: 'Browser agent, research agent, spreadsheet agent, dan local model server adalah optional Docker profile — dinonaktifkan secara default. Core tetap cepat dan ringan.',
    },
  },
]

// ─── CTA ─────────────────────────────────────────────────────────────────────

export const cta = {
  title:   { en: 'Start building with smooth.',                   id: 'Mulai membangun dengan smooth.'       },
  sub:     { en: 'Self-hosted. Multi-provider. Automation-ready.', id: 'Self-hosted. Multi-provider. Siap otomasi.' },
  primary: { en: 'Get Started',      id: 'Mulai Sekarang'     },
  docker:  { en: 'Run with Docker',  id: 'Jalankan via Docker'},
  docs:    { en: 'Read the Docs',    id: 'Baca Dokumentasi'   },
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export const footerTagline = {
  en: 'Make your life easier.',
  id: 'Buat hidupmu lebih mudah.',
}

export const footerAbout = {
  heading: { en: 'Powered by',   id: 'Ditenagai oleh' },
  sub: {
    en: 'smooth is built on top of native-openclaw — an open source AI agent runtime.',
    id: 'smooth dibangun di atas native-openclaw — AI agent runtime open source.',
  },
  license: { en: 'Open source · MIT License', id: 'Open source · Lisensi MIT' },
}

export const footerColumns = [
  {
    heading: { en: 'Product',   id: 'Produk'    },
    links: [
      { label: { en: 'Features',     id: 'Fitur'            }, href: '#features'  },
      { label: { en: 'Use Cases',    id: 'Kasus Penggunaan' }, href: '#usecases'  },
      { label: { en: 'Providers',    id: 'Provider'         }, href: '#providers' },
      { label: { en: 'Self-Healing', id: 'Self-Healing'     }, href: '#selfheal'  },
    ],
  },
  {
    heading: { en: 'Developer', id: 'Developer' },
    links: [
      { label: { en: 'GitHub',        id: 'GitHub'       }, href: GITHUB_URL      },
      { label: { en: 'Documentation', id: 'Dokumentasi'  }, href: DOCS_URL        },
      { label: { en: 'Docker Hub',    id: 'Docker Hub'   }, href: '#'             },
      { label: { en: 'Changelog',     id: 'Changelog'    }, href: '#'             },
    ],
  },
]
