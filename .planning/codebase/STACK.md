# Technology Stack

**Analysis Date:** 2026-01-15

## Languages

**Primary:**
- TypeScript 5.x - All application code (`src/**/*.tsx`, `src/**/*.ts`)

**Secondary:**
- JavaScript - Configuration files (`tailwind.config.js`, `postcss.config.js`, `next.config.mjs`)

## Runtime

**Environment:**
- Node.js 20.x (inferred from @types/node ^20)
- Browser runtime (Next.js SSR + CSR)

**Package Manager:**
- npm (lockfile: `package-lock.json` present)

## Frameworks

**Core:**
- Next.js 14.2.0 - Full-stack React framework with App Router - `package.json`
- React 18.2.0 - UI library - `package.json`
- React DOM 18.2.0 - DOM rendering - `package.json`

**Styling:**
- Tailwind CSS 3.4.6 - Utility-first CSS framework - `tailwind.config.js`
- PostCSS 8.4.8 - CSS processing - `postcss.config.js`
- Autoprefixer 10.4.2 - CSS vendor prefixes

**Animation:**
- Framer Motion 12.23.24 - Animation library - `package.json`

**Build/Dev:**
- TypeScript 5.x - Type checking and compilation - `tsconfig.json`
- ESLint 9.x - Code linting - `.eslintrc.json`
- Prettier 3.5.3 - Code formatting - `.eslintrc.json` (integrated)

## Key Dependencies

**Critical:**
- next 14.2.0 - Web framework, routing, SSR
- react 18.2.0 - UI component library
- framer-motion 12.23.24 - Page transitions and animations
- tailwindcss 3.4.6 - Styling system

**UI Components:**
- @heroicons/react 2.2.0 - Icon library
- recharts 2.15.2 - Charts and data visualization
- @tailwindcss/forms 0.5.10 - Form styling plugin
- @tailwindcss/typography 0.5.16 - Prose styling plugin
- tailwindcss-animate 1.0.7 - Animation utilities

**Development Tools:**
- @dhiwise/component-tagger 1.0.10 - Component tagging for development - `next.config.mjs`
- @netlify/plugin-nextjs 5.14.5 - Netlify deployment integration

## Configuration

**Environment:**
- No .env file detected (static site, no secrets required)
- Configuration via `next.config.mjs`

**Build:**
- `tsconfig.json` - TypeScript compiler options (strict mode, ES5 target)
- `next.config.mjs` - Next.js configuration (redirects, image domains, webpack)
- `tailwind.config.js` - Custom color palette, fonts, animations
- `.eslintrc.json` - Linting rules with Prettier integration

**Path Aliases:**
- `@/*` maps to `./src/*` - `tsconfig.json`

## Platform Requirements

**Development:**
- Any platform with Node.js
- No external dependencies (no database, no APIs)
- Dev server: `npm run dev` (port 4028)

**Production:**
- Netlify deployment target - `@netlify/plugin-nextjs`
- Static site generation compatible
- External scripts: Rocket.new integration - `src/app/layout.tsx`

---

*Stack analysis: 2026-01-15*
*Update after major dependency changes*
