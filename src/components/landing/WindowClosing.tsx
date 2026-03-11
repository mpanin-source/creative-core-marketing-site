import { motion } from "framer-motion";
import { Clock, AlertTriangle, ArrowRight } from "lucide-react";

const WindowClosing = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding relative overflow-hidden" id="urgency">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(38,92%,55%,0.05),transparent_70%)]" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <AlertTriangle className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground">
              THE WINDOW IS CLOSING
            </h2>
          </div>

          <div className="space-y-6 text-center mb-10">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Your database is aging. Every month, old leads get colder. Your seasonal window is closing—Roofing/HVAC peak starts in <span className="font-bold text-accent">weeks</span>.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              The contractors who move first on SMS reactivation win for the next 3 years. Those who wait will be chasing volume while you're enjoying margin.
            </p>
          </div>

          {/* Scarcity Box */}
          <div className="glass-card rounded-xl p-6 md:p-8 mb-10 border-accent/20">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <Clock className="w-6 h-6 text-accent" />
              <p className="font-display text-xl font-bold text-foreground">
                Q1 ROLLOUT — LIMITED CAPACITY
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-secondary rounded-lg p-5">
                <p className="text-3xl font-display font-black text-accent">3</p>
                <p className="text-sm text-muted-foreground mt-1">HVAC contractors</p>
              </div>
              <div className="bg-secondary rounded-lg p-5">
                <p className="text-3xl font-display font-black text-accent">3</p>
                <p className="text-sm text-muted-foreground mt-1">Roofing contractors</p>
              </div>
              <div className="bg-secondary rounded-lg p-5">
                <p className="text-3xl font-display font-black text-accent">3</p>
                <p className="text-sm text-muted-foreground mt-1">Solar contractors</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              We are capping our Q1 rollout to <span className="font-bold text-foreground">3 contractors per niche</span> to ensure personal attention. After these spots are filled, we move to Q2 pricing <span className="text-accent font-semibold">(+$2K/month premium)</span>.
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg transition-all hover:scale-105"
            >
              CLAIM YOUR SPOT BEFORE Q2 PRICING
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WindowClosing;
