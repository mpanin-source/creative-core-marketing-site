import { motion, type Variants } from "framer-motion";
import { X, Check } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const goodFit = [
  "You run a Florida home service business (HVAC, roofing, plumbing, tinting, pest control, etc.)",
  "Your phone isn't ringing as much as your competitor's — and you don't know why",
  "You want better marketing without overpaying a generic agency",
  "You're open to starting small ($497) and scaling up when you see results",
];

const notFit = [
  "You expect overnight results (good marketing takes 30–60 days to optimize)",
  "You're not willing to share data or grant tracking access",
  "You want a contract-locked agency relationship (we don't lock you in)",
  "You're outside Florida (we only work in FL home services)",
];

const WhoThisIsFor = () => {
  return (
    <section className="px-6 py-32 md:px-8" id="who-this-is-for">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-8"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-coral-dark">
            THE AUDIT
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground"
            style={{ fontWeight: 900 }}
          >
            THIS IS FOR LOCAL SERVICE BUSINESSES
            <br />
            <span className="italic text-shimmer-blue">WHO WANT TO OWN THEIR MARKET</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-base text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-12"
        >
          We work with local service businesses — HVAC companies, roofing contractors, plumbing companies, med spas, wellness clinics, law firms, and home service providers.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Good Fit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-2xl border border-safety/30 bg-card/60 backdrop-blur-sm"
            style={{ boxShadow: "0 0 24px rgba(255, 77, 46,0.08)" }}
          >
            <h3 className="font-display text-xl text-safety uppercase mb-6" style={{ fontWeight: 700 }}>
              YOU'RE A GOOD FIT IF:
            </h3>
            <div className="space-y-4">
              {goodFit.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-safety flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground leading-relaxed">{s}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Not a Fit */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-2xl border border-destructive/20 bg-card/60 backdrop-blur-sm"
          >
            <h3 className="font-display text-xl text-destructive uppercase mb-6" style={{ fontWeight: 700 }}>
              YOU'RE NOT A GOOD FIT IF:
            </h3>
            <div className="space-y-4">
              {notFit.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
