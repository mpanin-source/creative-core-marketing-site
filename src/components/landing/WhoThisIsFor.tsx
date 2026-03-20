import { motion, type Variants } from "framer-motion";
import { X, Check } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const problems = [
  "You're running generic ads that look like every other contractor in your zip code.",
  "You're paying a 15-20% management fee on top of ad spend and don't know where the money goes.",
  "Your agency uses the same playbook for plumbers, dentists, and dog walkers.",
  "Leads come in, sit in a spreadsheet, and die — nobody follows up in time.",
  "You've been burned before and you're skeptical of anyone who says 'trust us.'",
];

const solutions = [
  "Pre-season launch windows that capture demand before competitors wake up.",
  "Exclusive territory — we only take ONE client per niche per local area.",
  "Lead scoring and pixel tracking so you know exactly which leads are hot.",
  "Automated 60-second follow-up via SMS + email — no lead goes cold.",
  "50% refund guarantee: 15+ qualified calls in 45 days or you get half back.",
];

const WhoThisIsFor = () => {
  return (
    <section className="px-6 py-32 md:px-8" id="who-this-is-for">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            THE AUDIT
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground"
            style={{ fontWeight: 900 }}
          >
            THIS IS FOR LOCAL SERVICE BUSINESSES
            <br />
            <span className="text-electric">WHO WANT TO OWN THEIR MARKET</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-2xl border border-destructive/20 bg-card/60 backdrop-blur-sm"
          >
            <h3 className="font-display text-xl text-destructive uppercase mb-6" style={{ fontWeight: 700 }}>
              SOUND FAMILIAR?
            </h3>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-2xl border border-safety/30 bg-card/60 backdrop-blur-sm"
            style={{ boxShadow: "0 0 24px rgba(255,107,0,0.08)" }}
          >
            <h3 className="font-display text-xl text-safety uppercase mb-6" style={{ fontWeight: 700 }}>
              YOU DESERVE BETTER
            </h3>
            <div className="space-y-4">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-safety flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground leading-relaxed">{s}</p>
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
