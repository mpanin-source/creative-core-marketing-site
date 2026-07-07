import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { RefreshLockup } from "@/components/cobalt-refresh/logo";
import { CALENDLY_URL as CALENDLY } from "@/config/site";
import { handleCalendlyClick } from "@/lib/calendly";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const Footer = () => {
  return (
    <footer className="border-t border-slate-dark">
      {/* New logo lockup block (replaces the Round 6 animated wordmark) */}
      <div className="relative overflow-hidden bg-navy-deep">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(58, 134, 255, 0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 px-6 py-20 md:py-24">
          <div className="max-w-[1100px] mx-auto flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-cream mb-8"
            >
              <RefreshLockup size={92} />
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
            <Link to="/privacy" className="text-slate-light hover:text-cream transition-colors">Privacy</Link>
            <Link to="/terms" className="text-slate-light hover:text-cream transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
