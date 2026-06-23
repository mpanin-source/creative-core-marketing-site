import { ArrowRight, Phone, Wrench, Check, Megaphone } from "lucide-react";

import { CALENDLY_URL as CALENDLY } from "@/config/site";
import { handleCalendlyClick } from "@/lib/calendly";

const automationFeatures = [
  "Automated review requests",
  "AI response drafting",
  "Speed-to-lead alerts (email + CRM)",
];

const BeyondRetainer = () => {
  return (
    <section id="beyond" className="bg-cream-light py-24 px-6 border-t border-charcoal/10">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-6">
          Beyond the retainer
        </p>
        <h2
          className="font-display text-4xl md:text-5xl text-charcoal mb-6 max-w-3xl leading-tight"
          style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          Add-ons for the bottlenecks your retainer can't fix.
        </h2>
        <p className="text-lg text-charcoal/70 mb-12 max-w-2xl leading-relaxed">
          Modular tools we deploy when a tier alone won't move the metric. Transparent pricing. No bundles forced on you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 — Smart Automation Add-Ons */}
          <div className="bg-white rounded-lg p-8 border border-charcoal/10 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-md bg-coral/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-coral-dark" />
              </div>
              <span className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark">
                Add-on
              </span>
            </div>
            <h3
              className="font-display text-2xl md:text-3xl text-charcoal mb-2 leading-tight"
              style={{ fontWeight: 700 }}
            >
              Smart Automation
            </h3>
            <p className="text-sm text-muted-dark mb-4">Reviews · AI drafting · Speed-to-lead</p>
            <div className="mb-5">
              <p className="font-display text-3xl text-coral-dark leading-none" style={{ fontWeight: 700 }}>
                $750
              </p>
              <p className="text-sm text-charcoal/70 mt-1">setup + $500/mo</p>
            </div>
            <p className="text-base text-charcoal/80 leading-relaxed mb-5">
              Live now:
            </p>
            <ul className="space-y-2.5 mb-6 flex-1">
              {automationFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-coral-dark" />
                  <span className="text-sm text-charcoal/80 leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-charcoal/70 leading-relaxed mb-5">
              Voice AI and SMS text-back are in rollout (they require 10DLC registration first) — current clients get first access.
            </p>
            <p className="text-xs uppercase tracking-wider text-muted-dark font-medium">
              Available at any tier
            </p>
          </div>

          {/* Card 2 — Paid Social (Meta), readiness-gated upsell (R8.1, CS-04 relocation) */}
          <div className="bg-white rounded-lg p-8 border border-charcoal/10 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-md bg-azure-soft flex items-center justify-center">
                <Megaphone className="w-5 h-5 text-azure-dark" />
              </div>
              <span className="text-xs uppercase tracking-[0.15em] font-medium text-azure-dark">
                Add-on
              </span>
            </div>
            <h3
              className="font-display text-2xl md:text-3xl text-charcoal mb-2 leading-tight"
              style={{ fontWeight: 700 }}
            >
              Paid Social (Meta)
            </h3>
            <p className="text-sm text-muted-dark mb-4">Boosted local content · Paid campaigns</p>
            <div className="mb-5">
              <p
                className="font-display text-2xl text-charcoal leading-tight"
                style={{ fontWeight: 700 }}
              >
                Let's talk.
              </p>
              <p className="text-sm text-charcoal/70 mt-1">Pricing scoped on call</p>
            </div>
            <p className="text-base text-charcoal/80 leading-relaxed mb-6 flex-1">
              For Growth &amp; Scale clients once your GBP, reviews, and GEO foundation are live.
              Boosted local content + paid campaigns, KPI-tracked. You approve every dollar.
            </p>
            <p className="text-xs uppercase tracking-wider text-muted-dark font-medium">
              Growth &amp; Scale tiers · Unlocks after foundation is live
            </p>
          </div>

          {/* Card 3 — Custom Software (simplified, coral-soft warm tint — R7.6 Phase 7.5) */}
          <div className="bg-coral-soft rounded-lg p-8 border border-coral-dark/15 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-md bg-white flex items-center justify-center">
                <Wrench className="w-5 h-5 text-coral-dark" />
              </div>
              <span className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark">
                Custom-built
              </span>
            </div>
            <h3
              className="font-display text-2xl md:text-3xl text-charcoal mb-2 leading-tight"
              style={{ fontWeight: 700 }}
            >
              Custom Software & Tooling
            </h3>
            <p className="text-sm text-muted-dark mb-4">Dashboards · Bridges · Reporting layers</p>
            <div className="mb-5">
              <p
                className="font-display text-2xl text-charcoal leading-tight"
                style={{ fontWeight: 700 }}
              >
                Let's talk.
              </p>
              <p className="text-sm text-charcoal/70 mt-1">Custom pricing scoped after CRO audit</p>
            </div>
            <p className="text-base text-charcoal/80 leading-relaxed mb-6 flex-1">
              The proprietary tools that power your marketing — dispatching dashboards, lead-scoring,
              CRM bridges, custom reporting. Not a bespoke dev shop: productized tooling we build when a
              real bottleneck needs its own tool, scoped after a CRO audit.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCalendlyClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-coral hover:bg-coral-dark text-white font-medium transition-colors w-fit"
            >
              Book a strategy call
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondRetainer;
