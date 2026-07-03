import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { GlowOrb } from "@/components/cobalt-refresh/patterns";

interface Step {
  number: string;
  title: string;
  duration: string;
  body: string;
  outcome: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Diagnose",
    duration: "20 min",
    body: "Free strategy call. We audit your current funnel, identify the highest-leverage gaps, and confirm fit before any money changes hands.",
    outcome: "You walk away with a working hypothesis — even if we never work together.",
  },
  {
    number: "02",
    title: "Deploy",
    duration: "7–60 days",
    body: "Foundation laid in week 1. LSA + Google Verified certified. Schema deployed. GBP weaponized. Ads launched. Speed-to-lead workflows live.",
    outcome: "Production systems running, not slide decks. Day 30 check-in confirms early signal.",
  },
  {
    number: "03",
    title: "Scale",
    duration: "Monthly",
    body: "Performance reviewed against your numbers. Optimization decisions made from real data. New systems deployed as the opportunities surface.",
    outcome: "Compound growth across all six systems. Month-to-month. You stay because results.",
  },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="relative overflow-x-clip bg-cream py-24 px-6">
      <GlowOrb color="#3a86ff" opacity={0.35} size={800} top="-5%" left="105%" animated />
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-6">
          07 · How we work
        </p>
        <h2
          className="font-display text-4xl md:text-6xl mb-6 max-w-4xl leading-tight"
          style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          <span className="font-display block text-charcoal leading-[1.0]">Diagnose.</span>
          <span className="font-display block text-coral-dark leading-[1.0]">Deploy.</span>
          <span className="font-display block text-charcoal leading-[1.0]">Scale.</span>
        </h2>
        <p className="text-lg text-charcoal/70 mb-16 max-w-2xl leading-relaxed">
          Three phases. First one is free. Second one ships production systems. Third one compounds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-lg p-8 border border-charcoal/10 flex flex-col"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span
                  className="font-display text-coral-dark text-7xl leading-none"
                  style={{ fontWeight: 700 }}
                >
                  {step.number}
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-dark font-medium">
                  {step.duration}
                </span>
              </div>
              <h3
                className="font-display text-3xl text-charcoal mb-4 leading-tight"
                style={{ fontWeight: 700 }}
              >
                {step.title}
              </h3>
              <p className="text-base text-charcoal/70 leading-relaxed mb-6 flex-1">{step.body}</p>
              <div className="bg-cream-light rounded-md p-4 border-l-4 border-coral">
                <p className="text-xs uppercase tracking-wider text-coral-dark font-medium mb-2">
                  Outcome
                </p>
                <p className="text-sm text-charcoal/80 leading-relaxed">{step.outcome}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/process"
          className="inline-flex items-center gap-2 text-coral hover:text-coral-dark font-medium text-sm transition-colors"
        >
          See the full process
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default HowWeWork;
