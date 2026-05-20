import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Coffee, Hash, Layers } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const cards = [
  {
    icon: Coffee,
    title: "THE SET-IT-AND-FORGET-IT AGENCY",
    headline: "They Set Up Your Ads And Disappeared",
    body: "Same 2 ads running for 6+ months. No fresh creative. No A/B tests. No optimization calls. They take your $3K/month and hope you don't notice.",
    tells: [
      "Reports come monthly in static PDF",
      "You can't access your own ad accounts",
      "They charge 10–20% markup on ad spend",
    ],
  },
  {
    icon: Hash,
    title: "THE LEAD COUNTER AGENCY",
    headline: "They Send You 'Leads' But Never Ask About Sales",
    body: "100 leads sounds great until you realize 5 booked, 1 closed. They count clicks, you count cash. They've never asked your close rate, average ticket, or LTV.",
    tells: [
      "They show 'leads' not 'booked jobs'",
      "They don't track CAC, LTV, or ROAS",
      "They don't know what your customer is worth",
    ],
  },
  {
    icon: Layers,
    title: "THE GENERALIST AGENCY",
    headline: "They Do 'Everything For Everyone'",
    body: "They pitch you the same playbook they pitch a yoga studio, a restaurant, and a SaaS company. No niche specialization means no real expertise in YOUR industry's marketing.",
    tells: [
      "They've never mentioned LSA or Google Guaranteed",
      "They don't talk about Google's AI Overview / GEO",
      "They serve too many industries to specialize in yours",
    ],
  },
];

const LazyAgencyCarousel = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((p) => (p + 1) % cards.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: number) => setActive((p) => (p + dir + cards.length) % cards.length);

  const c = cards[active];
  const Icon = c.icon;

  return (
    <section id="lazy-agency" className="px-6 py-32 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">SOUND FAMILIAR?</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4" style={{ fontWeight: 900 }}>
            IS YOUR CURRENT AGENCY <span className="italic text-shimmer-blue">PULLING THE LAZY WAY OUT?</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-[640px] mx-auto">
            Three personas you might recognize. Swipe through and see which one matches your current setup.
          </p>
        </motion.div>

        <div
          className="relative"
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
                <div className="outcome-icon w-12 h-12 rounded-xl bg-safety/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-safety" />
                </div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-safety mb-3">{c.title}</p>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4" style={{ fontWeight: 900 }}>
                  {c.headline}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-3xl">{c.body}</p>
                <div className="space-y-2.5">
                  {c.tells.map((t) => (
                    <div key={t} className="flex items-start gap-2.5">
                      <span className="text-safety mt-1">×</span>
                      <span className="text-sm text-foreground">{t}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => go(-1)}
              className="p-2.5 rounded-full border border-border bg-card hover:border-electric/50 hover:text-electric transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-safety" : "w-2 bg-border hover:bg-muted-foreground"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="p-2.5 rounded-full border border-border bg-card hover:border-electric/50 hover:text-electric transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-12"
        >
          Sound familiar? That's not bad luck. That's how 90% of agencies operate.{" "}
          <span className="text-foreground font-semibold">Here's what working with Creative Core looks like instead...</span>
        </motion.p>
      </div>
    </section>
  );
};

export default LazyAgencyCarousel;
