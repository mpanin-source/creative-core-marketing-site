import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles, Wrench, TrendingUp, Crown, Search, Target, Brain, Phone, Database, DollarSign, Layers, ClipboardCheck, Calendar, FileSignature } from "lucide-react";
import DeepDive from "@/components/faq/DeepDive";
import ThreePillarEngine from "@/components/landing/ThreePillarEngine";
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

      {/* Big Three Framing — sets overarching battlegrounds before service deep-dives */}
      <ThreePillarEngine />
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
        <p><strong className="text-foreground">What you get (one-time):</strong></p>
        <ul className="space-y-2 pl-1">
          <Bullet>Custom Lovable-built website (AI-search-ready by default thanks to Lovable's May 2026 Discoverability update)</Bullet>
          <Bullet>7-day delivery</Bullet>
          <Bullet>Up to 5 pages: Home, Services, About, Contact, plus 1 service-specific landing page</Bullet>
          <Bullet>Mobile-first design with Core Web Vitals optimization</Bullet>
          <Bullet>Click-to-call functionality on every page</Bullet>
          <Bullet>Contact form with proper TCPA consent language</Bullet>
          <Bullet>Schema markup deployment (LocalBusiness + service-specific)</Bullet>
          <Bullet>Google Business Profile basics setup</Bullet>
          <Bullet>Basic SEO meta tags + Open Graph for social sharing</Bullet>
          <Bullet>Google Analytics 4 setup + Google Search Console verification</Bullet>
          <Bullet>One round of revisions during build</Bullet>
          <Bullet>Day 30 check-in call (15 min)</Bullet>
        </ul>

        <p><strong className="text-foreground">How it works:</strong></p>
        <ul className="space-y-2 pl-1">
          <Bullet>You create your own Lovable workspace</Bullet>
          <Bullet>You purchase your own domain (we recommend Cloudflare or Namecheap, ~$12–$15/year)</Bullet>
          <Bullet>We get added as collaborators to your workspace</Bullet>
          <Bullet>We build inside your workspace, in your name</Bullet>
          <Bullet>You own everything from day one</Bullet>
          <Bullet>Lovable hosting paid by you directly ($0 free tier with Lovable branding, or $20/mo Pro for custom domain)</Bullet>
        </ul>

        <p><strong className="text-foreground">What's NOT included (this is honest):</strong> Active ad management, content production, active review management, voice/SMS setup, active CRO testing, active speed-to-lead workflows. The $497 is a launch-ready website. To actively grow leads, you graduate to Foundation Sprint.</p>

        <p><strong className="text-foreground">About Lovable:</strong> Built on Lovable's enterprise-grade platform. As of May 2026, Lovable ships AI-search-ready sites by default — pre-rendering for AI crawlers (ChatGPT, Claude, Perplexity), native Semrush integration (28 billion keywords + 43 trillion backlinks dataset), and a built-in SEO Dashboard. Your site is structurally optimized for the new search landscape before we add our delivery layer on top.</p>
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
        <p><strong className="text-foreground">What it is:</strong> Your foundation tier — for businesses ready to move beyond just a website into active lead generation, optimization, and the start of GEO eligibility.</p>
        <p><strong className="text-foreground">Who it's for:</strong> Active home service businesses with some existing online presence and $1,500–$2,000/mo ready for ad spend.</p>
        <p><strong className="text-foreground">What you get:</strong></p>
        <ul className="space-y-2 pl-1">
          <Bullet><strong className="text-foreground">Local SEO foundation:</strong> Schema markup deployment, NAP consistency, citation building, on-page SEO basics, GBP setup + weekly post management</Bullet>
          <Bullet><strong className="text-foreground">SEM &amp; Paid Search:</strong> LSA setup with Google Guaranteed certification, active dispute management, Google Ads basic management, Meta ads setup</Bullet>
          <Bullet><strong className="text-foreground">GEO foundation:</strong> Schema markup making you eligible for AI Overview citations — the entry ticket to GEO</Bullet>
          <Bullet><strong className="text-foreground">Conversion foundation:</strong> Mobile-first conversion audit, Core Web Vitals optimization, CTA placement, click-to-call verification, basic form optimization, trust signal integration</Bullet>
          <Bullet><strong className="text-foreground">Review system:</strong> Automated review request flows, monitoring, response drafting, recapture campaigns</Bullet>
          <Bullet><strong className="text-foreground">Content foundation:</strong> Service-area landing pages, basic on-page content optimization</Bullet>
          <Bullet><strong className="text-foreground">Speed-to-Lead workflows:</strong> Setup in your CRM for sub-60-second response time</Bullet>
          <Bullet><strong className="text-foreground">License compliance:</strong> Florida licensing verification + advertising compliance audit</Bullet>
          <Bullet>Day 30 check-in + 60-day guarantee active</Bullet>
        </ul>
        <p><strong className="text-foreground">Outcome:</strong> Foundation built. Eligible for AI Overview citations. GEO mentions start trickling in based on baseline signals.</p>
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
        <p><strong className="text-foreground">What it is:</strong> The scaling tier — for businesses with a proven foundation, ready to push into citation velocity, content velocity, and active GEO presence.</p>
        <p><strong className="text-foreground">Who it's for:</strong> Businesses that have hit 20%+ CPL reduction in Foundation Sprint and are ready to compound.</p>
        <p><strong className="text-foreground">Adds to Foundation:</strong></p>
        <ul className="space-y-2 pl-1">
          <Bullet>Weekly content production (blog posts, GBP posts, service-area pages)</Bullet>
          <Bullet>Atomic Answer formatting on all content</Bullet>
          <Bullet>Active review velocity push (target 75+ reviews threshold)</Bullet>
          <Bullet>Sentiment optimization (keyword-coached review acquisition)</Bullet>
          <Bullet>Photo-attached review acquisition (AI vision trust signals)</Bullet>
          <Bullet>Performance Max campaign management (the 2026 sweet spot: $72 CPL avg vs $149 non-branded search)</Bullet>
          <Bullet>Meta + Google Ads advanced optimization (targeting, lookalike audiences)</Bullet>
          <Bullet>Citation velocity building (industry publications, local news, Reddit, YouTube)</Bullet>
          <Bullet>Basic entity linking (sameAs to Knowledge Graph)</Bullet>
          <Bullet>Monthly AI Visibility Reports (Google AI Overview + ChatGPT, 5 search terms tracked)</Bullet>
          <Bullet>A/B testing on top 3 conversion pages</Bullet>
          <Bullet>Heat map + session recording analysis</Bullet>
          <Bullet>Funnel drop-off analysis</Bullet>
          <Bullet>8 service-specific landing pages</Bullet>
        </ul>
        <p><strong className="text-foreground">Outcome:</strong> AI Overview citations start appearing. Citation velocity builds. Local competitors who only do SEO start losing visibility to you.</p>
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
        <p><strong className="text-foreground">What it is:</strong> Full search domination — Local SEO + SEM + GEO at maximum velocity, plus the Information Gain content engine that turns your field experience into authority signal.</p>
        <p><strong className="text-foreground">Who it's for:</strong> Businesses meeting Tier 3 qualification (5-bullet preview below; full Standard + Skip-Ahead paths in the dedicated section).</p>
        <p><strong className="text-foreground">Adds to Growth Partner:</strong></p>
        <ul className="space-y-2 pl-1">
          <Bullet><strong className="text-foreground">Information Gain content engine:</strong> original surveys, proprietary case studies, contrarian frameworks (folded in — no separate add-on fee)</Bullet>
          <Bullet>Multi-format content (YouTube long-form + shorts, Reddit threads, podcast guest spots)</Bullet>
          <Bullet>Schema 3.0 full deployment with entity linking (Knowledge Graph + Wikipedia citations + industry authority sites)</Bullet>
          <Bullet>Weekly AI Visibility Reports across 4+ platforms (Google AI Overview, ChatGPT, Claude, Perplexity)</Bullet>
          <Bullet>Citation evidence (screenshots, quoted AI responses) + competitor visibility comparison</Bullet>
          <Bullet>E-E-A-T signal optimization (turning your field experience into authority content)</Bullet>
          <Bullet>Multi-platform GEO (optimizing for ChatGPT, Claude, Perplexity, Gemini)</Bullet>
          <Bullet>AI Max migration support (rolling out September 2026)</Bullet>
          <Bullet>Personalized landing pages by traffic source</Bullet>
          <Bullet>Advanced heat map + session-recording analysis</Bullet>
          <Bullet>Conversion funnel modeling + ROI attribution across all marketing channels</Bullet>
          <Bullet>Local PR + digital mentions (industry publications, local news, chamber of commerce)</Bullet>
          <Bullet>Knowledge Graph engineering</Bullet>
        </ul>
        <p><strong className="text-foreground">Outcome:</strong> THE recommended business in your county across every major AI search surface. Local competitors invisible.</p>
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
        title="SEO FOR FLORIDA"
        titleAccent="HOME SERVICES"
        ctaLabel="See pricing"
        ctaHref="/pricing-and-booking"
      >
        <p><strong className="text-foreground">What it is:</strong> Local SEO — getting found when homeowners search "best [service] near me" on Google. Map Pack rankings, Google Business Profile, citations, and schema.</p>
        <p><strong className="text-foreground">Why it matters in 2026:</strong> The Map Pack still drives the largest share of clicks for local home-service searches. If you're not in the top 3 map results, most of your county can't find you — even if your website is great.</p>
        <p><strong className="text-foreground">What we do:</strong></p>
        <ul className="space-y-2 pl-1">
          <Bullet>Schema markup (LocalBusiness + service-specific)</Bullet>
          <Bullet>NAP consistency across the major citation directories</Bullet>
          <Bullet>Google Business Profile setup, weekly posts, Q&amp;A monitoring, photo management</Bullet>
          <Bullet>On-page basics: title tags, meta descriptions, header structure, internal linking</Bullet>
          <Bullet>Service-area landing pages for each city you serve</Bullet>
          <Bullet>Review velocity push (75+ reviews is where Map Pack rankings compound)</Bullet>
        </ul>
        <p><strong className="text-foreground">How it's bundled:</strong> Foundation Sprint installs NAP + citations + schema + GBP basics. Growth Partner adds 8 service-area pages, citation velocity, and basic entity linking. Scale Partner adds Knowledge Graph engineering, E-E-A-T optimization, and local PR.</p>
      </DeepDive>
      <Divider />

      <DeepDive
        id="sem"
        eyebrow="SERVICE DEEP-DIVE"
        icon={Target}
        title="SEM & PAID SEARCH"
        titleAccent="CONVERTING HIGH-INTENT SEARCHERS"
        alt
        ctaLabel="See pricing"
        ctaHref="/pricing-and-booking"
      >
        <p><strong className="text-foreground">What it is:</strong> Paid search — Google Local Services Ads (LSA), Google Search Ads, Performance Max, and Meta Ads. Converting homeowners who are actively shopping right now into booked appointments.</p>
        <p><strong className="text-foreground">Why it matters in 2026:</strong> Performance Max is now the dominant Google Ads campaign type for local services — averaging $72 CPL versus $149 for traditional non-branded search. AI Max migration begins September 2026 — we're already preparing client accounts for the transition.</p>
        <p><strong className="text-foreground">What we do:</strong></p>
        <ul className="space-y-2 pl-1">
          <Bullet>LSA setup + Google Guaranteed certification + active dispute management</Bullet>
          <Bullet>Google Ads management (Search, Performance Max, Demand Gen)</Bullet>
          <Bullet>Meta Ads (Facebook + Instagram, lookalike audiences, retargeting)</Bullet>
          <Bullet>5–10 ad creative variations monthly, A/B tested weekly</Bullet>
          <Bullet>Personalized landing pages by traffic source (Tier 3)</Bullet>
          <Bullet>AI Max migration support (rolling out September 2026)</Bullet>
        </ul>
        <p><strong className="text-foreground">Zero markup on ad spend:</strong> Ad accounts in your name. Spend goes directly to Google and Meta from your card. Our fee is for the work — not a percentage of your media budget.</p>
        <p><strong className="text-foreground">How it's bundled:</strong> Foundation Sprint installs LSA + Google Guaranteed and starts Meta retargeting. Growth Partner runs Performance Max and advanced Meta optimization with weekly creative testing. Scale Partner adds AI Max migration, source-personalized landing pages, and full ROI attribution across channels.</p>
      </DeepDive>
      <Divider />

      <DeepDive
        id="geo"
        eyebrow="SERVICE DEEP-DIVE"
        icon={Brain}
        title="GEO & AI SEARCH"
        titleAccent="GENERATIVE ENGINE OPTIMIZATION"
        ctaLabel="See full AI Search deep-dive"
        ctaHref="/ai-search"
      >
        <p><strong className="text-foreground">What it is:</strong> Generative Engine Optimization — engineering your business to be recommended by name inside AI search responses. Google's AI Overview, ChatGPT, Claude, Perplexity, Gemini. The new front page of search.</p>
        <p><strong className="text-foreground">Why it matters in 2026:</strong> Visitors from ChatGPT, Claude, and Perplexity convert at <strong className="text-foreground">3.49% vs 2.86%</strong> from traditional organic search — the highest-intent traffic source on the web. The agencies who own GEO capture the most qualified leads.</p>
        <p><strong className="text-foreground">What we do:</strong></p>
        <ul className="space-y-2 pl-1">
          <Bullet>Schema markup that makes you eligible for AI Overview citations</Bullet>
          <Bullet>Atomic Answer formatting on all content (the format AI systems extract from)</Bullet>
          <Bullet>Review velocity + sentiment optimization (heaviest weighted signal)</Bullet>
          <Bullet>Photo-attached reviews (AI vision trust signal)</Bullet>
          <Bullet>Citation velocity: industry publications, local news, Reddit, YouTube, podcast guest spots</Bullet>
          <Bullet>Entity linking: sameAs to Knowledge Graph + Wikipedia + industry authority sites</Bullet>
          <Bullet>Multi-platform optimization: ChatGPT, Claude, Perplexity, Gemini — not just Google</Bullet>
          <Bullet>AI Visibility Reports with screenshot evidence</Bullet>
        </ul>
        <p><strong className="text-foreground">How it's bundled:</strong> Foundation Sprint installs the schema (your entry ticket). Growth Partner adds content velocity, Atomic Answer formatting, citation velocity, and monthly reports across Google AI Overview + ChatGPT. Scale Partner runs the full Information Gain content engine, Knowledge Graph engineering, and weekly reports across all four major AI surfaces with citation evidence.</p>
      </DeepDive>
      <Divider />

      <DeepDive
        id="custom-solutions"
        eyebrow="SERVICE DEEP-DIVE"
        icon={Phone}
        title="CUSTOM SOFTWARE"
        titleAccent="SOLUTIONS"
        alt
        ctaLabel="See full pricing on Pricing"
        ctaHref="/pricing-and-booking#custom-solutions"
      >
        <p><strong className="text-foreground">What it is:</strong> Modular software add-ons that fix specific bottlenecks — available at any tier, with transparent setup + monthly pricing.</p>
        <p><strong className="text-foreground">When you need them:</strong> We diagnose during onboarding based on your data. If your lead response is slow, your CRM has dead leads sitting in it, or your review velocity is stalled — we deploy the specific fix. We don't bundle these by default.</p>
        <p><strong className="text-foreground">The four solutions:</strong></p>
        <ul className="space-y-2 pl-1">
          <Bullet><strong className="text-foreground">Voice/SMS — Standard ($750 setup + $500/mo):</strong> 10DLC registration, voice AI configuration, missed-call text-back, after-hours coverage, consent compliance. Most clients capture 30–40% more appointments by closing the after-hours gap.</Bullet>
          <Bullet><strong className="text-foreground">Voice/SMS — Premium ($1,500 setup + $750/mo):</strong> Custom-trained voice AI with multi-language support and complex booking flows. For high-volume operations.</Bullet>
          <Bullet><strong className="text-foreground">CRM Nurture ($750 setup + $500/mo):</strong> Automated sequences that re-engage cold leads sitting in your existing customer list.</Bullet>
          <Bullet><strong className="text-foreground">Review Acquisition ($750 setup + $500/mo):</strong> Automated review requests + response management. Builds the review velocity and sentiment GEO weights heaviest.</Bullet>
        </ul>
        <p><strong className="text-foreground">Pattern:</strong> Pay only for what fixes your actual bottleneck. Every solution is data-driven, not feature-dumped.</p>
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
        id="crm-strategy"
        eyebrow="HOW WE HANDLE YOUR CRM"
        icon={Database}
        title="WHAT ABOUT MY"
        titleAccent="EXISTING CRM?"
        alt
      >
        <p>Three scenarios:</p>
        <p><strong className="text-foreground">Scenario A — You already have a CRM that works</strong> (HubSpot, Salesforce, Pipedrive, ServiceTitan, Housecall Pro): We integrate GoHighLevel as your marketing layer alongside your existing CRM. Your data stays where it is. Zapier or Make.com bridges the systems. We don't force migrations.</p>
        <p><strong className="text-foreground">Scenario B — You have spreadsheets or no CRM:</strong> We set you up on GoHighLevel as part of Foundation Sprint onboarding. Free data migration from your spreadsheet. No separate fee.</p>
        <p><strong className="text-foreground">Scenario C — Your existing CRM is broken or you need a full migration:</strong> We quote separately as a Data Migration Service ($500–1,500 one-time). Most clients don't need this.</p>
        <p className="text-foreground font-semibold pt-2">Your CRM, your tools, your decision. We integrate. We don't force migrations.</p>
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
