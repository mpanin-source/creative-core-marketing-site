

# Florida Home Services Rebuild — Implementation Plan

## Scope
Rebuild Creative Core's site to lead with Florida home services positioning (residential window tinting), restructure pricing into 3 tiers, add AI Voice upsells, day-60 transition section, sharper differentiators, and a diagnostic field on the contact form. All existing styling conventions (framer-motion patterns, lucide icons, CSS tokens) preserved.

## Files Changed (Edits)

1. **`src/components/landing/Hero.tsx`** — eyebrow, H1 (3-line), subhead, CTA microcopy
2. **`src/components/landing/SprintEngine.tsx`** — section heading + subhead, 6 card titles/descriptions
3. **`src/components/landing/WhyDifferent.tsx`** — heading, subhead, 6 cards (LSA Badge, Neighborhood Cluster, Seasonal Push, Residential Microsite, AC Calculator, Utility Rebate)
4. **`src/components/landing/BottomLine.tsx`** — rename visible heading to "REALITY CHECK", new eyebrow/H1, 6-KPI grid (3×2), closing line, CTA → #contact
5. **`src/components/landing/PricingTiers.tsx`** — full rewrite to 3 tiers (Foundation Sprint highlighted, Growth Partner "MOST POPULAR", Scale Partner "QUALIFICATION REQUIRED" with lock icon)
6. **`src/components/landing/ContactForm.tsx`** — add required diagnostic dropdown ("#1 thing holding business back") between ad spend and submit; gate submit on it
7. **`src/pages/Index.tsx`** — reorder sections, insert two new sections + dividers

## Files Created (New)

8. **`src/components/landing/AIVoiceUpsells.tsx`** — section heading "SPEED-TO-LEAD IS A RANKING FACTOR", italic Google LSA callout, subhead, 3 cards (Voice $750+$500, SMS $1k+$750, Combo $1.5k+$750 with "SAVES $250/MONTH" badge)
9. **`src/components/landing/Day60Transition.tsx`** — eyebrow "WHAT HAPPENS AT DAY 60", H1 "NO SURPRISES. NO LOCK-INS. JUST THE PLAN.", 3-step horizontal layout (FileText, Layers, CreditCard icons)

## Final Section Order (`Index.tsx`)

```text
Hero → MarqueeStrip → WhoThisIsFor → SprintEngine → WhyDifferent →
Deliverables → BottomLine (Reality Check) → UntappedMarket →
PricingTiers → AIVoiceUpsells (NEW) → Day60Transition (NEW) →
WhyOffering → FAQSection → WindowClosing → ContactForm → Footer
```

`section-divider-gradient` placed between each major section (matching current pattern).

## Design / Technical Notes

- **Animations**: reuse existing `fadeUp` / `sectionFade` variants with `custom={i}` stagger (0.1s delays). Cast easing as `[number, number, number, number]` per project Framer Motion convention.
- **Icons** (lucide-react): `ShieldCheck, MapPin, Thermometer, Globe, Calculator, DollarSign` (WhyDifferent); `FileText, Layers, CreditCard` (Day60); `Phone, MessageSquare, Sparkles` (AIVoiceUpsells); `Lock` (Tier 3 badge).
- **Reused tokens only**: `text-electric`, `text-safety`, `text-shimmer-blue`, `hero-gradient-text`, `outcome-card`, `outcome-icon`, `pricing-pulse-border`, `cta-pulse-orange`, `btn-safety`, `btn-primary`, `section-alt`, `section-warm`. No new tokens.
- **Spacing**: `py-32 px-6 md:px-8` on new sections.
- **Responsive**: cards stack on mobile, `md:grid-cols-2 lg:grid-cols-3` on desktop; KPI grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
- **CTAs**: every audit/booking CTA scrolls to `#contact` via `getElementById("contact")?.scrollIntoView`.
- **PricingTiers**: keep existing card shell; Tier 1 keeps `pricing-pulse-border`, Tier 2 gets orange "MOST POPULAR" pill, Tier 3 gets a muted/locked variant with `Lock` icon and "QUALIFICATION REQUIRED" pill.
- **ContactForm**: new field as a `<select>` matching existing field styling; added to required-fields validation that controls submit `disabled` state.

## Out of Scope (Untouched)
MarqueeStrip, WhoThisIsFor, Deliverables, UntappedMarket, WhyOffering, FAQSection, WindowClosing, Footer, Header, StickyUrgencyBanner, MouseGlowEffect, global CSS, theme config, package.json.

