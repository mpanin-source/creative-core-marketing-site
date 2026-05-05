import { motion, type Variants } from "framer-motion";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const rows = [
  { label: "Monthly fee charged", them: "$3,000", us: "$1,500–$5,000" },
  { label: "What you control", them: "Their dashboard only", us: "Your ad accounts directly" },
  { label: "Markup on ad spend", them: "10–25% added", us: "Zero" },
  { label: "Where ad spend goes", them: "Through their account", us: "Direct to Google/Meta from yours" },
  { label: "Ad spend visibility", them: "\"Trust the report\"", us: "Real-time, full access" },
];

const CostTransparency = () => {
  return (
    <section id="cost-transparency" className="px-6 py-32 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            HOW OUR PRICING WORKS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-5" style={{ fontWeight: 900 }}>
            ZERO MARKUP. YOU PAY GOOGLE + META <span className="italic text-shimmer-blue">DIRECTLY.</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10"
        >
          <p>
            This is the part most agencies hide: when you pay your current agency $3,000/month, they typically take 10–25% as "ad management fees" on top of your ad spend, then keep what's left after running ads.
          </p>
          <p>
            Creative Core works differently. Our tier pricing is what you pay <span className="text-foreground font-semibold">us</span> for the <span className="text-foreground font-semibold">work</span>. Your ad spend goes directly to Google and Meta from <span className="text-foreground font-semibold">your</span> credit card on <span className="text-foreground font-semibold">your</span> ad accounts. We never touch the money. Every dollar of your ad spend is YOUR ad spend — fully visible in your accounts at all times.
          </p>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
          variants={sectionFade}
          className="hidden md:block bg-card border border-border rounded-2xl overflow-hidden mb-10"
        >
          <div className="grid grid-cols-12 px-6 py-4 border-b border-border bg-background/40">
            <div className="col-span-4 text-xs font-semibold tracking-widest uppercase text-muted-foreground">Category</div>
            <div className="col-span-4 text-xs font-semibold tracking-widest uppercase text-muted-foreground">Other Agencies</div>
            <div className="col-span-4 text-xs font-semibold tracking-widest uppercase text-electric">Creative Core</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-12 px-6 py-5 items-start gap-4 ${i !== rows.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="col-span-4 font-display text-sm uppercase text-foreground" style={{ fontWeight: 700 }}>
                {r.label}
              </div>
              <div className="col-span-4 text-sm text-muted-foreground">{r.them}</div>
              <div className="col-span-4 text-sm text-foreground">{r.us}</div>
            </div>
          ))}
        </motion.div>

        {/* Mobile stacked */}
        <div className="md:hidden space-y-3 mb-10">
          {rows.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card border border-border rounded-xl p-5"
            >
              <p className="font-display text-xs uppercase text-electric tracking-widest mb-3" style={{ fontWeight: 800 }}>{r.label}</p>
              <div className="text-sm text-muted-foreground mb-2"><span className="text-xs uppercase text-muted-foreground/60">Them: </span>{r.them}</div>
              <div className="text-sm text-foreground"><span className="text-xs uppercase text-electric/80">Us: </span>{r.us}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center text-foreground font-display text-xl md:text-2xl uppercase max-w-3xl mx-auto leading-snug"
          style={{ fontWeight: 700 }}
        >
          Our fee is <span className="text-electric">100% for the work we do.</span> Your ad budget is <span className="text-electric">100% your ad budget.</span> No hidden fees. No surprises. You see every dollar.
        </motion.p>
      </div>
    </section>
  );
};

export default CostTransparency;
