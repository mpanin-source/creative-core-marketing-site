import { motion, type Variants } from "framer-motion";
import { MapPin, Target, Sparkles } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const pillars = [
  {
    icon: MapPin,
    eyebrow: "PILLAR 1",
    title: "LOCAL SEO",
    tagline: "Showing up when they search.",
    body: "Map Pack rankings, GBP optimization, citations, schema, service-area pages — so homeowners find you when they type \"best [service] near me.\"",
    stat: null as string | null,
  },
  {
    icon: Target,
    eyebrow: "PILLAR 2",
    title: "SEM & PAID SEARCH",
    tagline: "Converting high-intent searchers.",
    body: "LSA + Google Guaranteed, Performance Max, Meta retargeting — zero markup, ad accounts in your name. Capturing buyers actively shopping right now.",
    stat: null as string | null,
  },
  {
    icon: Sparkles,
    eyebrow: "PILLAR 3",
    title: "GEO & AI SEARCH",
    tagline: "Being recommended by AI before they search.",
    body: "Schema, citations, entity linking, Atomic Answer content — so ChatGPT, Claude, Perplexity, and Google's AI Overview name your business by default.",
    stat: "GEO traffic converts 22% higher than traditional organic. This isn't a future trend. It's already happening.",
  },
];

const ThreePillarEngine = () => {
  return (
    <section id="three-battlegrounds" className="px-6 py-32 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            THE 2026 SEARCH BATTLEGROUNDS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground max-w-4xl mx-auto leading-tight" style={{ fontWeight: 900 }}>
            THREE SEARCH BATTLEGROUNDS —<br />
            <span className="italic text-shimmer-blue">BUILT ON A CONVERSION-OPTIMIZED FOUNDATION</span>
          </h2>
        </motion.div>

        {/* Horizontal 3-pillar grid (auto-stacks on mobile) */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-7 rounded-2xl border border-border bg-card/60 backdrop-blur-sm outcome-card flex flex-col"
            >
              <div className="outcome-icon w-11 h-11 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-electric" />
              </div>
              <p className="text-xs font-semibold tracking-widest text-electric mb-2">{p.eyebrow}</p>
              <h3 className="font-display text-xl text-foreground uppercase mb-2" style={{ fontWeight: 800 }}>
                {p.title}
              </h3>
              <p className="text-sm font-semibold text-foreground mb-3">{p.tagline}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.body}</p>
              {p.stat && (
                <div className="p-3 bg-secondary border border-electric/30 rounded-lg mt-auto">
                  <p className="text-xs font-semibold text-electric leading-relaxed">{p.stat}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Generic agencies do one or two of these. We do all three, plus the conversion layer underneath that turns discovery into booked appointments. <span className="text-foreground font-semibold">That's why you win — and your local competitors don't.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ThreePillarEngine;
