import { GlowOrb } from "@/components/cobalt-refresh/patterns";

interface Outcome {
  context: string;
  metric: string;
  label: string;
  detail: string;
}

const outcomes: Outcome[] = [
  {
    context: "Speed-to-lead",
    metric: "<60s",
    label: "response lifts conversions",
    detail: "Responding to inbound leads within the first minute sharply raises contact and conversion rates — the highest-leverage fix in home services.",
  },
  {
    context: "AI search traffic",
    metric: "≥ organic",
    label: "conversion rate",
    detail: "Visitors from ChatGPT, Perplexity and Google's AI Overview arrive mid-decision — early data shows they convert at least as well as organic search.",
  },
  {
    context: "Performance Max",
    metric: "$72",
    label: "average CPL",
    detail: "Versus $149 average for traditional non-branded Google Search ads.",
  },
];

const Outcomes = () => {
  return (
    <section id="outcomes" className="relative overflow-x-clip bg-cream-light py-24 px-6">
      <GlowOrb color="#3a86ff" opacity={0.35} size={800} top="-5%" left="-5%" animated />
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-6">
          06 · Outcomes
        </p>
        <h2
          className="font-display text-4xl md:text-6xl text-charcoal mb-6 max-w-4xl leading-tight"
          style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          Numbers worth building toward.
        </h2>
        <p className="text-lg text-charcoal/70 mb-16 max-w-2xl leading-relaxed">
          These are 2026 benchmarks from Florida home services and adjacent verticals. They're not our
          client results — yet. They're the targets we engineer toward.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map((o) => (
            <div
              key={o.metric}
              className="bg-white rounded-lg p-8 border border-charcoal/10"
            >
              <p className="text-xs uppercase tracking-wider text-muted-dark font-medium mb-4">
                {o.context}
              </p>
              <p
                className="font-display text-azure-dark text-6xl md:text-7xl leading-none mb-3"
                style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
              >
                {o.metric}
              </p>
              <p className="text-sm text-charcoal/80 font-medium mb-4">{o.label}</p>
              <p className="text-sm text-charcoal/70 leading-relaxed">{o.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
