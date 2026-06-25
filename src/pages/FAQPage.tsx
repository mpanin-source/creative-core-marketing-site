import EndCTA from "@/components/shared/EndCTA";
import { SparkField } from "@/components/cobalt-refresh/patterns";

interface FAQ {
  id: string;
  category: string;
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    id: "pricing",
    category: "Pricing & guarantee",
    q: "What does each tier cost, and how does the guarantee work?",
    a: "Three retainer tiers: Foundation Sprint at $1,500/mo, Growth Partner at $3,000/mo, and Scale Partner at $5,000/mo (qualification required). Every retainer carries the 60-day guarantee: we build and launch every system in your tier on schedule — and if we don't deliver what we promised, you walk away and keep everything we've built. Month-to-month, cancel anytime.",
  },
  {
    id: "process",
    category: "Process",
    q: "How long does setup take and what does the first 60 days look like?",
    a: "Discovery to onboarding to launch typically runs 7–14 days. From kickoff: foundation deployed in week 1 (schema, GBP, LSA setup, landing pages, speed-to-lead workflows). First ads live by week 2. Day 30 check-in confirms early signal. Day 60 is your guarantee checkpoint — continue, upgrade, or walk away with everything we've built.",
  },
  {
    id: "crm-strategy",
    category: "Tools & integrations",
    q: "What if I already have a CRM?",
    a: "Three scenarios. (A) Your existing CRM works (HubSpot, Salesforce, ServiceTitan, Housecall Pro, etc.) — we integrate GoHighLevel as your marketing layer alongside it, bridged via Zapier or Make.com. (B) You're on spreadsheets or no CRM — we set you up on GHL during Foundation Sprint onboarding, data migration included. (C) Your existing CRM is broken — we quote separately as a Data Migration Service ($500–$1,500 one-time). We integrate. We don't force migrations.",
  },
  {
    id: "guarantee",
    category: "Pricing & guarantee",
    q: "How does the 60-day guarantee actually work?",
    a: "It's a work guarantee, not a metrics gamble. On day one we put in writing exactly which systems we'll build and launch in your first 60 days — foundation in week 1, ads live by week 2, speed-to-lead and reporting running. If we don't deliver what we promised, you walk away. Either way, you keep everything: ad accounts, landing pages, CRM setup, schema, GBP optimization, content. No contract battles. No clawbacks.",
  },
  {
    id: "contracts",
    category: "Engagement terms",
    q: "Am I locked into a long contract?",
    a: "No. All three tiers are month-to-month — Foundation Sprint, Growth Partner, and Scale Partner alike. Foundation Sprint runs through the 60-day guarantee window; after that, every tier is month-to-month with 7 days' notice to cancel. No annual lump sums, no minimum term on any tier. The work compounds over 90–180 days, which is why clients stay — not because a contract makes them.",
  },
  {
    id: "florida-licensing",
    category: "Florida-specific",
    q: "Are there Florida home services licensing considerations?",
    a: "Yes. We verify your license, insurance, and Florida advertising compliance during onboarding. For LSA (Local Services Ads), the Google Verified badge (formerly Google Guaranteed) requires background checks and verification — we handle the application on your behalf. For trades that require state licensing (electrical, HVAC, plumbing, roofing), we ensure your marketing surfaces the right credentials. We don't work with unlicensed operators.",
  },
  {
    id: "fit",
    category: "Fit & qualification",
    q: "Who is and isn't a fit for Creative Core?",
    a: "Fit: Florida home service businesses doing $500K+ in annual revenue, with a working sales process (someone reliably answers the phone and closes leads), and at least $1,500/mo ready for marketing investment. Not a fit: businesses outside Florida, unlicensed operators, businesses with no existing sales process, or anyone expecting overnight results. We work best with owners who treat marketing as a system, not a slot machine.",
  },
  {
    id: "different",
    category: "Why us",
    q: "Why are you different from Hook, Blue Corona, RYNO, and the rest?",
    a: "Three things. (1) AI-augmented operating model — we ship more systems per dollar because automation amplifies our team. (2) Zero ad spend markup — our fee is for the work, not a cut of your media. Your card pays Google and Meta directly. (3) One client per niche, per county — when you sign, your competitors lose access to us and the systems we build for you. That changes how aggressively we engineer for results.",
  },
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream pt-32 pb-16 px-6 border-b border-charcoal/10">
        <SparkField color="#3a86ff" opacity={0.6} animated variant={1} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-azure-dark mb-4">
            Common questions
          </p>
          <h1
            className="font-display text-5xl md:text-7xl text-charcoal mb-6 leading-[0.95]"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Frequently asked.
          </h1>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Eight questions we hear most. If you have something else, book a call and ask.
          </p>
        </div>
      </section>

      {/* FAQ sections — alternating cream / cream-light */}
      {faqs.map((faq, i) => (
        <section
          key={faq.id}
          id={faq.id}
          className={`${i % 2 === 0 ? "bg-cream" : "bg-cream-light"} py-16 px-6 border-b border-charcoal/10`}
        >
          <div className="max-w-3xl mx-auto">
            {/* Category = metadata label → azure (secondary accent) */}
            <p className="inline-flex items-center text-xs uppercase tracking-[0.15em] text-azure-dark mb-3 font-medium px-2.5 py-1 rounded-full bg-azure-soft">
              {faq.category}
            </p>
            <h2
              className="font-display text-2xl md:text-3xl text-charcoal mb-4 leading-tight"
              style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              {faq.q}
            </h2>
            <p className="text-lg text-charcoal/80 leading-relaxed border-l-2 border-azure/30 pl-5">{faq.a}</p>
          </div>
        </section>
      ))}

      {/* Closing CTA — shared EndCTA (R7.6 Phase 6) */}
      <EndCTA
        headline="Still questions?"
        headlineAccent="Book a call."
        subhead="20 minutes. No pitch. Real answers about your county."
        secondaryCtaText="See pricing"
        secondaryCtaHref="/pricing-and-booking"
      />
    </div>
  );
};

export default FAQPage;
