
# Round 2 — Gateway Offer + SGE + Lazy Agency Persona

## Scope
Add a $497 Gateway Offer as the primary entry CTA, introduce SGE (Google AI Overview) education + service, add Lazy Agency carousel + Us vs Them comparison, rewrite Outcomes section as 3-tab carousel, tighten Honest Truth, rewrite FAQ, redirect contact form to Calendly, and align all scarcity copy ("3 Florida home service clients") and CTA copy ("Get Your Website") site-wide. All existing styling tokens reused; no new design tokens; no new dependencies.

Note: an OutcomesNotFeatures component does not currently exist in the codebase. It will be created new (not "rewritten") and inserted per the spec.

## New Files

1. `src/components/landing/GatewayOffer.tsx` — id `#gateway-offer`. Section-warm bg, eyebrow "START HERE", H1 with `$497` in `hero-gradient-text`, 3-column layout (PackageOpen / TrendingUp / ArrowRightCircle), big `btn-safety cta-pulse-orange` CTA → `#contact`, microcopy.
2. `src/components/landing/OutcomesNotFeatures.tsx` — id `#outcomes`. Tabbed interface (3 tabs, state-driven, framer-motion AnimatePresence between panels). Tabs: TrendingDown / Zap / Target. Each tab has headline, body, italic callout, 4 bullets. Tab 3 includes the larger italic electric blue line "Your competitors can't hire us if they wanted to."
3. `src/components/landing/SGEEducation.tsx` — id `#sge-education`. 3 vertical/grid blocks (Problem / Reality / Opportunity), centered italic closer, secondary CTA → `#why-different`.
4. `src/components/landing/LazyAgencyCarousel.tsx` — id `#lazy-agency`. 3 swipeable cards, auto-rotate every 6s (setInterval + cleanup), dot indicators, prev/next buttons (ChevronLeft/ChevronRight). Swipe via framer-motion `drag="x"` with threshold. Pauses on hover.
5. `src/components/landing/UsVsThem.tsx` — id `#us-vs-them`. 7-row comparison table. Desktop: 2-column with category labels left + 2 value columns. Mobile: stacked pairs per row. "Other agencies" muted/grey, "Creative Core" electric with Check icons.

## Edited Files

6. `src/components/landing/Header.tsx` — desktop button text "Free Funnel Audit" → "Get Your Website"; mobile "Free Audit" → "Get Site"; mobile menu CTA → "Get Your $497 Website". All scroll target changed from `contact` → `gateway-offer`.
7. `src/components/landing/Hero.tsx` — full rewrite of eyebrow / H1 (3 lines, no gradient) / subhead / dual CTAs (primary → `#gateway-offer`, secondary outline → `#pricing`) / italic electric guarantee line / microcopy.
8. `src/components/landing/MarqueeStrip.tsx` — replace `items` array with the new 15-term Florida home services list.
9. `src/components/landing/StickyUrgencyBanner.tsx` — `tickerText` → "⚡ NOW ACCEPTING: 3 FLORIDA HOME SERVICE CLIENTS • ONE CLIENT PER NICHE PER COUNTY • $497 LAUNCH-READY WEBSITE OR FULL AGENCY TIERS".
10. `src/components/landing/WhoThisIsFor.tsx` — replace `goodFit` and `notFit` arrays per spec.
11. `src/components/landing/SprintEngine.tsx` — eyebrow + H1 update only; cards untouched.
12. `src/components/landing/WhyDifferent.tsx` — append 7th `Sparkles` card "AI SEARCH DOMINATION (SGE)"; update subhead "Six" → "Seven".
13. `src/components/landing/BottomLine.tsx` — CTA text → "SEE UNTAPPED OPPORTUNITIES", scroll target → `#untapped-market` (verify/add id on UntappedMarket if missing).
14. `src/components/landing/PricingTiers.tsx` — scarcity pill copy → "NOW ACCEPTING: 3 FLORIDA HOME SERVICE CLIENTS" (remove "8 clients total"). Add new add-on card BELOW the 3-tier grid + above guarantee box: "TIER 3 EXCLUSIVE" badge, "FULL CONTENT DOMINATION" title, +$1,500/month, 9 bullets, italic callout above, "Talk to Us About This" CTA → `#contact`.
15. `src/components/landing/AIVoiceUpsells.tsx` — H2 → "AUTOMATED VOICE & SMS — SPEED-TO-LEAD IS A RANKING FACTOR"; add italic generative-AI callout; subhead reworded; rename 3 cards (GENERATIVE VOICE RESPONSE / GENERATIVE VOICE + SMS / FULL RESPONSE SUITE); pricing unchanged.
16. `src/components/landing/WhyOffering.tsx` — replace entire body with 3-sentence version + single "CLAIM YOUR COUNTY" CTA. Remove all old paragraphs/check boxes.
17. `src/components/landing/FAQSection.tsx` — replace `faqs` array with 8 new Q&As (territory-lock / ownership / guarantee / niche-focus aligned). Each answer 2–4 sentences ending in soft CTA.
18. `src/components/landing/ContactForm.tsx`:
    - Add new TIMELINE select field above the existing holdback diagnostic. Add `timeline: ""` to formData and include in `canSubmit` validation. Helper microcopy "We prioritize businesses ready to start in the next 30 days." below.
    - Submit button text → "GET MY $497 WEBSITE OR BOOK MY AUDIT".
    - Section subhead replaced per spec.
    - On submit success: `window.location.href` redirect to **`https://calendly.com/paninmax2002/30min`** with prefilled query params (`name`, `email`, `a1` for phone) URL-encoded from form state. Constant `CALENDLY_URL = "https://calendly.com/paninmax2002/30min"`.
    - 14-day max booking window, 24hr min notice, and meeting duration are configured in the Calendly account itself (not in code) — documented in an inline comment above the constant.
