import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";
import neuralCore from "@/assets/neural-core.png";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const Footer = () => {
  return (
    <footer>
      {/* ── Grand Finale Section ── */}
      <section
        className="relative overflow-hidden py-32"
        style={{ background: 'hsl(213, 35%, 5%)' }}
      >
        {/* Cyan radial glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 80% 20%, rgba(0, 209, 255, 0.08) 0%, transparent 60%)',
          }}
        />

        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionFade}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            {/* LEFT — Neural Core Visual */}
            <div className="flex justify-center">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(0, 209, 255, 0.15) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    transform: 'scale(1.3)',
                  }}
                />
                <img
                  src={neuralCore}
                  alt="Creative Core Neural Engine"
                  className="relative w-[320px] md:w-[400px] h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT — Brand Statement */}
            <div className="text-center md:text-left">
              <div className="mb-8">
                <AnimatedLogo size="xl" />
              </div>

              <h2
                className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 tracking-wide"
                style={{ fontWeight: 900, lineHeight: 1.1 }}
              >
                <span className="italic text-electric" style={{ filter: 'drop-shadow(0 0 20px rgba(0,209,255,0.3))' }}>
                  THE FUTURE
                </span>
                <br />
                OF SEASONAL SCALE.
              </h2>

              <p className="text-muted-foreground text-lg mb-10 max-w-md">
                Precision-engineered ad systems that turn your slow months into your strongest quarters.
              </p>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-3 px-10 py-4 rounded-lg text-lg font-display tracking-wider uppercase transition-all duration-200 hover:scale-105"
                style={{
                  background: 'hsl(24, 100%, 50%)',
                  color: 'white',
                  fontWeight: 700,
                  boxShadow: '0 0 30px rgba(255, 107, 0, 0.3)',
                }}
              >
                WORK WITH US
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Minimal LangChain Footer ── */}
      <div
        className="px-6 md:px-10 py-10"
        style={{
          background: 'hsl(213, 38%, 4%)',
          borderTop: '1px solid rgba(0, 255, 255, 0.1)',
        }}
      >
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Left — Logo + Tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <AnimatedLogo size="sm" />
            <p className="text-sm text-muted-foreground italic">
              Observe, Optimize, Dominate.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © {new Date().getFullYear()} Creative Core. All rights reserved.
            </p>
          </div>

          {/* Right — Link Columns */}
          <div className="flex gap-16 text-sm">
            <div>
              <h4 className="font-display text-foreground text-xs uppercase tracking-widest mb-3" style={{ fontWeight: 700 }}>
                Products
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button
                    onClick={() => document.getElementById("engine")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-electric transition-colors duration-150"
                  >
                    Sprints
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-electric transition-colors duration-150"
                  >
                    Audits
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-foreground text-xs uppercase tracking-widest mb-3" style={{ fontWeight: 700 }}>
                Company
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-electric transition-colors duration-150">Privacy</a></li>
                <li><a href="#" className="hover:text-electric transition-colors duration-150">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-foreground text-xs uppercase tracking-widest mb-3" style={{ fontWeight: 700 }}>
                Social
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-electric transition-colors duration-150">LinkedIn</a></li>
                <li><a href="#" className="hover:text-electric transition-colors duration-150">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
