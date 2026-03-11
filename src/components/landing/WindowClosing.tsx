import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const WindowClosing = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="px-6 py-12 md:px-8 md:py-16" id="urgency">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-accent" />
            <h2 className="text-2xl md:text-3xl font-display font-black text-foreground">
              THE WINDOW IS CLOSING
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
            Your seasonal window is closing. The contractors who move first win for the next 3 years. Those who wait chase volume while others enjoy margin.
          </p>
          <div className="glass-card rounded-xl p-5 mb-8 inline-block">
            <p className="text-sm text-foreground font-semibold">
              Now accepting <span className="text-accent">3 new partners</span> for the Spring 2026 rollout.
            </p>
          </div>
          <div>
            <button
              onClick={scrollToContact}
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base transition-all hover:scale-105"
            >
              Schedule Your Growth Audit
              <ArrowRight size={18} />
            </button>
            <p className="text-xs text-muted-foreground mt-2">15-min strategy session.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WindowClosing;
