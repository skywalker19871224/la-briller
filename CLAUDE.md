# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Static export to out/ directory
npm run lint     # ESLint check

# Deploy to Cloudflare Pages
npm run build && npx wrangler pages deploy out --project-name la-briller --commit-dirty=true
```

## Architecture

**Project**: Parfait Clinic × La Briller collaboration landing page — a luxury medical/dental aesthetic LP deployed as a **static site** on Cloudflare Pages.

**Critical constraint**: `output: 'export'` in `next.config.ts` — no API routes, no SSR, no `getServerSideProps`. Always use `"use client"` for interactive components.

**Stack**: Next.js (App Router) + React + TypeScript + Tailwind CSS v4 + Shadcn UI + Radix UI

**Page composition** (`src/app/page.tsx`):
```
Header → Helo (hero video) → BrandMessage → Merits → InstagramSection → QA → ClinicGallery → Access → Footer + FloatingCTA (fixed)
```

**Secondary page**: `src/app/instagram-post/page.tsx` — fullscreen media viewer linked from the IG grid.

## Design System

Brand colors defined as CSS variables in `src/app/globals.css` and registered as Tailwind tokens:
- `bg-parfait-white` / `#FCFCFC` — page background
- `bg-parfait-blue` / `text-parfait-blue` → `#7aaec8` — Parfait brand primary
- `text-labriller-blue` → `#005BAC` — La Briller accent
- `text-gold` → `#D4AF37` — luxury accent, gold dividers
- CTA bar: Deep Blue `#2F5672` · Charcoal `#333` · Orange `#C8461F` · LINE Green `#3CB34A`

Typography: `font-serif` (Noto Serif JP) for headlines, `font-sans` (Noto Sans JP) for body. Do **not** use system cursive fonts — inconsistent with the brand.

Section padding convention: `py-12 md:py-16` minimum, `py-20 md:py-32` for hero-level sections.

Section dividers: thin gold line — `<div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />` or `border-t border-gray-100`.

## File Conventions

- Section components: `src/components/sections/[Name].tsx`
- Shared UI: `src/components/ui/` (Shadcn — add via `npx shadcn-ui@latest add [component]`)
- Images: `public/assets/images/[section-name]-[image-name].png`
- IG assets: `public/assets/ig/before-after/` and `public/assets/ig/videos/`
- Path alias: `@/*` → `./src/*`

## Key External Dependencies

- **Hero video**: external URL at `nanoism.co.jp` (no local copy)
- **Logos**: loaded from `parfait-clinic.com` CDN in Header and InstagramSection
- **ClinicGallery**: uses a custom Web Component `<antigravity-gallery>` loaded dynamically via `@/lib/gallery.js` + `gallery.css`
- **Map**: Google Maps embed iframe in `Access.tsx`

## Important Notes

- `Image` from `next/image` requires `unoptimized: true` (set in `next.config.ts`) — or use plain `<img>` tags which are already the pattern throughout
- `globals.css` should not be modified carelessly — all brand colors are defined here
- `page.tsx` section order should reflect narrative flow: brand trust → technology → social proof → conversion
- The `Message.tsx` and `Features.tsx` files exist in `src/components/sections/` but are **not currently imported** in `page.tsx`
