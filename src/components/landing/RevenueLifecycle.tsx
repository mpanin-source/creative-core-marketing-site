import { motion } from "framer-motion";
import { Zap, TrendingUp, ArrowRight } from "lucide-react";

const RevenueLifecycle = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding" id="revenue-lifecycle">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">
            THE REVENUE LIFECYCLE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4">
            SURVIVAL VS. WEALTH
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two types of revenue. One keeps you alive. The other builds your legacy. You need both.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-[1100px] mx-auto mb-12">
          {/* Emergency Dispatch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative glass-card rounded-xl p-8 overflow-hidden border-destructive/20"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-destructive/60" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  THE EMERGENCY DISPATCH
                </h3>
                <p className="text-sm text-destructive font-semibold">Fast Cash</p>
              </div>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Your AC dies in July. Your roof leaks in March. You need it fixed <span className="font-bold text-foreground">NOW.</span> Our seasonal ads capture these desperate moments.
            </p>
            <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4 mb-4">
              <p className="text-2xl font-display font-bold text-foreground">$2K–$5K <span className="text-sm font-body font-normal text-muted-foreground">per job</span></p>
              <p className="text-sm text-muted-foreground mt-1">Immediate revenue to keep the lights on.</p>
            </div>
          </motion.div>

          {/* Planned Replacement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative glass-card rounded-xl p-8 overflow-hidden border-accent/20"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  THE PLANNED REPLACEMENT
                </h3>
                <p className="text-sm text-accent font-semibold">Lasting Wealth</p>
              </div>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-4">
              That AC you fixed last year? It's 7 years old. Our SMS engine automatically follows up at month 6 and 12. The homeowner realizes <span className="italic text-foreground">"I should replace this before it dies again."</span>
            </p>
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-4">
              <p className="text-2xl font-display font-bold text-foreground">$15K–$30K <span className="text-sm font-body font-normal text-muted-foreground">per job</span></p>
              <p className="text-sm text-muted-foreground mt-1">Planned, high-margin revenue to build your legacy.</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="glass-card rounded-xl p-8 md:p-10 border-accent/20">
            <p className="text-xl md:text-2xl font-display font-bold text-foreground leading-snug mb-4">
              MOST CONTRACTORS ONLY CHASE THE EMERGENCY BECAUSE THEY DON'T HAVE THE BUCKET TO CATCH THE WEALTH.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We provide the bucket. Then we fill it.
            </p>
            <button
              onClick={scrollToContact}
              className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-lg text-base transition-all hover:scale-105"
            >
              GET YOUR BUCKET
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevenueLifecycle;
