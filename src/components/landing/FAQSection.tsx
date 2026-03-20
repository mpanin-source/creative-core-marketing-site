import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How is this different from SEO?",
    a: "SEO is a long-term play — it takes 6-12 months to rank. Our sprints are designed for immediate demand capture using paid ads (Meta + Google). SEO builds organic traffic over time; we fill your calendar in 30-45 days. They're complementary, but if you need leads NOW, ads are the move.",
  },
  {
    q: "Should I wait until June to start my summer campaign?",
    a: "No — that's the biggest mistake we see. If your peak is June, you need to build NOW. Our 'Build Now' option constructs your entire funnel, creative, and automations today so everything is tested and ready to go live the moment demand spikes. Waiting until June means 2-3 weeks of ramping while competitors are already booking jobs.",
  },
  {
    q: "What's the difference between a sprint and a retainer?",
    a: "A sprint is a 30-45 day intensive designed to capture your peak season. After the sprint, you can choose an optional monthly retainer ($299-$499/month depending on tier) for ongoing optimization — but it's not required. Retainers keep the engine running; sprints build the engine.",
  },
  {
    q: "Do you charge a markup on ad spend?",
    a: "Never. You pay Meta and Google directly through your own ad accounts. We only charge for strategy, creative, and optimization. Full transparency — you see every dollar.",
  },
  {
    q: "What happens to my landing pages and CRM after the sprint?",
    a: "You own them forever. We build everything in your accounts. Even if you don't continue with us, you keep all the infrastructure, creative assets, and lead data.",
  },
  {
    q: "What if I don't have a 'peak season'?",
    a: "Most local service businesses have seasonal demand spikes. If yours is truly evergreen, we adjust the sprint model to focus on funnel optimization + database reactivation instead of seasonal urgency.",
  },
  {
    q: "What happens if we don't hit 15 qualified calls?",
    a: "We refund 50% of your sprint investment. No questions asked. 'Qualified' means: showed up for call, matches your ICP, had real intent. No weasel words.",
  },
  {
    q: "What is the recommended ad budget?",
    a: "We recommend $30-$50/day to start. This gives us enough data to find winning creative within 5-7 days and scale what works. You pay this directly to Meta/Google — not to us.",
  },
  {
    q: "Why should I trust you if you're new?",
    a: "Because we have the most aggressive guarantee in the industry. 15+ qualified calls in 45 days or 50% refund. We can't afford to fail — which means you win.",
  },
];

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-32 md:px-8" id="faq">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-electric/10 border border-electric/20">
            <HelpCircle className="w-4 h-4 text-electric" />
            <span className="text-xs font-bold tracking-widest uppercase text-electric">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display text-foreground" style={{ fontWeight: 900 }}>
            COMMON QUESTIONS
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card rounded-xl border border-border overflow-hidden glass-hover"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-body text-base font-semibold text-foreground pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-electric" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5 border-t border-border">
                      <p className="text-sm text-muted-foreground leading-relaxed pt-4">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
