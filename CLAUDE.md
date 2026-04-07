@AGENTS.md

# Portfolio Rebuild — CLAUDE.md

## The Person

**Katarina Petrov** — Staff UX Designer & Design Manager, based in Berlin.
- Tagline: **"GOOD DESIGN BEATS BAD PIZZA"**
- Email: katarinapetrov@gmail.com
- Current live site: https://www.katarinapetrov.com/

---

## Project Goal

Rebuild the portfolio with the same visual DNA as the current site — evolved, cleaner, more personal. Communicate **who Katarina is as a designer and how she thinks**, not traditional UX process phases.

Work reads as **articles**, not case studies. Latest project always front and center.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Content | MDX via `next-mdx-remote` + `gray-matter` |
| Deploy | Vercel |
| Font | DM Sans (Google Fonts — 300, 400, 500) |

---

## Design System

**Vibe:** Minimalist, professional, clean. Same aesthetic as current site — evolved, not reinvented.

**Colors:** Black/white base (`#0a0a0a` / `#ffffff`). No dark mode.

**Typography:** DM Sans — 1-2 weights, clear hierarchy, generous line-height.

**Layout:** Max-width `4xl` (56rem) for listing pages, `2xl` (42rem) for article reading. Generous whitespace, responsive from day one.

---

## Site Structure

```
/                   → Home: hero + featured/latest project + rest of work
/work               → All projects — client-side tag filtering
/work/[slug]        → Article-format project page
/about              → Who she is, how she thinks
/cv                 → Experience + contact
```

---

## Content

### Projects (MDX in `/content/work/`)

Each `.mdx` file uses this frontmatter:

```md
---
title: "..."
date: "2024"
tags: ["...", "..."]
summary: "One-sentence summary shown on cards."
featured: true   # ← pins to home page hero
---
```

### Current projects

| Slug | Company | Year | Featured |
|------|---------|------|---------|
| `delivery-hero-vendor-portal` | Delivery Hero | 2020 | ✓ |
| `hellofresh-product-catalogue` | HelloFresh | 2023 | |
| `hellofresh-cui-tool` | HelloFresh | 2024 | |

---

## Key Principles

1. **Articles, not case studies** — first person, reflective, no rigid UX phase headers
2. **Simplicity first** — don't add what isn't needed yet
3. **Tags are navigation** — they power filtering on `/work`
4. **No traditional UX theater** — no double diamond, no obligatory process sections
5. **Personality matches the tagline** — "GOOD DESIGN BEATS BAD PIZZA" energy

---

## Status

- [x] Scaffold Next.js + Tailwind
- [x] DM Sans font
- [x] Nav, Tag components
- [x] Home page (hero + featured + listing)
- [x] /work with tag filtering
- [x] /work/[slug] article page
- [x] About page
- [x] CV page
- [x] Delivery Hero case study
- [x] HelloFresh Product Catalogue case study
- [x] HelloFresh CUI Tool case study
- [ ] Real CV details / experience dates
- [ ] About page — reviewed and in Katarina's voice
- [ ] Deploy to Vercel
- [ ] Connect katarinapetrov.com domain
