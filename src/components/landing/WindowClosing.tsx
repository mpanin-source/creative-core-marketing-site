import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const WindowClosing = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding" id="urgency">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[700px] mx-auto text-center"
        >
          <Clock className="w-8 h-8 text-accent mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-foreground mb-6">
            PEAK SEASON WAITS FOR NO ONE
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you're in HVAC, your summer window is May-July. If you're in landscaping, it's March-May. If you're in pest control, it's May-August.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We can only take 3 new sprint clients per month (our team is small by design). If you wait until your peak season hits, you'll miss 50% of the window while we build your funnel.
          </p>
          <p className="text-foreground font-semibold mb-8">
            Book your Sprint Audit now. Lock in your spot before your competitors do.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <Clock className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-accent">3 spots left this month</span>
          </div>

          <div className="block">
            <button
              onClick={scrollToContact}
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base transition-all hover:scale-105"
            >
              Schedule Your Sprint Audit
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WindowClosing;
