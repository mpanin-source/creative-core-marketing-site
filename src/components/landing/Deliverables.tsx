import { motion, type Variants } from "framer-motion";
import { TrendingDown, Zap, UserCheck } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const outcomes = [
  {
    icon: TrendingDown,
    title: "YOUR ADS GET CHEAPER",
    description: "We test 10+ creative variations and optimize daily. Most clients see a",
    highlight: "30-50%",
    suffix: "reduction in cost-per-lead within the first 3 weeks.",
  },
  {
    icon: Zap,
    title: "YOUR FUNNEL GETS FASTER",
    description: "From ad click to booked call in under",
    highlight: "10 clicks",
    suffix: ". We strip out every unnecessary step, question, and page load that slows your prospect down.",
  },
  {
    icon: UserCheck,
    title: "YOUR LEADS GET FOLLOWED UP",
    description: "Automated SMS + email sequences fire within 60 seconds of opt-in. No lead sits untouched. No opportunity dies in your inbox.",
    highlight: null,
    suffix: "",
  },
];

const Deliverables = () => {
  return (
    <section className="px-6 py-32 md:px-8" id="deliverables">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            OUTCOMES, NOT FEATURES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground" style={{ fontWeight: 900 }}>
            HERE'S WHAT CHANGES
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-electric/40 hover:shadow-[0_0_20px_rgba(0,209,255,0.1)] flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center flex-shrink-0 mt-1">
                <item.icon className="w-6 h-6 text-electric" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground uppercase mb-2" style={{ fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                  {item.highlight && (
                    <>
                      {" "}
                      <span className="text-safety font-bold" style={{ filter: "drop-shadow(0 0 6px rgba(255,107,0,0.3))" }}>
                        {item.highlight}
                      </span>
                      {" "}
                    </>
                  )}
                  {item.suffix}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
