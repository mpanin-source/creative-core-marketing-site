import { motion, type Variants } from "framer-motion";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const rows = [
  { type: "Premium agencies (RYNO, Blue Corona)", cost: "$5,000–$10,000", diff: "Full team. Manual optimization. Monthly reviews." },
  { type: "Mid-tier local agencies", cost: "$2,500–$5,000", diff: "Limited content. Basic SEO. Bi-weekly check-ins." },
  { type: "Set-and-forget agencies", cost: "$1,000–$2,000", diff: "GBP only. No content. Quarterly reports." },
  { type: "Creative Core", cost: "$1,500–$5,000", diff: "AI-monitored optimization. Continuous testing. Real-time signal feeding.", highlight: true },
];

const CostReveal = () => {
  return (
    <section id="cost-reveal" className="px-6 py-32 md:px-8 section-alt">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            WHY WE CAN CHARGE LESS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-5" style={{ fontWeight: 900 }}>
            WHY THIS COSTS <span className="italic text-shimmer-blue">$5K–$10K</span> ANYWHERE ELSE
          </h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12"
        >
          <p>
            Most home service marketing agencies charge $5,000–$10,000/month because they're paying a 4–5 person team to manually run A/B tests, write content, optimize bids, build schema, and track signals. Humans clicking buttons. Humans missing details. Humans optimizing once a month when they remember.
          </p>
          <p>
            Creative Core takes a different approach. We've built AI agent infrastructure that catches the things humans miss — the low-quality keywords bleeding budget, the underperforming ad variants nobody noticed, the response-time gaps that lose leads. Our team uses AI to do what 5 humans can't: monitor every campaign continuously and act on data the moment it's actionable.
          </p>
          <p>
            The AI isn't replacing strategy — it's eliminating the gaps where most agencies fail. That's why we can deliver enterprise-grade work at small-business pricing.
          </p>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
          variants={sectionFade}
          className="hidden md:block bg-card border border-border rounded-2xl overflow-hidden mb-10"
        >
          <div className="grid grid-cols-12 px-6 py-4 border-b border-border bg-background/40">
            <div className="col-span-4 text-xs font-semibold tracking-widest uppercase text-muted-foreground">Agency Type</div>
            <div className="col-span-3 text-xs font-semibold tracking-widest uppercase text-muted-foreground">Monthly Cost</div>
            <div className="col-span-5 text-xs font-semibold tracking-widest uppercase text-muted-foreground">What's Different</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.type}
              className={`grid grid-cols-12 px-6 py-5 items-start gap-4 ${i !== rows.length - 1 ? "border-b border-border" : ""} ${r.highlight ? "bg-electric/5" : ""}`}
            >
              <div className={`col-span-4 font-display text-sm uppercase ${r.highlight ? "text-electric" : "text-foreground"}`} style={{ fontWeight: r.highlight ? 800 : 700 }}>
                {r.type}
              </div>
              <div className={`col-span-3 text-sm ${r.highlight ? "text-foreground font-semibold" : "text-muted-foreground"}`}>{r.cost}</div>
              <div className={`col-span-5 text-sm ${r.highlight ? "text-foreground" : "text-muted-foreground"}`}>{r.diff}</div>
            </div>
          ))}
        </motion.div>

        {/* Mobile stacked */}
        <div className="md:hidden space-y-3 mb-10">
          {rows.map((r, i) => (
            <motion.div
              key={r.type}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-xl p-5 border ${r.highlight ? "bg-electric/5 border-electric/40" : "bg-card border-border"}`}
            >
              <p className={`font-display text-xs uppercase tracking-widest mb-2 ${r.highlight ? "text-electric" : "text-foreground"}`} style={{ fontWeight: 800 }}>{r.type}</p>
              <p className="text-sm text-foreground font-semibold mb-2">{r.cost}</p>
              <p className="text-sm text-muted-foreground">{r.diff}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="italic text-center text-base md:text-lg text-foreground max-w-3xl mx-auto"
        >
          Same outcomes other agencies charge $5K–$10K for. Different infrastructure. That's the leverage.
        </motion.p>
      </div>
    </section>
  );
};

export default CostReveal;
