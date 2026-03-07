import { motion } from "framer-motion";
import { Phone, MessageSquare, Database, ArrowRight, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Phone,
    title: "AI CALL ANSWERING",
    description: "Handles calls during peak seasons when you're swamped. Screens qualified vs tire-kickers in real-time.",
  },
  {
    icon: MessageSquare,
    title: "SMART SMS FOLLOW-UP",
    description: "Automatically texts leads who missed calls. Keeps momentum while you close.",
  },
  {
    icon: Database,
    title: "CRM LEAD VAULT",
    description: "Every call, every interaction, automatically logged. No manual data entry. Full audit trail.",
  },
];

const AIReceptionist = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "hsl(220, 20%, 8%)" }}>
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-wide px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
              Coming Soon · Q2 2026
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-wider mb-4">
            AI RECEPTIONIST: THE 24/7 APPOINTMENT ENGINE
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            While your seasonal ads bring in leads, your AI receptionist answers calls,
            qualifies prospects, and books appointments—automatically, 24/7.
          </p>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <pillar.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl text-white tracking-wider mb-2">
                {pillar.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why It Changes Everything */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
            <p className="text-white/80 leading-relaxed mb-4">
              Right now, you're capturing peak-season buyers but losing them
              to slow response times. The AI receptionist closes that gap.
            </p>
            <p className="text-white/50 text-sm">
              Estimated upgrade: Tier 2 → +$599/mo | Tier 3 → +$799/mo | Tier 4 → Included
            </p>
          </div>
        </motion.div>

        {/* Scarcity + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block rounded-xl border border-amber-500/30 bg-amber-500/5 px-6 py-4 mb-6">
            <p className="text-amber-400 text-sm font-semibold mb-1">
              🔒 Founding Member Pricing — Limited to First 50 Signups
            </p>
            <p className="text-white/60 text-xs">
              Lock in 50% lifetime discount on AI Receptionist when it launches Q2 2026.
            </p>
          </div>
          <div>
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-lg bg-accent text-accent-foreground font-display text-lg tracking-wider hover:bg-accent/90 transition-colors flex items-center gap-2 mx-auto shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              JOIN WAITLIST FOR FOUNDING MEMBER PRICING
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIReceptionist;
