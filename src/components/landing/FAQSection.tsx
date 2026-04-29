import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What if I'm not currently running ads?",
    a: "Even better — we'll build the foundation right the first time instead of unwinding someone else's mess. Start with the $497 Launch-Ready Website to fix your conversion leak first, or jump straight into Foundation Sprint ($1,500/mo) once you're ready for $1,500–$2,000/mo in ad spend. If you want to talk through where to start, book the audit.",
  },
  {
    q: "What if my budget is under $2,000/month?",
    a: "Then start with the $497 Launch-Ready Website — it pays for itself by stopping the leads you're already losing on a broken website. Once you have $1,500–$2,000/mo in ad spend ready, we'll move you into Foundation Sprint. We'd rather you start small and win than overextend and quit.",
  },
  {
    q: "Do you guarantee results?",
    a: "We guarantee work, transparency, and the No-BS Guarantee on agency tiers: if after 60 days we haven't beaten your current numbers, you walk away and keep everything we built. Marketing is testing — anyone promising guaranteed leads is lying. If you want to talk through realistic expectations, book the audit.",
  },
  {
    q: "How long until I see results?",
    a: "Foundation gets installed in the first 14 days. Real performance lift typically shows up in weeks 3–6 as we kill losing creative and scale winners. By Day 60 you'll know if we're worth keeping — and you decide, not us.",
  },
  {
    q: "What happens if I'm already working with another agency?",
    a: "We'll do the audit anyway and tell you straight whether they're underperforming or doing fine. If they're fine, we'll say so. If they're not, you'll have a documented reason to leave — and we'll be ready when you are. Book the audit either way.",
  },
  {
    q: "Who owns the ads, landing pages, and data?",
    a: "You do. Always. The ad accounts are in your name, the landing pages live on your domain, the CRM data is yours, and you pay Google + Meta directly with zero markup. If we ever part ways, you walk with everything — that's not a perk, that's the deal.",
  },
  {
    q: "How do I know this isn't another agency that overpromises?",
    a: "Because we cap at one client per niche per county and only work in Florida home services — we can't scale by signing everyone, so we have to actually perform. Our pricing is published. Our guarantee is documented. Our deliverables are in writing. If we don't beat your numbers in 60 days, you keep everything and leave.",
  },
  {
    q: "Can my competitor hire you if I don't sign?",
    a: "Yes. One client per niche per county is a first-come, first-served lock — once they sign, we're closed to your niche in your county for as long as they're a client. If you want to claim your county before they do, book the audit.",
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
