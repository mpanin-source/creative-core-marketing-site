import { ArrowRight } from "lucide-react";

import { CALENDLY_URL as CALENDLY } from "@/config/site";
import { handleCalendlyClick } from "@/lib/calendly";
import TypewriterText from "@/components/shared/TypewriterText";

const PHRASES = [
  "how people actually search.",
  "the way AI recommends you.",
  "booked appointments, not clicks.",
  "the era of LLM-powered search.",
];
const COLORS = ["text-coral-dark", "text-azure-dark"];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] bg-cream overflow-hidden">
      {/* Subtle paper-grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-[1500px] mx-auto px-6 pt-32 pb-24 min-h-[85vh] flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-charcoal/20 w-fit mb-8">
          <span className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark">
            01 · Why now
          </span>
        </div>

        <h1
          className="font-display text-5xl md:text-7xl xl:text-8xl mb-8 max-w-[1500px] leading-[0.95]"
          style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          aria-label="Marketing built for how people actually search."
        >
          <span
            aria-hidden="true"
            className="font-display block text-charcoal mb-2 leading-[0.95]"
          >
            Marketing built for
          </span>
          <TypewriterText
            phrases={PHRASES}
            colors={COLORS}
            className="font-display block leading-[0.95] min-h-[1.05em]"
          />

        </h1>

        <p className="text-lg md:text-xl text-charcoal/80 max-w-2xl mb-10 leading-relaxed">
          AI-augmented marketing for Florida home services. Six systems, working together — built on a conversion foundation that turns every dollar into measurable appointments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCalendlyClick}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-coral hover:bg-coral-dark text-white font-medium transition-colors"
          >
            Book a strategy call
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#new-battlefield"
            className="inline-flex items-center justify-center px-7 py-4 rounded-md border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream font-medium transition-colors"
          >
            See how it works
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-charcoal/10 flex flex-wrap items-baseline gap-x-8 gap-y-2">
          <span className="text-xs uppercase tracking-wider text-muted-dark font-medium">
            Trusted by
          </span>
          <span className="text-sm text-charcoal/60">
            Florida-licensed home service businesses
          </span>
          <span className="text-sm text-charcoal/60">
            • Sarasota, Manatee, Bradenton, and beyond
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
