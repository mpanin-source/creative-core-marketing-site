

## Plan: Integrate Interlocking CC Emblem into Animated Logo

### What You Described
- **Keep**: Current letter-by-letter fade-in animation, white "CREATIVE" + cyan "CORE" color scheme
- **Add**: An interlocking "CC" emblem (SVG) that sits overlaid between the two words (like in your image)
- **Interaction**: On hover, the CC emblem animates outward/away from the text (e.g., scales up, separates, or orbits out)

### Approach

**1. Build the CC Emblem as an Inline SVG**
- Two interlocking "C" rings — one silver/white, one cyan — matching the image's metallic look
- Use CSS gradients and subtle glow filters to replicate the chrome/metallic sheen
- Size it responsively relative to the text (sm/md/lg variants)

**2. Position the Emblem**
- Place it absolutely centered between "CREATIVE" and "CORE", overlapping both words slightly (like in your image where the CC sits on top of the "IVE" and "COR" junction)
- The text stays readable behind/around it

**3. Entrance Animation (Page Load)**
- Letters fade in as they do now
- After all letters are revealed, the CC emblem fades in with a scale-up + subtle rotation (0.5s, spring easing)
- A brief cyan glow pulse on arrival

**4. Hover Animation**
- On hover, the CC emblem lifts upward and scales to ~1.2x with increased glow — like it's "releasing" from the text
- The two C rings slightly separate/rotate apart (one rotates +15°, the other -15°) creating a dynamic unlock feel
- On mouse leave, it smoothly snaps back into position

**5. Responsive Sizing**
- Desktop (md+): Full emblem with hover interaction
- Mobile: Smaller static emblem, no hover (tap would feel awkward), just the entrance animation

### Files Changed
- `src/components/landing/AnimatedLogo.tsx` — Add SVG emblem, hover state logic, responsive sizing
- Optionally `src/index.css` — Add any keyframes for the glow/metallic shimmer if needed

### Technical Notes
- SVG built inline (no image file dependency) for crisp rendering at all sizes
- Framer Motion `whileHover` for the hover interaction
- CSS `linear-gradient` on SVG paths for the metallic look
- The emblem uses `position: absolute` within the logo container so it overlays naturally

