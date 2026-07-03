import { X } from "lucide-react";
import SoundFamiliar from "@/components/landing/SoundFamiliar";
import SignalMap from "@/components/landing/SignalMap";
import StrategyEvolves from "@/components/landing/StrategyEvolves";
import EndCTA from "@/components/shared/EndCTA";
import { ContourBg, GlowOrb, SparkField, OrbitRings } from "@/components/cobalt-refresh/patterns";

interface Step {
  number: string;
  phase: string;
  duration: string;
  title: string;
  body: string;
  outcome: string;
}

const steps: Step[] = [
  {
    number: "01",
    phase: "Phase one",
    duration: "20 min",
    title: "Diagnose",
    body: "Free strategy call. We audit your current funnel, identify the highest-leverage gaps, and confirm fit before any money changes hands. No pitch deck. No SOW upsell. Just an honest conversation about your county and what's possible.",
    outcome: "You walk away with a working hypothesis — even if we never work together.",
  },
  {
    number: "02",
    phase: "Phase two",
    duration: "7–60 days",
    title: "Deploy",
    body: "Foundation laid in week 1. LSA + Google Verified certified. Schema deployed. GBP weaponized. Ads launched. Speed-to-lead workflows live. Reporting cadence established. Day 30 check-in confirms early signal.",
    outcome: "Production systems running, not slide decks. By Day 60, every system we promised is live — or you walk away with everything we've built.",
  },
  {
    number: "03",
    phase: "Phase three",
    duration: "Monthly",
    title: "Scale",
    body: "Performance reviewed against your numbers. Optimization decisions made from real data. New systems deployed as the opportunities surface. Citation velocity compounds. AI visibility builds. Each system reinforces the others.",
    outcome: "Compound growth across all six systems. Month-to-month. You stay because results.",
  },
];

const wontDo = [
  "Promise rankings or lead volume — anyone who does is overselling.",
  "Lock you into a 12-month contract — every tier is month-to-month from day one.",
  "Mark up your ad spend or take affiliate kickbacks on the software you use.",
  "Hold your data, accounts, or assets hostage. You own everything from day one.",
  "Sign your competitor in your county for as long as you're with us.",
];

const ProcessPage = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero — cream-light (R7.6: flipped from bg-forest so transparent Header at scrollY=0 stays readable) */}
      <section className="relative overflow-x-clip bg-cream-light pt-32 md:pt-36 pb-24 md:pb-28 px-6">
        <ContourBg color="#3a86ff" opacity={0.16} animated />
        <GlowOrb color="#3a86ff" opacity={0.35} size={800} top="-5%" left="105%" animated />
        <div className="relative z-10 max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-azure-dark mb-4">
            How we work
          </p>
          <h1
            className="font-display text-5xl md:text-7xl mb-6 leading-[0.95] max-w-4xl"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            <span className="font-display block text-charcoal leading-[0.95]">Diagnose.</span>
            <span className="font-display block text-coral-dark leading-[0.95]">Deploy.</span>
            <span className="font-display block text-charcoal leading-[0.95]">Scale.</span>
          </h1>
          <p className="text-lg text-charcoal/80 max-w-2xl leading-relaxed">
            Three phases. First one is free. Second one ships production systems. Third one compounds. No surprises.
          </p>
        </div>
      </section>

      {/* Step sections + Signal Map — wrapped so the OrbitRings broadcast bleeds across all three
          phase sections AND the Signal Map below, like the GlowOrb bridging treatment. */}
      <div className="relative overflow-x-clip">
        <OrbitRings color="#3a86ff" opacity={0.16} cx="91%" cy="88%" rings={8} animated />
        {steps.map((step, i) => (
          <section
            key={step.number}
            id={`phase-${step.number}`}
            className={`relative overflow-x-clip ${i % 2 === 0 ? "bg-cream" : "bg-cream-light"} py-24 px-6`}
          >
            <SparkField color="#3a86ff" opacity={0.6} animated variant={i} />
            <div className="relative z-10 max-w-6xl mx-auto">
              <div className="grid md:grid-cols-[240px_1fr] gap-8 md:gap-16 items-start">
                <div>
                  <p
                    className="font-display text-coral-dark leading-none"
                    style={{ fontWeight: 700, fontSize: "clamp(6rem, 12vw, 10rem)", letterSpacing: "-0.04em" }}
                  >
                    {step.number}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-azure-dark mb-4 font-medium">
                    {step.phase} · {step.duration}
                  </p>
                  <h2
                    className="font-display text-4xl md:text-5xl text-charcoal mb-6 leading-tight"
                    style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
                  >
                    {step.title}
                  </h2>
                  <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">{step.body}</p>

                  <div className="bg-white rounded-md p-6 border-l-4 border-coral">
                    <p className="text-xs uppercase tracking-[0.15em] text-coral-dark font-medium mb-2">
                      What you walk away with
                    </p>
                    <p className="text-base text-charcoal/80 leading-relaxed">{step.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* R8.1 (CS-15): content → AI-signal map. R8.2: moved directly after the phase sections */}
        <SignalMap />
      </div>


      {/* R7.6 Phase 5: new section */}
      <StrategyEvolves />

      {/* R7.6 Phase 5: moved from homepage to /process. R8.2: now after StrategyEvolves */}
      <SoundFamiliar />

      {/* What we won't do — cream */}
      <section className="relative overflow-x-clip bg-cream py-24 px-6">
        <SparkField color="#3a86ff" opacity={0.6} animated variant={1} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-4">
            The honest part
          </p>
          <h2
            className="font-display text-3xl md:text-5xl text-charcoal mb-10 leading-[0.95]"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            What we won't do.
          </h2>
          <ul className="space-y-4">
            {wontDo.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-white rounded-md p-5 border border-charcoal/10">
                <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-coral" />
                <span className="text-base text-charcoal/80 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing CTA — shared EndCTA (R7.6 Phase 6) */}
      <EndCTA
        headline="Book the diagnostic call."
        subhead="20 minutes. No pitch. An honest conversation about your county and what's possible."
        secondaryCtaText="See pricing"
        secondaryCtaHref="/pricing-and-booking"
        glowSide="right"
      />
    </div>
  );
};

export default ProcessPage;
