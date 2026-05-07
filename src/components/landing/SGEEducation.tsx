import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const SGEEducation = () => {
  return (
    <section id="sge-education" className="px-6 py-32 md:px-8 section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">WHY THIS MATTERS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground max-w-4xl mx-auto leading-tight" style={{ fontWeight: 900 }}>
            AI SEARCH DOMINATION:<br />
            <span className="italic text-shimmer-blue">THE NEW BATTLEFIELD</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            variants={sectionFade}
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Most agencies are fighting for Google Ads clicks at $50–$200 each using 2018 SEO tactics. In 2026, if you aren't recommended by Google's AI Overview (SGE), you're invisible. We engineer your entire digital footprint to feed Google's AI, putting you at the absolute top of the page — <span className="text-foreground font-semibold">above paid ads, above organic results</span> — before your competitors even load. You pay zero per click, dominate the prime real estate, and own your county.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-lg border border-electric/30 bg-background/60 p-5 font-mono text-xs md:text-sm shadow-[0_0_30px_rgba(0,209,255,0.12)]"
          >
            <p className="text-muted-foreground italic mb-3">"best [your service] in [your city]"</p>
            <div className="flex items-center gap-2 text-electric mb-2">
              <Sparkles className="w-4 h-4" />
              <span className="font-semibold">AI Overview</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              "Top-rated providers: <span className="text-foreground font-semibold">[Your Business]</span> offers 5-star service with..."
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center"
        >
          <p className="text-sm md:text-base text-muted-foreground mb-2">
            Want the full breakdown of how AI search works?{" "}
            <Link to="/ai-search" className="text-electric font-semibold hover:underline inline-flex items-center gap-1">
              See our deep dive <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SGEEducation;
