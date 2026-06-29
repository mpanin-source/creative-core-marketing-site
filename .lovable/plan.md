## Changes

### 1. "Operating System" card spacing (`src/components/cobalt/OrbitSixSystems.tsx`)
The `See full {system.name.toLowerCase()}` link on line 181 sits too close to the proof card above it. Bump the link spacing and give it block layout so it never crowds the card:
- Change `mt-6 inline-flex` → `mt-8 flex` and add `pt-2` so the arrow link sits clearly below the card on its own line.

### 2. LocalPlaybook + CantMeasure — replace flow bg with merged orbit rings
Currently LocalPlaybook uses `ContourBg` (animated wavy lines) and CantMeasure uses `SparkField`. Replace both with a single merged `OrbitRings` treatment so the rings bleed continuously across both sections (mirroring how the orbit rings work in `06 Outcomes`).

In `src/components/cobalt-refresh/RefreshHome.tsx`:
- Wrap the LocalPlaybook + CantMeasure blocks in one shared `relative overflow-x-clip` container with `bg-cream`.
- Inside, render a single large `OrbitRings` anchored off-canvas (e.g. `cx="94%" cy="50%"`, `rings={8}`, `opacity={0.18}`, animated) so the orbit sweeps across both sections.
- Remove the per-section `ContourBg` from LocalPlaybook and the `SparkField` from CantMeasure. Keep the inner section transparency overrides.
- Keep the existing left-corner `GlowOrb` on LocalPlaybook for the pulsing blue accent (alternating side rhythm preserved — Hero=right, Playbook=left, Outcomes=right after the flip below).

### 3. Outcomes bg bridges into HowWeWork
Currently Outcomes has its own `OrbitRings` and HowWeWork has `SparkField` — a hard seam appears at the section break. Merge them so the orbit pattern flows through:
- Wrap Outcomes + HowWeWork in one shared `relative overflow-x-clip` container.
- Remove the per-section `OrbitRings` on Outcomes and the `SparkField` on HowWeWork.
- Render a single large `OrbitRings` (`cx="6%" cy="50%"`, `rings={8}`, animated, opacity ~0.16) anchored on the left, spanning both sections. This keeps the alternation (Playbook+CantMeasure rings on right, Outcomes+HowWeWork rings on left).
- Keep `bg-cream-light` for Outcomes wrapper visual continuity, but unify to one background tone across the merged block so no seam shows.

### Technical notes
- All wrapper changes happen in `RefreshHome.tsx`; no edits to `LocalPlaybook.tsx`, `CantMeasure.tsx`, `Outcomes.tsx`, or `HowWeWork.tsx` themselves.
- Section IDs (`#local-playbook`, `#cant-measure`, `#outcomes`, `#how-we-work`) stay intact for anchor links.
- `overflow-x-clip` is used (not `overflow-hidden`) so the orbit rings bleed vertically between merged sections.
