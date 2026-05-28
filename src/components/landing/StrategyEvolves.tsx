interface EvolveCard {
  number: string;
  title: string;
  body: string;
}

const cards: EvolveCard[] = [
  {
    number: "01",
    title: "Monthly performance review",
    body: "We sit down with your numbers, not ours. What worked, what didn't, what changes next month. No vanity dashboards — just the metrics that move your bottom line.",
  },
  {
    number: "02",
    title: "Quarterly system audit",
    body: "Every 90 days, we look at the whole stack: ad spend allocation, content velocity, GBP signals, AI visibility. Decide what to double down on, what to retire.",
  },
  {
    number: "03",
    title: "Real-time optimization",
    body: "We don't wait for monthly reviews to act on broken funnels or surging opportunities. Speed-to-decision matches our speed-to-lead.",
  },
  {
    number: "04",
    title: "Your feedback shapes the roadmap",
    body: "You tell us what's converting in the field — which leads close, which questions your customers are asking, what your competitors are doing locally. We engineer accordingly.",
  },
];

const StrategyEvolves = () => {
  return (
    <section id="strategy-evolves" className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-6">
          Living strategy
        </p>
        <h2
          className="font-display text-4xl md:text-6xl text-charcoal mb-6 max-w-4xl leading-tight"
          style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          Strategy that evolves with you.
        </h2>
        <p className="text-lg text-charcoal/70 mb-16 max-w-2xl leading-relaxed">
          Strategy isn't a deck. It's a living system that adjusts as your business grows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cards.map((card) => (
            <div
              key={card.number}
              className="bg-white rounded-lg p-7 border border-charcoal/10 flex flex-col"
            >
              <span
                className="font-display text-coral-dark text-3xl block mb-4 leading-none"
                style={{ fontWeight: 700 }}
              >
                {card.number}
              </span>
              <h3
                className="font-display text-xl text-charcoal mb-3 leading-tight"
                style={{ fontWeight: 700 }}
              >
                {card.title}
              </h3>
              <p className="text-base text-charcoal/70 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        <p className="text-base text-muted-dark italic max-w-2xl leading-relaxed">
          You're not a logo on our portfolio. You're a partner in what we build.
        </p>
      </div>
    </section>
  );
};

export default StrategyEvolves;
