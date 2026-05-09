import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles, Wrench, TrendingUp, Crown, Search, Brain, Phone, DollarSign, Layers, ClipboardCheck, Calendar, FileSignature } from "lucide-react";
import DeepDive from "@/components/faq/DeepDive";
import FAQSection from "@/components/landing/FAQSection";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const Divider = () => <div className="section-divider-gradient" />;

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span className="text-electric mt-1">✓</span>
    <span className="text-foreground">{children}</span>
  </li>
);

const FAQHero = () => (
  <section className="px-6 py-32 md:px-8 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
    </div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-electric"
      >
        EVERYTHING YOU WANT TO KNOW
      </motion.p>
      <motion.h1
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground uppercase mb-6 leading-[0.95]"
        style={{ fontWeight: 900 }}
      >
        OUR SERVICES, <span className="italic text-shimmer-blue">EXPLAINED</span>
      </motion.h1>
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
      >
        How our services work. How our pricing works. How we win for Florida home services.
      </motion.p>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="px-6 py-32 md:px-8 section-alt">
    <div className="max-w-3xl mx-auto text-center">
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-5"
        style={{ fontWeight: 900 }}
      >
        STILL HAVE <span className="italic text-shimmer-blue">QUESTIONS?</span>
      </motion.h2>
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto"
      >
        Book a 15-minute strategy call. We'll review your situation, identify where leads are leaking, and map out which path makes sense for your business.
      </motion.p>
      <Link
        to="/pricing-and-booking#contact"
        className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
      >
        Book Strategy Call
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  </section>
);

const FAQPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle navigate('/faq', { state: { scrollTo: 'id' } })
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const id = state.scrollTo;
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  // Handle direct hash links (/faq#anchor)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    }
  }, [location.hash]);

  return (
    <>
      <FAQHero />
      <Divider />

      {/* SERVICE DEEP-DIVES */}
      <DeepDive
        id="gateway"
        eyebrow="SERVICE DEEP-DIVE"
        icon={Sparkles}
        title="$497 LAUNCH-READY"
        titleAccent="WEBSITE"
        ctaLabel="See full Gateway details on Pricing"
        ctaHref="/pricing-and-booking#gateway"
      >
        <p><strong className="text-foreground">What it is:</strong> A custom-built, mobile-first, conversion-optimized website built in 7 days. The fastest way to stop losing leads to a broken site.</p>
        <p><strong className="text-foreground">Who it's for:</strong> The entry point for new clients. Anyone whose current website is killing conversion or who wants a fast, professional site without locking into an agency retainer.</p>
        <p><strong className="text-foreground">What's included:</strong> Custom design, mobile-first build, conversion-optimized hero + offer + lead form, basic SEO foundation (titles, meta, schema), Google Analytics + call tracking install, hosted on your domain.</p>
        <p><strong className="text-foreground">Timeline:</strong> 7 days from kickoff to launch.</p>
        <p><strong className="text-foreground">Yours to keep:</strong> Even if you don't continue to a tier. The site lives on your domain. You own it.</p>
      </DeepDive>
      <Divider />

      <DeepDive
        id="foundation-sprint"
        eyebrow="SERVICE DEEP-DIVE"
        icon={Wrench}
        title="FOUNDATION SPRINT"
        titleAccent="$1,500/MO"
        alt
        ctaLabel="See Foundation Sprint pricing"
        ctaHref="/pricing-and-booking#foundation"
      >
        <p><strong className="text-foreground">What it is:</strong> Your foundation tier — for businesses ready to move beyond just a website into active lead generation and optimization.</p>
        <p><strong className="text-foreground">Who it's for:</strong> Active home service businesses with some existing online presence and $1,500–$2,000/mo ready for ad spend.</p>
        <p><strong className="text-foreground">What's included:</strong></p>
        <ul className="space-y-2 pl-1">
          <Bullet>Complete marketing audit (15-min Loom)</Bullet>
          <Bullet>Google Local Services Ads setup + Google Guaranteed verification</Bullet>
          <Bullet>Google Business Profile optimization + review generation</Bullet>
          <Bullet>Conversion-optimized residential landing page</Bullet>
          <Bullet>Call tracking + full attribution setup</Bullet>
          <Bullet>Meta retargeting pixel + initial campaign</Bullet>
          <Bullet>Bi-weekly performance reporting</Bullet>
        </ul>
        <p><strong className="text-foreground">First 60 days:</strong> Install foundation, kill losing creative, scale winners. Goal: 20%+ CPL reduction or 25%+ booked-appointment growth.</p>
      </DeepDive>
      <Divider />

      <DeepDive
        id="growth-partner"
        eyebrow="SERVICE DEEP-DIVE"
        icon={TrendingUp}
        title="GROWTH PARTNER"
        titleAccent="$3,000/MO"
        ctaLabel="See Growth Partner pricing"
        ctaHref="/pricing-and-booking#growth"
      >
        <p><strong className="text-foreground">What it is:</strong> The scaling tier — for businesses ready to dominate their county.</p>
        <p><strong className="text-foreground">Who it's for:</strong> Businesses with a proven sales process and ready to invest in scale.</p>
        <p><strong className="text-foreground">What's included:</strong> Everything in Foundation, plus content production, AI Search foundation work, advanced LSA optimization, Google Search PPC, Meta ads (Facebook + Instagram), 5–10 ad creative variations monthly, A/B tested landing variants, CRM drip campaigns, and Neighborhood Penetration geo-targeting.</p>
        <p><strong className="text-foreground">Expected outcomes:</strong> Compounding lead volume month over month, lower CPL through creative iteration, calendar packed with qualified appointments.</p>
      </DeepDive>
      <Divider />

      <DeepDive
        id="scale-partner"
        eyebrow="SERVICE DEEP-DIVE"
        icon={Crown}
        title="SCALE PARTNER"
        titleAccent="$5,000/MO"
        alt
        ctaLabel="See Scale Partner pricing"
        ctaHref="/pricing-and-booking#scale"
      >
        <p><strong className="text-foreground">What it is:</strong> Full multi-channel domination tier with the complete AI Search Domination stack.</p>
        <p><strong className="text-foreground">Who it's for:</strong> Businesses meeting Tier 3 qualification (full details on the Pricing page accordion + below).</p>
        <p><strong className="text-foreground">What's included:</strong> Everything in Growth Partner, plus AI Voice + SMS fully integrated into CRM, social media management, sales call analysis + systematic fix recommendations, dedicated Slack channel (same-day responses), monthly strategy intensive.</p>
        <p><strong className="text-foreground">Tier 3 qualification (5-bullet preview):</strong></p>
        <ul className="space-y-2 pl-1">
          <Bullet>50+ Google reviews at 4.5+ stars</Bullet>
          <Bullet>15+ qualified appointments/month</Bullet>
          <Bullet>Functional sales process (25%+ close rate)</Bullet>
          <Bullet>Willingness to produce 4 pieces of content/month</Bullet>
          <Bullet>6-month minimum engagement</Bullet>
        </ul>
        <p className="italic text-sm">Full Standard Path + Skip-Ahead Path requirements live in the <a href="#tier-3-qualification" className="text-electric font-semibold hover:underline">Tier 3 Qualification section below</a>.</p>
      </DeepDive>
      <Divider />

      <DeepDive
        id="seo"
        eyebrow="SERVICE DEEP-DIVE"
        icon={Search}
        title="HOW WE APPROACH SEO"
        titleAccent="FOR FLORIDA HOME SERVICES"
        ctaLabel="See pricing"
        ctaHref="/pricing-and-booking"
      >
        <p><strong className="text-foreground">The traditional SEO problem:</strong> Most agencies still optimize for keywords nobody searches anymore. They publish thin "best [service] in [city]" pages and call it a day, then wonder why rankings stall.</p>
        <p><strong className="text-foreground">How we approach it differently:</strong> Semantic relevance over keyword stuffing. Schema markup so Google's AI actually understands your business. Content velocity that signals authority. Real answers to real questions homeowners ask.</p>
        <p><strong className="text-foreground">Why it matters more in 2026:</strong> Google's AI Overview is rewriting search. Whoever feeds the AI the cleanest signals wins free top-of-page mentions — above paid ads, above organic results.</p>
        <p><strong className="text-foreground">How it's bundled:</strong> Foundation Sprint installs the schema + GBP base. Growth Partner adds content velocity. Scale Partner adds the full AI Search Domination stack.</p>
      </DeepDive>
      <Divider />

      <DeepDive
        id="sge"
        eyebrow="SERVICE DEEP-DIVE"
        icon={Brain}
        title="AI SEARCH DOMINATION"
        titleAccent="EXPLAINED"
        alt
        ctaLabel="See full AI Search deep-dive"
        ctaHref="/ai-search"
      >
        <p><strong className="text-foreground">What SGE / Google's AI Overview is:</strong> When a homeowner searches "best HVAC near me," Google now generates an AI summary at the top of the page that recommends businesses by name. Most searchers never scroll past it.</p>
        <p><strong className="text-foreground">Why it matters for local home services:</strong> The AI Overview is the new front page. Whoever it mentions wins the customer for $0 in clicks.</p>
        <p><strong className="text-foreground">The signals Google AI uses:</strong> Verified Google Business Profile, review velocity + sentiment, schema markup, content velocity, YouTube presence, Reddit + external mentions, semantic relevance. (Full breakdown on our <Link to="/ai-search" className="text-electric font-semibold hover:underline">AI Search page</Link>.)</p>
        <p><strong className="text-foreground">How we feed those signals across all tiers:</strong> Foundation Sprint installs the basics. Growth Partner adds content. Scale Partner runs the full domination stack — YouTube, Reddit, weekly position monitoring.</p>
      </DeepDive>
      <Divider />

      <DeepDive
        id="voice-sms"
        eyebrow="SERVICE DEEP-DIVE"
        icon={Phone}
        title="AUTOMATED VOICE"
        titleAccent="& SMS"
        ctaLabel="See custom solutions on Pricing"
        ctaHref="/pricing-and-booking#custom-solutions"
      >
        <p><strong className="text-foreground">What it is:</strong> AI agents that answer your phone, qualify leads, and send SMS sequences — built on real generative AI, not template scripts.</p>
        <p><strong className="text-foreground">When you need it:</strong> If your data shows lead-response delays killing conversion, if you're working in the field and can't take calls, or if your CRM shows cold leads going untouched.</p>
        <p><strong className="text-foreground">How it works:</strong> The agent answers in your brand voice, qualifies the lead, books the appointment in your calendar, and texts the homeowner a confirmation — all in under 30 seconds.</p>
        <p><strong className="text-foreground">Why it's a Custom Solution:</strong> We don't bundle it into tiers because not every business needs it. We diagnose during onboarding and offer it only if your data proves the bottleneck is real.</p>
      </DeepDive>
      <Divider />

      {/* PRICING & PROCESS DEEP-DIVES */}
      <DeepDive
        id="zero-markup"
        eyebrow="HOW OUR PRICING WORKS"
        icon={DollarSign}
        title="ZERO MARKUP ON"
        titleAccent="AD SPEND"
        alt
      >
        <p>This is the part most agencies hide: when you pay your current agency $3,000/month, they typically take 10–25% as "ad management fees" on top of your ad spend, then keep what's left after running ads.</p>
        <p>Creative Core works differently. Our tier pricing is what you pay <strong className="text-foreground">us</strong> for the <strong className="text-foreground">work</strong>. Your ad spend goes directly to Google and Meta from <strong className="text-foreground">your</strong> credit card on <strong className="text-foreground">your</strong> ad accounts. We never touch the money.</p>
        <ul className="space-y-2 pl-1">
          <Bullet>Monthly fee charged: $1,500–$5,000 (vs. ~$3,000 typical)</Bullet>
          <Bullet>What you control: Your ad accounts directly (vs. their dashboard)</Bullet>
          <Bullet>Markup on ad spend: Zero (vs. 10–25% added)</Bullet>
          <Bullet>Where ad spend goes: Direct to Google/Meta from yours (vs. through their account)</Bullet>
          <Bullet>Ad spend visibility: Real-time, full access (vs. "trust the report")</Bullet>
        </ul>
        <p className="text-foreground font-semibold pt-2">Our fee is 100% for the work we do. Your ad budget is 100% your ad budget.</p>
      </DeepDive>
      <Divider />

      <DeepDive
        id="cost-comparison"
        eyebrow="WHY WE CAN CHARGE LESS"
        icon={Layers}
        title="WHY OTHER AGENCIES CHARGE"
        titleAccent="$5K–$10K"
      >
        <p>Most home service marketing agencies charge $5,000–$10,000/month because they're paying a 4–5 person team to manually run A/B tests, write content, optimize bids, build schema, and track signals. Humans clicking buttons. Humans missing details.</p>
        <p>We've built AI agent infrastructure that catches the things humans miss — the low-quality keywords bleeding budget, the underperforming ad variants nobody noticed, the response-time gaps that lose leads. Our team uses AI to monitor every campaign continuously and act on data the moment it's actionable.</p>
        <ul className="space-y-2 pl-1">
          <Bullet>Premium agencies (RYNO, Blue Corona): $5,000–$10,000/mo — full team, manual optimization, monthly reviews</Bullet>
          <Bullet>Mid-tier local agencies: $2,500–$5,000/mo — limited content, basic SEO, bi-weekly check-ins</Bullet>
          <Bullet>Set-and-forget agencies: $1,000–$2,000/mo — GBP only, no content, quarterly reports</Bullet>
          <Bullet><span className="text-electric font-semibold">Creative Core: $1,500–$5,000/mo — AI-monitored optimization, continuous testing, real-time signal feeding</span></Bullet>
        </ul>
        <p className="italic">Same outcomes other agencies charge $5K–$10K for. Different infrastructure. That's the leverage.</p>
      </DeepDive>
      <Divider />

      <DeepDive
        id="tier-3-qualification"
        eyebrow="QUALIFICATION"
        icon={ClipboardCheck}
        title="TIER 3 SCALE PARTNER"
        titleAccent="QUALIFICATION"
        alt
      >
        <p>Tier 3 work compounds over 90–180 days. We require qualification because we need businesses with the foundation to support it. You qualify if you meet either path:</p>

        <p className="text-foreground font-display uppercase pt-2" style={{ fontWeight: 700 }}>Standard Path (after 60 days at Tier 2)</p>
        <ul className="space-y-2 pl-1">
          <Bullet>Verified Google Business Profile with 50+ reviews at 4.5+ stars</Bullet>
          <Bullet>3–5 reviews in last 90 days (recency matters)</Bullet>
          <Bullet>Functional mobile-responsive website</Bullet>
          <Bullet>Currently servicing 15+ qualified appointments/month</Bullet>
          <Bullet>Sales close rate at minimum 25%</Bullet>
          <Bullet>60+ days at Tier 2 with us with 20%+ CPL reduction achieved</Bullet>
          <Bullet>Willing to produce/approve 4 pieces of content/month</Bullet>
          <Bullet>6-month minimum commitment</Bullet>
        </ul>

        <p className="text-foreground font-display uppercase pt-2" style={{ fontWeight: 700 }}>Skip-Ahead Path (bypass Tier 2)</p>
        <ul className="space-y-2 pl-1">
          <Bullet>75+ Google reviews at 4.5+ stars</Bullet>
          <Bullet>Active LSA with Google Guaranteed badge</Bullet>
          <Bullet>Existing schema markup deployed</Bullet>
          <Bullet>Active GBP (services, photos, weekly posts)</Bullet>
          <Bullet>60-day baseline metrics available</Bullet>
          <Bullet>Functional CRM with lead tracking</Bullet>
          <Bullet>20+ booked appointments/month consistently</Bullet>
          <Bullet>3+ existing pieces of content (blogs, videos)</Bullet>
          <Bullet>Service-area pages for at least 3 specific cities</Bullet>
        </ul>

        <p className="italic pt-2">Don't qualify yet? Foundation Sprint ($1,500/mo) gets you ready in 60–90 days. Growth Partner ($3,000/mo) builds you to qualification in 90–120 days.</p>
      </DeepDive>
      <Divider />

      <DeepDive
        id="onboarding"
        eyebrow="THE PROCESS"
        icon={Calendar}
        title="WHAT HAPPENS"
        titleAccent="AFTER YOU SIGN"
      >
        <p><strong className="text-foreground">Day 1–7:</strong> Kickoff call, baseline data collection, ad account access handoff, GBP audit, initial setup of call tracking + analytics. Baseline metrics confirmed in writing within 7 days.</p>
        <p><strong className="text-foreground">Day 8–30:</strong> Foundation work. LSA setup + Google Guaranteed verification, landing page build, GBP optimization, first ad creative live, initial reporting cadence established.</p>
        <p><strong className="text-foreground">Day 30–60:</strong> Mid-trial review. We kill losing creative, scale winners, document what's working and what isn't. By Day 60 you have a documented decision: continue, upsell, or walk away with everything we built.</p>
      </DeepDive>
      <Divider />

      <DeepDive
        id="baseline-data"
        eyebrow="THE PROCESS"
        icon={FileSignature}
        title="THE 7-DAY"
        titleAccent="BASELINE DATA CLAUSE"
        alt
      >
        <p><strong className="text-foreground">What we need from you in writing within 7 days:</strong> Your current cost-per-lead, current monthly booked appointments, current ad spend, and current close rate. If we don't have it, we'll help you pull it from your accounts.</p>
        <p><strong className="text-foreground">Why we need it:</strong> So we both know exactly what success looks like. The 60-day guarantee is measured against this number.</p>
        <p><strong className="text-foreground">What protects you:</strong> No moving goalposts. The number you confirm in week 1 is the number we beat in week 8.</p>
        <p><strong className="text-foreground">What protects us:</strong> No claiming, after the fact, that the success metrics weren't set. The agreement is in writing.</p>
      </DeepDive>
      <Divider />

      <DeepDive
        id="day-60"
        eyebrow="THE PROCESS"
        icon={Calendar}
        title="WHAT HAPPENS"
        titleAccent="AT DAY 60"
      >
        <p><strong className="text-foreground">90-Day Growth Roadmap:</strong> We deliver your custom roadmap based on 60 days of real data — exactly what to scale, what to kill, and what to test next.</p>
        <p><strong className="text-foreground">You choose your tier:</strong> Upgrade to Growth Partner ($3,000/mo), stay at Foundation baseline ($2,000/mo), or walk away and keep everything we built. We hop on a 30-min strategy call to walk through the data together.</p>
        <p><strong className="text-foreground">Card on file, no auto-lock:</strong> We keep a card on file for seamless continuation — cancel anytime with 7 days notice. No contracts. No games.</p>
      </DeepDive>
      <Divider />

      {/* GENERAL FAQ */}
      <div id="general-faq" className="scroll-mt-24">
        <FAQSection />
      </div>
      <Divider />

      <FinalCTA />
    </>
  );
};

export default FAQPage;
