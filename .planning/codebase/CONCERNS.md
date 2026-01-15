# Codebase Concerns

**Analysis Date:** 2026-01-15

## Tech Debt

**TypeScript/ESLint errors ignored in build:**
- Issue: Build configured to ignore TypeScript and ESLint errors
- File: `next.config.mjs` (lines 5-8)
  ```js
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  ```
- Why: Likely expedited initial development
- Impact: Type errors and lint issues not caught at build time, potential runtime bugs
- Fix approach: Remove these flags, fix all type/lint errors, enforce strict builds

**Third-party scripts in layout:**
- Issue: External scripts from Rocket.new loaded on every page
- File: `src/app/layout.tsx` (lines 38-39)
- Why: Development platform integration
- Impact: Third-party dependency, potential performance impact, external code execution
- Fix approach: Remove before production if not needed, or lazy-load if required

## Known Bugs

**No known bugs documented**
- Codebase is relatively new static site
- No bug tracking or TODO comments found

## Security Considerations

**External script injection:**
- Risk: Scripts from `static.rocket.new` execute on every page
- File: `src/app/layout.tsx`
- Current mitigation: HTTPS only
- Recommendations: Remove in production, audit script behavior, use CSP headers

**Contact form lacks server-side validation:**
- Risk: Form UI exists but no backend validation
- File: `src/app/contact/components/ContactForm.tsx`
- Current mitigation: Client-side only (UI component)
- Recommendations: When implementing backend, add server-side validation, rate limiting, CAPTCHA

**Patient portal has no authentication:**
- Risk: Patient portal page exists but is purely informational
- File: `src/app/patient-portal/page.tsx`
- Current mitigation: No sensitive data exposed (static content)
- Recommendations: If implementing real portal, use HIPAA-compliant auth, secure data handling

## Performance Bottlenecks

**No significant performance concerns detected**
- Static site with minimal JavaScript
- Next.js optimization handles most concerns
- Images use Next.js Image component for optimization

**Potential concern - Large page bundles:**
- File: `src/app/insurance-and-payment/page.tsx` (9KB source)
- Observation: Some pages have substantial inline content
- Impact: Larger initial bundle sizes
- Improvement path: Consider code splitting for very large pages

## Fragile Areas

**Tailwind custom theme:**
- File: `tailwind.config.js`
- Why fragile: Heavy reliance on CSS custom properties (`--color-*`)
- Common failures: Missing CSS variable definitions cause invisible elements
- Safe modification: Test all color variants after theme changes
- Test coverage: No visual regression tests

**Header navigation state:**
- File: `src/components/common/Header.tsx`
- Why fragile: Multiple state variables for menu and scroll
- Common failures: Menu stuck open on route change
- Safe modification: Test mobile menu on all page transitions
- Test coverage: None

## Scaling Limits

**Static site - scales well:**
- CDN-based (Netlify), inherently scalable
- No backend bottlenecks
- Main limit: Build time for very large sites

## Dependencies at Risk

**react-dom 18.2.0 / react 18.2.0:**
- Risk: React 19 released, eventual upgrade needed
- Impact: Breaking changes possible with major upgrade
- Migration plan: Test with React 19 when stable, update incrementally

**next 14.2.0:**
- Risk: Next.js 15 available, behind current stable
- Impact: Missing newer features and optimizations
- Migration plan: Upgrade to 15.x when ready, review App Router changes

**@dhiwise/component-tagger:**
- Risk: Platform-specific dependency, unclear maintenance status
- Impact: Build process dependency
- Migration plan: Can be removed if not using DhiWise platform

## Missing Critical Features

**No test suite:**
- Problem: Zero tests in codebase
- Current workaround: Manual testing only
- Blocks: Confident refactoring, regression detection
- Implementation complexity: Medium (add Vitest + RTL)

**No backend for forms:**
- Problem: Contact form has no submission handling
- File: `src/app/contact/components/ContactForm.tsx`
- Current workaround: Display phone/email only
- Blocks: Online inquiries, lead capture
- Implementation complexity: Low (Netlify Forms or API route)

**No real patient portal:**
- Problem: Patient portal is informational only
- File: `src/app/patient-portal/`
- Current workaround: Redirect to external systems
- Blocks: Integrated patient experience
- Implementation complexity: High (auth, HIPAA, database)

## Test Coverage Gaps

**All code untested:**
- What's not tested: Entire codebase
- Risk: Regressions undetected, refactoring risky
- Priority: High for critical paths (Header, Forms, Scheduling)
- Difficulty to test: Low (components are straightforward)

**Priority testing areas:**
1. `src/components/common/Header.tsx` - Navigation critical
2. `src/components/ui/Button.tsx` - Used everywhere
3. `src/app/schedule-appointment/` - User conversion path

---

*Concerns audit: 2026-01-15*
*Update as issues are fixed or new ones discovered*
