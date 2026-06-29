## Goal
Calm the lower half of the homepage (Local Playbook → Bring Us Your County). Right now three `OrbitRings` layers stack on top of each other in that region (one global faint set + two anchored accent sets), plus each section also paints its own `GlowOrb`. The result reads as overlapping concentric noise. Keep the wow, lose the clutter.

## Changes

### 1. `src/components/cobalt-refresh/RefreshHome.tsx` — strip the orbit pileup
- **Remove** the global faint `OrbitRings` backdrop spanning all 5 blocks.
- **Remove** the right-anchored `OrbitRings` over Playbook+CantMeasure.
- **Remove** the left-anchored `OrbitRings` over Outcomes+HowWeWork.
- **Keep** the single unified `bg-cream` wrapper so section seams stay invisible (no hard breaks).
- **Keep** one — and only one — `OrbitRings` for the whole lower half: very faint (`opacity 0.06`, `rings={6}`), anchored off-canvas right (`cx="110%" cy="40%"`), animated. This becomes the only orbit signature in the region, gently visible through every block.
- **Keep** the two soft horizontal gradient seam-bleeds (they're flat, not orbit clutter).
- **Keep** the bridging `GlowOrb` between HowWeWork and EndCTA (this is the "wow" — diffuse light, not lines).
- **Keep** `EndCTA` in `seamless` mode.

### 2. Per-section `GlowOrb`s — alternate, don't stack
Currently `LocalPlaybook` and `Outcomes` both place a `GlowOrb` at top-left, and the merged region also has a bottom-left bridging glow → three glows on the same left edge. Rebalance so glows alternate sides down the page and don't pile on one axis:
- `src/components/landing/LocalPlaybook.tsx` — keep glow, move to **top-right** (`left="105%"`).
- `src/components/landing/CantMeasure.tsx` — no change (already left, per existing alternation rule).
- `src/components/landing/Outcomes.tsx` — keep glow on **top-left** (unchanged).
- `src/components/landing/HowWeWork.tsx` — verify it sits on the **right**; if not, flip.
- Bridging glow in `RefreshHome.tsx` stays bottom-left to feed into `EndCTA`'s left-side glow.

Net effect: glows zig-zag down the page (R → L → L → R → L) instead of clustering, and there's exactly one whisper-faint orbit field tying the whole region together instead of three competing ones.

### Out of scope
- Hero, Six Systems, Battlefield (upper half) — untouched.
- No copy, layout, spacing, or component-structure changes.
- No new patterns introduced.
