import { motion } from "framer-motion";
import { TrendingUp, BarChart3 } from "lucide-react";

const trends = [
  { term: '"Furnace repair near me"', spike: "Jan–Feb–Mar", color: "bg-accent" },
  { term: '"Emergency HVAC"', spike: "Dec–Jan–Feb", color: "bg-destructive" },
  { term: '"Roof replacement near me"', spike: "Apr–May", color: "bg-tier-teal" },
  { term: '"Solar installation"', spike: "Apr–Jun", color: "bg-tier-gold" },
];

const competitors = [
  { name: "Veteran Air", cpl: "$85–100", strategy: "None", strategyNote: "No seasonal targeting" },
  { name: "Jack Rabbit", cpl: "$120–150", strategy: "Offer-based", strategyNote: "Unsustainable discounts" },
  { name: "Abel Air", cpl: "$30–50", strategy: "Hyper-local", strategyNote: "Slow growth" },
  { name: "Del-Air", cpl: "$75–160", strategy: "Weather-triggered", strategyNote: "Expensive reactive" },
];

const ProofLayer = () => {
  return (
    <section className="section-padding" id="proof-layer">
      <div className="max-w-[1200px] mx-auto">
        <div className="container-narrow text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <BarChart3 className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Market Data</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-4">
            THE DATA DOESN'T LIE. HERE'S WHAT WE'RE CAPTURING.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-display text-lg font-bold text-foreground mb-6 text-center">
            GOOGLE TRENDS — SEASONAL SEARCH SPIKES
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {trends.map((trend, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 glass-card rounded-lg"
              >
                <div className={`w-3 h-3 rounded-full ${trend.color} shrink-0`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{trend.term}</p>
                  <p className="text-xs text-muted-foreground">Spikes: {trend.spike}</p>
                </div>
                <TrendingUp className="w-4 h-4 text-accent shrink-0" />
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6 max-w-xl mx-auto">
            This isn't theory. This is what homeowners search for, month by month.
            Your competitors run ads year-round. You only run during these windows.
          </p>
        </div>

        {/* Competitive Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="font-display text-lg font-bold text-foreground mb-6 text-center">
            COMPETITIVE COMPARISON — FLORIDA HVAC MARKET
          </h3>
          <div className="overflow-x-auto glass-card rounded-xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-xs font-bold tracking-wider text-accent uppercase">Agency</th>
                  <th className="text-left p-4 text-xs font-bold tracking-wider text-accent uppercase">Cost Per Lead</th>
                  <th className="text-left p-4 text-xs font-bold tracking-wider text-accent uppercase">Strategy</th>
                  <th className="text-left p-4 text-xs font-bold tracking-wider text-accent uppercase">Our Cost</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((comp, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="p-4 text-sm font-medium text-foreground">{comp.name}</td>
                    <td className="p-4 text-sm text-destructive font-semibold">{comp.cpl}</td>
                    <td className="p-4 text-sm text-muted-foreground">
                      {comp.strategy}
                      <span className="block text-xs text-muted-foreground/60">{comp.strategyNote}</span>
                    </td>
                    <td className="p-4 text-sm text-accent font-bold">$12–18</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-foreground mt-6 font-medium">
            The top 5 HVAC agencies in Florida pay $75–160 per lead.{" "}
            <span className="text-accent">We deliver at $12–18.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofLayer;
