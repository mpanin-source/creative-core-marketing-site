import { Shield, ArrowRight } from "lucide-react";

const GuaranteeBanner = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="px-6 py-10 md:px-8 md:py-14">
      <div className="max-w-[1200px] mx-auto">
        <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <Shield className="w-12 h-12 text-accent flex-shrink-0" />
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-xl md:text-2xl font-black text-foreground mb-1">
              THE 2x LEAD VALUE GUARANTEE
            </h3>
            <p className="text-sm text-muted-foreground">
              If we don't generate at least 2x your ad spend in vetted appointment value during your first peak window, we work for free until we do.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="btn-gold px-6 py-3 rounded-lg text-sm flex items-center gap-2 transition-all hover:scale-105 whitespace-nowrap"
          >
            Claim Your Guarantee
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeBanner;
