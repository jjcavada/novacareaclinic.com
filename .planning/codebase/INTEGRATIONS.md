# External Integrations

**Analysis Date:** 2026-01-15

## APIs & External Services

**Payment Processing:**
- Not detected (static informational site)

**Email/SMS:**
- Not detected
- Contact form may need backend integration

**External APIs:**
- Not detected (no API calls in codebase)

## Data Storage

**Databases:**
- None (static site, no database)

**File Storage:**
- Local assets in `public/assets/images/`
- Remote images from:
  - Unsplash (`images.unsplash.com`) - `next.config.mjs`
  - Pexels (`images.pexels.com`) - `next.config.mjs`
  - Pixabay (`images.pixabay.com`) - `next.config.mjs`

**Caching:**
- Next.js built-in caching only
- No Redis or external cache

## Authentication & Identity

**Auth Provider:**
- Not detected
- Patient portal page exists but no auth implemented

**OAuth Integrations:**
- Not detected

## Monitoring & Observability

**Error Tracking:**
- Not detected (no Sentry, LogRocket, etc.)

**Analytics:**
- Not detected (no GA, Mixpanel, etc.)

**Logs:**
- Console only (stdout)

## CI/CD & Deployment

**Hosting:**
- Netlify - `@netlify/plugin-nextjs` in dependencies
- Deployment: Via Netlify (likely Git-triggered)

**CI Pipeline:**
- Not detected (no GitHub Actions, CircleCI, etc.)
- Build scripts: `npm run build`

## Environment Configuration

**Development:**
- Required env vars: None detected
- Secrets location: N/A
- Port: 4028 (`npm run dev`)

**Production:**
- No .env file required (static site)
- Build output: `.next/` or custom via `DIST_DIR` env var

## Third-Party Scripts

**Rocket.new Integration:**
- Location: `src/app/layout.tsx`
- Scripts loaded:
  - `https://static.rocket.new/rocket-web.js` (async, module)
  - `https://static.rocket.new/rocket-shot.js` (defer, module)
- Purpose: Development/deployment tooling (DhiWise/Rocket.new platform)
- Configuration URL embedded in script src

**DhiWise Component Tagger:**
- Location: `next.config.mjs`
- Package: `@dhiwise/component-tagger`
- Purpose: Component tagging for development workflow
- Webpack loader for JSX/TSX files

## Webhooks & Callbacks

**Incoming:**
- Not detected

**Outgoing:**
- Not detected

## External Content Sources

**Images:**
- Unsplash (stock photos) - configured in `next.config.mjs`
- Pexels (stock photos) - configured in `next.config.mjs`
- Pixabay (stock photos) - configured in `next.config.mjs`

**Fonts:**
- Google Fonts (inferred from `tailwind.config.js`):
  - DM Serif Display (headlines)
  - Plus Jakarta Sans (body)
- Loading method: Not explicitly configured (likely via CSS import or Next.js font optimization)

## Future Integration Needs

**Contact Form:**
- `src/app/contact/components/ContactForm.tsx` exists
- Currently UI only, needs backend for form submission
- Options: Netlify Forms, API endpoint, email service

**Patient Portal:**
- `src/app/patient-portal/` exists
- Currently static, needs:
  - Authentication (Supabase Auth, Auth0, etc.)
  - Database (patient records)
  - HIPAA-compliant infrastructure

**Appointment Scheduling:**
- `src/app/schedule-appointment/` exists
- Currently informational, could integrate:
  - Calendly
  - Custom scheduling API
  - Healthcare scheduling platform

---

*Integration audit: 2026-01-15*
*Update when adding/removing external services*
