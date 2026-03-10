import { motion } from "framer-motion";
import { Zap, TrendingUp, ArrowRight } from "lucide-react";

const RevenueLifecycle = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-card" id="revenue-lifecycle">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase mb-4">
            THE REVENUE LIFECYCLE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-wider mb-4">
            SURVIVAL VS. WEALTH
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two types of revenue. One keeps you alive. The other builds your legacy. You need both.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Emergency Dispatch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-background border-2 border-destructive/30 rounded-xl p-8 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-destructive/60" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground tracking-wider">
                  THE EMERGENCY DISPATCH
                </h3>
                <p className="text-sm text-destructive font-semibold">Fast Cash</p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              Your AC dies in July. Your roof leaks in March. You need it fixed <span className="font-bold">NOW.</span> Our seasonal ads capture these desperate moments.
            </p>
            <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4 mb-4">
              <p className="text-2xl font-display text-foreground tracking-wider">$2K–$5K <span className="text-sm font-body text-muted-foreground">per job</span></p>
              <p className="text-sm text-muted-foreground mt-1">Immediate revenue to keep the lights on.</p>
            </div>
          </motion.div>

          {/* Planned Replacement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-background border-2 border-accent/30 rounded-xl p-8 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground tracking-wider">
                  THE PLANNED REPLACEMENT
                </h3>
                <p className="text-sm text-accent font-semibold">Lasting Wealth</p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              That AC you fixed last year? It's 7 years old. Our SMS engine automatically follows up at month 6 and 12. The homeowner realizes <span className="italic">"I should replace this before it dies again."</span>
            </p>
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-4">
              <p className="text-2xl font-display text-foreground tracking-wider">$15K–$30K <span className="text-sm font-body text-muted-foreground">per job</span></p>
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
          <div className="bg-foreground text-background rounded-xl p-8 md:p-10">
            <p className="text-xl md:text-2xl font-display tracking-wider leading-snug mb-4">
              MOST CONTRACTORS ONLY CHASE THE EMERGENCY BECAUSE THEY DON'T HAVE THE BUCKET TO CATCH THE WEALTH.
            </p>
            <p className="text-lg text-background/80 mb-6">
              We provide the bucket. Then we fill it.
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-display text-base tracking-wider rounded-lg hover:bg-accent/90 transition-colors"
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
