import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What if I'm not currently running ads?",
    a: "Even better. We'll start fresh with a proven testing framework. Same pricing applies — $1,500/month for the 60-day trial.",
  },
  {
    q: "What if I don't have an ad budget of $2,000/month?",
    a: "You'll need at least $1,500-$2,000/month for ad spend (separate from our $1,500 management fee). If you're not ready to invest in ads yet, we're not the right fit.",
  },
  {
    q: "Do you guarantee results?",
    a: "We guarantee effort and expertise, not results — marketing is testing, and some things work while others don't. But if we're not outperforming your current situation after 60 days, you can walk away. No long-term contracts.",
  },
  {
    q: "What platforms do you run ads on?",
    a: "Primarily Google Ads (search & display) and Meta (Facebook/Instagram). We focus on what works best for local service businesses.",
  },
  {
    q: "How many clients do you take on?",
    a: "We're capping at 8 clients total to ensure quality service. Once we hit 8, the discounted trial pricing goes away and we go to market rate.",
  },
  {
    q: "What makes you different from other agencies?",
    a: "Honesty. I'm building this from the ground up, so I'm offering premium service at a discount to build case studies. You get expert ad management for half the price. Once I have 10+ clients and proven results, my prices will match the market. Get in now while spots are available.",
  },
];

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
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
