import { motion, type Variants } from "framer-motion";
import { Phone, MessageSquare, Sparkles } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const cards = [
  {
    icon: Phone,
    name: "GENERATIVE VOICE RESPONSE",
    price: "$750 setup + $500/month",
    desc: "AI agent answers inbound calls when you're on a job or off the clock. Qualifies lead, books appointment, syncs to your CRM.",
    badge: null as string | null,
  },
  {
    icon: MessageSquare,
    name: "GENERATIVE VOICE + SMS",
    price: "$1,000 setup + $750/month",
    desc: "AI generates and sends contextual SMS responses inside your CRM. Qualifies leads, books appointments, nurtures cold leads via text.",
    badge: null,
  },
  {
    icon: Sparkles,
    name: "FULL RESPONSE SUITE",
    price: "$1,500 setup + $750/month",
    desc: "Both AI Voice and SMS working together. Same monthly fee as SMS alone — saves $250/month vs. buying separately.",
    badge: "SAVES $250/MONTH",
  },
];

interface AIVoiceUpsellsProps {
  deemphasized?: boolean;
}

const AIVoiceUpsells = ({ deemphasized = false }: AIVoiceUpsellsProps) => {
  // De-emphasis: smaller padding, lighter opacity, smaller titles. NO scale transforms.
  const cardPadding = deemphasized ? "p-4 md:p-5" : "p-6 md:p-8";
  const cardOpacity = deemphasized ? "opacity-80" : "";
  const titleSize = deemphasized ? "text-sm" : "text-base";
  const headlineSize = deemphasized ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl lg:text-5xl";

  return (
    <section className="px-6 py-32 md:px-8 scroll-mt-24" id="voice-sms">
      <div className="max-w-6xl mx-auto">
        {deemphasized && (
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            variants={sectionFade}
            className="italic text-sm text-muted-foreground/80 text-center max-w-3xl mx-auto mb-6"
          >
            Optional add-ons available after you've signed a Foundation Sprint or Growth Partner tier — these are not required to start.
          </motion.p>
        )}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            ADD-ONS
          </p>
          <h2 className={`${headlineSize} font-display text-foreground mb-4`} style={{ fontWeight: 900 }}>
            AUTOMATED VOICE & SMS — SPEED-TO-LEAD IS A <span className="italic text-shimmer-blue">RANKING FACTOR</span>
          </h2>
          {!deemphasized && (
            <>
              <p className="italic text-base md:text-lg text-muted-foreground max-w-[760px] mx-auto mb-3">
                These aren't bots or template scripts. They're full generative AI that sounds like a real human, qualifies leads, and books appointments while you're on the job.
              </p>
              <p className="text-sm text-muted-foreground/80">
                Available add-ons for Foundation Sprint + Growth Partner clients
              </p>
            </>
          )}
        </motion.div>

        <div className={`grid md:grid-cols-3 gap-${deemphasized ? "4" : "6"} ${cardOpacity}`}>
          {cards.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-card rounded-xl ${cardPadding} flex flex-col relative border border-border ${deemphasized ? "shadow-subtle" : "shadow-subtle"} transition-all duration-300 hover:-translate-y-2 hover:border-electric/40 hover:shadow-[0_0_20px_rgba(0,209,255,0.15)] ${deemphasized ? "bg-muted/20" : ""}`}
            >
              {c.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap bg-safety/15 text-safety border border-safety/40">
                  {c.badge}
                </div>
              )}
              <div className={`outcome-icon ${deemphasized ? "w-8 h-8" : "w-10 h-10"} rounded-xl bg-electric/10 flex items-center justify-center mb-3`}>
                <c.icon className={`${deemphasized ? "w-4 h-4" : "w-5 h-5"} text-electric`} />
              </div>
              <h3 className={`font-display ${titleSize} text-foreground uppercase mb-2`} style={{ fontWeight: 800 }}>
                {c.name}
              </h3>
              <p className="text-electric font-semibold text-sm mb-2">{c.price}</p>
              <p className={`${deemphasized ? "text-xs" : "text-sm"} text-muted-foreground leading-relaxed`}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIVoiceUpsells;
