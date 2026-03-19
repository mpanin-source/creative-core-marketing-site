import { Shield } from "lucide-react";

const GuaranteeBanner = () => {
  return (
    <section className="px-6 py-10 md:px-8 md:py-14" id="guarantee">
      <div className="max-w-[1200px] mx-auto">
        <div className="rounded-xl bg-accent p-8 md:p-12 text-center relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(258,90%,66%,0.2),transparent_70%)]" />
          <div className="relative z-10">
            <Shield className="w-10 h-10 text-success mx-auto mb-4" />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-accent-foreground mb-4" style={{ textShadow: '0 0 20px rgba(255,255,255,0.15)' }}>
              15+ QUALIFIED CALLS IN 45 DAYS OR 50% REFUND
            </h3>
            <p className="text-sm text-accent-foreground/80 max-w-2xl mx-auto leading-relaxed">
              We define 'qualified' as: showed up for call, matches your ICP (budget fit, service area fit, intent confirmed). If we don't deliver 15 qualified calls in 45 days, we refund 50% of your sprint investment. No bullshit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeBanner;