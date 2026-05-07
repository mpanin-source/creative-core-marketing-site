# Round 4 — Final Cleanup Plan

## Verification Summary (already done in prior rounds)
- ✅ FAQ has 10 questions including the 2 new ones (Fix 1)
- ✅ `GuaranteeSection.tsx` exists on `/pricing-and-booking` between PricingTiers and AIVoiceUpsells (Fix 2)
- ✅ SGE mock card already shows `"best [your service] in [your city]"` placeholder (Fix 3)
- ✅ WhyDifferent cards already universalized — Microsites / ROI Calculators / Local Rebate (Fix 4)
- ✅ AIVoiceUpsells already has `deemphasized` prop, intro line, reduced padding/opacity/title size (Fix 5)
- ✅ Hero CTAs already wired: "SEE WHAT WE DO" → `#outcomes`, "GO STRAIGHT TO PRICING" → `/pricing-and-booking` (Fix 6)
- ✅ Footer already says "Now accepting 3 Florida home service clients" (Fix 7)
- ✅ FAQ anchor nav already works: `Header.goToFAQ` + `Index.tsx` useEffect handles `state.scrollTo`; `id="faq"` exists on FAQSection (Fix 8)

## Remaining Fixes

### Fix 9 — Hero headline pivot
`src/components/landing/Hero.tsx`: replace `STOP LOSING LEADS / AT YOUR WEBSITE` with single-line `OWN YOUR COUNTY.` Keep eyebrow, subhead, CTAs untouched.

### Fix 10 — Header CTA text
`src/components/landing/Header.tsx`: change desktop + mobile-top CTA copy from "Get Started" to "START AT $497" (already routes to `/pricing-and-booking`, no arrow).

### Fix 11 — Header nav restructure
`src/components/landing/Header.tsx`:
- Remove "Home" nav item (desktop + mobile menu) — logo handles it.
- Add a "Services" dropdown (desktop: hover/click popover; mobile: collapsible accordion inside the existing slide-up menu) with 5 outcome-anchored items routing to:
  - `/pricing-and-booking#gateway` — "$497 Launch Site → Stop Losing Leads"
  - `/pricing-and-booking#foundation` — "Foundation Sprint → Lower Your CPL"
  - `/pricing-and-booking#growth` — "Growth Partner → Pack Your Calendar"
  - `/pricing-and-booking#scale` — "Scale Partner → Own Your County"
  - `/pricing-and-booking#voice-sms` — "Automated Voice & SMS → Speed-To-Lead"
- Final desktop order: Logo · Services ▼ · AI Search · Pricing · FAQ · [START AT $497]
- Implementation: lightweight custom dropdown using existing tokens (no new shadcn dep needed). ChevronDown icon from lucide.

Anchor IDs to add/adjust on `/pricing-and-booking`:
- `GatewayOffer.tsx`: change `id="gateway-offer"` → `id="gateway"` (also update `Footer.tsx` button that scrolls to `gateway-offer`).
- `SprintEngine.tsx`: change `id="engine"` → `id="foundation"` (update Footer "See How It Works" button that scrolls to `engine` on this page; on Index it doesn't reach SprintEngine, so safe).
- `PricingTiers.tsx`: section already `id="pricing"`. Add `id="growth"` to Growth Partner card wrapper and `id="scale"` to Scale Partner card wrapper (offset via `scroll-mt-24`).
- `AIVoiceUpsells.tsx`: change `id="ai-voice"` → `id="voice-sms"`.

Cross-route anchor scroll: add a small `useEffect` in `PricingAndBooking.tsx` that reads `location.hash` on mount and scrolls to that element (matches existing pattern in `Index.tsx`).

### Fix 12 — SGE section copy rewrite
`src/components/landing/SGEEducation.tsx`:
- New headline (single line): `AI Search Domination: The New Battlefield`
- Replace the 3-block grid with one body paragraph (the weaponized copy provided), keeping the AI Overview mock card to the right (responsive: stacked on mobile, 2-col on md+).
- Keep eyebrow ("WHY THIS MATTERS"), keep mock card with "best [your service] in [your city]" placeholder, keep bottom "deep dive →" link to `/ai-search`.
- Remove the existing 3-card grid (`blocks` array) and the italic "most important shift in local search" tagline since the new body covers it.

## Files Touched
- `src/components/landing/Hero.tsx` (headline)
- `src/components/landing/Header.tsx` (CTA text, remove Home, add Services dropdown)
- `src/components/landing/SGEEducation.tsx` (full copy rewrite, layout simplification)
- `src/components/landing/GatewayOffer.tsx` (id rename)
- `src/components/landing/SprintEngine.tsx` (id rename)
- `src/components/landing/PricingTiers.tsx` (add growth/scale ids on cards)
- `src/components/landing/AIVoiceUpsells.tsx` (id rename)
- `src/components/landing/Footer.tsx` (update scroll target ids: `gateway-offer`→`gateway`, `engine`→`foundation`)
- `src/pages/PricingAndBooking.tsx` (add hash-scroll useEffect)

## Out of Scope (per spec)
Cost Transparency, Cost Reveal, Tier 3 accordion, AI Search examples carousel, Us vs Them, homepage section order, territory widget, lead magnet.
