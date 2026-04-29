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

// Last letter of CREATIVE reacts to CORE's taps
const lastCreativeItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (totalDelay: number) => ({
    opacity: 1,
    y: [20, 0, 0, -4, 0, 0, -3, 0],
    transition: {
      duration: 2,
      delay: totalDelay,
      times: [0, 0.2, 0.45, 0.52, 0.6, 0.75, 0.82, 0.9],
      ease: "easeOut",
    },
  }),
};

// "CORE" letters: reveal → first tap → pause → second tap + turn blue
const coreLetterItem: Variants = {
  hidden: { opacity: 0, y: 20, color: "hsl(0, 0%, 95%)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: [20, 0, 0, -8, 0, 0, -6, 0],
    color: [
      "hsl(0, 0%, 95%)",
      "hsl(0, 0%, 95%)",
      "hsl(0, 0%, 95%)",
      "hsl(0, 0%, 95%)",
      "hsl(0, 0%, 95%)",
      "hsl(0, 0%, 95%)",
      "hsl(190, 100%, 50%)",
      "hsl(190, 100%, 50%)",
    ],
    filter: [
      "drop-shadow(0 0 0px transparent)",
      "drop-shadow(0 0 0px transparent)",
      "drop-shadow(0 0 0px transparent)",
      "drop-shadow(0 0 0px transparent)",
      "drop-shadow(0 0 0px transparent)",
      "drop-shadow(0 0 0px transparent)",
      "drop-shadow(0 0 12px rgba(0,209,255,0.4))",
      "drop-shadow(0 0 12px rgba(0,209,255,0.4))",
    ],
    transition: {
      duration: 2,
      delay,
      times: [0, 0.2, 0.45, 0.55, 0.65, 0.75, 0.85, 1],
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  const creativeText = "CREATIVE";
  const coreText = "CORE";

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
            {/* Large spaced-out brand name */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={letterReveal}
              className="flex items-center justify-center gap-[0.15em] md:gap-[0.2em] mb-10 md:mb-14 flex-wrap"
            >
              {/* CREATIVE letters — last letter bounces on CORE taps */}
              {creativeText.split("").map((char, i) => {
                const isLast = i === creativeText.length - 1;
                return (
                  <motion.span
                    key={`c-${i}`}
                    custom={i * 0.04}
                    variants={isLast ? lastCreativeItem : letterItem}
                    className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
                    style={{ fontWeight: 800, color: "hsl(var(--foreground))" }}
                  >
                    {char}
                  </motion.span>
                );
              })}
              {/* Space */}
              <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl" style={{ width: "0.4em" }} />
              {/* CORE letters — double tap, turns blue, then pulses */}
              {coreText.split("").map((char, i) => (
                <motion.span
                  key={`o-${i}`}
                  custom={(creativeText.length + 1 + i) * 0.04}
                  variants={coreLetterItem}
                  className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight footer-core-glow"
                  style={{ fontWeight: 800 }}
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
              AI-Powered Marketing for Florida Home Services. One Client Per Niche, Per County.
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
                onClick={() => document.getElementById("gateway-offer")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold"
              >
                Get Your $497 Website
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
              className="text-sm text-muted-foreground mt-10 text-center max-w-2xl"
            >
              Now accepting 3 Florida home service clients. Specializing in window tinting, roofing, HVAC, plumbing, painting, junk removal, tree service, and more.
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