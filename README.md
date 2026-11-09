# Leadwell International — Website

Official website for **Leadwell International**, a Christian faith-based leadership
development organization founded on January 2, 2017.

> Vision: _"To see the transformation of followers into empowered leaders."_

## Phase 1 — Landing Page

This repository currently contains the Phase 1 homepage:

- Sticky, responsive header with desktop + mobile navigation
- Full-screen hero image slider (4 slides, auto-advance, controls, indicators)
- About Leadwell preview with vision statement and founding date
- Six Projects grid with reusable, animated project cards
- Upcoming Events preview (empty state until approved events exist)
- Unified Calendar preview
- News & Updates section (empty state until stories are published)
- Get Involved & Contact invitation
- Comprehensive footer with navigation and project links
- Route placeholders for all planned inner pages

### The six projects

1. Readers' Hub
2. LoveRight
3. Leadcare
4. Ignite
5. Leadmill
6. School Affairs

## Tech stack

- Vite + React + TypeScript
- Tailwind CSS (custom brand tokens)
- Motion for React (animations, reduced-motion aware)
- React Router (route structure for future phases)

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Brand assets

The official Leadwell logo and organizational photography were **not yet uploaded**
at the time this phase was built. A clearly-identifiable placeholder wordmark is in
`src/components/Logo.tsx` using the established brand palette (deep evergreen + gold
on cream). Once the official logo is provided, replace that component with an
`<img src="/logo.svg" />` and drop the asset in `public/`.

Photography currently uses licensed stock imagery (Pexels) as placeholders.

## Roadmap (future phases)

- About Leadwell page
- Per-project pages (overview, sub-projects, news, gallery)
- News & Updates hub
- Full Calendar
- Events listing + detail
- Get Involved & Contact page
- Content management for projects, events and news
