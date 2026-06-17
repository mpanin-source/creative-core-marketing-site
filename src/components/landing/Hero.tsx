import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { CALENDLY_URL as CALENDLY } from "@/config/site";
import { handleCalendlyClick } from "@/lib/calendly";

// R7.6 Phase 7.5 — Typewriter rotating headline.
// Cycle through three phrases ONCE, then rest permanently on phrase 1.
// Sequence on mount:
//   1) phrase 1 already shown via SSR/initial state
//   2) initial pause
//   3) delete phrase 1
//   4) type phrase 2 → hold → delete
//   5) type phrase 3 → hold → delete
//   6) type phrase 1 → hold → REST (cursor keeps blinking)
const PHRASES = [
  "how people actually search.",
  "the way AI recommends you.",
  "booked appointments, not clicks.",
];
const TYPE_MS = 60;
const DELETE_MS = 35;
const HOLD_MS = 2200;
const INITIAL_REST_MS = 1500;

// Longest phrase reserves layout space so the H1 doesn't reflow as text changes length.
const LONGEST_PHRASE = PHRASES.reduce((a, b) => (a.length >= b.length ? a : b));

const TypewriterLine = () => {
  // Initial state = phrase 1 fully typed. If JS strips, the static HTML still reads correctly.
  const [text, setText] = useState<string>(PHRASES[0]);

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = setTimeout(resolve, ms);
        // Allow cancellation to also clear pending timeouts
        if (cancelled) clearTimeout(id);
      });

    const run = async () => {
      // Phrase 1 already shown — brief initial rest
      await sleep(INITIAL_REST_MS);
      if (cancelled) return;

      // Delete phrase 1
      for (let j = PHRASES[0].length - 1; j >= 0; j--) {
        if (cancelled) return;
        setText(PHRASES[0].slice(0, j));
        await sleep(DELETE_MS);
      }

      // Type phrase 2 → hold → delete → phrase 3 → hold → delete → phrase 1 → hold → REST
      const remaining = [1, 2, 0];
      for (let k = 0; k < remaining.length; k++) {
        const phrase = PHRASES[remaining[k]];

        // Type
        for (let j = 1; j <= phrase.length; j++) {
          if (cancelled) return;
          setText(phrase.slice(0, j));
          await sleep(TYPE_MS);
        }
        if (cancelled) return;
        await sleep(HOLD_MS);

        // Skip delete on last → permanent rest on phrase 1
        if (k === remaining.length - 1) return;

        // Delete
        for (let j = phrase.length - 1; j >= 0; j--) {
          if (cancelled) return;
          setText(phrase.slice(0, j));
          await sleep(DELETE_MS);
        }
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
      className="font-display block text-coral-dark leading-[0.95] min-h-[1.05em]"
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
          <TypewriterLine />
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
