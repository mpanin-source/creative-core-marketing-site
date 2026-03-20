import { motion, type Variants } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const LeadPhilosophy = () => {
  const competitors = [
    "You're running generic ads that look like every other contractor in your zip code",
    "You're paying a 15-20% management fee on top of ad spend and don't know where the money goes",
    "Your agency uses the same playbook for plumbers, dentists, and dog walkers",
    "Leads come in, sit in a spreadsheet, and die — nobody follows up in time",
    "You've been burned before and you're skeptical of anyone who says \"trust us\"",
  ];
  const deserve = [
    "Fresh ad testing every week — we kill losers, scale winners",
    "One client per niche per area — your competitor down the street can't hire us",
    "Lead scoring and pixel tracking so you know exactly which leads are hot",
    "Automated 60-second follow-up via SMS + email — no lead goes cold",
    "Transparent reporting — you see every dollar, every click, every conversion in real-time",
  ];

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding section-funnel section-warm" id="why-sprints">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4" style={{ fontWeight: 700 }}>
            WHAT COMPETITORS DO VS. <span className="italic text-shimmer-blue">WHAT YOU DESERVE</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-[1100px] mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="bg-card border border-border p-6 md:p-8 rounded-xl shadow-subtle glass-hover"
          >
            <h3 className="text-xl font-display text-foreground mb-1" style={{ fontWeight: 700 }}>What Competitors Do</h3>
            <p className="text-xs text-muted-foreground mb-5 italic">The Status Quo</p>
            <ul className="space-y-3">
              {competitors.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="bg-card border border-electric/30 p-6 md:p-8 rounded-xl shadow-card glass-hover"
          >
            <h3 className="text-xl font-display text-foreground mb-1" style={{ fontWeight: 700 }}>What You Deserve</h3>
            <p className="text-xs mb-5 italic text-electric">The Creative Core Difference</p>
            <ul className="space-y-3">
              {deserve.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-electric/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-electric" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center"
        >
          <button
            onClick={scrollToPricing}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
          >
            See Pricing
            <ArrowRight size={18} className="arrow-icon transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadPhilosophy;
