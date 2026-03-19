import { Shield } from "lucide-react";

const GuaranteeBanner = () => {
  return (
    <section className="px-6 py-10 md:px-8 md:py-14" id="guarantee">
      <div className="max-w-[1200px] mx-auto">
        <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 md:p-12 text-center">
          <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
          <h3 className="font-display text-2xl md:text-3xl font-black text-foreground mb-4">
            15+ QUALIFIED CALLS IN 45 DAYS OR 50% REFUND
          </h3>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We define 'qualified' as: showed up for call, matches your ICP (budget fit, service area fit, intent confirmed). If we don't deliver 15 qualified calls in 45 days, we refund 50% of your sprint investment. No bullshit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeBanner;
