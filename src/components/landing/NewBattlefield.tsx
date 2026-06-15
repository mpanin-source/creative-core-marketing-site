import { Sparkles, ChevronDown } from "lucide-react";

interface SourceCard {
  domain: string;
  display: string;
}

const sources: SourceCard[] = [
  { domain: "acprosfl.com", display: "Local AC Pros" },
  { domain: "homeadvisor.com", display: "HomeAdvisor" },
  { domain: "yelp.com", display: "Yelp" },
];

const citations = [
  { label: "AC Pros", count: "+2" },
  { label: "HomeAdvisor", count: "+5" },
  { label: "Yelp", count: "+1" },
];

const NewBattlefield = () => {
  return (
    <section id="new-battlefield" className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* LEFT — vertically centered against the card on the right */}
        <div>
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-6">
            03 · The shift
          </p>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Search just changed. Most home services agencies didn't notice.
          </h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            Homeowners used to type "AC repair near me" into Google. Now they ask ChatGPT, Claude, and Perplexity. They read AI Overviews instead of clicking the top 3 results.
          </p>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            The result: visibility shifted. Old-school SEO still works, but it's no longer enough. The agencies winning your county aren't just optimizing for Google — they're being recommended by AI before homeowners even open a search bar.
          </p>
          <p className="text-lg text-charcoal/80 leading-relaxed">
            AI doesn't count your followers. It reads local signals — reviews, citations, real activity in your county.
          </p>
        </div>

        {/* RIGHT — AI Overview mock card */}
        <div>
          <div className="bg-white rounded-xl p-6 border border-charcoal/10 shadow-[0_8px_24px_rgba(26,23,20,0.06)]">
            {/* Header */}
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-charcoal/10">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-coral-dark" />
                <span className="text-sm text-charcoal/80 font-medium">AI Overview</span>
              </div>
              <span
                className="inline-flex items-center px-2.5 py-1 rounded-full bg-coral-soft text-coral-dark text-xs font-medium"
                style={{ boxShadow: "0 0 14px rgba(255, 77, 46, 0.18)" }}
              >
                3 sites
              </span>
            </div>

            {/* Body — paragraph left, source thumbnails right */}
            <div className="grid grid-cols-[1fr_120px] gap-4 mb-5">
              <div className="space-y-3">
                <p className="text-sm text-charcoal/90 leading-relaxed">
                  Top-rated AC repair contractors in Sarasota include{" "}
                  <span className="bg-coral text-white px-2 py-0.5 rounded-md font-medium whitespace-nowrap">
                    [Your Business]
                  </span>
                  {" "}— <span className="bg-coral-soft rounded px-1">licensed since 2008</span> with{" "}
                  <span className="bg-coral-soft rounded px-1">4.9★ from 247 reviews</span>.
                </p>
                <p className="text-sm text-charcoal/90 leading-relaxed">
                  Specializes in <span className="bg-coral-soft rounded px-1">residential HVAC</span> with{" "}
                  <span className="bg-coral-soft rounded px-1">same-day service</span> across the Bradenton–Sarasota corridor.
                </p>
              </div>

              {/* Right: source thumbnails */}
              <div className="space-y-2">
                {sources.map((s) => (
                  <div
                    key={s.domain}
                    className="bg-cream-light rounded-md p-2 border border-charcoal/10"
                  >
                    <div className="w-full h-10 bg-charcoal/10 rounded-sm mb-1.5" />
                    <p className="text-[11px] font-medium text-charcoal/80 leading-tight truncate">
                      {s.display}
                    </p>
                    <p className="text-[9px] text-charcoal/50 leading-tight truncate">
                      {s.domain}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inline citation pills */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {citations.map((c) => (
                <span
                  key={c.label}
                  className="inline-flex items-center px-2 py-0.5 rounded-full bg-cream-light border border-charcoal/15 text-[11px] text-charcoal/70"
                >
                  {c.label}
                  <span className="ml-1 text-charcoal/40">{c.count}</span>
                </span>
              ))}
            </div>

            {/* Show more pill */}
            <button
              type="button"
              className="w-full py-2.5 rounded-full border border-charcoal/15 text-charcoal/70 text-sm font-medium flex items-center justify-center gap-1.5 hover:bg-cream-light transition-colors"
              aria-label="Show more (mock — not interactive)"
            >
              Show more
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {/* Stat strip preserved */}
            <div className="mt-5 pt-4 border-t border-charcoal/10 flex items-baseline gap-2">
              <span className="font-display text-coral-dark text-3xl" style={{ fontWeight: 700 }}>
                Cited
              </span>
              <span className="text-charcoal/60 text-xs">by AI before the homeowner clicks a result</span>
              <span className="text-charcoal/40 text-xs ml-auto">3 sources agree</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBattlefield;
