import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, PhoneCall, MessageSquare, Star, ArrowRight } from "lucide-react";

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
    includes: ["10DLC registration", "Voice AI configuration", "Missed-call text-back", "After-hours coverage", "Consent compliance"],
    tag: "Available at any tier",
  },
  {
    icon: PhoneCall,
    title: "VOICE/SMS — PREMIUM",
    price: "$1,500 setup + $750/mo",
    body: "For businesses with high call volume or complex booking needs — premium voice experience that converts at higher rates.",
    includes: ["Everything in Standard", "Custom-trained voice AI with multi-language support and complex booking flows"],
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

const CALENDLY = "https://calendly.com/paninmax2002/strategy-call";

interface CustomSolutionsProps {
  /** When true, renders against bg-cream with appropriate text color discipline. Default false (transparent, inherits parent). */
  lightMode?: boolean;
}

const CustomSolutions = ({ lightMode = false }: CustomSolutionsProps) => {
  const sectionBg = lightMode ? "bg-cream" : "";
  const eyebrowColor = lightMode ? "text-navy-deep" : "text-coral";
  const headlineColor = lightMode ? "text-navy-deep" : "text-foreground";
  const headlineAccent = lightMode ? "text-cyan-dark" : "text-shimmer-blue";
  const subheadColor = lightMode ? "text-slate-medium" : "text-muted-foreground";
  const cardBg = lightMode ? "bg-navy-deep border-slate-medium" : "bg-card border-coral/20";
  const cardBorderHover = lightMode ? "hover:border-cyan" : "hover:border-coral/50";

  return (
    <section id="custom-solutions" className={`px-6 py-32 md:px-8 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-12"
        >
          <p className={`text-xs font-semibold tracking-[0.2em] uppercase mb-4 ${eyebrowColor}`}>
            BEYOND THE TIERS
          </p>
          <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl mb-5 ${headlineColor}`} style={{ fontWeight: 900 }}>
            SMART AUTOMATION <span className={`italic ${headlineAccent}`}>ADD-ONS</span>
          </h2>
          <p className={`text-base md:text-lg leading-relaxed max-w-3xl mx-auto ${subheadColor}`}>
            Modular add-ons available at any tier — with transparent setup and monthly pricing. We diagnose during onboarding based on your data, but we don't bundle them by default. Every business has different bottlenecks, so you pay only for what fixes yours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-2xl p-5 outcome-card transition-colors flex flex-col border ${cardBg} ${cardBorderHover}`}
            >
              <div className="outcome-icon w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-cyan" />
              </div>
              <h3 className="font-display text-base text-cream uppercase mb-2 leading-snug" style={{ fontWeight: 800 }}>
                {c.title}
              </h3>
              <p className="font-display text-base text-cyan mb-3" style={{ fontWeight: 700 }}>
                {c.price}
              </p>
              <p className="text-sm text-slate-light leading-relaxed mb-4">{c.body}</p>
              {c.includes && (
                <ul className="space-y-1.5 mb-4">
                  {c.includes.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-xs text-slate-light leading-relaxed">
                      <span className="text-cyan mt-0.5">•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan/80 mt-auto">{c.tag}</p>
            </motion.div>
          ))}
        </div>

        {/* Custom Software Solutions subsection */}
        <div className={`mt-20 pt-20 border-t ${lightMode ? "border-slate-medium/30" : "border-border"}`}>
          <p className={`text-xs font-semibold tracking-[0.2em] uppercase mb-4 ${eyebrowColor}`}>
            BEYOND THE ADD-ONS
          </p>
          <h3 className={`font-display text-3xl md:text-4xl mb-4 ${headlineColor}`} style={{ fontWeight: 900 }}>
            Custom Software Solutions
          </h3>
          <p className={`text-lg max-w-2xl mb-8 leading-relaxed ${subheadColor}`}>
            Once we're inside your business and we've audited your funnel, we identify specific bottlenecks that off-the-shelf tools can't solve. That's where Custom Software Solutions come in.
          </p>
          <div className="bg-navy-deep rounded-xl p-8 grid md:grid-cols-2 gap-6 border border-slate-medium">
            <div>
              <p className="text-xs uppercase tracking-wider font-medium text-cyan mb-3">
                Examples
              </p>
              <ul className="space-y-2 text-cream text-sm">
                <li>· Custom dispatching dashboards</li>
                <li>· Lead scoring algorithms tuned to your trade</li>
                <li>· Integration bridges between legacy CRM and GHL</li>
                <li>· Proprietary reporting layers</li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-medium text-cyan mb-3">
                Pricing
              </p>
              <p className="text-cream text-sm leading-relaxed mb-4">
                Project-based. Quoted after CRO audit reveals the opportunity.
              </p>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cyan hover:text-cyan/80 font-medium text-sm transition-colors"
              >
                Start with a strategy call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className={`text-xs mt-6 ${lightMode ? "text-slate-medium" : "text-muted-foreground"}`}>
            See full Custom Software details on the{" "}
            <Link
              to="/services/custom-software"
              className={`font-medium underline-offset-2 hover:underline ${lightMode ? "text-cyan-dark" : "text-coral"}`}
            >
              Custom Software page
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;
