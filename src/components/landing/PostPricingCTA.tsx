import { ArrowRight } from "lucide-react";

const PostPricingCTA = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-foreground mb-4">
            READY TO LOCK IN YOUR SPOT?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We can only take 3 new sprint clients per month. Book your Sprint Audit now before your competitors do.
          </p>
          <button
            onClick={scrollToContact}
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base transition-all hover:scale-105"
          >
            Schedule Your Sprint Audit
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PostPricingCTA;
