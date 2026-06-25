import { GlowOrb } from "@/components/cobalt-refresh/patterns";

interface KPI {
  name: string;
  description: string;
}

const kpis: KPI[] = [
  {
    name: "Channel attribution",
    description: "Which platform, ad, and keyword drove this specific booked appointment.",
  },
  {
    name: "Customer journey",
    description: "Every touchpoint from first impression to closed job. No gaps.",
  },
  {
    name: "ROI by source",
    description: "True profit per dollar spent, by channel. The number that actually matters.",
  },
];

const CantMeasure = () => {
  return (
    <section id="cant-measure" className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-6">
          05 · The measurement gap
        </p>

        <div className="border-l-4 border-coral pl-8 my-12 max-w-4xl">
          <p
            className="font-display text-4xl md:text-6xl text-charcoal leading-[0.95]"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            "You can't fix what you can't measure."
          </p>
        </div>

        <p className="text-lg text-charcoal/70 mb-16 max-w-3xl leading-relaxed">
          Most home services owners are flying blind. They know if the phone rings — they don't know
          which channel rang it, which ad converted, or which dollar of spend produced this week's appointments.
          That's not a marketing problem. That's a measurement problem. And it's the first thing we fix.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {kpis.map((kpi) => (
            <div
              key={kpi.name}
              className="bg-white rounded-lg p-7 border border-charcoal/10"
            >
              <h3
                className="font-display text-2xl text-charcoal mb-3 leading-tight"
                style={{ fontWeight: 700 }}
              >
                {kpi.name}
              </h3>
              <p className="text-base text-charcoal/70 leading-relaxed">{kpi.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CantMeasure;
