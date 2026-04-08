

## Plan: Perfect the Chanel-Style Interlocking CC

### Current State
The CC emblem is now visible but the interlock isn't convincing. The two circles are too far apart (cx=23 vs cx=37, only 14px overlap on r=16 circles), and the "C" openings may not face each other correctly.

### What Changes

**File:** `src/components/landing/AnimatedLogo.tsx` — CCEmblem component only

1. **Tighter overlap**: Move circles closer together — left cx=22, right cx=38 → change to left cx=25, right cx=35 (10px apart instead of 14, creating much more overlap on r=16 circles)

2. **Correct C orientations**: Left C opening faces right, right C opening faces left (like Chanel). Adjust rotation angles:
   - Left C: `rotate(-45, cx, cy)` — gap centered at 3 o'clock (opening right)
   - Right C: `rotate(135, cx, cy)` — gap centered at 9 o'clock (opening left)

3. **Thicker strokes**: Bump stroke widths up ~30% (sm: 9, md: 10, lg: 13) for the bold, chunky look in the reference

4. **Better weave clip**: The clipPath split line stays at the vertical center. The draw order (bottom-left → full-right → top-left) already creates the over-under effect, but with tighter overlap it will read much more clearly

5. **Keep everything else**: Same hover separation animation, same glow, same entrance spring, same responsive sizing

### Why This Will Work
The Chanel interlock illusion depends on three things: (a) significant overlap between the two arcs, (b) opposing openings, and (c) the over-under weave at the crossing points. Currently (a) is weak and (b) may be slightly off. Fixing both with simple number changes will make a dramatic difference.

