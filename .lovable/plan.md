## Goal
Eliminate the visible "seams" between adjacent home-page sections so backgrounds, glows, and orbit rings appear continuous instead of stopping at each `<section>` boundary.

Two seams in scope:
1. **CantMeasure → Outcomes** (between the merged Playbook+CantMeasure block and the merged Outcomes+HowWeWork block).
2. **HowWeWork → EndCTA** (the final CTA reads as a hard, separate block).

## Why seams show today
- Adjacent wrapper blocks use different background tones (`bg-cream` vs `bg-cream-light`) producing a horizontal color edge.
- Each merged block clips its `OrbitRings`/`GlowOrb` to its own bounds, so the pattern restarts on the next block.
- `py-24` / `py-28` stacks two thick paddings against each other, drawing the eye to the divide.
- `EndCTA` is a self-contained `<section>` with its own background and glow, isolated from `HowWeWork` above it.

## Changes (all in `src/components/cobalt-refresh/RefreshHome.tsx`, plus 1 small prop on `EndCTA`)

### A. Unify background tones across the lower half
Drop the alternating cream/cream-light pattern on the merged blocks and on EndCTA so everything from LocalPlaybook through the final CTA shares one base tone (`bg-cream`). Single tone = no color edge between sections.

### B. Soft gradient bleeds at each seam
Add a 1-section-tall vertical gradient overlay (`bg-gradient-to-b from-transparent via-cream/0 to-cream-light/40` or a subtle azure tint) absolutely positioned across the seam line between:
- merged block 1 (Playbook+CantMeasure) ↔ merged block 2 (Outcomes+HowWeWork)
- merged block 2 ↔ EndCTA

Implemented as a thin `-mt-24`/`-mb-24` overlay div sitting on the seam so the eye reads continuous tone, not a hard line.

### C. Bridge the orbit-ring pattern across all three blocks
Wrap **all three lower blocks** (Playbook+CantMeasure, Outcomes+HowWeWork, EndCTA) in one outer `relative overflow-x-clip` container, and add a single very large, low-opacity `OrbitRings` (`opacity ~0.08`, `rings={10}`, centered around the seam region) as a shared backdrop layer behind everything. The per-block orbit rings stay (they're the visible foreground accents), but this faint shared layer carries the eye through the seams.

### D. Merge EndCTA into the flow
- Add a `seamless?: boolean` prop to `EndCTA` (default false to keep other pages unaffected). When true:
  - Drop its own `bg-cream` (inherits parent).
  - Reduce top padding (`pt-12 md:pt-16` instead of `py-28 md:py-32`) so it reads as a continuation of HowWeWork rather than a fresh section.
  - Keep its `GlowOrb`, but position it to bleed upward into the HowWeWork section above (`top="-40%"`) so the glow visually stitches the two together.
- Add a matching small `GlowOrb` anchored at the bottom of HowWeWork's merged block on the same side, so the two orbs visually fuse across the seam (same trick used on the Process page between phases).

### E. Tighten paddings at seams
On the bottom of merged-block-1, merged-block-2, and the top of EndCTA, reduce vertical padding (`pb-12` / `pt-12` instead of `py-24`) so the seam isn't framed by two thick gutters.

## Files touched
- `src/components/cobalt-refresh/RefreshHome.tsx` — wrap lower blocks in shared container, add seam gradient overlays + shared faint OrbitRings, unify tones, pass `seamless` to EndCTA, add bridging GlowOrb.
- `src/components/shared/EndCTA.tsx` — add optional `seamless?: boolean` prop (default false) that drops the section background and tightens top padding when true. No changes to other pages using EndCTA.

## Out of scope
- No copy changes.
- No edits to `LocalPlaybook`, `CantMeasure`, `Outcomes`, or `HowWeWork` internals.
- Other pages (`/process`, `/pricing-and-booking`, `/ai-search`) unchanged — `seamless` prop defaults to off.
