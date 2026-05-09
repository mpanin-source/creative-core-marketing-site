# Round 5 — IA Restructure + Educational FAQ Hub

## Overview
Major restructure: new `/faq` educational hub, Inter font site-wide, Services dropdown re-routed to FAQ anchors, Pricing page slimmed (move deep-dive content to FAQ), new Custom Solutions section replaces standalone Add-Ons, AI Search page reordered, Honest Truth + Spots Are Limited copy rewrites, logo/nav scroll-to-top behavior.

No new dependencies. Inter via Google Fonts. Existing tokens reused.

---

## Step 1 — Routing & Layout
- `src/App.tsx`: add `/faq` → `FAQPage`.
- `src/components/global/Layout.tsx`:
  - `StickyUrgencyBanner` → only `/pricing-and-booking` (already true).
  - `FloatingCTA` → hide on `/pricing-and-booking`; show on `/`, `/ai-search`, `/faq`.

## Step 2 — Inter Font Site-Wide
- `src/index.css`: add `@import` for Inter (400/500/600/700) at top; set `body { font-family: 'Inter', system-ui, sans-serif; }`.
- `tailwind.config.ts`: extend `fontFamily.sans = ['Inter', 'system-ui', 'sans-serif']`; keep `bebas`.
- Headers continue to use `font-bebas` utility — no per-component edits needed.

## Step 3 — Logo + Nav Scroll Behavior
`src/components/landing/Header.tsx`:
- Logo onClick: if `pathname === '/'` → smooth scroll top; else `navigate('/')` then scroll top.
- Top-level nav (AI Search, Pricing, FAQ): navigate + scroll top (or smooth-scroll top if already there).
- Services dropdown items: `navigate('/faq', { state: { scrollTo: 'anchorId' } })`.
- `FAQPage` reads `location.state.scrollTo` in a `useEffect`, scrolls, then `navigate(pathname, { replace: true, state: {} })` to clear.
- Mobile accordion mirrors desktop.

## Step 4 — Header Nav Final Structure
Order: Logo · Services ▼ · AI Search · Pricing · FAQ · [START AT $497]

Services dropdown → `/faq` anchors:
- `#gateway` — $497 Launch Site → Stop Losing Leads
- `#foundation-sprint` — Foundation Sprint → Lower Your CPL
- `#growth-partner` — Growth Partner → Pack Your Calendar
- `#scale-partner` — Scale Partner → Own Your County
- `#sge` — SEO & AI Search Domination
- `#voice-sms` — Voice & SMS Automation

## Step 5 — Build `/faq` Page
New files:
- `src/pages/FAQPage.tsx`
- `src/components/faq/FAQHero.tsx`
- `src/components/faq/ServiceDeepDive.tsx` (reusable)
- `src/components/faq/PricingDeepDive.tsx` (reusable)
- `src/components/faq/FAQFinalCTA.tsx`

Page order:
1. **FAQHero** — eyebrow "EVERYTHING YOU WANT TO KNOW", H1 "OUR SERVICES, EXPLAINED", subhead.
2. **Service Deep-Dives** (each `<ServiceDeepDive>` with anchored `id`):
   - `#gateway` — $497 Launch-Ready Website (what/who/included/7-day/yours-to-keep + CTA → `/pricing-and-booking#gateway`)
   - `#foundation-sprint` — Foundation Sprint $1,500/mo (pull deliverables from `SprintEngine.tsx`)
   - `#growth-partner` — Growth Partner $3,000/mo
   - `#scale-partner` — Scale Partner $5,000/mo (5-bullet Tier 3 qual summary)
   - `#seo` — SEO approach for FL home services
   - `#sge` — AI Search Domination explained (link `/ai-search`)
   - `#voice-sms` — Automated Voice & SMS (CTA → `/pricing-and-booking#custom-solutions`)
3. **Pricing & Process Deep-Dives** (`<PricingDeepDive>`):
   - `#zero-markup` — content from existing `CostTransparency`
   - `#cost-comparison` — content from existing `CostReveal`
   - `#tier-3-qualification` — Standard + Skip-Ahead paths, fallback note
   - `#onboarding` — Day 1-7 / 8-30 / 30-60
   - `#baseline-data` — 7-Day Baseline Data Clause
   - `#day-60` — content from existing `Day60Transition`
4. **General FAQ Accordion** — move `FAQSection` content here, anchor `#general-faq`.
5. **FAQFinalCTA** — "Still Have Questions?" → `/pricing-and-booking#contact`.

## Step 6 — Pricing & Booking Restructure
`src/pages/PricingAndBooking.tsx` final order:
1. Mini-Hero "Pick Your Path"
2. **GuaranteeSection** (moved up)
3. GatewayOffer (`id="gateway"`)
4. SprintEngine — Foundation deliverables (`id="foundation"`)
5. PricingTiers (cards get `id="growth"`, `id="scale"`)
6. **CustomSolutions** (NEW, `id="custom-solutions"`)
7. Day-60 brief inline note (py-12, link → `/faq#day-60`)
8. WhyOffering — Honest Truth (rewritten)
9. ContactForm (`id="contact"`)
10. Trust signals + scarcity badge

