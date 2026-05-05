# Round 3 — Multi-Page Architecture + Strategic Content Updates (Revised)

## High-Level Goals
1. Convert single-page site into 3 routes: `/` (Homepage), `/pricing-and-booking`, `/ai-search`.
2. Persistent FloatingCTA on `/` and `/ai-search` (hidden on `/pricing-and-booking`).
3. Restructure Homepage to 9 content sections (+ MarqueeStrip thin visual element).
4. Build Pricing+Booking page with new Cost Transparency, Cost Reveal, Guarantee sections + Tier 3 qualification accordion.
5. Build AI Search Domination education page (7 sections, 3-card carousel).
6. Update Calendly URL → `https://calendly.com/paninmax2002/strategy-call`.

---

## Revisions From User Feedback (locked)

1. **MarqueeStrip stays** on Homepage between Hero and SGE Education. Treated as a thin visual element, not a content section — does not count against the 9.
2. **LazyAgencySection** — simple wrapper. Render `<LazyAgencyCarousel />` and `<UsVsThem />` sequentially inside one new section container with shared eyebrow/headline at top + transition line between them. No internal refactor of either child component.
3. **FAQ anchor nav** — `useEffect` in `Index.tsx` reads `location.state.scrollTo`, scrolls, then clears state via `navigate(location.pathname, { replace: true, state: {} })` so it cannot re-trigger.
4. **StickyUrgencyBanner visibility** — render ONLY on `/pricing-and-booking`. Hidden on `/` and `/ai-search` (where FloatingCTA shows). The two never appear together.
5. **AIVoiceUpsells de-emphasis** — NO `scale-75` transforms. Use: card padding `p-4` (vs `p-8`), `opacity-80` or muted bg variant, title size reduced one step (e.g. `text-xl` vs `text-2xl`). Responsive layouts preserved.

---

## Step 1 — Routing & Layout

**Edit `src/App.tsx`** — add 2 routes:
```text
/                       → Index (Homepage)
/pricing-and-booking    → PricingAndBooking
/ai-search              → AISearch
*                       → NotFound
```

**Create `src/components/global/Layout.tsx`** — wraps each page with `<Header />`, page children, `<Footer />`, conditional `<StickyUrgencyBanner />` (only on `/pricing-and-booking`), `<MouseGlowEffect />`, and `<FloatingCTA />` (hidden on `/pricing-and-booking`).

Each page renders only its sections; layout handles chrome.

---

## Step 2 — Global FloatingCTA

**Create `src/components/global/FloatingCTA.tsx`**:
- `useLocation()`; return `null` if pathname starts with `/pricing-and-booking`.
- Desktop: `fixed bottom-6 right-6` pill, electric-blue bg, shadow.
- Mobile: `fixed bottom-3 inset-x-3` full-width bar.
- Text: "📅 SEE PRICING & BOOK CALL".
- `onClick` → `navigate("/pricing-and-booking")`.
- Framer Motion: hover `scale: 1.04`, repeating subtle pulse every 5s via `animate` keyframes.

---

## Step 3 — Header Update

Edit `src/components/landing/Header.tsx`:
- Replace anchor scrollers with `react-router-dom` `Link`/`useNavigate`.
- Nav: Logo→`/`, Home→`/`, AI Search→`/ai-search`, Pricing→`/pricing-and-booking`, FAQ→`/` with `state: { scrollTo: 'faq' }` (if already on `/`, scroll directly).
- Replace existing CTA → "Get Started" → `/pricing-and-booking`.
- Mirror items in mobile drawer.

---

## Step 4 — Homepage Restructure (`src/pages/Index.tsx`)

Order:
1. `Hero`
2. `MarqueeStrip` (kept — thin visual element)
3. `SGEEducation`
4. `OptimizationSection` (NEW)
5. `OutcomesNotFeatures` (with `id="outcomes"`)
6. `WhyDifferent` (Local Domination Playbook, restructured 3+3+1)
7. `BottomLine` (rebuilt = Reality Check split-screen)
8. `LazyAgencySection` (NEW combined wrapper)
9. `FAQSection`
10. `WindowClosing` (Spots Are Limited, copy updated)

Delete from `Index.tsx`: `GatewayOffer`, `SprintEngine`, `UntappedMarket`, `PricingTiers`, `AIVoiceUpsells`, `Day60Transition`, `WhyOffering`, `ContactForm`, separate `UsVsThem` import.

Audit for duplicate `OutcomesNotFeatures` — ensure rendered once.

