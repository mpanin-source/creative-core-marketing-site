import { motion, type Variants } from "framer-motion";
import { FileText, Layers, CreditCard } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const steps = [
  {
    icon: FileText,
    title: "90-DAY GROWTH ROADMAP",
    desc: "We deliver your custom roadmap based on 60 days of real data — exactly what to scale, what to kill, and what to test next.",
  },
  {
    icon: Layers,
    title: "YOU CHOOSE YOUR TIER",
    desc: "Upgrade to Growth Partner ($3,000/mo), stay at Foundation baseline ($2,000/mo), or walk away and keep everything we built.",
  },
  {
    icon: CreditCard,
    title: "CARD ON FILE, NO AUTO-LOCK",
    desc: "We keep a card on file for seamless continuation — cancel anytime with 7 days notice. No contracts. No games.",
  },
];

const Day60Transition = () => {
  return (
    <section className="px-6 py-32 md:px-8 section-alt" id="day-60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            WHAT HAPPENS AT DAY 60
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground" style={{ fontWeight: 900 }}>
            NO SURPRISES. NO LOCK-INS. <span className="italic text-shimmer-blue">JUST THE PLAN.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 md:p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-sm outcome-card relative"
            >
              <div className="absolute top-6 right-6 font-display text-3xl text-electric/20" style={{ fontWeight: 900 }}>
                0{i + 1}
              </div>
              <div className="outcome-icon w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-electric" />
              </div>
              <h3 className="font-display text-base md:text-lg text-foreground uppercase mb-3" style={{ fontWeight: 800 }}>
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Day60Transition;
