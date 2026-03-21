import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const letterReveal: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const letterItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Footer = () => {
  const brandText = "CREATIVE CORE";

  return (
    <footer className="border-t border-border">
      {/* LangChain-style branded CTA block */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, hsl(213, 35%, 8%) 0%, hsl(213, 40%, 5%) 100%)" }}
      >
        {/* Subtle radial glow behind logo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(0, 209, 255, 0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 px-6 py-24 md:py-32 lg:py-40">
          <div className="max-w-[1100px] mx-auto flex flex-col items-center">
            {/* Large spaced-out brand name — LangChain style */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={letterReveal}
              className="flex items-center justify-center gap-[0.15em] md:gap-[0.2em] mb-10 md:mb-14 flex-wrap"
            >
              {brandText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={letterItem}
                  className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
                  style={{
                    fontWeight: 800,
                    color: char === " " ? "transparent" : "hsl(var(--foreground))",
                    width: char === " " ? "0.4em" : undefined,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionFade}
              className="text-muted-foreground text-base md:text-lg mb-10 text-center max-w-xl leading-relaxed"
            >
              Better Ads, Better Results — For Half The Price.
            </motion.p>

            {/* Dual CTA buttons */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionFade}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold"
              >
                Schedule Your Sprint Audit
                <ArrowRight size={18} className="arrow-icon transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById("engine")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold border border-border text-foreground hover:border-electric/40 hover:text-electric transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                See How It Works
              </button>
            </motion.div>

            {/* Capacity note */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionFade}
              className="text-sm text-muted-foreground mt-10 text-center"
            >
              Now accepting 8 clients total. Currently serving HVAC, Roofing, Plumbing, Med Spas, Wellness & Home Services.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Minimal footer bottom */}
      <div className="px-6 py-8" style={{ background: "hsl(213, 42%, 4%)" }}>
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Creative Core. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-electric transition-colors duration-200">Privacy</a>
            <a href="#" className="hover:text-electric transition-colors duration-200">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;