Add `useEffect` reading `location.state.scrollTo` → scroll to `#${id}` → `navigate(location.pathname, { replace: true, state: {} })` to clear state.

---

## Step 5 — Hero Rewrite (`Hero.tsx`)

- Eyebrow unchanged.
- Headline plain white "STOP LOSING LEADS / AT YOUR WEBSITE".
- Subhead: new copy including 20% CPL / 25% appointment guarantee.
- Primary CTA: "SEE WHAT WE DO" → scroll `#outcomes`.
- Secondary CTA: "GO STRAIGHT TO PRICING" → `navigate('/pricing-and-booking')`.
- Remove old microcopy; clean.

---

## Step 6 — SGE Education Tweaks

Edit `SGEEducation.tsx`:
- Mock query → "best [your service] in [your city]" (italic, muted placeholder styling).
- Add bottom line: "Want the full breakdown of how AI search works? [See our deep dive →]" via `<Link to="/ai-search">`.

---

## Step 7 — NEW: OptimizationSection

`src/components/landing/OptimizationSection.tsx`:
- `id="optimization"`, `py-32 px-6 md:px-8`.
- Eyebrow / Headline / Subhead per spec.
- 3 cards using `outcome-card` styling.
- Icons: `TestTube`, `TrendingUp`, `Zap`.
- Framer fadeUp stagger 0.1s.

---

## Step 8 — WhyDifferent (Local Domination Playbook) Restructure

Edit `WhyDifferent.tsx`:
- Universalize 3 card titles/copy (Microsites, ROI Calculators, Local Rebate & Incentive Positioning).
- Layout: 6 strategies in two `md:grid-cols-3` rows. SGE card as 7th = full-width (`col-span-full`) with electric border + glow + "FUTURE-DEFINING" badge.
- SGE body updated, includes `<Link to="/ai-search">Learn more →</Link>`.
- Subhead "Seven strategies most Florida agencies skip" (already correct).

---

## Step 9 — Reality Check Rebuild (`BottomLine.tsx`)

Full rewrite using `react-countup`:
- 2-column grid, stack on mobile.
- LEFT (muted): header, 3 plain metrics, 6 blurred `???` rows, caption "Vanity metrics. Nothing actionable."
- RIGHT (electric accent): header, 6 metrics with `<CountUp ... enableScrollSpy scrollSpyOnce />` (CPL $42, CPBA $127, CAC $284, LTV:CAC 4.2x, ROAS 3.8x, Penetration 18%), caption.
- Closing centered line + CTA "SEE HOW WE FIX THIS" → scroll `#lazy-agency`.

---

## Step 10 — LazyAgencySection (Simple Wrapper)

Create `src/components/landing/LazyAgencySection.tsx`:
- One `<section id="lazy-agency" className="py-32 px-6 md:px-8">`.
- Top: shared eyebrow "SOUND FAMILIAR?" + headline "IS YOUR CURRENT AGENCY PULLING THE LAZY WAY OUT?".
- Render `<LazyAgencyCarousel />` directly (its own internal padding shrunk via prop or wrapper class only if necessary — otherwise leave as-is).
- Transition line: "Sound familiar? That's not bad luck. That's how 90% of agencies operate. Here's what working with Creative Core looks like instead."
- Render `<UsVsThem />` directly.
- No refactor of either child.

Remove `UsVsThem` and `LazyAgencyCarousel` direct imports from `Index.tsx`.

---

## Step 11 — FAQSection: 2 New Q&A

Append to existing data array:
- Q: ad spend on top vs included.
- Q: what the 60-day guarantee means.

---

## Step 12 — WindowClosing Copy Update

Edit `WindowClosing.tsx`:
- Replace "8 clients" copy → "3 Florida home service clients per county..." per spec.
- Pill: "Now Accepting 3 Florida Home Service Clients".

---

## Step 13 — PAGE 2: Pricing + Booking

Create `src/pages/PricingAndBooking.tsx` rendering 12 sections:

1. **MiniHero** (inline): "PICK YOUR STARTING POINT" + 2 path cards (anchors `#gateway`, `#pricing`).
2. `GatewayOffer` (`id="gateway"`).
3. `SprintEngine` — eyebrow "FOUNDATION SPRINT", headline "WHAT'S INCLUDED".
4. **NEW** `src/components/pricing/CostTransparency.tsx`.
5. **NEW** `src/components/pricing/CostReveal.tsx`.
6. `PricingTiers` (`id="pricing"`):
   - Remove inline guarantee box (moved to dedicated section).
   - Add `Collapsible` accordion below tier cards: toggle "🔒 See If You Qualify For Tier 3 →" revealing Standard Path / Skip-Ahead Path / fallback copy.
