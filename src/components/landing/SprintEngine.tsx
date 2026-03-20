import { motion, type Variants } from "framer-motion";
import { Search, Map, Palette, Layout, Database, Activity } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const deliverables = [
  { icon: Search, title: "FUNNEL AUDIT", desc: "15-min Loom video breakdown of where your current funnel is losing money. Free before you spend a dime." },
  { icon: Map, title: "CAMPAIGN ROADMAP", desc: "60-day campaign plan with every milestone mapped, every deliverable dated, and clear performance benchmarks." },
  { icon: Palette, title: "AD CREATIVE", desc: "5-10 ad variations across Meta & Google — tested weekly, losers killed, winners scaled." },
  { icon: Layout, title: "LANDING PAGES", desc: "High-converting pages built for one goal: speed to decision. Fewer fields, stronger proof, clear next step." },
  { icon: Database, title: "CRM + LEAD SCORING", desc: "Basic CRM setup with lead scoring automation. Every lead tagged, scored, and auto-followed-up." },
  { icon: Activity, title: "PIXEL TRACKING", desc: "Behavioral tracking that scores visitors by engagement — so your sales team calls the hottest leads first." },
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
            WHAT YOU GET
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground"
            style={{ fontWeight: 900 }}
          >
            60-DAY AD MANAGEMENT TRIAL
            <br />
            <span className="italic text-shimmer-blue">THAT DELIVERS RESULTS, FAST</span>
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
              className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-electric/40 hover:shadow-[0_0_20px_rgba(0,209,255,0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center flex-shrink-0">
                  <d.icon className="w-5 h-5 text-electric" />
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
