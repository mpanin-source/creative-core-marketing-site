import { motion, type Variants } from "framer-motion";
import { ShieldCheck, MapPin, Thermometer, Globe, Calculator, DollarSign, Sparkles } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const strategies = [
  {
    icon: ShieldCheck,
    title: "LSA + GOOGLE GUARANTEED BADGE",
    desc: "We get you on Google Local Services Ads with the 'Google Guaranteed' badge — the #1 position for local searches. Most of your competitors don't even know this exists.",
  },
  {
    icon: MapPin,
    title: "NEIGHBORHOOD CLUSTER TARGETING",
    desc: "Every install becomes 200 more prospects. We geo-target the surrounding homes of every completed job — turning one customer into a neighborhood cluster.",
  },
  {
    icon: Thermometer,
    title: "SEASONAL PRE-SUMMER PUSH",
    desc: "We run seasonal push campaigns in the 90-day window before summer, when homeowners are most motivated to lower their upcoming AC bills.",
  },
  {
    icon: Globe,
    title: "DEDICATED RESIDENTIAL MICROSITE",
    desc: "If you run auto tinting and residential, we build you a separate residential-only microsite. Homeowners search for specialists — specialists command premium prices.",
  },
  {
    icon: Calculator,
    title: "AC BILL SAVINGS CALCULATOR",
    desc: "Interactive ROI calculator on your site: customers enter their square footage, get personalized savings estimates. Captures leads + builds trust in one tool.",
  },
  {
    icon: DollarSign,
    title: "UTILITY REBATE POSITIONING",
    desc: "Many FL utilities offer $200-$600 rebates for energy-efficient window film. Most tinting companies don't know. We position the rebate — you close more deals.",
  },
  {
    icon: Sparkles,
    title: "AI SEARCH DOMINATION (SGE)",
    desc: "Google's AI now answers most local searches before customers even see results. We optimize your reviews, content, schema, GBP signals, and YouTube presence so Google's AI mentions YOU first — before your competitors are even visible. This is the next 12 months of search. Most agencies haven't caught up.",
  },
];

const WhyDifferent = () => {
  return (
    <section id="why-different" className="px-6 py-32 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            THE LOCAL DOMINATION PLAYBOOK
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4" style={{ fontWeight: 900 }}>
            HOW WE ACTUALLY DOMINATE
            <br />
            YOUR <span className="italic text-shimmer-blue">LOCAL MARKET</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-[640px] mx-auto">
            Seven strategies most Florida agencies skip because they're annoying to set up.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {strategies.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm outcome-card"
            >
              <div className="outcome-icon w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-electric" />
              </div>
              <h3 className="font-display text-base text-foreground uppercase mb-2" style={{ fontWeight: 700 }}>
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
