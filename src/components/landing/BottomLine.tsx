import { motion, type Variants } from "framer-motion";
import { ArrowRight, Target, Calendar, UserPlus, TrendingUp, BarChart3, MapPinned } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const kpis = [
  { icon: Target, label: "CPL", desc: "Cost Per Lead" },
  { icon: Calendar, label: "CPBA", desc: "Cost Per Booked Appointment" },
  { icon: UserPlus, label: "CAC", desc: "Cost Per Customer Acquired" },
  { icon: TrendingUp, label: "LTV:CAC", desc: "Target 3:1 minimum" },
  { icon: BarChart3, label: "ROAS", desc: "Return on Ad Spend" },
  { icon: MapPinned, label: "PENETRATION", desc: "Neighborhood Penetration Rate" },
];

const BottomLine = () => {
  const scrollToUntapped = () => {
    document.getElementById("untapped-market")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="px-6 py-32 md:px-8 section-alt" id="bottom-line">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            THE METRICS THAT MATTER
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6" style={{ fontWeight: 900 }}>
            YOU CAN'T FIX WHAT YOU <span className="italic text-shimmer-blue">CAN'T MEASURE</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-[720px] mx-auto mb-12">
            Most agencies give you lead volume. We give you the metrics that actually tell you if your marketing is making money:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {kpis.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 rounded-2xl border border-border bg-card/60 backdrop-blur-sm outcome-card text-left"
            >
              <div className="flex items-center gap-3 mb-1.5">
                <div className="outcome-icon w-9 h-9 rounded-xl bg-electric/10 flex items-center justify-center flex-shrink-0">
                  <k.icon className="w-4 h-4 text-electric" />
                </div>
                <span className="font-display text-base text-foreground uppercase" style={{ fontWeight: 800 }}>
                  {k.label}
                </span>
              </div>
              <p className="text-sm text-muted-foreground pl-12">{k.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-foreground font-bold text-xl md:text-2xl font-display max-w-3xl mx-auto mb-10 leading-snug"
          style={{ fontWeight: 900 }}
        >
          If your current agency can't tell you these numbers, they don't know if you're making money. They're just spending yours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={scrollToUntapped}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
          >
            SEE UNTAPPED OPPORTUNITIES
            <ArrowRight className="w-5 h-5 arrow-icon transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BottomLine;
