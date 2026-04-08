

## Plan: CC Emblem — Color Swap + Shimmer Hover Animation

### What Changes

**File:** `src/components/landing/AnimatedLogo.tsx` — CCEmblem component

### Current Behavior
On hover, the two rings slide apart horizontally (±6px in viewBox units) with an intensified cyan glow.

### New Behavior
On hover:
1. **Color swap**: The left C (currently silver/white gradient) transitions to cyan, and the right C (currently cyan gradient) transitions to silver/white — they swap identities
2. **Diagonal shimmer**: A bright white highlight sweeps diagonally across both rings (top-left to bottom-right) over ~0.4s, like light catching polished metal
3. **Glow intensifies** as it does now
4. **Remove the horizontal separation** — rings stay interlocked, the color swap IS the interaction

### Also includes
- Raise the CC vertically by -2px (the margin fix from the previous approved plan)

### Implementation Details

1. **Replace static gradient references** with Framer Motion animated values. Each circle's `stroke` will transition between the two gradient IDs using CSS transition on `stroke` property, or more reliably, animate the gradient stop colors themselves using inline style overrides.

2. **Shimmer effect**: Add an animated `<rect>` with a narrow white-to-transparent linear gradient, masked to only show over the rings, that translates diagonally across the viewBox on hover. Uses a `<mask>` referencing the ring shapes so the shimmer only appears on the strokes.

3. **Framer Motion `animate`** keyed to `isHovered` drives the gradient stop color transitions (spring, ~0.3s) and the shimmer rect position (linear, 0.4s).

4. Since SVG gradient stops can't be directly animated by Framer Motion, we'll use two sets of gradient definitions (one silver, one cyan per ring) and swap the `stroke` URL reference via a conditional — with CSS `transition` on opacity of overlapping circle pairs to create a smooth crossfade.

### Approach (simplified)
- Duplicate each circle with the opposite gradient
- Crossfade opacity between original and duplicate on hover (0→1 / 1→0)
- Overlay a diagonal shimmer `<rect>` clipped to ring shapes, animated left-to-right on hover

### Files Changed
- `src/components/landing/AnimatedLogo.tsx` — CCEmblem component rewrite of hover logic + vertical margin fix

