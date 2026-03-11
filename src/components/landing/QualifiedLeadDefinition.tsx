import { motion } from "framer-motion";
import { Check, ShieldCheck, ChevronDown } from "lucide-react";
import { useState } from "react";

const criteria = [
  "Requested a quote for HVAC/Roofing/Solar service",
  "Has a verified phone number",
  "Is actively seeking service (not a tire-kicker)",
  "Matched to your service area and capacity",
];

const QualifiedLeadDefinition = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="section-padding" id="qualified-lead">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span className="text-xs font-bold tracking-widest text-accent uppercase">Full Transparency</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-4">WHAT IS A "QUALIFIED LEAD"?</h2>
            <p className="text-lg text-muted-foreground">We define it upfront. No ambiguity.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 md:p-8 glass-card rounded-xl mb-6">
            <p className="text-sm text-muted-foreground mb-6">A homeowner in <span className="text-foreground font-semibold">YOUR specific zip codes</span> who:</p>
            <ul className="space-y-4">
              {criteria.map((item, i) => (
                <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent mt-0.5 shrink-0" /><span className="text-foreground text-sm">{item}</span></li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
              <p className="text-sm text-foreground font-medium">"We don't count junk leads. You only pay for real prospects ready to book."</p>
            </div>
          </motion.div>
          <button onClick={() => setExpanded(!expanded)} className="w-full flex items-center justify-center gap-2 text-sm text-accent hover:text-accent/80 font-semibold transition-colors" aria-expanded={expanded}>
            How we score and filter leads
            <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
          {expanded && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 p-6 glass-card rounded-xl">
              <div className="space-y-4 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">Step 1: Geographic Filter</span> — We only count leads from your specified service area.</p>
                <p><span className="font-semibold text-foreground">Step 2: Intent Verification</span> — Each lead must have actively requested a quote.</p>
                <p><span className="font-semibold text-foreground">Step 3: Contact Validation</span> — Phone numbers are verified. No fake submissions.</p>
                <p><span className="font-semibold text-foreground">Step 4: Capacity Match</span> — Leads only counted if they match your service capacity.</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QualifiedLeadDefinition;
