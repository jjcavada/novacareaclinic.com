# Coding Conventions

**Analysis Date:** 2026-01-15

## Naming Patterns

**Files:**
- PascalCase.tsx for all React components (`HeroSection.tsx`, `AppIcon.tsx`)
- page.tsx for route pages (Next.js convention)
- layout.tsx for layouts (Next.js convention)
- kebab-case for config files (`next.config.mjs`, `postcss.config.js`)

**Functions:**
- PascalCase for React components (`const Header = () => {}`)
- camelCase for event handlers (`toggleMenu`, `closeMenu`, `handleScroll`)
- No async prefix (async functions named normally)

**Variables:**
- camelCase for variables and state (`isMenuOpen`, `isScrolled`)
- UPPER_SNAKE_CASE not observed (no constants defined)
- No underscore prefix for private members

**Types:**
- PascalCase for interfaces (`HeaderProps`, `Metadata`)
- No I prefix for interfaces
- Props suffix for component props (`HeaderProps`)

## Code Style

**Formatting:**
- Prettier integrated via ESLint - `.eslintrc.json`
- Single quotes for strings
- Semicolons required
- 2-space indentation
- 100 character line length
- ES5 trailing commas

**Linting:**
- ESLint 9.x with TypeScript parser - `.eslintrc.json`
- Extends: `next/core-web-vitals`, `eslint:recommended`, `@typescript-eslint/recommended`
- No console.log (warn level, allows console.warn/error/info)
- @typescript-eslint/no-explicit-any: warn
- Unused vars with underscore prefix allowed

**Run Commands:**
```bash
npm run lint          # Run ESLint
npm run lint:fix      # Auto-fix lint issues
npm run format        # Run Prettier
npm run type-check    # TypeScript type check
```

## Import Organization

**Order (observed pattern):**
1. React imports (`import React from 'react'`)
2. Next.js imports (`import Link from 'next/link'`)
3. External packages (`import { motion } from 'framer-motion'`)
4. Internal components (`import { Button } from '../ui/Button'`)
5. Local components (`import Icon from '@/components/ui/AppIcon'`)
6. Types (inline with imports)

**Grouping:**
- No strict grouping enforced
- Related imports kept together

**Path Aliases:**
- `@/` maps to `src/` - `tsconfig.json`
- Used for: `@/components/ui/`, `@/components/common/`
- Relative imports also used for nearby files

## Error Handling

**Patterns:**
- TypeScript strict mode catches type errors at compile time
- No explicit try/catch observed (static site, minimal error scenarios)
- Next.js error boundaries for runtime errors

**Error Types:**
- Rely on TypeScript for validation
- No custom error classes

## Logging

**Framework:**
- Console methods (console.warn, console.error, console.info allowed)
- No structured logging library

**Patterns:**
- Minimal logging in codebase
- Console.log disabled in lint rules

## Comments

**When to Comment:**
- Section labels in TSX (`{/* Crisis Support Banner */}`)
- Configuration explanations in config files
- Minimal inline comments

**JSDoc/TSDoc:**
- Not used (TypeScript types provide documentation)
- Interface definitions serve as API docs

**TODO Comments:**
- Not observed in codebase

## Function Design

**Size:**
- Components kept reasonably sized (50-200 lines)
- Sub-components extracted for large sections

**Parameters:**
- Props interfaces for component parameters
- Destructured in function signature (`{ className = '' }: HeaderProps`)
- Default values inline

**Return Values:**
- JSX returns for components
- Early return not heavily used (single return per component)

## Module Design

**Exports:**
- Default exports for React components
- Named exports for types and utilities
- One component per file

**Component Structure:**
```tsx
'use client'; // If client component

import React from 'react';
// ... other imports

interface ComponentProps {
  // props
}

const Component = ({ prop1, prop2 }: ComponentProps) => {
  // hooks
  // handlers
  // render
  return (
    <div>...</div>
  );
};

export default Component;
```

**Client vs Server:**
- `'use client'` directive at top for client components
- Server components are default (no directive)
- Interactive components marked as client

---

*Convention analysis: 2026-01-15*
*Update when patterns change*
