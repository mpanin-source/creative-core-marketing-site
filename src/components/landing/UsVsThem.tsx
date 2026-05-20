import { motion, type Variants } from "framer-motion";
import { Check, X } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const rows = [
  { cat: "Pricing", them: 'Hidden behind "schedule a call"', us: "Published. $497 / $1,500 / $3,000 / $5,000. No mystery." },
  { cat: "Specialization", them: '"We do everything for everyone"', us: "Florida home services only" },
  { cat: "Territory", them: "Sign anyone with a credit card", us: "One client per niche per county" },
  { cat: "Ownership", them: "They keep your assets when you leave", us: "You own the ads, landing pages, CRM, data" },
  { cat: "Lock-in", them: "6–12 month contracts", us: "60-day trial. Walk away anytime." },
  { cat: "Markup", them: "10–20% added to ad spend", us: "Zero markup. Pay Google + Meta directly." },
  { cat: "AI Search Strategy", them: '"What\'s GEO?"', us: "Building it from day one" },
];

const UsVsThem = () => {
  return (
    <section id="us-vs-them" className="px-6 py-32 md:px-8 section-alt">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">THE COMPARISON</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground" style={{ fontWeight: 900 }}>
            OTHER FLORIDA AGENCIES <span className="italic text-shimmer-blue">VS. CREATIVE CORE</span>
          </h2>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
          variants={sectionFade}
          className="hidden md:block bg-card border border-border rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-12 px-6 py-4 border-b border-border bg-background/40">
            <div className="col-span-3 text-xs font-semibold tracking-widest uppercase text-muted-foreground">Category</div>
            <div className="col-span-4 text-xs font-semibold tracking-widest uppercase text-muted-foreground">Other Florida Agencies</div>
            <div className="col-span-5 text-xs font-semibold tracking-widest uppercase text-electric">Creative Core</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.cat}
              className={`grid grid-cols-12 px-6 py-5 items-start gap-4 ${i !== rows.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="col-span-3 font-display uppercase text-foreground text-lg" style={{ fontWeight: 700 }}>
                {r.cat}
              </div>
              <div className="col-span-4 flex items-start gap-2 text-sm text-muted-foreground">
                <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                <span>{r.them}</span>
              </div>
              <div className="col-span-5 flex items-start gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                <span>{r.us}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile stacked */}
        <div className="md:hidden space-y-4">
          {rows.map((r, i) => (
            <motion.div
              key={r.cat}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card border border-border rounded-xl p-5"
            >
              <p className="font-display text-xs uppercase text-electric tracking-widest mb-3" style={{ fontWeight: 800 }}>{r.cat}</p>
              <div className="flex items-start gap-2 mb-2.5">
                <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{r.them}</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{r.us}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsVsThem;
