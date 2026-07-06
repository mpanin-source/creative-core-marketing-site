## Goal
Fix the hero typewriter animation overflowing on mobile, which is causing a horizontal scrollbar and phrases to run off-screen.

## Root Cause
`TypewriterText` reserves width for the longest phrase using an invisible `whitespace-pre` spacer inside an `inline-grid`. At mobile widths with the hero's `text-5xl` (48px) display font, phrases like "the way AI recommends you." and "booked appointments, not clicks." exceed the viewport width. Because the spacer forces `whitespace-pre` (no wrapping), the grid cell grows beyond 100vw, pushing the `<section>` wider and creating the page-level horizontal scrollbar.

## Changes

### 1. `src/components/shared/TypewriterText.tsx`
- Allow wrapping on small screens: change the invisible spacer and the live text span from `whitespace-pre` / single-line to `whitespace-normal break-words` so long phrases wrap to a second line instead of pushing width.
- Keep the grid-cell sizing approach (spacer + overlay) so the heading still reserves vertical room for the tallest wrapped phrase — no layout jump as phrases cycle.
- Ensure the wrapper span is `max-w-full` and `min-w-0` so it can never exceed its parent.

### 2. `src/components/landing/Hero.tsx`
- Add `overflow-x-clip` (or tighten existing `overflow-hidden`) on the hero section wrapper as a safety net, and reduce the mobile heading size step (e.g. `text-4xl sm:text-5xl md:text-7xl xl:text-8xl`) so the first breakpoint isn't already too large for a 390px viewport.
- No copy or color changes.

### 3. Validation
- Load `/` at 390×844 via Playwright, screenshot the hero, and confirm:
  - No horizontal page scrollbar (`document.documentElement.scrollWidth === clientWidth`).
  - Each phrase in the cycle stays fully inside the viewport (wraps to 2 lines if needed).
- Spot-check desktop (1280) to confirm no regression in the single-line look.

## Out of Scope
- Debug panel logic, timing, phrases, and colors remain unchanged.
- No changes to any other section.
