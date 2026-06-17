import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { CALENDLY_URL as CALENDLY } from "@/config/site";
import { handleCalendlyClick } from "@/lib/calendly";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero — cream-light (R7.6: flipped from bg-navy-deep so transparent Header at scrollY=0 stays readable) */}
      <section className="bg-cream-light pt-32 md:pt-36 pb-24 md:pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-wider font-medium text-coral-dark mb-4">
            From the field
          </p>
          <h1
            className="font-display text-5xl md:text-7xl text-charcoal mb-6 leading-[0.95] max-w-4xl"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Insights from the field.
          </h1>
          <p className="text-lg text-charcoal/80 max-w-2xl leading-relaxed">
            Case studies, benchmarks, and tactical guides for Florida home services. Coming soon.
          </p>
        </div>
      </section>

      {/* Placeholder posts */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-wider font-medium text-navy-deep mb-4">
            Coming soon
          </p>
          <h2
            className="font-display text-3xl md:text-4xl text-navy-deep mb-12 leading-[0.95]"
            style={{ fontWeight: 900 }}
          >
            What we're working on.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: "Case study",
                title: "How we cut HVAC CPL by 38% in 60 days",
              },
              {
                category: "Benchmarks",
                title: "Florida home services LSA cost benchmarks, 2026",
              },
              {
                category: "Tactical guide",
                title: "GEO checklist: 12 signals every home service business should ship",
              },
            ].map((post, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-medium/30 p-6 flex flex-col"
              >
                <p className="text-xs uppercase tracking-wider text-slate-medium mb-3 font-medium">
                  {post.category}
                </p>
                <h3
                  className="font-display text-lg md:text-xl text-navy-deep mb-3 leading-tight"
                  style={{ fontWeight: 700 }}
                >
                  {post.title}
                </h3>
                <p className="text-sm text-slate-medium leading-relaxed flex-1">
                  Coming soon. We're shipping new content monthly once the blog launches.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe / get notified block */}
      <section className="bg-cream pb-24 px-6">
        <div className="max-w-3xl mx-auto bg-navy-deep rounded-xl p-8 md:p-10 text-center">
          <p className="text-xs uppercase tracking-wider font-medium text-cyan mb-4">
            Get notified when we publish
          </p>
          <h2
            className="font-display text-3xl md:text-4xl text-cream mb-6 leading-[0.95]"
            style={{ fontWeight: 900 }}
          >
            Want the playbook in your inbox?
          </h2>
          <p className="text-base text-slate-light mb-8 max-w-xl mx-auto leading-relaxed">
            We email when there's something worth reading. No daily noise. No newsletter spam.
          </p>
          <a
            href="mailto:paninmax2002@gmail.com?subject=Subscribe%20to%20Creative%20Core%20blog&body=Please%20add%20me%20to%20the%20list%20for%20new%20posts."
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-cyan hover:bg-cyan/90 text-white font-medium transition-colors"
          >
            Email us to subscribe
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-slate-light/70 mt-4">
            We'll set you up manually until the blog form ships.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-navy-deep py-24 px-6 border-t border-slate-dark">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-wider font-medium text-cyan mb-6">
            Or skip the reading
          </p>
          <h2
            className="font-display text-4xl md:text-5xl text-cream mb-10 leading-[0.95]"
            style={{ fontWeight: 900 }}
          >
            Just book a strategy call.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCalendlyClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cyan hover:bg-cyan/90 text-white font-medium transition-colors"
            >
              Book a strategy call
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/pricing-and-booking"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-medium hover:border-slate-light text-cream font-medium transition-colors"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
