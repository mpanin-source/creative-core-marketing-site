

## Plan: Fix CC Interlocking — Correct Arc Orientations

### The Real Problem

The rotation angles are wrong, causing the two C shapes to open **up and down** instead of **left and right** like a Chanel logo. Here's why:

SVG `stroke-dasharray` on a circle starts drawing at 3 o'clock and goes clockwise. With 75% arc / 25% gap, the gap naturally sits from 12 o'clock to 3 o'clock (top-right quadrant).

- **Current left C**: `rotate(-45)` → gap moves to ~10:30–1:30 → opens **upward**
- **Current right C**: `rotate(135)` → gap moves to ~4:30–7:30 → opens **downward**

Neither C opens sideways, so they don't interlock like Chanel at all.

### The Fix

Change rotations so each C opens toward the other:

- **Left C**: `rotate(45)` → gap moves to 1:30–4:30, centered at 3 o'clock → **opens right** ✓
- **Right C**: `rotate(225)` → gap moves to 7:30–10:30, centered at 9 o'clock → **opens left** ✓

This makes the two C's face each other with the weave happening at the top and bottom crossing points — exactly like the Chanel reference.

### What Changes

**File:** `src/components/landing/AnimatedLogo.tsx`

1. Line 98: Change `rotate(-45 ${leftCx} ${cy})` → `rotate(45 ${leftCx} ${cy})`
2. Line 117: Change `rotate(135 ${rightCx} ${cy})` → `rotate(225 ${rightCx} ${cy})`
3. Line 136: Change `rotate(-45 ${leftCx} ${cy})` → `rotate(45 ${leftCx} ${cy})` (same as line 98 — this is the clipped duplicate)

Three number changes. Everything else stays the same — hover animation, gradients, clip paths, sizing.

