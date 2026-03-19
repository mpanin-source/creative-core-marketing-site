import { motion, type Variants } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const WindowClosing = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding section-funnel section-green" id="urgency">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="max-w-[700px] mx-auto text-center"
      >
        <Clock className="w-8 h-8 text-warning mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground mb-6">
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

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/10 border border-warning/30 rounded-full mb-6">
          <Clock className="w-4 h-4 text-warning" />
          <span className="text-sm font-bold text-warning">3 spots left this month</span>
        </div>

        <div className="block">
          <button
            onClick={scrollToContact}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
          >
            Schedule Your Sprint Audit
            <ArrowRight size={18} className="arrow-icon transition-transform" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default WindowClosing;
