import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const Footer = () => {
  return (
    <footer className="border-t border-border" style={{ background: "hsl(213, 35%, 8%)" }}>
      {/* CTA strip */}
      <div className="px-6 py-16 md:px-10 md:py-20">
        <div className="max-w-[1000px] mx-auto">
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
              Schedule Your Free Ad Audit
              <ArrowRight size={18} className="arrow-icon transition-transform" />
            </button>
          </motion.div>

          <div className="text-center mb-8 pb-8 border-b border-border">
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Creative Core · Better Ads, Better Results — For Half The Price.
            </p>
          </div>

          <div className="text-center mb-6">
            <p className="text-sm text-foreground font-semibold">
              Now accepting 8 clients total. Currently serving HVAC, Roofing, Plumbing, Med Spas, Wellness & Home Services.
            </p>
          </div>
        </div>
      </div>

      {/* Branded footer bottom */}
      <div className="border-t border-border px-6 py-12 md:py-16" style={{ background: "hsl(213, 38%, 6%)" }}>
        <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-6">
          <AnimatedLogo size="lg" />

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-electric transition-colors duration-200">Privacy</a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-electric transition-colors duration-200">Terms</a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Creative Core. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
