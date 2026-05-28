import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Search, Layout, PhoneCall, Star, Sparkles } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const deliverables = [
  { icon: Search, title: "LOCAL SEO FOUNDATION", desc: "Schema markup deployment, NAP consistency across the major citation directories, GBP setup with weekly post management, and on-page SEO basics." },
  { icon: ShieldCheck, title: "LSA + GOOGLE GUARANTEED", desc: "License upload, insurance verification, background checks to get you on Local Services Ads — plus active dispute management on bad-fit leads." },
  { icon: Sparkles, title: "GEO ELIGIBILITY SCHEMA", desc: "Schema markup that makes you eligible for AI Overview citations across Google, ChatGPT, Claude, and Perplexity. The entry ticket to GEO." },
  { icon: Layout, title: "CONVERSION FOUNDATION", desc: "Mobile-first conversion audit, Core Web Vitals optimization, CTA placement, click-to-call verification, basic form optimization, trust signal integration." },
  { icon: Star, title: "REVIEW SYSTEM", desc: "Automated review request flows, monitoring, response drafting, recapture campaigns. Builds the velocity GEO weights heaviest." },
  { icon: PhoneCall, title: "SPEED-TO-LEAD WORKFLOWS", desc: "Setup in your CRM for sub-60-second response time. Most leads are won or lost in the first minute." },
];

const SprintEngine = () => {
  return (
    <section className="px-6 py-32 md:px-8 section-alt scroll-mt-24" id="foundation">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-coral-dark">
            FOUNDATION SPRINT
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground"
            style={{ fontWeight: 900 }}
          >
            WHAT'S <span className="italic text-shimmer-blue">INCLUDED</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {deliverables.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm outcome-card"
            >
              <div className="flex items-start gap-4">
                <div className="outcome-icon w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                  <d.icon className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <h3 className="font-display text-base text-foreground uppercase mb-1" style={{ fontWeight: 700 }}>
                    {d.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SprintEngine;
