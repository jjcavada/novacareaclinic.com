# Architecture

**Analysis Date:** 2026-01-15

## Pattern Overview

**Overall:** Next.js App Router Static Site

**Key Characteristics:**
- Server-side rendered pages with client-side interactivity
- File-based routing via App Router (`src/app/`)
- Component-based UI architecture
- No backend API or database (static marketing site)
- Page-level code organization (components co-located with pages)

## Layers

**Page Layer:**
- Purpose: Define routes and page-level metadata
- Contains: `page.tsx` files with metadata exports and page components
- Location: `src/app/[route]/page.tsx`
- Depends on: Component layer, Layout
- Used by: Next.js router

**Interactive Component Layer:**
- Purpose: Client-side interactivity and dynamic UI
- Contains: `*Interactive.tsx` components that wrap multiple sub-components
- Location: `src/app/[route]/components/*Interactive.tsx`
- Depends on: UI components, Framer Motion
- Used by: Page layer

**Section Component Layer:**
- Purpose: Page sections and content blocks
- Contains: `*Section.tsx` components for distinct page sections
- Location: `src/app/[route]/components/`
- Depends on: UI components
- Used by: Interactive components

**Shared Component Layer:**
- Purpose: Reusable components across pages
- Contains: Header, Footer, PageTransition, UI primitives
- Location: `src/components/common/`, `src/components/ui/`
- Depends on: Next.js, React, Tailwind
- Used by: All page components

**UI Primitives Layer:**
- Purpose: Base UI building blocks
- Contains: Button, Card, Badge, AppIcon, AppImage
- Location: `src/components/ui/`
- Depends on: React, @heroicons/react
- Used by: All component layers

## Data Flow

**Page Render Flow:**

1. Next.js routes request to `src/app/[route]/page.tsx`
2. Server renders page with metadata
3. Page renders Layout (`src/app/layout.tsx`) with Header/Footer
4. Interactive component loads on client (`'use client'`)
5. Sub-components render content sections
6. User interactions handled via React state

**State Management:**
- Local React state (useState) for UI interactions
- No global state management (no Redux, Context, etc.)
- Scroll position tracked for header effects

## Key Abstractions

**Page Component:**
- Purpose: Route entry point with SEO metadata
- Examples: `src/app/homepage/page.tsx`, `src/app/about/page.tsx`
- Pattern: Server Component with Metadata export

**Interactive Component:**
- Purpose: Orchestrate page interactivity
- Examples: `HomepageInteractive.tsx`, `ContactInteractive.tsx`
- Pattern: Client Component (`'use client'`) composing sections

**Section Component:**
- Purpose: Self-contained page section
- Examples: `HeroSection.tsx`, `CommunityImpactSection.tsx`
- Pattern: Functional component with Tailwind styling

**UI Component:**
- Purpose: Reusable styled element
- Examples: `Button.tsx`, `Card.tsx`, `Badge.tsx`
- Pattern: Props interface with variant support

## Entry Points

**Root Layout:**
- Location: `src/app/layout.tsx`
- Triggers: All page renders
- Responsibilities: HTML structure, global styles, Footer, PageTransition

**Homepage (default):**
- Location: `src/app/homepage/page.tsx`
- Triggers: `/` redirects to `/homepage` - `next.config.mjs`
- Responsibilities: Landing page with all homepage sections

**Pages:**
- Location: `src/app/[route]/page.tsx`
- Triggers: URL route matching
- Responsibilities: Page-specific content and metadata

## Error Handling

**Strategy:** Next.js built-in error handling

**Patterns:**
- Custom 404 page: `src/app/not-found.tsx`
- No custom error boundary (relies on Next.js defaults)
- TypeScript strict mode catches type errors at build

## Cross-Cutting Concerns

**Styling:**
- Tailwind CSS with custom theme in `tailwind.config.js`
- CSS custom properties for colors (`--color-*`)
- Google Fonts: DM Serif Display, Plus Jakarta Sans

**Animation:**
- Framer Motion for page transitions via `PageTransition.tsx`
- Tailwind animate utilities for micro-interactions
- Custom keyframes in `tailwind.config.js`

**Images:**
- Next.js Image optimization via `AppImage.tsx`
- Remote patterns: Unsplash, Pexels, Pixabay - `next.config.mjs`

**Icons:**
- Heroicons via `AppIcon.tsx` wrapper
- Dynamic icon loading by name

---

*Architecture analysis: 2026-01-15*
*Update when major patterns change*
