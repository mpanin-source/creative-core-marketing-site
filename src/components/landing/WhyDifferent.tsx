import { motion, type Variants } from "framer-motion";
import { Activity, Shield, Lock, Eye } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const moats = [
  {
    icon: Activity,
    title: "PIXEL TRACKING INTELLIGENCE",
    description: "We install behavioral tracking on your landing pages. A visitor who scrolls 80% of your page, watches your video, and clicks your CTA twice is flagged as a warm lead — before they even submit a form. Your sales team calls the hottest leads first.",
    accent: "electric" as const,
  },
  {
    icon: Lock,
    title: "ONE CLIENT PER NICHE PER AREA",
    description: "We don't work with your competitors. If we sign an HVAC company in Phoenix, no other HVAC company in Phoenix can hire us. Your territory is locked. Your campaigns, creative, and data stay exclusive.",
    accent: "electric" as const,
  },
  {
    icon: Shield,
    title: "YOU OWN EVERYTHING",
    description: "Your ad accounts. Your landing pages. Your CRM data. Your creative assets. If you leave tomorrow, you take it all. We build in YOUR accounts, not ours. No hostage situations.",
    accent: "electric" as const,
  },
  {
    icon: Eye,
    title: "FULL TRANSPARENCY, ZERO MARKUP",
    description: "You pay Meta and Google directly. We never touch your ad spend. You see every dollar, every click, every conversion in real-time dashboards. Our only revenue is the sprint fee.",
    accent: "electric" as const,
  },
];

const WhyDifferent = () => {
  return (
    <section className="px-6 py-32 md:px-8" id="why-different">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            THE TECHNICAL MOAT
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground" style={{ fontWeight: 900 }}>
            WHY WE'RE <span className="text-electric">DIFFERENT</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {moats.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-electric/40 hover:shadow-[0_0_20px_rgba(0,209,255,0.1)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-electric" />
                </div>
                <h3 className="font-display text-lg text-foreground uppercase" style={{ fontWeight: 700 }}>
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
