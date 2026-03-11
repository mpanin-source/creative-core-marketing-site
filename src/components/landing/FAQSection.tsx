import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Who pays for ads?",
    a: "The client, always. You pay Meta and Google directly. No hidden markups, no middleman fees on your ad spend. Full transparency.",
  },
  {
    q: "Who owns the ad account?",
    a: "You do. You own 100% of your business portfolio—ad accounts, landing pages, CRM data. We use managed access. If we part ways, everything stays with you.",
  },
  {
    q: "What is the recommended budget?",
    a: "We recommend starting at $30–$50/day to find your winning creative. This gives us enough data to optimize within the first 5–7 days and scale what works.",
  },
  {
    q: "How fast will I see results?",
    a: "First leads typically arrive within 7 days. By day 14, we have enough data to optimize aggressively. By day 30, you'll have clear ROI metrics.",
  },
  {
    q: "What if it doesn't work?",
    a: "Our 2x Lead Value Guarantee: if we don't generate at least 2x your ad spend in vetted appointment value during your first peak window, we work for free until we do.",
  },
  {
    q: "What trades do you work with?",
    a: "Any home service trade—HVAC, Plumbing, Roofing, Electrical, Landscaping, Cleaning, Solar, and more. Our system adapts to your seasonal demand cycle.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding" id="faq">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold tracking-widest text-accent uppercase">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-black text-foreground">
            COMMON QUESTIONS
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-display text-base font-bold text-foreground pr-4">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-accent" />
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
                    <div className="px-5 pb-5 border-t border-border/50">
                      <p className="text-sm text-muted-foreground leading-relaxed pt-4">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
