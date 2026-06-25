import { MapPin, Zap, Star, Trophy, Sparkles, ShieldCheck, Target } from "lucide-react";
import { GlowOrb } from "@/components/cobalt-refresh/patterns";

interface Play {
  icon: typeof MapPin;
  number: string;
  title: string;
  description: string;
  featured?: boolean;
}

const plays: Play[] = [
  {
    icon: MapPin,
    number: "01",
    title: "Hyperlocal schema",
    description:
      "County-specific service area pages with structured data. Tells Google exactly where you serve and what you do.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Speed-to-lead workflows",
    description:
      "Sub-60-second response automation. The single highest-leverage conversion fix for home services.",
  },
  {
    icon: Star,
    number: "03",
    title: "Review velocity engineering",
    description:
      "75+ reviews threshold targeting. Where Map Pack rankings compound and AI overviews start citing you.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Map Pack obsession",
    description:
      "Top-3 ranking as the primary KPI. The only spots that matter for \"near me\" home-service searches.",
  },
  {
    icon: Sparkles,
    number: "05",
    title: "AI Overview citation chasing",
    description:
      "Schema + atomic answers + citation velocity engineered for ChatGPT, Claude, Perplexity, and Google's AI Overview. The 2026 visibility moat.",
    featured: true,
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "LSA lead-quality recovery",
    description:
      "Active monitoring and credit recovery on unqualified leads through Google's review process. Most agencies skip it — the lazy ones eat the bad CPL.",
  },
  {
    icon: Target,
    number: "07",
    title: "Local audience engineering",
    description:
      "The right 200 locals seeing your work, not 50K strangers scrolling past.",
  },
];

const LocalPlaybook = () => {
  const regularPlays = plays.filter((p) => !p.featured);
  const featuredPlay = plays.find((p) => p.featured);

  return (
    <section id="local-playbook" className="bg-cream-light py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-6">
          04 · Local domination playbook
        </p>
        <h2
          className="font-display text-4xl md:text-6xl text-charcoal mb-6 max-w-4xl leading-tight"
          style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          How we actually dominate your county.
        </h2>
        <p className="text-lg text-charcoal/70 mb-12 max-w-2xl">
          Seven plays most Florida agencies skip because they're operationally annoying. Each one compounds.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {regularPlays.map((p) => (
            <div
              key={p.number}
              className="bg-white rounded-lg p-6 border border-charcoal/10 hover:border-coral/40 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-display text-coral-dark text-2xl leading-none" style={{ fontWeight: 700 }}>
                  {p.number}
                </span>
                <p.icon className="w-5 h-5 text-coral/60" />
              </div>
              <h3 className="font-display text-xl text-charcoal mb-3 leading-tight" style={{ fontWeight: 700 }}>
                {p.title}
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        {featuredPlay && (
          <div className="bg-white rounded-lg p-8 md:p-10 border-2 border-coral shadow-[0_8px_30px_rgba(255,77,46,0.15)] relative">
            <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-coral text-white text-xs font-medium uppercase tracking-wider">
              Future-defining
            </div>
            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start mt-2">
              <div>
                <span
                  className="font-display text-coral-dark text-6xl block leading-none"
                  style={{ fontWeight: 700 }}
                >
                  {featuredPlay.number}
                </span>
                <featuredPlay.icon className="w-8 h-8 text-coral/60 mt-4" />
              </div>
              <div>
                <h3
                  className="font-display text-2xl md:text-3xl text-charcoal mb-3 leading-tight"
                  style={{ fontWeight: 700 }}
                >
                  {featuredPlay.title}
                </h3>
                <p className="text-base md:text-lg text-charcoal/80 leading-relaxed">
                  {featuredPlay.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LocalPlaybook;
