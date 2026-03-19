import { X, Check, ArrowRight } from "lucide-react";

const LeadPhilosophy = () => {
  const oldWay = [
    "12-month contracts with no exit",
    "Monthly retainer whether or not you get results",
    "Ad spend markups (you pay 15-30% more)",
    "Generic creative (same templates for every client)",
    "Slow iteration (changes take weeks)",
  ];
  const ourWay = [
    "30-45 day intensive campaigns, then you decide",
    "Pay for sprint upfront, retainer is optional after proof",
    "Zero markup — you pay Meta/Google directly",
    "Custom UGC creative + seasonal urgency hooks",
    "Daily optimization (we move as fast as the data)",
  ];

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding" id="why-sprints">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            WHY SPRINTS BEAT RETAINERS
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-[1100px] mx-auto mb-10">
          <div className="glass-card p-6 md:p-8 rounded-xl">
            <h3 className="text-lg font-display font-bold text-foreground mb-1">Traditional Agency</h3>
            <p className="text-xs text-muted-foreground mb-5 italic">The Revenue Leak</p>
            <ul className="space-y-3">
              {oldWay.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-muted flex items-center justify-center mt-0.5">
                    <X className="w-3 h-3 text-muted-foreground/60" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card border-accent/20 p-6 md:p-8 rounded-xl shadow-[0_0_30px_-5px_hsl(var(--accent)/0.1)]">
            <h3 className="text-lg font-display font-bold text-foreground mb-1">Creative Core Sprint Model</h3>
            <p className="text-xs text-accent mb-5 italic">The Growth System</p>
            <ul className="space-y-3">
              {ourWay.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={scrollToPricing}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
          >
            See Sprint Pricing
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadPhilosophy;