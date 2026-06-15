import { X, Check } from "lucide-react";

interface Row {
  lazy: string;
  us: string;
}

const rows: Row[] = [
  {
    lazy: "Charges a % of ad spend",
    us: "Zero markup. Your card pays Google directly.",
  },
  {
    lazy: "Ships monthly reports nobody reads",
    us: "Live dashboards your CFO actually opens",
  },
  {
    lazy: 'Treats SEO as "blog posts and backlinks"',
    us: "Engineers for Map Pack and AI Overview",
  },
  {
    lazy: "Pilots AI tools then abandons them",
    us: "Ships, owns, measures. Production from day one.",
  },
  {
    lazy: "Locks you into 12-month contracts",
    us: "Month-to-month after the 60-day guarantee",
  },
  {
    lazy: "Has 50 clients in your category",
    us: "One client per niche, per county. Yours.",
  },
];

const SoundFamiliar = () => {
  return (
    <section id="sound-familiar" className="bg-cream-light py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-6">
          Sound familiar?
        </p>
        <h2
          className="font-display text-4xl md:text-6xl text-charcoal mb-6 max-w-4xl leading-tight"
          style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          Is your current agency pulling the lazy way?
        </h2>
        <p className="text-lg text-charcoal/70 mb-12 max-w-2xl leading-relaxed">
          Six things lazy agencies do — and six things we do differently.
        </p>

        {/* Column headers (desktop only) */}
        <div className="hidden md:grid grid-cols-2 gap-3 mb-3 px-5">
          <p className="text-xs uppercase tracking-[0.15em] text-muted-dark font-medium">
            Lazy agency
          </p>
          <p className="text-xs uppercase tracking-[0.15em] text-coral-dark font-semibold">
            Our move
          </p>
        </div>

        {/* Comparison rows — two-column cards */}
        <div className="space-y-3">
          {rows.map((row, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Lazy side — white card, muted text, line-through */}
              <div className="bg-white rounded-lg p-5 border border-charcoal/10 flex items-start gap-3">
                <X className="w-5 h-5 text-muted-dark/50 flex-shrink-0 mt-0.5" />
                <p className="text-base text-muted-dark line-through decoration-muted-dark/30">
                  {row.lazy}
                </p>
              </div>
              {/* Our move side — coral-soft warm tint (R7.6 Phase 7.5), coral-dark check, charcoal text */}
              <div className="bg-coral-soft rounded-lg p-5 border border-coral-dark/15 flex items-start gap-3">
                <Check className="w-5 h-5 text-coral-dark flex-shrink-0 mt-0.5" />
                <p className="text-base text-charcoal font-medium">{row.us}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoundFamiliar;
