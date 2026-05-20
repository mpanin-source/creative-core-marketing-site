import { motion, type Variants } from "framer-motion";
import { Phone, PhoneCall, MessageSquare, Star } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const cards = [
  {
    icon: Phone,
    title: "VOICE/SMS — STANDARD",
    price: "$750 setup + $500/mo",
    body: "Stop losing leads after hours. Most clients capture 30–40% more appointments by closing the after-hours gap.",
    includes: [
      "10DLC registration",
      "Voice AI configuration",
      "Missed-call text-back",
      "After-hours coverage",
      "Consent compliance",
    ],
    tag: "Available at any tier",
  },
  {
    icon: PhoneCall,
    title: "VOICE/SMS — PREMIUM",
    price: "$1,500 setup + $750/mo",
    body: "For businesses with high call volume or complex booking needs — premium voice experience that converts at higher rates.",
    includes: [
      "Everything in Standard",
      "Custom-trained voice AI with multi-language support and complex booking flows",
    ],
    tag: "Recommended for Tier 3 / high-volume — available after first 3 Standard deployments",
  },
  {
    icon: MessageSquare,
    title: "CRM NURTURE",
    price: "$750 setup + $500/mo",
    body: "Automated nurture sequences for existing customer lists. AI watches behavior and re-engages cold leads with personalized outreach.",
    includes: null as string[] | null,
    tag: "Available at any tier",
  },
  {
    icon: Star,
    title: "REVIEW ACQUISITION",
    price: "$750 setup + $500/mo",
    body: "Automated review request system + response management. Builds the review velocity and sentiment GEO weights heaviest.",
    includes: null as string[] | null,
    tag: "Available at any tier",
  },
];

const CustomSolutions = () => {
  return (
    <section id="custom-solutions" className="px-6 py-32 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            BEYOND THE TIERS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-5" style={{ fontWeight: 900 }}>
            CUSTOM <span className="italic text-shimmer-blue">SOLUTIONS</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Modular add-ons available at any tier — with transparent setup and monthly pricing. We diagnose during onboarding based on your data, but we don't bundle them by default. Every business has different bottlenecks, so you pay only for what fixes yours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card border border-electric/20 rounded-2xl p-5 outcome-card hover:border-electric/50 transition-colors flex flex-col"
            >
              <div className="outcome-icon w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-electric" />
              </div>
              <h3 className="font-display text-base text-foreground uppercase mb-2 leading-snug" style={{ fontWeight: 800 }}>
                {c.title}
              </h3>
              <p className="font-display text-base text-electric mb-3" style={{ fontWeight: 700 }}>
                {c.price}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.body}</p>
              {c.includes && (
                <ul className="space-y-1.5 mb-4">
                  {c.includes.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <span className="text-electric mt-0.5">•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-xs font-semibold uppercase tracking-wider text-electric/80 mt-auto">{c.tag}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;
