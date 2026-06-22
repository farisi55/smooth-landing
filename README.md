# smooth — Landing Page

**Stack:** Next.js 15 · TypeScript · Tailwind CSS · Static Export

## Struktur Project

```
src/
├── app/
│   ├── layout.tsx          ← root layout, metadata, font links
│   ├── page.tsx            ← halaman utama, susun semua sections
│   └── globals.css         ← base styles, animations, scroll reveal
├── components/
│   ├── layout/
│   │   ├── Nav.tsx         ← sticky nav, hamburger, lang toggle
│   │   └── Footer.tsx      ← 4-col footer, openclaw branding
│   ├── sections/
│   │   ├── Hero.tsx        ← hero + terminal mockup
│   │   ├── Install.tsx     ← tab installer + code blocks
│   │   ├── Features.tsx    ← 8 feature cards grid
│   │   ├── SelfHealing.tsx ← animated pipeline
│   │   ├── Providers.tsx   ← provider pills + routing table
│   │   ├── UseCases.tsx    ← 3-tab use cases
│   │   ├── WhyDifferent.tsx
│   │   └── CTA.tsx
│   └── ui/
│       ├── Button.tsx      ← primary / outline / ghost variants
│       ├── Badge.tsx       ← pill badge
│       ├── CodeBlock.tsx   ← code block + copy button
│       ├── TabSwitcher.tsx ← generic tab component
│       └── ScrollReveal.tsx← IntersectionObserver wrapper
├── context/
│   └── LanguageContext.tsx ← EN/ID toggle, localStorage persist
├── hooks/
│   └── useScrollReveal.ts
├── lib/
│   └── content.ts          ← SEMUA copy bilingual ada di sini
└── types/
    └── index.ts

public/
├── smooth-logo.png         ← logo utama (nav + footer)
├── smooth-icon.png         ← icon only (favicon)
├── openclaw-icon.png       ← openclaw icon (footer About)
└── openclaw-brand.png      ← brand sheet (opsional)
```

## Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Update Konten

Semua copy EN/ID ada di **satu file**: `src/lib/content.ts`

Tidak perlu menyentuh file component untuk update teks.

## Ganti Links

Cari dan replace `https://github.com/your-org/native-openclaw` di:
- `src/lib/content.ts` (navLinks, footerColumns)
- `src/components/sections/Hero.tsx`
- `src/components/sections/CTA.tsx`

## Tambah Section Baru

1. Buat file di `src/components/sections/NamaSection.tsx`
2. Import di `src/app/page.tsx`
3. Tambah content di `src/lib/content.ts`

## Build & Deploy ke Cloudflare Pages

Project ini sudah disiapkan untuk Cloudflare Pages sebagai static Next.js export:

- `next.config.mjs` memakai `output: 'export'`, sehingga `npm run build` menghasilkan folder `out/`.
- `wrangler.toml` memakai `pages_build_output_dir = "./out"`.
- `.node-version` memakai Node 22 agar build Cloudflare kompatibel dengan Next.js 15.
- `public/_headers` akan ikut masuk ke `out/_headers` untuk security headers dan cache aset Next.js.

```bash
npm run build
# Output: out/
```

**Preview lokal via Wrangler:**

```bash
npm run cloudflare:preview
```

**Deploy via Wrangler:**

```bash
npx wrangler login
npm run cloudflare:deploy
```

**Via Direct Upload (tanpa GitHub):**
1. Buka https://pages.cloudflare.com
2. Create Project → Direct Upload
3. Upload seluruh folder `out/`

**Via GitHub (auto-deploy):**
```bash
git init && git add . && git commit -m "initial"
git remote add origin https://github.com/username/smooth-landing.git
git push -u origin main
```

Di Cloudflare Pages:
- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`
- Node version: `22` (otomatis dari `.node-version`)

## Warna Brand

| Token          | Hex       | Penggunaan         |
|----------------|-----------|--------------------|
| `gold`         | `#C8921A` | Accent utama       |
| `gold-light`   | `#E0A820` | Hover states       |
| `gold-bright`  | `#F0BE40` | Gradient highlight |
| `bg-root`      | `#060C18` | Background utama   |
| `bg-surface`   | `#0D1628` | Section alternating|
| `bg-elevated`  | `#111E35` | Cards, code blocks |

Semua token ada di `tailwind.config.ts`.
