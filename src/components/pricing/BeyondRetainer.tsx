import { ArrowRight, Phone, Wrench, Check } from "lucide-react";

const CALENDLY = "https://calendly.com/paninmax2002/strategy-call";

const automationFeatures = [
  "10DLC registration handled (TCPA-compliant)",
  "Voice AI configured for after-hours calls",
  "Missed-call text-back automation",
  "Inbound lead capture + speed-to-lead workflows",
  "Multi-language support available",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <p className="text-sm text-muted-dark mb-4">Voice AI · SMS · CRM nurture · Reviews</p>
            <div className="mb-5">
              <p className="font-display text-3xl text-coral-dark leading-none" style={{ fontWeight: 700 }}>
                $750
              </p>
              <p className="text-sm text-charcoal/70 mt-1">setup + $500/mo</p>
            </div>
            <p className="text-base text-charcoal/80 leading-relaxed mb-5">
              Stop losing leads after hours. Most clients capture 30–40% more appointments by closing the after-hours gap.
            </p>
            <ul className="space-y-2.5 mb-6 flex-1">
              {automationFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-coral-dark" />
                  <span className="text-sm text-charcoal/80 leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs uppercase tracking-wider text-muted-dark font-medium">
              Available at any tier · Premium tier available for Tier 3 / high-volume
            </p>
          </div>

          {/* Card 2 — Custom Software (simplified, coral-soft warm tint — R7.6 Phase 7.5) */}
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
              Custom Software Solutions
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
              Once we're inside your business and we've audited your funnel, we identify specific bottlenecks
              that off-the-shelf tools can't solve. That's where Custom Software comes in — dispatching
              dashboards, lead-scoring algorithms, CRM bridges, proprietary reporting.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
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
