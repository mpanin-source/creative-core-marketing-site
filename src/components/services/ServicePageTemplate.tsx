import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import EndCTA from "@/components/shared/EndCTA";

const CALENDLY = "https://calendly.com/paninmax2002/strategy-call";

interface FAQItem {
  q: string;
  a: string;
}

interface Capability {
  number: string;
  title: string;
  description: string;
}

interface RelatedService {
  slug: string;
  label: string;
  tagline: string;
}

const ALL_SERVICES: RelatedService[] = [
  { slug: "seo", label: "SEO", tagline: "Rank where your county is searching." },
  { slug: "sem", label: "SEM & Paid Search", tagline: "Convert intent into appointments." },
  { slug: "geo", label: "GEO & AI Search", tagline: "Get recommended by AI before they search." },
  { slug: "cro", label: "CRO", tagline: "Make every visit count." },
  { slug: "marketing-automation", label: "Marketing Automation", tagline: "Stop doing manual marketing." },
  { slug: "custom-software", label: "Custom Software", tagline: "Fix what your funnel can't." },
];

export interface ServicePageTemplateProps {
  /** Used to filter out the current service from "Related services". E.g. "seo". */
  currentSlug?: string;

  // Hero
  heroEyebrow: string;
  heroTitle: string;
  heroSubhead: string;

  // Contrarian hook
  contrarianEyebrow?: string;
  contrarianTitle: string;
  contrarianBody: string[];
  pullQuote: string;

  // Capabilities
  capabilitiesEyebrow?: string;
  capabilitiesTitle: string;
  capabilities: Capability[];

  // What's Included
  includedEyebrow?: string;
  includedTitle: string;
  included: string[];

  // FAQ
  faqsEyebrow?: string;
  faqsTitle?: string;
  faqs: FAQItem[];

  // Closing
  closingTitle: string;
}

const ServicePageTemplate = (props: ServicePageTemplateProps) => {
  const related = ALL_SERVICES.filter((s) => s.slug !== props.currentSlug);

  return (
    <div className="min-h-screen bg-cream">
      {/* 1. Hero — cream-light (R7.6: flipped from bg-forest so transparent Header at scrollY=0 stays readable) */}
      <section className="bg-cream-light pt-32 md:pt-36 pb-24 md:pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-4">
            {props.heroEyebrow}
          </p>
          <h1
            className="font-display text-5xl md:text-7xl text-charcoal mb-6 leading-[0.95] max-w-4xl"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            {props.heroTitle}
          </h1>
          <p className="text-lg text-charcoal/80 max-w-2xl mb-10 leading-relaxed">
            {props.heroSubhead}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-md bg-coral hover:bg-coral-dark text-white font-medium transition-colors"
            >
              Book a strategy call
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/pricing-and-booking"
              className="inline-flex items-center justify-center px-7 py-3 rounded-md border-2 border-charcoal/40 text-charcoal hover:bg-charcoal/5 font-medium transition-colors"
            >
              From $1,500/month
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Contrarian hook — cream */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-4">
            {props.contrarianEyebrow ?? "The AI advantage"}
          </p>
          <h2
            className="font-display text-3xl md:text-5xl text-charcoal mb-8 leading-[0.95]"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            {props.contrarianTitle}
          </h2>
          {props.contrarianBody.map((p, i) => (
            <p key={i} className="text-lg text-charcoal/70 mb-6 leading-relaxed">
              {p}
            </p>
          ))}
          <div className="border-l-4 border-coral pl-6 my-10">
            <p
              className="font-display text-2xl md:text-3xl text-charcoal italic leading-snug"
              style={{ fontWeight: 700 }}
            >
              &ldquo;{props.pullQuote}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 3. Capabilities — cream */}
      <section className="bg-cream pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-4">
            {props.capabilitiesEyebrow ?? "Capabilities"}
          </p>
          <h2
            className="font-display text-3xl md:text-5xl text-charcoal mb-12 leading-[0.95]"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            {props.capabilitiesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {props.capabilities.map((c) => (
              <div
                key={c.number}
                className="bg-white rounded-lg p-6 border border-charcoal/10 flex flex-col"
              >
                <span
                  className="font-display text-coral-dark text-3xl block mb-3 leading-none"
                  style={{ fontWeight: 700 }}
                >
                  {c.number}
                </span>
                <h3 className="font-display text-xl text-charcoal mb-3 leading-tight" style={{ fontWeight: 700 }}>
                  {c.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What's Included — forest */}
      <section className="bg-forest py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-4">
            {props.includedEyebrow ?? "What's included"}
          </p>
          <h2
            className="font-display text-3xl md:text-5xl text-cream mb-10 leading-[0.95]"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            {props.includedTitle}
          </h2>
          <ul className="space-y-3">
            {props.included.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-1 text-coral" />
                <span className="text-base text-cream leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. FAQ — cream-light */}
      <section className="bg-cream-light py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-4">
            {props.faqsEyebrow ?? "Common questions"}
          </p>
          <h2
            className="font-display text-3xl md:text-5xl text-charcoal mb-10 leading-[0.95]"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            {props.faqsTitle ?? "Frequently asked."}
          </h2>
          <div className="space-y-4">
            {props.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 md:p-7 border border-charcoal/10">
                <h3 className="font-display text-lg md:text-xl text-charcoal mb-3" style={{ fontWeight: 700 }}>
                  {faq.q}
                </h3>
                <p className="text-base text-charcoal/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Related services — cream */}
      {related.length > 0 && (
        <section className="bg-cream py-20 px-6 border-t border-charcoal/10">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-4">
              More services
            </p>
            <h2
              className="font-display text-2xl md:text-3xl text-charcoal mb-10 leading-tight"
              style={{ fontWeight: 700 }}
            >
              Built to work together.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group bg-white rounded-lg p-5 border border-charcoal/10 hover:border-coral/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-display text-lg text-charcoal" style={{ fontWeight: 700 }}>
                      {s.label}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-charcoal/40 group-hover:text-coral transition-colors" />
                  </div>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{s.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Closing CTA — shared EndCTA (R7.6 Phase 6) */}
      <EndCTA
        headline={props.closingTitle}
        subhead="Month-to-month engagements starting at $1,500/mo. The strategy call is free."
        secondaryCtaText="See pricing"
        secondaryCtaHref="/pricing-and-booking"
      />
    </div>
  );
};

export default ServicePageTemplate;
