

## Plan: Rebuild CC Emblem with Proper Interlocking Arcs

### Problem
The current CC emblem uses thin CSS border circles that don't read as interlocking "C" shapes. The reference image shows two thick, wide arc segments that visually weave through each other — one cyan, one silver/white — creating a Chanel-style interlock.

### Approach

**Replace the CSS border approach with an SVG** containing two thick "C" arcs that genuinely interlock:

1. **SVG Structure** — Two thick arc paths (~270° each), offset horizontally so they overlap in the center. Use `clipPath` or layered rendering so the left C appears in front at the top and behind at the bottom (and vice versa for the right C), creating the woven/interlocking illusion.

2. **Metallic Styling** — Apply `linearGradient` fills: silver-to-white for the left C, cyan-to-teal for the right C. Add inner edge highlights and a subtle cyan glow filter.

3. **Hover Animation** — On hover, both C arcs translate outward (left C moves left ~8px, right C moves right ~8px) and slightly rotate apart (±15°), "unlocking" from the text. Scale up to 1.15x with intensified glow. On mouse leave, spring back into interlocked position.

4. **Entrance** — Same as current: scale from 0.3 + rotate from -90° after text letters finish fading in.

5. **Responsive** — Scale the SVG viewBox proportionally for sm/md/lg sizes. Mobile gets a smaller static version with no hover.

### Technical Detail

The interlock effect is achieved by drawing both arcs in a single SVG but splitting each arc into two halves (top and bottom). The draw order alternates: left-C-top → right-C-top → right-C-bottom → left-C-bottom. This makes them appear to weave through each other without needing clipPath.

### Files Changed
- `src/components/landing/AnimatedLogo.tsx` — Rebuild `CCEmblem` component with SVG-based interlocking arcs

