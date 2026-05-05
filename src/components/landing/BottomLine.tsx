import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CountUp from "react-countup";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const realMetrics = [
  { label: "CPL", value: 42, prefix: "$", decimals: 0 },
  { label: "CPBA", value: 127, prefix: "$", decimals: 0 },
  { label: "CAC", value: 284, prefix: "$", decimals: 0 },
  { label: "LTV:CAC", value: 4.2, suffix: "x", decimals: 1 },
  { label: "ROAS", value: 3.8, suffix: "x", decimals: 1 },
  { label: "PENETRATION", value: 18, suffix: "%", decimals: 0 },
];

const BottomLine = () => {
  const scrollToLazy = () => {
    document.getElementById("lazy-agency")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="px-6 py-32 md:px-8 section-alt" id="bottom-line">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            THE METRICS THAT MATTER
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground" style={{ fontWeight: 900 }}>
            YOU CAN'T FIX WHAT YOU <span className="italic text-shimmer-blue">CAN'T MEASURE</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {/* LEFT — Current agency */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-muted/20 border border-border rounded-2xl p-6 md:p-8 opacity-80"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              What Your Current Agency Shows You
            </p>
            <div className="space-y-3 mb-5">
              <div className="flex justify-between items-baseline border-b border-border/40 pb-2">
                <span className="text-sm text-muted-foreground">Leads</span>
                <span className="font-mono text-foreground font-semibold">47</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-border/40 pb-2">
                <span className="text-sm text-muted-foreground">Clicks</span>
                <span className="font-mono text-foreground font-semibold">1,203</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-border/40 pb-2">
                <span className="text-sm text-muted-foreground">Impressions</span>
                <span className="font-mono text-foreground font-semibold">45,892</span>
              </div>
            </div>
            <div className="space-y-2 mb-5">
              {["CPL", "CPBA", "CAC", "LTV:CAC", "ROAS", "Penetration"].map((m) => (
                <div key={m} className="flex justify-between items-baseline border-b border-border/20 pb-1.5">
                  <span className="text-xs text-muted-foreground/60 uppercase tracking-wider">{m}</span>
                  <span className="font-mono text-muted-foreground/40 blur-[2px] select-none">???</span>
                </div>
              ))}
            </div>
            <p className="italic text-xs text-muted-foreground">Vanity metrics. Nothing actionable.</p>
          </motion.div>

          {/* RIGHT — Us */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-card border-2 border-electric/40 rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(0,209,255,0.18)]"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-electric mb-5">
              What We Show You
            </p>
            <div className="space-y-2.5 mb-5">
              {realMetrics.map((m) => (
                <div key={m.label} className="flex justify-between items-baseline border-b border-electric/20 pb-2">
                  <span className="text-sm text-foreground uppercase tracking-wider font-semibold">{m.label}</span>
                  <span className="font-mono text-electric font-bold text-lg">
                    {m.prefix}
                    <CountUp end={m.value} duration={2} decimals={m.decimals} enableScrollSpy scrollSpyOnce />
                    {m.suffix}
                  </span>
                </div>
              ))}
            </div>
            <p className="italic text-xs text-electric">Real metrics. Actionable insights.</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-foreground font-bold text-xl md:text-2xl font-display max-w-3xl mx-auto mb-10 leading-snug text-center"
          style={{ fontWeight: 900 }}
        >
          If your current agency can't tell you these numbers, they don't know if you're making money. They're just spending yours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <button
            onClick={scrollToLazy}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
          >
            SEE HOW WE FIX THIS
            <ArrowRight className="w-5 h-5 arrow-icon transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BottomLine;
