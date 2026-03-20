import { motion, type Variants } from "framer-motion";
import { Search, Map, Palette, Layout, Database, Activity, BellRing } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const deliverables = [
  { icon: Search, title: "FUNNEL AUDIT", desc: "15-min Loom video breakdown of where your current funnel is losing money. Free before you spend a dime.", tier: null },
  { icon: Map, title: "SPRINT PLAN", desc: "30-day campaign roadmap synced to your peak season — every milestone mapped, every deliverable dated.", tier: null },
  { icon: Palette, title: "CREATIVE SUITE", desc: "10+ ad variations across Meta & Google — UGC-style content that looks native and outperforms polished ads 3x.", tier: null },
  { icon: Layout, title: "LANDING PAGES", desc: "High-converting pages built for one goal: speed to decision. Fewer fields, stronger proof, clear next step.", tier: null },
  { icon: Database, title: "LEAD VAULT", desc: "Your own CRM with every lead tagged, scored, and auto-followed-up. You own these contacts forever.", tier: null },
  { icon: Activity, title: "PIXEL TRACKING", desc: "Behavioral tracking that scores visitors by engagement — 80% scroll depth = warm lead flagged for follow-up.", tier: null },
  { icon: BellRing, title: "WAKE-UP AGENT", desc: "Off-season reactivation campaigns that turn dormant leads into booked jobs before next peak season.", tier: "TIER 3-4" },
];

const SprintEngine = () => {
  return (
    <section className="px-6 py-32 md:px-8 section-alt" id="engine">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            THE SPRINT ENGINE
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground"
            style={{ fontWeight: 900 }}
          >
            30-45 DAY SEASONAL SPRINTS
            <br />
            <span className="text-electric">THAT DELIVER RESULTS, FAST</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {deliverables.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`p-6 rounded-2xl border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-electric/40 hover:shadow-[0_0_20px_rgba(0,209,255,0.1)] relative ${
                d.tier ? "border-safety/30" : "border-border"
              }`}
              style={d.tier ? { boxShadow: "0 0 20px rgba(255,107,0,0.08)" } : undefined}
            >
              {d.tier && (
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-safety/15 text-safety border border-safety/30">
                  {d.tier}
                </span>
              )}
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  d.tier ? "bg-safety/15" : "bg-electric/10"
                }`}>
                  <d.icon className={`w-5 h-5 ${d.tier ? "text-safety" : "text-electric"}`} />
                </div>
                <div>
                  <h3 className="font-display text-base text-foreground uppercase mb-1" style={{ fontWeight: 700 }}>
                    {d.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SprintEngine;
