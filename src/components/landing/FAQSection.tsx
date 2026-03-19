import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What's the difference between a sprint and a retainer?",
    a: "A sprint is a 30-45 day intensive campaign designed to capture your peak season. After the sprint, you can choose to continue with an optional monthly retainer ($299-$399/month depending on tier), but it's not required. Retainers are for ongoing optimization, not mandatory.",
  },
  {
    q: "What if I don't have a 'peak season'?",
    a: "Most local service businesses have seasonal demand spikes (HVAC in summer, landscaping in spring, pest control May-August). If your business is truly evergreen, we adjust the sprint model to focus on funnel optimization + database reactivation instead of seasonal urgency.",
  },
  {
    q: "Do you charge a markup on ad spend?",
    a: "No. You pay Meta and Google directly through your own ad accounts (which you own). We only charge for strategy, creative, and optimization.",
  },
  {
    q: "What happens to my landing pages and CRM after the sprint?",
    a: "You own them forever. We build everything in your accounts (GoHighLevel CRM, your domain for landing pages). Even if you don't continue with us, you keep all the infrastructure.",
  },
  {
    q: "How is this different from hiring a full-time marketer?",
    a: "A full-time marketer costs $60K-$100K/year + benefits. Our Tier 2 sprint ($4,500) + optional $299/month retainer = $8,088/year. You get a full team (strategist, designer, media buyer, copywriter) for 1/10th the cost.",
  },
  {
    q: "Why should I trust you if you're new?",
    a: "We're new, which means we have to prove ourselves. That's why we offer the most aggressive guarantee in the industry: 15+ qualified calls in 45 days or 50% refund. We can't afford to fail — which means you win.",
  },
  {
    q: "What happens if we don't hit 15 qualified calls?",
    a: "We refund 50% of your sprint investment. No questions asked. We define \"qualified\" as: showed up for call, matches your ICP (budget fit, service area fit, intent confirmed). No weasel words.",
  },
  {
    q: "Who pays for ads?",
    a: "The client, always. You pay Meta and Google directly. No hidden markups, no middleman fees on your ad spend. Full transparency.",
  },
  {
    q: "What is the recommended budget?",
    a: "We recommend starting at $30–$50/day to find your winning creative. This gives us enough data to optimize within the first 5–7 days and scale what works.",
  },
];

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding section-funnel" id="faq">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "hsla(207, 38%, 76%, 0.15)", border: "1px solid hsla(207, 38%, 76%, 0.3)" }}>
            <HelpCircle className="w-4 h-4" style={{ color: "hsl(96, 15%, 43%)" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "hsl(96, 15%, 43%)" }}>FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground">
            COMMON QUESTIONS
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              className="bg-card rounded-xl border border-accent/30 overflow-hidden glass-hover"
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
                  <ChevronDown className="w-5 h-5" style={{ color: "hsl(96, 15%, 43%)" }} />
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
