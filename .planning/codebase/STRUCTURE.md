# Codebase Structure

**Analysis Date:** 2026-01-15

## Directory Layout

```
novacare_clinic/
├── .next/                  # Build output (gitignored)
├── node_modules/           # Dependencies (gitignored)
├── public/                 # Static assets
│   └── assets/images/      # Image files
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── about/          # About page + components
│   │   ├── contact/        # Contact page + components
│   │   ├── homepage/       # Homepage + components
│   │   ├── insurance-and-payment/  # Insurance page + components
│   │   ├── legal-compliance-hub/   # Legal page
│   │   ├── patient-portal/         # Patient portal + components
│   │   ├── patient-resources/      # Resources + components
│   │   ├── providers/              # Providers page + components
│   │   ├── schedule-appointment/   # Scheduling page
│   │   ├── services/               # Services page
│   │   ├── layout.tsx      # Root layout
│   │   ├── not-found.tsx   # 404 page
│   │   └── page.tsx        # Root redirect
│   ├── components/
│   │   ├── common/         # Shared layout components
│   │   └── ui/             # UI primitives
│   └── styles/             # Global styles
├── .eslintrc.json          # ESLint configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Project manifest
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Directory Purposes

**src/app/**
- Purpose: Next.js App Router pages and route-specific components
- Contains: `page.tsx` files for routes, `components/` subdirs for page-specific components
- Key files: `layout.tsx` (root layout), `page.tsx` (root redirect)
- Subdirectories: One per route, each with optional `components/` folder

**src/app/[route]/components/**
- Purpose: Page-specific components co-located with their page
- Contains: Section components, Interactive wrappers
- Key patterns: `*Interactive.tsx` (client components), `*Section.tsx` (content sections)
- Subdirectories: None (flat structure per page)

**src/components/common/**
- Purpose: Shared layout components used across pages
- Contains: Header, Footer, PageTransition
- Key files: `Header.tsx`, `Footer.tsx`, `PageTransition.tsx`
- Subdirectories: None

**src/components/ui/**
- Purpose: Reusable UI primitives
- Contains: Button, Card, Badge, AppIcon, AppImage
- Key files: `Button.tsx`, `Card.tsx`, `AppIcon.tsx`, `AppImage.tsx`
- Subdirectories: None

**src/styles/**
- Purpose: Global CSS styles
- Contains: `index.css` (imports Tailwind), `tailwind.css`
- Key files: `index.css` (main entry)
- Subdirectories: None

**public/**
- Purpose: Static assets served at root URL
- Contains: Images, favicon, logo files
- Key files: `favicon.ico`, `assets/images/*.png`
- Subdirectories: `assets/images/`

## Key File Locations

**Entry Points:**
- `src/app/layout.tsx` - Root layout wrapper
- `src/app/page.tsx` - Root route (redirects to /homepage)
- `src/app/homepage/page.tsx` - Main landing page

**Configuration:**
- `tsconfig.json` - TypeScript configuration
- `next.config.mjs` - Next.js configuration
- `tailwind.config.js` - Tailwind theme and plugins
- `.eslintrc.json` - Linting rules
- `postcss.config.js` - PostCSS plugins

**Core Logic:**
- `src/components/common/Header.tsx` - Navigation header
- `src/components/common/Footer.tsx` - Site footer
- `src/components/ui/*.tsx` - UI component library

**Styling:**
- `src/styles/index.css` - Global style entry
- `tailwind.config.js` - Custom theme configuration

**Documentation:**
- `package.json` - Project metadata and scripts

## Naming Conventions

**Files:**
- PascalCase.tsx: All React components
- page.tsx: Next.js page routes (fixed name)
- layout.tsx: Next.js layouts (fixed name)
- kebab-case: Directory names for routes

**Directories:**
- kebab-case: Route directories (`patient-portal`, `schedule-appointment`)
- PascalCase avoided in directories
- `components/`: Page-specific component folder

**Special Patterns:**
- `*Interactive.tsx`: Client-side wrapper components
- `*Section.tsx`: Page section components
- `App*.tsx`: Wrapper components (AppIcon, AppImage)

## Where to Add New Code

**New Page:**
- Create directory: `src/app/[route-name]/`
- Add page: `src/app/[route-name]/page.tsx`
- Add components: `src/app/[route-name]/components/`

**New Page Section:**
- Add to page's components: `src/app/[route]/components/[Name]Section.tsx`
- Import in Interactive component or page

**New Shared Component:**
- UI primitive: `src/components/ui/[Name].tsx`
- Layout component: `src/components/common/[Name].tsx`

**New Route-Specific Component:**
- Location: `src/app/[route]/components/[Name].tsx`
- Import from parent Interactive or page

**Utilities:**
- No utilities directory currently
- If needed: create `src/lib/` or `src/utils/`

## Special Directories

**.next/**
- Purpose: Next.js build output
- Source: Generated by `next build`
- Committed: No (in .gitignore)

**node_modules/**
- Purpose: npm dependencies
- Source: Installed by `npm install`
- Committed: No (in .gitignore)

**public/**
- Purpose: Static files served at root URL
- Source: Manual asset placement
- Committed: Yes

---

*Structure analysis: 2026-01-15*
*Update when directory structure changes*
