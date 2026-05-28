import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const GEOEducation = () => {
  return (
    <section id="geo-education" className="px-6 py-32 md:px-8 section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-coral-dark">WHY THIS MATTERS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground max-w-4xl mx-auto leading-tight" style={{ fontWeight: 900 }}>
            GEO & AI SEARCH DOMINATION:<br />
            <span className="italic text-shimmer-blue">THE NEW BATTLEFIELD</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            variants={sectionFade}
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Most agencies are fighting for Google Ads clicks at $50–$200 each using 2018 SEO tactics. In 2026, if you aren't recommended by Google's AI Overview (GEO — Generative Engine Optimization), you're invisible. We engineer your entire digital footprint to feed Google's AI, putting you at the absolute top of the page — <span className="text-foreground font-semibold">above paid ads, above organic results</span> — before your competitors even load. You pay zero per click, dominate the prime real estate, and own your county.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-coral/30 bg-background/70 p-5 shadow-[0_0_30px_rgba(255, 77, 46,0.12)]"
          >
            {/* Search bar mock */}
            <div className="rounded-md bg-card/80 border border-border px-3 py-2 mb-4 text-xs text-muted-foreground italic font-mono">
              best [your service] in [your city]
            </div>
            {/* AI Overview header */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-electric to-electric/40 flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-background" />
              </div>
              <span className="text-sm font-semibold text-foreground">AI Overview</span>
              <span className="text-[10px] uppercase tracking-widest text-coral-dark/70 ml-auto">Generative</span>
            </div>
            {/* Mock AI response */}
            <div className="space-y-2 text-sm text-foreground/90 leading-relaxed mb-4">
              <p>
                Top-rated providers include <span className="font-semibold text-coral">[Your Business]</span>, known for fast response times and 5-star reviews.
              </p>
              <ul className="space-y-1 text-xs text-muted-foreground pl-4 list-disc marker:text-coral/60">
                <li>Same-day service availability</li>
                <li>Verified Google Guaranteed badge</li>
                <li>200+ reviews at 4.9 stars</li>
              </ul>
            </div>
            {/* Citation badges */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
              {[1, 2, 3, 4].map((n) => (
                <span key={n} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-muted/40 border border-border text-[10px] text-muted-foreground">
                  <span className="w-3 h-3 rounded-full bg-muted/70 inline-block" />
                  Source {n}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center"
        >
          <p className="text-sm md:text-base text-muted-foreground mb-2">
            Want the full breakdown of how AI search works?{" "}
            <Link to="/ai-search" className="text-coral font-semibold hover:underline inline-flex items-center gap-1">
              See our deep dive <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GEOEducation;
