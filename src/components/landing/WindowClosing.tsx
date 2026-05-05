import { motion, type Variants } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const WindowClosing = () => {
  const goToBooking = () => {
    window.location.href = "/pricing-and-booking";
  };

  return (
    <section className="section-padding section-funnel section-warm" id="urgency">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="max-w-[700px] mx-auto text-center"
      >
        <Clock className="w-8 h-8 text-warning mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-foreground mb-6" style={{ fontWeight: 700 }}>
          SPOTS ARE LIMITED
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We're accepting 3 Florida home service clients per county. Once your county fills, we either raise prices or close to new clients in your area.
        </p>
        <p className="text-foreground font-semibold mb-8">
          Book your free audit now. Lock in your county before someone else does.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-safety/10 border border-safety/30 rounded-full mb-6">
          <Clock className="w-4 h-4 text-safety" />
          <span className="text-sm font-bold text-safety">Now Accepting 3 Florida Home Service Clients</span>
        </div>

        <div className="block">
          <button
            onClick={goToBooking}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
          >
            See Pricing &amp; Book Call
            <ArrowRight size={18} className="arrow-icon transition-transform" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default WindowClosing;