19. `src/components/landing/Footer.tsx` — tagline → "AI-Powered Marketing for Florida Home Services. One Client Per Niche, Per County."; capacity note → "Now accepting 3 Florida home service clients. Specializing in window tinting, roofing, HVAC, plumbing, painting, junk removal, tree service, and more."; primary CTA text → "Get Your $497 Website" → `#gateway-offer`.
20. `src/pages/Index.tsx` — re-import and reorder all sections per the final order, with `section-divider-gradient` between each.

## Final Section Order (Index.tsx)

```text
Hero
MarqueeStrip
WhoThisIsFor          (#who-this-is-for)
GatewayOffer          (#gateway-offer)         NEW
OutcomesNotFeatures   (#outcomes)              NEW
SprintEngine          (#engine)
WhyDifferent          (#why-different) +7th
SGEEducation          (#sge-education)         NEW
Deliverables
BottomLine            (#bottom-line)
LazyAgencyCarousel    (#lazy-agency)           NEW
UsVsThem              (#us-vs-them)            NEW
UntappedMarket        (#untapped-market)
PricingTiers          (#pricing) + add-on
AIVoiceUpsells        (#ai-voice) renamed
Day60Transition
WhyOffering           (#why-offering) tightened
FAQSection            (#faq) rewritten
WindowClosing
ContactForm           (#contact) → Calendly
Footer
```

## Technical Notes

- All new sections: `py-32 px-6 md:px-8`, `framer-motion` `sectionFade` + per-card stagger (0.08s).
- Easing arrays cast as `[number, number, number, number]` per project convention.
- Icons: `PackageOpen, TrendingUp, ArrowRightCircle` (Gateway); `TrendingDown, Zap, Target` (Outcomes); `Sparkles, AlertCircle, Search` (SGE); `ChevronLeft, ChevronRight` + persona icons (Lazy Carousel); `Check, X` (UsVsThem); `Sparkles` (WhyDifferent 7th card + Tier3 add-on).
- Lazy Agency carousel: `useState` for active index, `useEffect` setInterval (6s) with hover-pause via `onMouseEnter/Leave`. Swipe = `motion.div drag="x" dragConstraints={{ left:0, right:0 }} onDragEnd` checking offset > 80px.
- Outcomes tabs: `useState` activeIndex; tab buttons with active styling. Panel transition with `AnimatePresence mode="wait"`.
- Us vs Them: semantic `<table>` desktop / stacked `<div>` rows mobile via responsive classes.
- Calendly redirect target: **`https://calendly.com/paninmax2002/30min`** (per user). Prefill params appended as `?name=<encoded>&email=<encoded>&a1=<encoded phone>`.
- All "Get Your Website" / Header CTAs scroll to `#gateway-offer`. Hero secondary, Pricing section CTAs scroll to `#pricing`. Audit/booking CTAs scroll to `#contact`. Reality Check CTA scrolls to `#untapped-market`.

## Out of Scope
MouseGlowEffect, AnimatedLogo, Deliverables, UntappedMarket (content), Day60Transition, WindowClosing, global CSS, theme config, package.json, security memory.
