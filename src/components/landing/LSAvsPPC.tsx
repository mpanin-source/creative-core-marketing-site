import { motion } from "framer-motion";
import { Check, X, ArrowRight, Zap } from "lucide-react";

const LSAvsPPC = () => {
  return (
    <section className="section-padding bg-card" id="lsa-ppc">
      <div className="container-wide">
        <div className="container-narrow text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold tracking-widest text-accent uppercase">
              Education
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 tracking-wider">
            LSA OR PPC? HERE'S HOW WE KNOW WHICH YOU NEED.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* LSA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-background rounded-xl border border-border"
          >
            <h3 className="font-display text-xl text-foreground tracking-wider mb-2">
              LSA
            </h3>
            <p className="text-xs text-muted-foreground mb-6">Local Service Ads / Pay-Per-Lead</p>
            <ul className="space-y-3 mb-6">
              {[
                { text: "Proximity-heavy (closest = shown first)", good: true },
                { text: "Low-friction (call/text direct from Google)", good: true },
                { text: "Review-dependent (more reviews = higher ranking)", good: true },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span className="text-foreground">Best if: 500+ reviews + established local name</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Bad if: New or competing against bigger names</span>
              </div>
            </div>
          </motion.div>

          {/* PPC */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-background rounded-xl border-2 border-accent/30 shadow-[0_0_30px_rgba(37,99,235,0.08)]"
          >
            <h3 className="font-display text-xl text-foreground tracking-wider mb-2">
              PPC
            </h3>
            <p className="text-xs text-muted-foreground mb-6">Pay-Per-Click Google Ads</p>
            <ul className="space-y-3 mb-6">
              {[
                "Budget-controlled (you decide audience + messaging)",
                "Offer-driven (killer offers beat review counts)",
                "Location-flexible (target ANY zip code)",
                "Brand-building (people learn about you)",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                <span className="text-foreground">Best if: New, building authority, or scaling regionally</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Bad if: You don't have a compelling offer</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strategy Paths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="font-display text-lg text-foreground tracking-wider mb-6 text-center">
            THE STRATEGY
          </h3>
          <div className="space-y-4">
            {[
              { label: "NEW CONTRACTOR?", desc: "Use PPC to build reviews + local name" },
              { label: "ESTABLISHED LOCALLY?", desc: "Use both—LSA for emergency demand, PPC for brand/offer" },
              { label: "SCALING REGIONALLY?", desc: "Use PPC to enter new markets, LSA after you have reviews there" },
            ].map((path, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border">
                <span className="text-xs font-bold tracking-wider text-accent uppercase whitespace-nowrap">
                  {path.label}
                </span>
                <span className="text-sm text-foreground">{path.desc}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 font-medium transition-colors group"
            >
              Our Phase 1 audit determines which is right for you
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LSAvsPPC;
