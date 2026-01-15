# NovaCare Clinic Website

## What This Is

A production-ready marketing website for NovaCare Clinic, a behavioral health clinic. The site serves as the primary digital presence, providing information about services, providers, and patient resources in both English and Spanish.

## Core Value

**Real, authoritative behavioral health resources and strong search visibility** — patients and families must find genuine help through curated resources from trusted sources (NIMH, SAMHSA, NAMI, CDC), and the clinic must be discoverable through search engines.

## Requirements

### Validated

- ✓ Next.js App Router static site with 9 pages — existing
- ✓ Component-based UI (Interactive/Section pattern) — existing
- ✓ Tailwind CSS styling with custom theme — existing
- ✓ Framer Motion page transitions — existing
- ✓ Responsive header with navigation — existing
- ✓ Footer with clinic information — existing
- ✓ Heroicons icon library integration — existing
- ✓ Image optimization (Next.js Image) — existing
- ✓ TypeScript strict mode — existing
- ✓ Custom 404 page — existing
- ✓ Resources page with real authoritative health resources (NIMH, SAMHSA, NAMI, CDC) — v1.0
- ✓ Bilingual resources (English/Spanish) — v1.0
- ✓ External link attributes (rel="noopener noreferrer" target="_blank") — v1.0
- ✓ Meta tags (title, description, keywords) on all pages — v1.0
- ✓ Schema.org structured data (MedicalClinic) — v1.0
- ✓ XML sitemap generation — v1.0
- ✓ robots.txt configuration — v1.0
- ✓ Open Graph meta tags for social sharing — v1.0
- ✓ Twitter Card meta tags — v1.0
- ✓ Canonical URLs on all pages — v1.0
- ✓ Proper heading hierarchy (H1, H2, H3) audit and fixes — v1.0
- ✓ Internal linking structure between pages — v1.0

### Active

- [ ] Lazy loading for images
- [ ] Descriptive alt text for all images
- [ ] og-image.jpg creation (1200x630) for social previews

### Out of Scope

- Blog/content marketing — not part of v1, may add later
- Analytics integration (Google Analytics, tracking pixels) — separate implementation phase
- Performance monitoring (Core Web Vitals tracking setup) — separate implementation phase
- Resource translations — only use official Spanish versions from authoritative sources
- Backend API or database — static site only
- User authentication — not needed for marketing site

## Context

**Existing codebase:**
- 9 pages: Homepage, About, Services, Providers, Patient Resources, Patient Portal, Contact, Insurance/Payment, Schedule Appointment
- Page-level component organization (components co-located with pages)
- Remote image sources configured: Unsplash, Pexels, Pixabay
- Custom color palette and fonts (DM Serif Display, Plus Jakarta Sans)
- Dev server runs on port 4028

**Resources page current state:**
- Contains mock PDF links that need replacement with real external resources
- Resource categories likely include mental health topics (depression, anxiety, etc.)

**SEO current state:**
- Basic metadata exports exist in page.tsx files
- No structured data, sitemap, or robots.txt
- No Open Graph or Twitter Card implementation

**Target keywords:**
- behavioral health clinic
- mental health services
- depression treatment
- anxiety therapy
- psychiatric care

## Constraints

- **Tech stack**: Next.js 14.2.0, TypeScript, Tailwind CSS 3.4.6 — existing stack, no changes
- **Deployment**: Vercel — standard Next.js deployment
- **Spanish resources**: Skip if official Spanish version unavailable — maintain quality over coverage
- **External resources**: Only authoritative sources (NIMH, SAMHSA, NAMI, CDC) — trust and accuracy

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Skip Spanish resources without official translations | Maintain quality and accuracy over coverage | ✓ Good |
| Use Vercel for deployment | Standard Next.js hosting with best performance | — Pending |
| Static site generation for SEO | Better crawlability and performance | ✓ Good |
| External links only (no PDFs) | Link to authoritative sources instead of hosting copies | ✓ Good |
| Condition-based resource organization | More intuitive for users seeking help | ✓ Good |
| metadataBase pattern | Next.js canonical URL generation site-wide | ✓ Good |
| MedicalClinic schema type | Extends MedicalOrganization with clinic details | ✓ Good |
| Priority-based sitemap | Homepage 1.0 down to legal 0.3 | ✓ Good |

---
*Last updated: 2026-01-15 after v1.0 milestone*
