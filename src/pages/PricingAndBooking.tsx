import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight, Shield, MapPin } from "lucide-react";
import GatewayOffer from "@/components/landing/GatewayOffer";
import SprintEngine from "@/components/landing/SprintEngine";
import PricingTiers from "@/components/landing/PricingTiers";
import BeyondRetainer from "@/components/pricing/BeyondRetainer";
import ContactForm from "@/components/landing/ContactForm";
import EndCTA from "@/components/shared/EndCTA";

const CALENDLY = "https://calendly.com/paninmax2002/strategy-call";

// R7.6 — Single-phrase typewriter on the pricing hero, same look as the homepage.
// Types "starting point." once on mount, then rests with cursor blinking.
const PRICING_TYPED = "starting point.";
const PRICING_TYPE_MS = 60;
const PRICING_INITIAL_DELAY = 400;

const PricingTypewriter = () => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => setTimeout(resolve, ms));

    const run = async () => {
      await sleep(PRICING_INITIAL_DELAY);
      if (cancelled) return;

      for (let i = 1; i <= PRICING_TYPED.length; i++) {
        if (cancelled) return;
        setText(PRICING_TYPED.slice(0, i));
        await sleep(PRICING_TYPE_MS);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <span
      aria-hidden="true"
      className="font-display inline-block text-coral-dark align-baseline"
    >
      {text}
      <span
        aria-hidden="true"
        className="typewriter-cursor inline-block text-coral-dark"
        style={{ marginLeft: "0.05em" }}
      >
        _
      </span>
    </span>
  );
};

// R7.6 Phase 7: Hero with compressed 60-day guarantee pill replacing the standalone GuaranteeSection.
const PricingHero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="bg-cream-light pt-32 md:pt-36 pb-20 md:pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-4">
          Transparent pricing
        </p>
        <h1
          className="font-display text-5xl md:text-7xl text-charcoal mb-6 leading-[0.95] max-w-4xl"
          style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          aria-label="Pick your starting point."
        >
          <span aria-hidden="true" className="font-display">Pick your </span>
          <PricingTypewriter />
        </h1>
        <p className="text-lg text-charcoal/80 max-w-2xl mb-8 leading-relaxed">
          $497 to start. $1,500/mo to scale. Month-to-month after a 60-day trial.
          You pay Google and Meta directly — zero markup, zero affiliate kickbacks.
        </p>

        {/* Compressed 60-day guarantee — pill + one-liner */}
        <div className="inline-flex items-start gap-3 bg-white rounded-lg px-5 py-4 border border-charcoal/10 mb-10 max-w-2xl">
          <Shield className="w-5 h-5 text-coral-dark flex-shrink-0 mt-0.5" />
          <p className="text-sm text-charcoal/80 leading-relaxed">
            <span className="font-semibold text-charcoal">60-day No-BS Guarantee:</span>{" "}
            20% CPL reduction or 25% appointment growth — or you walk away and keep everything we built.
            <Link to="/faq#guarantee" className="text-coral-dark font-medium hover:underline ml-1">
              How it works →
            </Link>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollTo("pricing")}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-coral hover:bg-coral-dark text-white font-medium transition-colors"
          >
            See the tiers
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-md border-2 border-charcoal/40 text-charcoal hover:bg-charcoal/5 font-medium transition-colors"
          >
            Book a strategy call
          </a>
        </div>
      </div>
    </section>
  );
};

// R7.6 Phase 7: compressed territory exclusivity — single callout block, no full section.
const TerritoryCallout = () => (
  <section className="bg-cream py-16 px-6">
    <div className="max-w-3xl mx-auto">
      <div className="bg-coral-soft rounded-xl p-7 md:p-8 border border-coral-dark/15 flex items-start gap-4">
        <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center flex-shrink-0">
          <MapPin className="w-5 h-5 text-coral-dark" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-2">
            Territory exclusive
          </p>
          <p className="text-base md:text-lg text-charcoal leading-relaxed">
            <span className="font-semibold">One client per niche, per county.</span>{" "}
            When your spot is taken, your competitors lose access to us — and the systems we build for you.
            Florida home services only. Currently accepting three clients per county per niche.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const PricingAndBooking = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-cream">
      <PricingHero />
      <PricingTiers />
      <SprintEngine />
      <GatewayOffer />
      <BeyondRetainer />
      <TerritoryCallout />
      <ContactForm />
      <EndCTA
        headline="Still deciding?"
        headlineAccent="Book a call."
        subhead="20 minutes. No pitch. An honest map of which tier fits where you are."
        secondaryCtaText="See FAQ"
        secondaryCtaHref="/faq"
      />
    </div>
  );
};

export default PricingAndBooking;
