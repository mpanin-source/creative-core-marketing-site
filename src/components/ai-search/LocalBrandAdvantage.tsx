import { motion, type Variants } from "framer-motion";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const LocalBrandAdvantage = () => {
  return (
    <section className="px-6 py-32 md:px-8 section-alt">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-coral-dark">THE WINDOW</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground" style={{ fontWeight: 900 }}>
            YOUR LOCAL TRADES DON'T REALIZE<br />
            <span className="italic text-shimmer-blue">WHAT'S HAPPENING</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed mb-10"
        >
          <p>
            While most local home service business owners are still paying for keyword bidding, the smart ones are building YouTube channels, blog content, and AI-friendly footprints. The first roofers and HVAC companies in your county to do this will dominate AI Search for the next 5 years.
          </p>
          <p>
            Once that happens, the cost to displace them is enormous.
          </p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="rounded-2xl p-8 md:p-10 border-2 border-safety/40"
          style={{ background: "hsla(9, 100%, 59%, 0.06)", boxShadow: "0 0 40px rgba(255, 77, 46,0.12)" }}
        >
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            Right now, your county has maybe <span className="text-safety font-bold">1–2 home service businesses</span> doing AI search optimization. In <span className="text-safety font-bold">18 months</span>, every one of them will be doing it. The ones who started early will own the AI mentions. The ones who waited will be paying premium ad rates trying to catch up.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocalBrandAdvantage;
