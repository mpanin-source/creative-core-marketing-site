import { motion } from "framer-motion";
import { Check, X, ArrowRight, Zap } from "lucide-react";

const LSAvsPPC = () => (
  <section className="section-padding" id="lsa-ppc">
    <div className="max-w-[1200px] mx-auto">
      <div className="container-narrow text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
          <Zap className="w-4 h-4 text-accent" />
          <span className="text-xs font-bold tracking-widest text-accent uppercase">Education</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-4">LSA OR PPC? HERE'S HOW WE KNOW WHICH YOU NEED.</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10 max-w-[1100px] mx-auto mb-12">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 glass-card rounded-xl">
          <h3 className="font-display text-xl font-bold text-foreground mb-2">LSA</h3>
          <p className="text-xs text-muted-foreground mb-6">Local Service Ads / Pay-Per-Lead</p>
          <ul className="space-y-3 mb-6">
            {["Proximity-heavy (closest = shown first)", "Low-friction (call/text direct from Google)", "Review-dependent (more reviews = higher ranking)"].map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />{t}</li>
            ))}
          </ul>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 text-tier-teal mt-0.5 shrink-0" /><span className="text-foreground">Best if: 500+ reviews + established local name</span></div>
            <div className="flex items-start gap-2 text-sm"><X className="w-4 h-4 text-destructive mt-0.5 shrink-0" /><span className="text-muted-foreground">Bad if: New or competing against bigger names</span></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 glass-card rounded-xl border-accent/30 shadow-[0_0_30px_hsl(var(--accent)/0.05)]">
          <h3 className="font-display text-xl font-bold text-foreground mb-2">PPC</h3>
          <p className="text-xs text-muted-foreground mb-6">Pay-Per-Click Google Ads</p>
          <ul className="space-y-3 mb-6">
            {["Budget-controlled (you decide audience + messaging)", "Offer-driven (killer offers beat review counts)", "Location-flexible (target ANY zip code)", "Brand-building (people learn about you)"].map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground"><Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />{t}</li>
            ))}
          </ul>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 text-tier-teal mt-0.5 shrink-0" /><span className="text-foreground">Best if: New, building authority, or scaling regionally</span></div>
            <div className="flex items-start gap-2 text-sm"><X className="w-4 h-4 text-destructive mt-0.5 shrink-0" /><span className="text-muted-foreground">Bad if: You don't have a compelling offer</span></div>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
        <h3 className="font-display text-lg font-bold text-foreground mb-6 text-center">THE STRATEGY</h3>
        <div className="space-y-4">
          {[{ label: "NEW CONTRACTOR?", desc: "Use PPC to build reviews + local name" }, { label: "ESTABLISHED LOCALLY?", desc: "Use both—LSA for emergency demand, PPC for brand/offer" }, { label: "SCALING REGIONALLY?", desc: "Use PPC to enter new markets, LSA after you have reviews there" }].map((path, i) => (
            <div key={i} className="flex items-center gap-4 p-4 glass-card rounded-lg">
              <span className="text-xs font-bold tracking-wider text-accent uppercase whitespace-nowrap">{path.label}</span>
              <span className="text-sm text-foreground">{path.desc}</span>
            </div>
          ))}
        </div>
        <p className="text-center mt-8">
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 font-semibold transition-colors group">
            Our Phase 1 audit determines which is right for you
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </p>
      </motion.div>
    </div>
  </section>
);

export default LSAvsPPC;
