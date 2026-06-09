# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page marketing landing for "ДЕВ РОЙ" (a frontend-career mentoring school). Russian-language, SEO-heavy static site built with Next.js 15 (App Router), React 19, and CSS Modules. No backend, no tests, no database — content is hardcoded in config files and the page is one long scroll of stacked section widgets.

## Commands

```bash
npm run dev           # local dev server (next dev)
npm run build         # production build
npm run start         # serve production build
npm run lint          # eslint .
npm run typecheck     # tsc --noEmit
npm run format        # prettier . --write
npm run format:check  # prettier . --check
npm run precommit     # lint + typecheck + format:check (also runs via husky pre-commit)
```

There is no test runner. Validate changes with `npm run typecheck` and `npm run lint`.

## Architecture

**Two `app`-named directories — do not confuse them:**

- `app/` (repo root) is the real Next.js App Router directory: `layout.tsx` (root HTML + metadata + JSON-LD), `page.tsx`, and route handlers `robots.ts`, `sitemap.ts`, `llms.txt/route.ts`, plus `icon.svg`. `page.tsx` simply renders `HomePage`.
- `src/app/home/` is the composed page component (`HomePage`), **not** a route. `src/app/globals.css` holds global styles.

Path alias `@/*` → `src/*`. Imports from the root `app/` directory use relative or `@/` into src as appropriate.

**Layering (loosely Feature-Sliced):**

- `src/widgets/*` — the page sections (hero, about, values, problems, program, trust, pricing, results, faq, footer, header). Each is a folder with `index.tsx` + a co-located `*.module.css`. `HomePage` (`src/app/home/index.tsx`) imports and orders all of them.
- `src/shared/*` — reusable pieces: `button`, `logo`, `hex-icon`, `section-label`, `config/`, `lib/`, and the `animation-layer`.

**Content lives in config, not JSX.** Copy, nav items, tariffs, FAQ, results, and typed shapes (`Tariff`, `Problem`, `ProgramStep`, `Result`, `FaqItem`, `NavItem`) are centralized in `src/shared/config/landing.ts`. Site-wide identity, contacts, links, SEO keywords, and asset paths are in `src/shared/config/site.ts` (`siteConfig`), which feeds `app/layout.tsx` metadata/JSON-LD, the SEO route handlers, and footer links. Edit these configs rather than hardcoding strings in widgets.

In-page navigation uses anchor ids from `src/shared/lib/anchor.ts` (`anchors`); reference those constants instead of raw `#section` strings.

**Animation system** (`src/shared/animation-layer/`): a single client component `AnimationLayer`, rendered once at the top of `HomePage`, drives all scroll-reveal and cursor effects via a vanilla-JS `AnimationController` class (no per-widget animation logic). Widgets opt in declaratively through data attributes:

- `data-motion-reveal="<variant>"` marks an element to reveal on scroll (IntersectionObserver toggles `data-motion-state="visible"`; CSS in the module files does the transition).
- `data-motion-delay="<n>"` sets the stagger order via the `--motion-order` CSS variable.
- `data-cursor-focus` / `a` / `button` elements trigger the focused cursor-glow state.

The controller sets `data-motion-ready` on `<html>` when active. `useReducedMotion` short-circuits the whole layer (returns null, `AnimationController.disable()`), so reveal styles must degrade gracefully to a visible default state.

## Conventions

- Each component = a directory with `index.tsx` and a co-located `*.module.css`; styling is CSS Modules only (no Tailwind/CSS-in-JS).
- Widgets are server components by default; add `'use client'` only when needed (as in `animation-layer`).
- All user-facing copy is Russian.