Delete from Pricing page (sections only — content preserved on FAQ):
- `CostTransparency`, `CostReveal`, `AIVoiceUpsells`, `Day60Transition` full section.

## Step 7 — New `CustomSolutions` Component
`src/components/pricing/CustomSolutions.tsx`, `id="custom-solutions"`.
- Eyebrow "BEYOND THE TIERS", H2 "CUSTOM SOLUTIONS, DIAGNOSED DURING ONBOARDING", body.
- 3-col grid (stack mobile), `p-5` cards, subtle electric-blue border:
  1. Phone — Generative Voice + SMS Automation (Tier 1+2+3)
  2. MessageSquare — Automated CRM Nurture (Tier 2+3)
  3. Star — Automated Review Acquisition (Tier 1+2+3)
- Italic centered closing line about scoped pricing.

## Step 8 — Honest Truth Rewrite
`src/components/landing/WhyOffering.tsx`: eyebrow "THE HONEST TRUTH", H2 "TERRITORY EXCLUSIVITY ISN'T MARKETING", new 3-paragraph body, single CTA "Claim Your County" → `#contact`. Remove all pricing-change / time-based scarcity language.

## Step 9 — Spots Are Limited Update (Homepage)
`src/components/landing/WindowClosing.tsx`: switch from orange to electric-blue/muted, smaller footprint. Eyebrow "GET STARTED", H2 "START AT $497", new body, CTA "See What's Included →" → `/pricing-and-booking#gateway`. Remove "Free Audit" + monthly/this-month language.

## Step 10 — Homepage FAQ Removal
`src/pages/Index.tsx`: remove `FAQSection` import + render. Final section order:
Hero · MarqueeStrip · SGEEducation · OptimizationSection · OutcomesNotFeatures · WhyDifferent · BottomLine · LazyAgencySection · WindowClosing · Footer.

## Step 11 — AI Search Page Restructure
`src/pages/AISearch.tsx` order:
1. **AISearchHero** — merge SearchShift copy into subhead. New H1 "GET YOUR BUSINESS MENTIONED BY GOOGLE'S AI BEFORE YOUR COMPETITORS ARE". No CTA.
2. **LocalBrandAdvantage** (moved up) — add updated 18-month callout.
3. **SignalLayers** — restructure to 3+3+1: top six cards in 2×3 grid; 7th (Semantic Relevance) full-width with electric border + glow + "FUTURE-DEFINING" badge. Icons: Search, Star, Code, FileText, Youtube, MessageSquare, Brain.
4. **ExamplesCarousel** — update mock to mimic Google AI Overview (sparkle icon, "AI Overview" label, citation badges). Add side-by-side traditional vs AI Overview below.
5. **Tier3Summary** — trim to 5-bullet preview + CTA → `/pricing-and-booking#scale`.
6. **AISearchFinalCTA** — unchanged.

Delete `SearchShift.tsx` (content merged).

## Step 12 — SGE Education Mock Card Update
`src/components/landing/SGEEducation.tsx`: replace mock card visual with Google-AI-Overview-styled card (sparkle icon top-left, "AI Overview" label, italic placeholder query "best [your service] in [your city]", mock bulleted response, 3-4 greyed citation badges). Keep weaponized body copy + deep-dive link.

## Step 13 — Anchor ID Verification
- `GatewayOffer`: `id="gateway"` ✓
- `SprintEngine`: `id="foundation"` ✓
- `PricingTiers`: add `id="growth"`, `id="scale"` to respective cards
- `CustomSolutions`: `id="custom-solutions"`
- `ContactForm`: `id="contact"`
- Confirm existing hash-scroll `useEffect` in `PricingAndBooking.tsx` still fires post-restructure.

---

## Files Summary

**Create:** `src/pages/FAQPage.tsx`, `src/components/faq/FAQHero.tsx`, `src/components/faq/ServiceDeepDive.tsx`, `src/components/faq/PricingDeepDive.tsx`, `src/components/faq/FAQFinalCTA.tsx`, `src/components/pricing/CustomSolutions.tsx`.

**Edit:** `App.tsx`, `Layout.tsx`, `Header.tsx`, `index.css`, `tailwind.config.ts`, `Index.tsx`, `PricingAndBooking.tsx`, `AISearch.tsx`, `SGEEducation.tsx`, `WindowClosing.tsx`, `WhyOffering.tsx`, `PricingTiers.tsx`, `AISearchHero.tsx`, `SignalLayers.tsx`, `ExamplesCarousel.tsx`, `Tier3Summary.tsx`, `LocalBrandAdvantage.tsx`.

**Delete:** `FAQSection.tsx`, `CostTransparency.tsx`, `CostReveal.tsx`, `AIVoiceUpsells.tsx`, `Day60Transition.tsx`, `SearchShift.tsx`.

## Out of Scope
Multi-agent dashboard, lead magnet, territory widget, homepage reorder beyond FAQ removal, copy edits not specified above.
