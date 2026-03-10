import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Database, Settings, ArrowRight, Check, X as XIcon, Zap } from "lucide-react";

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

type NurtureOption = "existing" | "hosted" | "managed";

const AlaCarteSection = () => {
  const [nurtureOption, setNurtureOption] = useState<NurtureOption>("existing");

  const nurturepricing: Record<NurtureOption, { label: string; price: string; desc: string }> = {
    existing: { label: "Your Existing CRM", price: "$199/month", desc: "HubSpot, Pipedrive, Mailchimp, etc." },
    hosted: { label: "We Host the CRM", price: "$1,500 setup + $299/month", desc: "We store + nurture leads for you." },
    managed: { label: "Managed System", price: "$99/month", desc: "Leads stored in our managed system." },
  };

  const nurtureExtras: Record<NurtureOption, string[]> = {
    existing: ["Integration with your current CRM", "Sync automation"],
    hosted: ["Database (your data, your control)", "Custom branding on emails"],
    managed: ["Shared inbox + notes", "Can export anytime"],
  };

  const cards = [
    {
      icon: Globe,
      title: "JUST WANT THE WEBSITE?",
      subtitle: "Custom landing page, zero fluff.",
      price: "$450 – $1,200",
      priceNote: "one-time",
      painPoint: "You're running ads but your website isn't converting.",
      included: [
        "Custom landing page (your brand, your offer)",
        "Mobile responsive + conversion optimized",
        "Form with lead capture (CRM or email)",
        "Performance baseline (Lighthouse score)",
        "5-day turnaround",
      ],
      notIncluded: ["Ads or paid media strategy", "Lead nurture automation", "CRM setup"],
      bestFor: "Solo-pros, testing new offers",
      availability: "Limited to 5 per month",
      cta: "GET MY LANDING PAGE",
      colorClass: "bg-tier-blue",
      textClass: "text-tier-blue-foreground",
    },
    {
      icon: Database,
      title: "NEED A CRM?",
      subtitle: "We set it up. We automate it. Done.",
      price: "$1,500 setup + $199/mo",
      priceNote: "",
      painPoint: "You're getting leads but losing them. No follow-up system.",
      included: [
        "CRM setup (your data, your control)",
        "Email + SMS automation sequences",
        "Lead scoring (hot/warm/cold automatic)",
        "Monthly performance dashboard",
        "Connected to your landing page/forms",
      ],
      notIncluded: ["Custom landing page", "Ad setup or paid strategy", "Authority Layer"],
      bestFor: "Teams with leads but no system",
      availability: "Limited to 3 per month",
      cta: "SET UP MY CRM",
      colorClass: "bg-tier-teal",
      textClass: "text-tier-teal-foreground",
    },
  ];

  return (
    <section id="ala-carte" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header with Scarcity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
              À La Carte
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-foreground tracking-wider uppercase mb-4">
            ⚡ JUST ONE PIECE?
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            We typically recommend the full sprint, but we know some teams need to start smaller.
            These are available in limited quantities and best for solo-pros testing seasonal positioning.
          </p>
        </motion.div>

        {/* Horizontal Cards */}
        <div className="space-y-6 max-w-5xl mx-auto mb-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl ${card.colorClass} ${card.textClass} p-6 md:p-8 lg:p-10`}
            >
              <div className="grid md:grid-cols-[1fr_1.2fr] gap-6">
                {/* Left: Info */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <card.icon className="w-6 h-6 opacity-80" />
                    <h3 className="font-display text-xl tracking-wider">{card.title}</h3>
                  </div>
                  <p className="text-sm opacity-80 mb-3">{card.subtitle}</p>
                  <p className="font-display text-2xl mb-1">{card.price}</p>
                  {card.priceNote && <p className="text-xs opacity-60 mb-4">{card.priceNote}</p>}
                  <p className="text-xs italic opacity-70 mb-4">"{card.painPoint}"</p>
                  <p className="text-xs opacity-60 mb-2">
                    <span className="font-semibold">Best for:</span> {card.bestFor}
                  </p>
                  <p className="text-xs font-semibold text-amber-300">{card.availability}</p>
                </div>

                {/* Right: Features */}
                <div className="space-y-3">
                  <div className="rounded-lg p-4 border border-white/20" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <p className="text-xs uppercase tracking-wider font-bold mb-2 opacity-90">Included</p>
                    {card.included.map((item, j) => (
                      <div key={j} className="flex items-start gap-2 mb-1.5">
                        <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-green-400" />
                        <span className="text-xs leading-relaxed opacity-95">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <p className="text-xs uppercase tracking-wider font-bold mb-2 opacity-50">Not Included</p>
                    {card.notIncluded.map((item, j) => (
                      <div key={j} className="flex items-start gap-2 mb-1.5">
                        <XIcon className="w-3 h-3 mt-0.5 flex-shrink-0 text-red-400 opacity-60" />
                        <span className="text-xs opacity-50">{item}</span>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    onClick={scrollToContact}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-xl font-display font-bold text-sm uppercase tracking-wider bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
                  >
                    {card.cta}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Nurture Card - Horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 md:p-8 text-tier-purple-foreground"
            style={{ background: "hsl(var(--tier-purple))" }}
          >
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="w-6 h-6 opacity-80" />
                  <h3 className="font-display text-xl tracking-wider">NEED NURTURE?</h3>
                </div>
                <p className="text-sm opacity-80 mb-4">We automate the follow-up. You close the deals.</p>

                {/* Pricing Tabs */}
                <div className="flex gap-1 mb-3 rounded-lg overflow-hidden bg-white/10 p-0.5">
                  {(["existing", "hosted", "managed"] as NurtureOption[]).map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setNurtureOption(opt)}
                      className={`flex-1 text-[10px] py-1.5 px-1 rounded-md font-semibold uppercase tracking-wider transition-all ${
                        nurtureOption === opt
                          ? "bg-white/25 shadow-sm"
                          : "hover:bg-white/10"
                      }`}
                    >
                      {opt === "existing" ? "Your CRM" : opt === "hosted" ? "We Host" : "Managed"}
                    </button>
                  ))}
                </div>

                <p className="font-display text-2xl mb-0.5">{nurturepricing[nurtureOption].price}</p>
                <p className="text-xs opacity-60 mb-4">{nurturepricing[nurtureOption].desc}</p>
                <p className="text-xs italic opacity-70 mb-4">"I get leads from multiple sources but no system connects them."</p>
                <p className="text-xs opacity-60 mb-2"><span className="font-semibold">Best for:</span> Solopreneurs, referral-heavy businesses</p>
                <p className="text-xs font-semibold text-amber-300">Limited to 5 per month</p>
              </div>

              <div className="space-y-3">
                <div className="rounded-lg p-4 border border-white/20" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <p className="text-xs uppercase tracking-wider font-bold mb-2 opacity-90">Included</p>
                  {["Email + SMS automation sequences", "Lead scoring (auto hot/warm/cold)", "Conditional follow-up (smart routing)", "Monthly performance dashboard", ...nurtureExtras[nurtureOption]].map((item, j) => (
                    <div key={j} className="flex items-start gap-2 mb-1.5">
                      <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-green-400" />
                      <span className="text-xs leading-relaxed opacity-95">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <p className="text-xs uppercase tracking-wider font-bold mb-2 opacity-50">Not Included</p>
                  {["Landing page", "Ads or paid media", "Lead sourcing (you bring the leads)"].map((item, j) => (
                    <div key={j} className="flex items-start gap-2 mb-1.5">
                      <XIcon className="w-3 h-3 mt-0.5 flex-shrink-0 text-red-400 opacity-60" />
                      <span className="text-xs opacity-50">{item}</span>
                    </div>
                  ))}
                </div>
                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl font-display font-bold text-sm uppercase tracking-wider bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
                >
                  AUTOMATE MY FOLLOW-UP
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AlaCarteSection;