7. **NEW** `src/components/pricing/GuaranteeSection.tsx` — full guarantee + 7 bullets + baseline-data clause.
8. `AIVoiceUpsells` — wrap with italic intro line. De-emphasis: card `p-4`, `opacity-80` / muted bg, titles `text-xl`. NO `scale-75`.
9. `Day60Transition` — replace "15-min Zoom" with "30-min strategy call".
10. `WhyOffering`.
11. `ContactForm` (`id="contact"`):
    - Submit text → "BOOK MY STRATEGY CALL".
    - Subhead updated.
    - `CALENDLY_URL` → `https://calendly.com/paninmax2002/strategy-call`.
12. **TrustBlock** (inline): clock icon + "3 spots left this month — first come, first served" + sub-text.

---

## Step 14 — PAGE 3: AI Search Domination

Create `src/pages/AISearch.tsx` + 7 components in `src/components/ai-search/`:

1. `AISearchHero.tsx` — no CTA.
2. `SearchShift.tsx` — copy + side-by-side mock visual.
3. `SignalLayers.tsx` — 7 cards, icons: `Search`, `Star`, `Code`, `FileText`, `Youtube`, `MessageSquare`, `Brain`.
4. `ExamplesCarousel.tsx` — 3-card carousel via existing `@/components/ui/carousel` (Embla), 7s autoplay + dots; below carousel a 2-column visual contrast block; closing line.
5. `Tier3Summary.tsx` — 5 bullet preview + CTA `<Link to="/pricing-and-booking#pricing">` + fallback note.
6. `LocalBrandAdvantage.tsx` — copy + highlighted callout.
7. `AISearchFinalCTA.tsx` — button → `navigate('/pricing-and-booking')`.

All sections: `py-32 px-6 md:px-8`, framer fadeUp stagger, existing tokens.

---

## Technical Notes

- All Framer easings cast as `[number, number, number, number]`.
- No new npm dependencies.
- New icons all from `lucide-react`.
- StickyUrgencyBanner rendered conditionally in Layout — only on `/pricing-and-booking`.
- FloatingCTA rendered conditionally in Layout — hidden on `/pricing-and-booking`.

---

## File Manifest

**Create:**
- `src/components/global/Layout.tsx`
- `src/components/global/FloatingCTA.tsx`
- `src/components/landing/OptimizationSection.tsx`
- `src/components/landing/LazyAgencySection.tsx`
- `src/components/pricing/CostTransparency.tsx`
- `src/components/pricing/CostReveal.tsx`
- `src/components/pricing/GuaranteeSection.tsx`
- `src/pages/PricingAndBooking.tsx`
- `src/pages/AISearch.tsx`
- `src/components/ai-search/AISearchHero.tsx`
- `src/components/ai-search/SearchShift.tsx`
- `src/components/ai-search/SignalLayers.tsx`
- `src/components/ai-search/ExamplesCarousel.tsx`
- `src/components/ai-search/Tier3Summary.tsx`
- `src/components/ai-search/LocalBrandAdvantage.tsx`
- `src/components/ai-search/AISearchFinalCTA.tsx`

**Edit:**
- `src/App.tsx`
- `src/pages/Index.tsx`
- `src/components/landing/Header.tsx`
- `src/components/landing/Hero.tsx`
- `src/components/landing/SGEEducation.tsx`
- `src/components/landing/WhyDifferent.tsx`
- `src/components/landing/BottomLine.tsx`
- `src/components/landing/FAQSection.tsx`
- `src/components/landing/WindowClosing.tsx`
- `src/components/landing/PricingTiers.tsx`
- `src/components/landing/AIVoiceUpsells.tsx` (de-emphasis via padding/opacity/font-size only)
- `src/components/landing/Day60Transition.tsx`
- `src/components/landing/ContactForm.tsx`
- `src/components/landing/SprintEngine.tsx`

**No changes:** `MouseGlowEffect`, `AnimatedLogo`, `Footer`, `StickyUrgencyBanner` (only relocated to Layout w/ conditional render), `MarqueeStrip`, theme/tokens, `package.json`.

---

## Out of Scope
MouseGlowEffect, AnimatedLogo, global CSS variables, theme config, package.json, Calendly admin config, OutcomesNotFeatures internal logic.
