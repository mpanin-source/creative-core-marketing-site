import { motion } from "framer-motion";
import { Clock, AlertTriangle, ArrowRight } from "lucide-react";

const WindowClosing = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-foreground text-background" id="urgency">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <AlertTriangle className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-wider text-background">
              THE WINDOW IS CLOSING
            </h2>
          </div>

          <div className="space-y-6 text-center mb-10">
            <p className="text-lg md:text-xl text-background/90 leading-relaxed max-w-3xl mx-auto">
              Your database is aging. Every month, old leads get colder. Your seasonal window is closing—Roofing/HVAC peak starts in <span className="font-bold text-accent">weeks</span>.
            </p>
            <p className="text-lg md:text-xl text-background/90 leading-relaxed max-w-3xl mx-auto">
              The contractors who move first on SMS reactivation win for the next 3 years. Those who wait will be chasing volume while you're enjoying margin.
            </p>
          </div>

          {/* Scarcity Box */}
          <div className="bg-background/10 border border-background/20 rounded-xl p-6 md:p-8 mb-10">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <Clock className="w-6 h-6 text-accent" />
              <p className="font-display text-xl text-background tracking-wider">
                Q1 ROLLOUT — LIMITED CAPACITY
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-background/5 rounded-lg p-5">
                <p className="text-3xl font-display text-accent">3</p>
                <p className="text-sm text-background/70 mt-1">HVAC contractors</p>
              </div>
              <div className="bg-background/5 rounded-lg p-5">
                <p className="text-3xl font-display text-accent">3</p>
                <p className="text-sm text-background/70 mt-1">Roofing contractors</p>
              </div>
              <div className="bg-background/5 rounded-lg p-5">
                <p className="text-3xl font-display text-accent">3</p>
                <p className="text-sm text-background/70 mt-1">Solar contractors</p>
              </div>
            </div>
            <p className="text-sm text-background/60 text-center mt-4">
              We are capping our Q1 rollout to <span className="font-bold text-background/90">3 contractors per niche</span> to ensure personal attention. After these spots are filled, we move to Q2 pricing <span className="text-accent font-semibold">(+$2K/month premium)</span>.
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-display text-lg tracking-wider rounded-lg hover:bg-accent/90 transition-colors shadow-[0_0_20px_hsl(var(--accent)/0.3)]"
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
