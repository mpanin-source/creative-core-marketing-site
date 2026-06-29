## Goal
Add a 2-second pause between loop cycles and force strict orange → blue → orange → blue color alternation in both typewriter animations. Each typewriter gets a 4th phrase so the alternation lands cleanly.

## Changes

### 1. `src/components/shared/TypewriterText.tsx`
- Add `loopPauseMs` (default 2000ms). After the final phrase in the array finishes its hold + delete, sleep `loopPauseMs` before typing phrase 0 again.
- Keep color rotation tied to phrase index so a 2-color palette produces strict orange/blue alternation.

### 2. Hero — `src/components/landing/Hero.tsx`
Update to 4 phrases, 2-color palette:
```ts
const PHRASES = [
  "how people actually search.",            // orange
  "the way AI recommends you.",             // blue
  "booked appointments, not clicks.",       // orange
  "how ChatGPT picks who to recommend.",    // blue  ← NEW
];
const COLORS = ["text-coral-dark", "text-azure-dark"];
```

### 3. Final CTA — `src/components/cobalt-refresh/RefreshHome.tsx` + `src/components/shared/EndCTA.tsx`
Pass 4 accent phrases and trim EndCTA's internal color list to two so alternation holds:
```ts
accentPhrases={[
  "We'll bring the AI.",            // orange
  "We'll bring the results.",       // blue
  "We'll bring the traffic.",       // orange
  "We'll bring the conversions.",   // blue  ← NEW
]}
```
Inside `EndCTA.tsx`, change the colors prop to `["text-coral-dark", "text-azure-dark"]`.

## Result
- Both animations cycle 4 phrases, colors strictly alternate orange → blue → orange → blue.
- A 2-second pause precedes each new cycle restart.
- Font, size, weight, and layout unchanged.
