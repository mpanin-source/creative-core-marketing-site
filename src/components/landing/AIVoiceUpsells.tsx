import { motion, type Variants } from "framer-motion";
import { Phone, MessageSquare, Sparkles } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const cards = [
  {
    icon: Phone,
    name: "AI VOICE SPEED-TO-LEAD",
    price: "$750 setup + $500/month",
    desc: "AI agent answers inbound calls when you're on a job or off the clock. Qualifies lead, books appointment, syncs to your CRM.",
    badge: null as string | null,
  },
  {
    icon: MessageSquare,
    name: "AI VOICE + SMS IN CRM",
    price: "$1,000 setup + $750/month",
    desc: "AI generates and sends contextual SMS responses inside your CRM. Qualifies leads, books appointments, nurtures cold leads via text.",
    badge: null,
  },
  {
    icon: Sparkles,
    name: "COMBO (BEST VALUE)",
    price: "$1,500 setup + $750/month",
    desc: "Both AI Voice and SMS working together. Same monthly fee as SMS alone — saves $250/month vs. buying separately.",
    badge: "SAVES $250/MONTH",
  },
];

const AIVoiceUpsells = () => {
  return (
    <section className="px-6 py-32 md:px-8" id="ai-voice">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            ADD-ONS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4" style={{ fontWeight: 900 }}>
            SPEED-TO-LEAD IS A <span className="italic text-shimmer-blue">RANKING FACTOR</span>
          </h2>
          <p className="italic text-base md:text-lg text-muted-foreground max-w-[720px] mx-auto mb-3">
            Google LSA boosts rankings for businesses that answer fast. Most contractors can't — they're on the job. Our AI Voice agents answer for them.
          </p>
          <p className="text-sm text-muted-foreground/80">
            Available add-ons for Foundation Sprint + Growth Partner clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card rounded-xl p-6 md:p-8 flex flex-col relative border border-border shadow-subtle transition-all duration-300 hover:-translate-y-2 hover:border-electric/40 hover:shadow-[0_0_20px_rgba(0,209,255,0.15)]"
            >
              {c.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap bg-safety/15 text-safety border border-safety/40">
                  {c.badge}
                </div>
              )}
              <div className="outcome-icon w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-electric" />
              </div>
              <h3 className="font-display text-base text-foreground uppercase mb-2" style={{ fontWeight: 800 }}>
                {c.name}
              </h3>
              <p className="text-electric font-semibold text-sm mb-3">{c.price}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIVoiceUpsells;
