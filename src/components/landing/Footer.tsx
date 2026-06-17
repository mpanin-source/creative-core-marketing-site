import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

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

// "CORE" letters: reveal → first tap → pause → second tap + turn cyan
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
      "hsl(9, 100%, 59%)",
      "hsl(9, 100%, 59%)",
    ],
    filter: [
      "drop-shadow(0 0 0px transparent)",
      "drop-shadow(0 0 0px transparent)",
      "drop-shadow(0 0 0px transparent)",
      "drop-shadow(0 0 0px transparent)",
      "drop-shadow(0 0 0px transparent)",
      "drop-shadow(0 0 0px transparent)",
      "drop-shadow(0 0 12px rgba(255, 77, 46,0.4))",
      "drop-shadow(0 0 12px rgba(255, 77, 46,0.4))",
    ],
    transition: {
      duration: 2,
      delay,
      times: [0, 0.2, 0.45, 0.55, 0.65, 0.75, 0.85, 1],
      ease: "easeOut",
    },
  }),
};

import { CALENDLY_URL as CALENDLY } from "@/config/site";
import { handleCalendlyClick } from "@/lib/calendly";

const Footer = () => {
  const creativeText = "CREATIVE";
  const coreText = "CORE";

  return (
    <footer className="border-t border-slate-dark">
      {/* Animated wordmark block (preserved from Round 6, color-migrated to Path A) */}
      <div className="relative overflow-hidden bg-navy-deep">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(255, 77, 46, 0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 px-6 py-20 md:py-24">
          <div className="max-w-[1100px] mx-auto flex flex-col items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={letterReveal}
              className="flex items-center justify-center gap-[0.15em] md:gap-[0.2em] mb-8 flex-wrap"
            >
              {creativeText.split("").map((char, i) => {
                const isLast = i === creativeText.length - 1;
                return (
                  <motion.span
                    key={`c-${i}`}
                    custom={i * 0.04}
                    variants={isLast ? lastCreativeItem : letterItem}
                    className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-cream"
                    style={{ fontWeight: 800 }}
                  >
                    {char}
                  </motion.span>
                );
              })}
              <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl" style={{ width: "0.4em" }} />
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

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionFade}
              className="text-slate-light text-base md:text-lg text-center max-w-xl leading-relaxed"
            >
              AI-Powered Marketing for Florida Home Services.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionFade}
              className="text-slate-light/70 text-sm text-center italic mt-3 max-w-xl"
            >
              One client per niche, per county.
            </motion.p>
          </div>
        </div>
      </div>

      {/* 4-column navigation block */}
      <div className="bg-navy-deep px-6 py-16 border-t border-slate-dark">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-xs uppercase tracking-wider font-medium text-cyan mb-4">
              Services
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/seo" className="text-slate-light hover:text-cream transition-colors">SEO</Link></li>
              <li><Link to="/services/sem" className="text-slate-light hover:text-cream transition-colors">SEM &amp; Paid Search</Link></li>
              <li><Link to="/services/geo" className="text-slate-light hover:text-cream transition-colors">GEO &amp; AI Search</Link></li>
              <li><Link to="/services/custom-software" className="text-slate-light hover:text-cream transition-colors">Custom Software</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider font-medium text-cyan mb-4">
              Company
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/pricing-and-booking" className="text-slate-light hover:text-cream transition-colors">Pricing</Link></li>
              <li><Link to="/process" className="text-slate-light hover:text-cream transition-colors">Process</Link></li>
              <li><Link to="/blog" className="text-slate-light hover:text-cream transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-slate-light hover:text-cream transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider font-medium text-cyan mb-4">
              Get started
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCalendlyClick}
                  className="text-slate-light hover:text-cream transition-colors"
                >
                  Book strategy call
                </a>
              </li>
              <li>
                <a
                  href="mailto:paninmax2002@gmail.com"
                  className="text-slate-light hover:text-cream transition-colors"
                >
                  Email us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider font-medium text-cyan mb-4">
              Creative Core
            </p>
            <p className="text-sm text-slate-light leading-relaxed">
              AI-powered marketing for Florida home services.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-navy-deep px-6 py-8 border-t border-slate-dark">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-light">
            © {new Date().getFullYear()} Creative Core. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs">
            <p className="text-slate-light">Sarasota, FL · Florida-based · Florida-licensed pros only</p>
            <a href="#" className="text-slate-light hover:text-cream transition-colors">Privacy</a>
            <a href="#" className="text-slate-light hover:text-cream transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
