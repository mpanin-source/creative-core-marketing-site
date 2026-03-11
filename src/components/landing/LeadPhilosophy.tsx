import { X, Check } from "lucide-react";

const LeadPhilosophy = () => {
  const oldWay = [
    "6-12 month expensive retainers",
    "Ads running during off-season dead zones",
    "Vague reports that hide real metrics",
    "Locked into rigid, long-term contracts",
  ];
  const ourWay = [
    "High-intensity 30-day growth sprints",
    "Ads only during peak demand windows",
    "Full transparency on every dollar",
    "Zero long-term commitment—earn it every season",
  ];

  return (
    <section className="section-padding">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-4">
            STOP GUESSING. START EXECUTING.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most agencies want you on a 12-month retainer. We only move when the data says "Go."
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
          <div className="glass-card border-destructive/10 p-6 md:p-8 rounded-xl">
            <h3 className="text-lg font-display font-bold text-foreground mb-1">The Old Way</h3>
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
            <h3 className="text-lg font-display font-bold text-foreground mb-1">The Creative Core Way</h3>
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
      </div>
    </section>
  );
};

export default LeadPhilosophy;
