import { motion } from "framer-motion";
import { MapPin, MessageSquare, Settings, Search, DollarSign } from "lucide-react";

const items = [
  {
    icon: MapPin,
    title: "PHASE 1: SEASONAL WINDOW MAPPING",
    value: "$800 value",
    details: [
      "Deep analysis of YOUR market (zip codes, competitor moves)",
      "Google Trends + historical data for HVAC/Roofing/Solar",
      "Identify YOUR peak window (not generic \"February\")",
    ],
  },
  {
    icon: MessageSquare,
    title: "POSITIONING & MESSAGING DEVELOPMENT",
    value: "$400 value",
    details: [
      "Craft 3 seasonal angles tested for resonance",
      "Write ad copy + landing page copy specific to your window",
      "Build lead-scoring criteria (we know what a \"real lead\" is for YOU)",
    ],
  },
  {
    icon: Settings,
    title: "FUNNEL & CRM SETUP",
    value: "$500 value",
    details: [
      "Build/optimize your landing page",
      "Connect CRM to capture + track leads automatically",
      "Set up lead-scoring automation (no manual data entry)",
    ],
  },
  {
    icon: Search,
    title: "AD ACCOUNT AUDIT & OPTIMIZATION",
    value: "$300 value",
    details: [
      "Review current spend (if you have it)",
      "Fix account structure (prevents wasting budget)",
      "Pre-configure campaign templates (ready to launch immediately)",
    ],
  },
];

const UpfrontFeeBreakdown = () => {
  return (
    <section className="section-padding bg-background" id="upfront-fee">
      <div className="container-wide">
        <div className="container-narrow text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <DollarSign className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold tracking-widest text-accent uppercase">
              Transparency
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 tracking-wider">
            WHAT DOES YOUR $2K UPFRONT INVEST IN?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your upfront fee covers the work BEFORE we touch your ad budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 bg-card rounded-xl border border-border"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-base text-foreground tracking-wider mb-1">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-accent">{item.value}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {item.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent mt-1">✅</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="p-6 bg-accent/5 border border-accent/20 rounded-xl">
            <p className="text-sm font-display text-foreground tracking-wider mb-2">
              TOTAL VALUE IF PURCHASED SEPARATELY: <span className="text-accent font-bold">$2,000+</span>
            </p>
            <p className="text-sm text-muted-foreground italic">
              "You're not paying us to discover your window. You're paying us to skip the months of wasted budget most agencies burn while they 'test' your market."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpfrontFeeBreakdown;
