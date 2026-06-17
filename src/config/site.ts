/**
 * SITE config — single source of truth for values that were previously
 * duplicated across components. Today: the Calendly scheduling URL.
 *
 * The booking IS the real lead capture — the qualifier (trade, ad spend,
 * revenue, etc.) lives as Calendly invitee questions, configured in Calendly,
 * NOT in code. Change the URL here once and every CTA + the inline embed on
 * /pricing-and-booking update together.
 */

/** Creative Core's lead-capture booking event — the detailed qualifier form
 *  (trade, ad spend, revenue, etc. live as Calendly invitee questions, set in
 *  Calendly). Inline-embedded on /pricing-and-booking; every CC "Book a strategy
 *  call" CTA points here. If the event slug changes, this is the only edit.
 *  NOTE: FirstChoice uses a DIFFERENT, lighter event — never this one. */
export const CALENDLY_URL = "https://calendly.com/paninmax2002/30min";

/** One-line reassurance shown above the inline booking embed. Number-free on
 *  purpose — call length is set in Calendly (site copy currently disagrees:
 *  15 vs 20 vs 30 min — reconcile separately). */
export const CALENDLY_REASSURANCE =
  "Free strategy call — no pitch. You'll leave with a working hypothesis even if we never work together.";
