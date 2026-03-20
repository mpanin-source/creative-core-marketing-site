import { motion, type Variants } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const WhyOffering = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="px-6 py-32 md:px-8 section-alt" id="why-offering">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            THE HONEST TRUTH
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-10" style={{ fontWeight: 900 }}>
            WHY WE'RE <span className="italic text-shimmer-blue">OFFERING THIS</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 text-base text-muted-foreground leading-relaxed"
        >
          <p className="text-foreground font-medium text-lg">Look, I'll be honest with you.</p>

          <p>
            I'm Max, and I'm building Creative Core from the ground up. I've spent the last year studying ad strategy from the best in the business — Alex Hormozi, Nicholas Kusmich, analyzing winning Meta campaigns from 7-figure brands.
          </p>

          <p className="text-foreground font-semibold">Here's the deal:</p>

          <p>
            I need 3-5 clients to build real case studies. You need better ad performance without overpaying some bloated agency.
          </p>

          <p className="text-foreground font-medium">So I'm offering premium service at a discount:</p>

          <div className="bg-card/60 border border-border rounded-xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
              <p className="text-foreground">You get expert ad management for half the market rate</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
              <p className="text-foreground">I get proof that this works and testimonials for my portfolio</p>
            </div>
          </div>

          <p className="text-foreground font-semibold text-lg text-center">Win-win.</p>

          <p className="text-foreground font-medium">After the 60-day trial:</p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-safety font-bold flex-shrink-0">✅</span>
              <p>
                <span className="text-foreground font-medium">If you're getting ROI</span> → We lock in at $2,500/month (still cheaper than most agencies)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-safety font-bold flex-shrink-0">✅</span>
              <p>
                <span className="text-foreground font-medium">If you're not happy</span> → We part ways, no hard feelings
              </p>
            </div>
          </div>

          <p className="text-foreground font-semibold text-lg text-center pt-4">Sound fair?</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-10"
        >
          <button
            onClick={scrollToContact}
            className="btn-safety cta-pulse-orange px-8 py-4 rounded-lg text-base group inline-flex items-center gap-2"
          >
            BOOK YOUR FREE AUDIT
            <ArrowRight className="w-5 h-5 arrow-icon transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyOffering;
