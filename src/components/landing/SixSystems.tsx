import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface System {
  number: string;
  badge: string;
  outcome: string;
  name: string;
  body: string;
  href: string;
  proofStat: string;
  proofLabel: string;
}

const systems: System[] = [
  {
    number: "01",
    badge: "Local visibility",
    outcome: "Show up first when your county searches.",
    name: "Local SEO",
    body: "Map Pack rankings, Google Business Profile mastery, schema deployment, and citation velocity. We engineer for the top 3 map results — the only spots that matter for \"near me\" searches.",
    href: "/services/seo",
    proofStat: "7×",
    proofLabel: "more likely to qualify a lead when you respond within the hour",
  },
  {
    number: "02",
    badge: "Paid acquisition",
    outcome: "Convert intent into booked appointments.",
    name: "SEM & Paid Search",
    body: "Google Local Services Ads, Performance Max, Meta. Zero markup on ad spend — your card pays the platforms directly. Our fee is for the work, not a cut of your media.",
    href: "/services/sem",
    proofStat: "$72",
    proofLabel: "avg Performance Max CPL vs $149 non-branded",
  },
  {
    number: "03",
    badge: "AI search",
    outcome: "Get recommended by AI before they search.",
    name: "GEO & AI Search",
    body: "Schema for AI Overview eligibility. Atomic Answer formatting. Citation velocity across industry sources. Entity and structured-data optimization. Multi-platform coverage for ChatGPT, Claude, Perplexity, Gemini.",
    href: "/services/geo",
    proofStat: "5",
    proofLabel: "AI engines optimized in parallel — ChatGPT, Claude, Perplexity, Gemini, AI Overview",
  },
  {
    number: "04",
    badge: "Funnel optimization",
    outcome: "Turn every visit into a booked appointment.",
    name: "Conversion Rate Optimization",
    body: "Mobile-first conversion audits. Core Web Vitals optimization. CTA placement testing. Speed-to-lead workflows. A/B testing on conversion-critical pages. The foundation that turns traffic into appointments.",
    href: "/services/cro",
    proofStat: "<60s",
    proofLabel: "speed-to-lead response — the highest-leverage conversion lift",
  },
  {
    number: "05",
    badge: "Workflow systems",
    outcome: "Capture every lead — even after hours.",
    name: "Marketing Automation",
    body: "Behavioral triggers, lead scoring, nurture sequences, and review-request automation — live today on email and CRM. Voice AI and SMS text-back are rolling out as an add-on. We architect the systems; you handle the jobs.",
    href: "/services/marketing-automation",
    proofStat: "24/7",
    proofLabel: "every missed call answered — after hours, mid-job, weekends",
  },
  {
    number: "06",
    badge: "Proprietary tooling",
    outcome: "Run on tools built for the job — not rented.",
    name: "Custom Software & Tooling",
    body: "The dashboards, lead-routers, and reporting layers we've built to run your marketing — so your systems aren't capped by what off-the-shelf software allows. When a real bottleneck needs its own tool, we build it.",
    href: "/services/custom-software",
    proofStat: "—",
    proofLabel: "Built into the engagement when a bottleneck warrants it.",
  },
];

