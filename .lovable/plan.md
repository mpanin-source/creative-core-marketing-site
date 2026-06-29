# Plan — Blue accent pass + looping typewriter

## 1. Hero "Why Now?" typewriter — loop + blue color rotation
File: `src/components/landing/Hero.tsx`

- Remove the one-shot sequence and rest-on-phrase-1 logic. Make `PHRASES` cycle forever (type → hold → delete → next, repeat).
- Add a parallel `colors` array cycled per phrase change:
  1. `text-coral-dark` (current)
  2. `text-azure-dark` (#2f6fe0)
  3. `text-azure` (#3a86ff)
- Pass the active color to `TypewriterLine` so both the typed text and the `_` cursor swap together. Use a brief CSS color transition (~300ms) so the swap feels intentional, not jarring.
- No layout / copy / CTA changes.

## 2. LocalPlaybook — "Future-defining" card → blue
File: `src/components/landing/LocalPlaybook.tsx`

For the featured (05) card only — regular cards stay coral:
- Card border: `border-coral` → `border-azure`
- Card glow shadow: `rgba(255,77,46,0.15)` → `rgba(58,134,255,0.18)`
- "Future-defining" pill: `bg-coral` → `bg-azure`
- "05" number: `text-coral-dark` → `text-azure-dark`
- Star icon: `text-coral/60` → `text-azure/70`

## 3. Outcomes — softer blue + hover effect
File: `src/components/landing/Outcomes.tsx`

- Context label (`text-coral-dark`) → keep coral (it's the small uppercase eyebrow, matches section eyebrow).
- Big metric (`text-azure-dark`, currently a hard saturated blue) → switch to a faded/soft blue. **Question for you:** the CC logo itself is coral, not blue — when you say "faded color inside the CC logo" do you mean:
  - (a) the muted/translucent coral glow tone (use `text-coral/50` or similar), or
  - (b) a softer blue like `text-azure/70` (lighter, less saturated than current `azure-dark`)?
  
  Default plan = **(b)** `text-azure/70` since metrics should stay in the blue family for visual rhythm. Will switch to (a) on your call.
- Add card hover: `hover:-translate-y-1 hover:border-azure/40 hover:shadow-[0_8px_30px_rgba(58,134,255,0.12)] transition-all duration-200` on each metric card.

## 4. Final CTA — looping typewriter on accent line
File: `src/components/shared/EndCTA.tsx` + `src/components/cobalt-refresh/RefreshHome.tsx`

- Extract the typewriter into a small shared component `src/components/shared/TypewriterText.tsx` (reused by Hero + EndCTA) that takes `phrases`, `colors`, and loops forever.
- In `EndCTA`, when a new optional prop `accentPhrases?: string[]` is provided, render the second-line H2 using `TypewriterText` instead of static `headlineAccent`. Otherwise behavior is unchanged (other pages using `EndCTA` keep their static accent).
- In `RefreshHome.tsx`, replace `headlineAccent="We'll bring the AI."` with:
  ```
  accentPhrases={["We'll bring the AI.", "We'll bring the results.", "We'll bring the traffic."]}
  ```
- Color rotation matches Hero (coral-dark → azure-dark → azure), looping.

## Technical notes
- Color cycling: increment index on each "phrase fully typed" transition; apply via Tailwind class swap on the wrapping span.
- Reserve layout width with the longest phrase (same trick already in Hero) so the H2 doesn't reflow as text changes.
- Respect `prefers-reduced-motion`: if set, show first phrase static (no typing, no looping), same color.
- No changes to other `EndCTA` consumers (Process / Pricing / AI Search pages) — they keep their existing static accents.
