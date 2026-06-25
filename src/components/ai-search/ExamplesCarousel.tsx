import { useEffect, useState } from "react";
import { OrbitRings } from "@/components/cobalt-refresh/patterns";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, Home, Wrench, Snowflake } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const examples = [
  {
    icon: Home,
    label: "REALTOR EXAMPLE",
    query: "pros and cons of real estate in Sarasota",
    shows: "Realtor blogs, YouTube videos, articles",
    lesson: "They're not bidding on these keywords. They're answering them. Google's AI rewards them with FREE mentions to thousands of searchers.",
  },
  {
    icon: Wrench,
    label: "ROOFING EXAMPLE",
    query: "is my Florida roof damaged after a storm",
    shows: "Roofing contractor blogs, YouTube tutorials, FAQ pages",
    lesson: "A roofer who writes one good post can be mentioned by Google's AI to thousands of homeowners during hurricane season — for $0 in ad spend.",
  },
  {
    icon: Snowflake,
    label: "HVAC EXAMPLE",
    query: "why does my AC freeze up in summer",
    shows: "HVAC contractor blogs, technician videos, troubleshooting guides",
    lesson: "Florida AC questions get asked thousands of times per month. The HVAC company that produces the answers wins customers searching for \"why\" who eventually need \"who.\"",
  },
];

const ExamplesCarousel = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((p) => (p + 1) % examples.length), 7000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: number) => setActive((p) => (p + dir + examples.length) % examples.length);

  const e = examples[active];
  const Icon = e.icon;

  return (
    <section className="relative overflow-hidden px-6 py-32 md:px-8 section-alt">
      <OrbitRings color="#3a86ff" opacity={0.16} cx="8%" cy="86%" rings={6} animated />
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-coral-dark">PROOF</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-3" style={{ fontWeight: 900 }}>
            HOW SMART OPERATORS ARE<br />
            <span className="italic text-shimmer-blue">ALREADY WINNING AI SEARCH</span>
          </h2>
        </motion.div>

        <div
          className="relative mb-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) go(1);
                  else if (info.offset.x > 80) go(-1);
                }}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-card border border-border rounded-2xl p-8 md:p-12 cursor-grab active:cursor-grabbing select-none"
              >
                <div className="outcome-icon w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-coral" />
                </div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-coral-dark mb-3">{e.label}</p>

                <div className="bg-background/60 border border-border rounded-lg p-4 font-mono text-xs mb-5">
                  <p className="text-muted-foreground mb-1">Search query:</p>
                  <p className="text-foreground">"{e.query}"</p>
                </div>

                <div className="mb-5">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">What Google's AI Shows</p>
                  <p className="text-base text-foreground">{e.shows}</p>
                </div>

                <div className="border-l-2 border-coral pl-4">
                  <p className="text-xs uppercase tracking-widest text-coral-dark mb-2">Lesson</p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{e.lesson}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => go(-1)}
              className="p-2.5 rounded-full border border-border bg-card hover:border-coral/50 hover:text-coral transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {examples.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-coral" : "w-2 bg-border hover:bg-muted-foreground"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="p-2.5 rounded-full border border-border bg-card hover:border-coral/50 hover:text-coral transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Side-by-side visual */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
          variants={sectionFade}
          className="grid md:grid-cols-2 gap-5 mb-10"
        >
          <div className="bg-card border border-border rounded-2xl p-6 opacity-70">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Traditional Search</p>
            <p className="font-mono text-xs text-foreground mb-4">"best HVAC near me"</p>
            <div className="space-y-2 font-mono text-xs text-muted-foreground">
              <div className="bg-safety/10 border border-safety/20 rounded p-2">📢 Sponsored ad</div>
              <div className="bg-safety/10 border border-safety/20 rounded p-2">📢 Sponsored ad</div>
              <div className="bg-background/40 border border-border rounded p-2">🗺️ Map pack</div>
              <div className="bg-background/40 border border-border rounded p-2">Organic result</div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 italic">What most agencies optimize for.</p>
          </div>

          <div className="bg-card border-2 border-coral/40 rounded-2xl p-6 shadow-[0_0_30px_rgba(255, 77, 46,0.15)]">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-3 h-3 text-coral" />
              <p className="text-xs uppercase tracking-widest text-coral-dark font-semibold">Question Search</p>
            </div>
            <p className="font-mono text-xs text-foreground mb-4">"why does my Florida AC freeze in summer"</p>
            <div className="bg-background/60 border border-coral/30 rounded p-3 font-mono text-xs">
              <p className="text-coral mb-1">AI Overview</p>
              <p className="text-muted-foreground leading-relaxed">
                Florida AC units freeze due to... <span className="text-foreground">According to [Your Contractor Blog]</span>...
              </p>
            </div>
            <p className="text-xs text-coral mt-4 italic">What we optimize for.</p>
          </div>
        </motion.div>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center font-display text-2xl md:text-3xl text-foreground uppercase"
          style={{ fontWeight: 900 }}
        >
          Stop paying for keywords. <span className="italic text-shimmer-blue">Start owning them.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ExamplesCarousel;
