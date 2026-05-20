import { motion, type Variants } from "framer-motion";
import { Search, Star, Code, FileText, Youtube, MessageSquare, Brain } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const layers = [
  { icon: Search, title: "VERIFIED GOOGLE BUSINESS PROFILE", desc: "Foundation. Without this, you're invisible." },
  { icon: Star, title: "REVIEWS + WHAT REVIEWERS SAY", desc: "AI reads sentiment and specific service mentions, not just stars." },
  { icon: Code, title: "SCHEMA MARKUP", desc: "How Google 'understands' your business. Most agencies skip this entirely." },
  { icon: FileText, title: "CONTENT VELOCITY", desc: "Fresh blog/article content tells AI you're active and authoritative." },
  { icon: Youtube, title: "YOUTUBE PRESENCE", desc: "Google owns YouTube. Their AI weights it heavily as an authority signal." },
  { icon: MessageSquare, title: "REDDIT + EXTERNAL MENTIONS", desc: "Top GEO source most agencies completely ignore." },
  { icon: Brain, title: "SEMANTIC RELEVANCE", desc: "Your content matches the actual phrases customers search — not just keywords." },
];

const SignalLayers = () => {
  return (
    <section className="px-6 py-32 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">THE SIGNALS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-5" style={{ fontWeight: 900 }}>
            IT'S NOT ABOUT AD SPEND ANYMORE.<br />
            <span className="italic text-shimmer-blue">IT'S ABOUT FOOTPRINT.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Google's AI pulls from 7 layers of signals when deciding who to recommend. Most agencies optimize 1–2 of these. We optimize all 7.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {layers.slice(0, 6).map((l, i) => (
            <motion.div
              key={l.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm outcome-card relative"
            >
              <div className="absolute top-5 right-5 font-display text-2xl text-electric/20" style={{ fontWeight: 900 }}>
                0{i + 1}
              </div>
              <div className="outcome-icon w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
                <l.icon className="w-5 h-5 text-electric" />
              </div>
              <h3 className="font-display text-base text-foreground uppercase mb-2 pr-8" style={{ fontWeight: 700 }}>
                {l.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 7th card — full-width, highlighted */}
        {(() => {
          const l = layers[6];
          const Icon = l.icon;
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-7 md:p-8 rounded-2xl border-2 border-electric/50 bg-card/80 backdrop-blur-sm relative shadow-[0_0_40px_rgba(0,209,255,0.18)]"
            >
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-electric/15 border border-electric/40 text-[10px] font-bold tracking-widest uppercase text-electric">
                FUTURE-DEFINING
              </div>
              <div className="absolute top-5 right-5 font-display text-2xl text-electric/30" style={{ fontWeight: 900 }}>07</div>
              <div className="flex items-start gap-5">
                <div className="outcome-icon w-12 h-12 shrink-0 rounded-xl bg-electric/15 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-electric" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg md:text-xl text-foreground uppercase mb-2" style={{ fontWeight: 800 }}>
                    {l.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{l.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })()}
      </div>
    </section>
  );
};

export default SignalLayers;
