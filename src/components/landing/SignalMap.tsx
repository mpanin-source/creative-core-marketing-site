import { FileText, MapPin, Video } from "lucide-react";

interface Signal {
  icon: typeof FileText;
  title: string;
  body: string;
}

// R8.1 (CS-15) — content-type → AI-signal map. Copy locked in the pricing audit; do not paraphrase.
const signals: Signal[] = [
  {
    icon: FileText,
    title: "Local-intent articles",
    body: "The citation signal. Specific, locally-true answers AI Overviews quote when someone asks who to call.",
  },
  {
    icon: MapPin,
    title: "Weekly GBP posts",
    body: "The local trust signal. Fresh activity and reviews compound into Map Pack rank and AI recommendations.",
  },
  {
    icon: Video,
    title: "Short videos (Scale)",
    body: "The proof signal. Real jobs, real crews — local evidence AI and humans both read.",
  },
];

const SignalMap = () => {
  return (
    <section id="signal-map" className="relative overflow-x-clip bg-cream-light py-24 px-6">

      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-6">
          The Signal Map
        </p>
        <h2
          className="font-display text-4xl md:text-6xl text-charcoal mb-6 max-w-4xl leading-tight"
          style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          How content feeds AI search.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 mt-16">
          {signals.map((s) => (
            <div key={s.title} className="bg-white rounded-lg p-7 border border-charcoal/10 flex flex-col">
              <div className="w-10 h-10 rounded-md bg-coral-soft flex items-center justify-center mb-5">
                <s.icon className="w-5 h-5 text-coral-dark" />
              </div>
              <h3
                className="font-display text-xl text-charcoal mb-3 leading-tight"
                style={{ fontWeight: 700 }}
              >
                {s.title}
              </h3>
              <p className="text-base text-charcoal/70 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-md p-6 border-l-4 border-coral max-w-3xl">
          <p className="text-base text-charcoal/80 leading-relaxed">
            None of this chases followers. Two hundred engaged locals outvalue fifty thousand strangers — AI reads signals, not vanity counts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignalMap;