const SixSystems = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <>
      {/* DESKTOP — section-level sticky scroll with card-replacement-from-below */}
      <section
        ref={containerRef}
        id="six-systems"
        className="hidden md:block relative bg-cream-light"
        style={{ height: `${systems.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto w-full">
            <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-6">
              02 · Six systems
            </p>
            <h2
              className="font-display text-4xl md:text-5xl text-charcoal mb-2 leading-tight"
              style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              Six systems. One mandate:
            </h2>
            <h2
              className="font-display text-4xl md:text-5xl text-coral-dark mb-12 leading-tight"
              style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              turn AI into appointments.
            </h2>

            <div className="relative min-h-[440px] overflow-hidden">
              {systems.map((system, i) => (
                <SystemSlide
                  key={system.number}
                  system={system}
                  index={i}
                  totalSystems={systems.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>

            <div className="mt-12 flex items-center gap-2 relative z-50">
              {systems.map((_, i) => (
                <ProgressDot
                  key={i}
                  index={i}
                  totalSystems={systems.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE — vertical stack, no sticky scroll */}
      <section id="six-systems-mobile" className="md:hidden bg-cream-light py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-4">
            02 · Six systems
          </p>
          <h2
            className="font-display text-3xl text-charcoal mb-1 leading-tight"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Six systems. One mandate:
          </h2>
          <h2
            className="font-display text-3xl text-coral-dark mb-12 leading-tight"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            turn AI into appointments.
          </h2>

          <div className="space-y-6">
            {systems.map((system) => (
              <a
                key={system.number}
                href={system.href}
                className="block bg-white rounded-lg p-6 border border-charcoal/10 hover:border-coral/40 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs font-medium text-coral-dark uppercase tracking-wider">
                    {system.number} · {system.badge}
                  </span>
                  <ArrowRight className="w-4 h-4 text-charcoal/40" />
                </div>
                <p className="font-display text-2xl text-charcoal mb-2 leading-tight" style={{ fontWeight: 700 }}>
                  {system.outcome}
                </p>
                <p className="text-sm text-charcoal/60 italic mb-3">{system.name}</p>
                <p className="text-sm text-charcoal/70 leading-relaxed">{system.body}</p>
                {system.proofStat !== "—" ? (
                  <div className="mt-4 pt-4 border-t border-charcoal/10 flex items-baseline gap-2">
                    <span className="text-coral-dark font-display text-2xl" style={{ fontWeight: 700 }}>
                      {system.proofStat}
                    </span>
                    <span className="text-xs text-charcoal/60">{system.proofLabel}</span>
                  </div>
                ) : (
                  <div className="mt-4 pt-4 border-t border-charcoal/10">
                    <p className="text-xs text-charcoal/60 italic">{system.proofLabel}</p>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

interface SystemSlideProps {
  system: System;
  index: number;
  totalSystems: number;
  scrollYProgress: MotionValue<number>;
}

const SystemSlide = ({ system, index, totalSystems, scrollYProgress }: SystemSlideProps) => {
  // Each slide owns a 1/totalSystems slice of scrollYProgress.
  // Entrance: first 40% of the slot. Then dwell at translateY 0 forever.
  // Slide 0 is always visible from scrollYProgress=0 — no entrance animation.
  const slotWidth = 1 / totalSystems;
  const slotStart = index / totalSystems;
  const enterEnd = slotStart + slotWidth * 0.4;

  const isFirst = index === 0;

  const y = useTransform(
    scrollYProgress,
    isFirst ? [0, 1] : [slotStart, enterEnd],
    isFirst ? ["0%", "0%"] : ["100%", "0%"],
  );

  const scale = useTransform(
    scrollYProgress,
    isFirst ? [0, 1] : [slotStart, enterEnd],
    isFirst ? [1, 1] : [0.96, 1],
  );

  return (
    <motion.div
      style={{ y, scale, zIndex: index + 1 }}
      className="absolute inset-0 bg-cream-light"
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <span className="text-coral-dark font-display text-7xl block mb-4 leading-none" style={{ fontWeight: 700 }}>
            {system.number}
          </span>
          <span className="text-xs uppercase tracking-wider text-muted-dark font-medium mb-3 block">
            {system.badge}
          </span>
          <p className="font-display text-3xl md:text-4xl text-charcoal mb-3 leading-tight" style={{ fontWeight: 700 }}>
            {system.outcome}
          </p>
          <p className="text-sm text-charcoal/60 italic">{system.name}</p>
        </div>

        <div>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-8">{system.body}</p>

          {system.proofStat !== "—" ? (
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral">
              <span className="font-display text-5xl text-coral-dark block leading-none" style={{ fontWeight: 700 }}>
                {system.proofStat}
              </span>
              <p className="text-sm text-charcoal/70 mt-2">{system.proofLabel}</p>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-6 border-l-4 border-charcoal">
              <p className="text-sm text-charcoal/70 italic">{system.proofLabel}</p>
            </div>
          )}

          <a
            href={system.href}
            className="inline-flex items-center gap-2 mt-6 text-coral hover:text-coral-dark font-medium text-sm transition-colors"
          >
            See full {system.name.toLowerCase()}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

interface ProgressDotProps {
  index: number;
  totalSystems: number;
  scrollYProgress: MotionValue<number>;
}

const ProgressDot = ({ index, totalSystems, scrollYProgress }: ProgressDotProps) => {
  const start = index / totalSystems;
  const end = (index + 1) / totalSystems;

  const width = useTransform(
    scrollYProgress,
    [start - 0.05, start, end, end + 0.05],
    ["8px", "32px", "32px", "8px"],
  );

  const backgroundColor = useTransform(
    scrollYProgress,
    [start - 0.05, start, end, end + 0.05],
    ["#9A8D7C", "#FF4D2E", "#FF4D2E", "#9A8D7C"],
  );

  return <motion.div style={{ width, backgroundColor }} className="h-2 rounded-full" />;
};

export default SixSystems;
