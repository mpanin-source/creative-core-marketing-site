# Plan — Restore original type styles + apply CC gradient to Outcomes

## 1. Hero + Final CTA — keep loop, restore original font/size
The looping animation stays. Problem: `TypewriterText` currently uses an absolute-positioned overlay with a hidden spacer, which subtly shifts how the text inherits sizing/line-height vs. the original H1/H2.

Fix: refactor `src/components/shared/TypewriterText.tsx` to render inline (no absolute positioning), so the active text inherits the parent's exact font, size, weight, and line-height.

- Replace the `relative + invisible spacer + absolute overlay` structure with an `inline-grid` stack:
  ```
  <span class="inline-grid">
    <span class="invisible col-start-1 row-start-1 whitespace-pre">{longestPhrase}_</span>
    <span class="col-start-1 row-start-1 {colorClass} transition-colors duration-300">{text}_</span>
  </span>
  ```
  Both spans occupy the same grid cell, so the longest phrase still reserves width (no layout reflow), but everything is normal inline flow that inherits parent typography 1:1.
- No public API change; Hero and EndCTA usage stays as-is.

This restores the pre-animation visual rendering (same font, same size, same weight, same line-height) on both the Hero rotating line and the EndCTA accent line.

## 2. Outcomes — CC-logo gradient (orange → blue)
File: `src/components/landing/Outcomes.tsx`

The gradient used in the top-nav CC logo is:
```
linear-gradient(95deg, #FF4D2E 20%, #b65a9e 52%, #3a86ff 85%)
```

Apply to:
- **Metric number** (currently `text-azure/70`) → render with `bg-clip-text text-transparent` using the exact CC gradient. Bebas Neue at 6xl/7xl handles gradient fills cleanly.
- **Card hover state** → swap the all-blue hover ring/shadow to a warm-to-cool treatment that echoes the gradient:
  - Border on hover: subtle coral-tinted (`hover:border-coral/30`)
  - Shadow on hover: blended glow `hover:shadow-[0_8px_30px_rgba(255,77,46,0.10),0_8px_40px_rgba(58,134,255,0.10)]`
  - Hover lift `-translate-y-1` kept.
- **Eyebrow / heading text** stay as-is (charcoal + coral-dark) unless you want those gradient too — call out below if so.

## Technical notes
- Gradient text technique: `bg-[linear-gradient(95deg,#FF4D2E_20%,#b65a9e_52%,#3a86ff_85%)] bg-clip-text text-transparent` directly on the metric `<p>`. No new tokens needed.
- `prefers-reduced-motion` behavior in TypewriterText is preserved (renders first phrase static).
- No other consumers of `TypewriterText` or `EndCTA.accentPhrases` are affected since the API stays identical.
