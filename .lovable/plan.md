

## Recommendations: Fixing & Simplifying the CC Emblem

### Why It's Invisible
The arc math using manual `A` (arc) commands with trigonometry is producing paths outside the viewBox or with zero-length segments. SVG arcs are notoriously tricky with angle calculations — one wrong sweep flag or coordinate and the path renders nothing.

### My Recommendation: Simplify the Approach Completely

**Use `<circle>` elements with `stroke-dasharray` instead of manual arc paths.** This is the most reliable way to create "C" shapes:

- A circle with `stroke-dasharray="212 71"` on a radius-18 circle shows exactly 75% of the stroke (a C shape) with a 25% gap
- Rotate each circle to position the gap where you want the "C" opening
- Two circles, offset horizontally by ~16px, overlapping in the center

**For the interlock weave**, use a simple `clipPath` rectangle:
- Draw left C's bottom half first (clipped to bottom half)
- Draw right C fully
- Draw left C's top half on top (clipped to top half)
- This creates the over-under weave with zero complex math

### Hover Animation Recommendation

**Resting state (default):** The two C's sit interlocked, centered between the words. Subtle idle cyan glow pulse so it feels alive.

**On hover — "unlock and breathe" effect:**
1. Both C's slide apart horizontally (left goes -6px, right goes +6px)
2. Each rotates slightly outward (±10°) — subtle, not dramatic
3. Glow intensifies on both rings
4. Spring transition so it feels physical

This is simpler and more elegant than the current ±15° rotation which over-complicates it.

### What Changes

**File:** `src/components/landing/AnimatedLogo.tsx`

1. Replace all the arc trigonometry (lines 26-77) with two `<circle>` elements using `stroke-dasharray` + rotation
2. Add a `<clipPath>` with a simple rectangle split at the midpoint for the weave effect
3. Draw 3 layers: left-C-bottom (clipped), right-C (full), left-C-top (clipped)
4. Increase stroke width slightly for better visibility (6-8px range for md size)
5. Keep the same entrance animation (scale + rotate spring) and metallic gradients
6. Simplify hover to just `x` offset + glow — drop the rotation to keep it clean

