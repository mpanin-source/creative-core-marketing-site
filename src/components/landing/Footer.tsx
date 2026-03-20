import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const Footer = () => {
  return (
    <footer className="px-6 py-16 md:px-10 md:py-20 border-t border-border bg-background">
      <div className="max-w-[1000px] mx-auto">
        {/* Footer CTA */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-10 pb-10 border-b border-border"
        >
          <p className="text-lg text-muted-foreground mb-4">Still reading? You're our ideal client.</p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
          >
            Schedule Your Sprint Audit
            <ArrowRight size={18} className="arrow-icon transition-transform" />
          </button>
        </motion.div>

        <div className="text-center mb-8 pb-8 border-b border-border">
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Creative Core · Seasonal Marketing Sprints for Local Service Businesses.
            Speed to decision is the only design metric that matters.
          </p>
        </div>

        <div className="text-center mb-6">
          <p className="text-sm text-foreground font-semibold">
            Now accepting 3 new sprint clients per month. Currently serving HVAC, Landscaping, Pest Control, Wellness & Home Services.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-display text-lg text-foreground" style={{ fontWeight: 700 }}>
              <span>Creative </span><span className="text-electric">Core</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">Seasonal Marketing Sprints</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-electric transition-colors duration-200">Privacy</a>
            <a href="#" className="hover:text-electric transition-colors duration-200">Terms</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Creative Core. Built with OpenClaw.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;