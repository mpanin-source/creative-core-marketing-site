import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown, Search } from "lucide-react";

// ---------------------------------------------------------------------------
// AI Overview card — search-and-render loop (Goal 6b)
// Replicates a real Google AI Overview: the homeowner's query TYPES into the
// search bar, a brief "generating" shimmer plays, then the AI Overview RENDERS
// in — answer streams word-by-word, with a featured image (or a blog-result
// card for informational queries), sources, and citations. Five hyper-real
// queries across HVAC / roofing / plumbing and across intent (informational,
// symptom, commercial) loop continuously. [Your Business] is the constant
// anchor; the niche-specific source + citation swap each query.
// ---------------------------------------------------------------------------

type SegKind = "text" | "pill" | "hi";
interface Segment {
  t: SegKind;
  s: string;
}
interface SourceCard {
  domain: string;
  display: string;
  img: string;
}
type Visual =
  | { kind: "image"; src: string; alt: string }
  | { kind: "blog"; src: string; title: string; url: string };
interface Niche {
  query: string;
  visual: Visual;
  source: SourceCard; // primary cited source (first card)
  cite: { label: string; count: string };
  paras: Segment[][];
}

const txt = (s: string): Segment => ({ t: "text", s });
const pill = (s: string): Segment => ({ t: "pill", s });
const hi = (s: string): Segment => ({ t: "hi", s });

const IMG_AC = "/images/ai-overview/ac.webp";
const IMG_ROOF = "/images/ai-overview/roof.webp";
const IMG_HEATER = "/images/ai-overview/heater.webp";
const IMG_HOMEADVISOR = "/images/ai-overview/homeadvisor.webp";
const IMG_YELP = "/images/ai-overview/yelp.webp";

// Five queries, mixed intent, looping. [Your Business] is the coral anchor in
// every answer — the point of the section: AI naming THEM, whatever the search.
const NICHES: Niche[] = [
  {
    // HVAC · informational
    query: "how long do AC units last in Florida?",
    visual: {
      kind: "blog",
      src: IMG_AC,
      title: "How Long Does an AC Unit Last in Florida?",
      url: "yourbusiness.com/blog",
    },
    source: { domain: "yourbusiness.com", display: "[Your Business] Blog", img: IMG_AC },
    cite: { label: "Your Guide", count: "+3" },
    paras: [
      [
        txt("In Florida's heat, most AC units last "),
        hi("10–15 years"),
        txt(" — constant summer cycling shortens that."),
      ],
      [
        pill("[Your Business]"),
        txt("'s guide breaks down the "),
        hi("repair-vs-replace signs"),
        txt(": rising bills, weak airflow, frequent breakdowns."),
      ],
    ],
  },
  {
    // Roofing · symptom
    query: "roof leaking after heavy rain",
    visual: { kind: "image", src: IMG_ROOF, alt: "Florida residential home roof" },
    source: { domain: "gulfcoastroofing.com", display: "Gulf Coast Roofing", img: IMG_ROOF },
    cite: { label: "Roofing Co", count: "+2" },
    paras: [
      [
        txt("A roof leak after heavy rain usually means "),
        hi("lifted shingles"),
        txt(", "),
        hi("failed flashing"),
        txt(", or clogged valleys."),
      ],
      [
        txt("For storm leaks, local pros like "),
        pill("[Your Business]"),
        txt(" — "),
        hi("4.8★, free inspections"),
        txt(" — can tarp and assess "),
        hi("same-day"),
        txt("."),
      ],
    ],
  },
  {
    // Plumbing · informational
    query: "how long do water heaters last in Florida?",
    visual: {
      kind: "blog",
      src: IMG_HEATER,
      title: "When to Replace Your Water Heater in FL",
      url: "yourbusiness.com/blog",
    },
    source: { domain: "yourbusiness.com", display: "[Your Business] Blog", img: IMG_HEATER },
    cite: { label: "Your Guide", count: "+3" },
    paras: [
      [
        txt("Most Florida water heaters last "),
        hi("8–12 years"),
        txt("; hard water and humidity shorten that."),
      ],
      [
        txt("Watch for "),
        hi("rusty water"),
        txt(" or pooling — "),
        pill("[Your Business]"),
        txt("'s guide covers repair-vs-replace."),
      ],
    ],
  },
  {
    // HVAC · symptom
    query: "why does my AC keep shutting off?",
    visual: { kind: "image", src: IMG_AC, alt: "Residential AC condenser unit" },
    source: { domain: "acprosfl.com", display: "Local AC Pros", img: IMG_AC },
    cite: { label: "AC Pros", count: "+2" },
    paras: [
      [
        txt("Short-cycling usually points to a "),
        hi("clogged filter"),
        txt(", "),
        hi("low refrigerant"),
        txt(", or a failing capacitor."),
      ],
      [
        txt("If it keeps cycling, "),
        pill("[Your Business]"),
        txt(" — "),
        hi("4.9★, same-day service"),
        txt(" — can diagnose it across the Sarasota–Bradenton corridor."),
      ],
    ],
  },
  {
    // Roofing · commercial
    query: "best roofers near Sarasota",
    visual: { kind: "image", src: IMG_ROOF, alt: "Florida residential home roof" },
    source: { domain: "gulfcoastroofing.com", display: "Gulf Coast Roofing", img: IMG_ROOF },
    cite: { label: "Roofing Co", count: "+2" },
    paras: [
      [
        txt("Top-rated roofing contractors in Sarasota include "),
        pill("[Your Business]"),
        txt(" — "),
        hi("licensed since 2004"),
        txt(" with "),
        hi("4.8★ from 329 reviews"),
        txt("."),
      ],
      [
        txt("Specializes in "),
        hi("storm-damage repair"),
        txt(" and re-roofs across Sarasota County."),
      ],
    ],
  },
];

const SHARED_SOURCES: SourceCard[] = [
  { domain: "homeadvisor.com", display: "HomeAdvisor", img: IMG_HOMEADVISOR },
  { domain: "yelp.com", display: "Yelp", img: IMG_YELP },
];
const SHARED_CITES = [
  { label: "HomeAdvisor", count: "+5" },
  { label: "Yelp", count: "+1" },
];

const TYPE_MS = 55; // typing the search query
const DELETE_MS = 28; // backspacing the query
const FADE_MS = 450; // overview dismiss fade (matches CSS duration)
const SUBMIT_PAUSE_MS = 350; // the "pressing enter" beat
const SHIMMER_MS = 620; // "generating" shimmer
const WORD_MS = 45; // per-word answer stream
const HOLD_MS = 4200; // results read time (held longer before the next query)
const INITIAL_REST_MS = 1500;

// Pre-tokenize each answer into reveal units (words; highlight/pill phrases stay
// whole so their coral background renders continuously).
interface Unit {
  text: string;
  kind: SegKind;
  para: number;
  gi: number;
}
const unitsOf = (niche: Niche): Unit[] => {
  const units: Unit[] = [];
  let gi = 0;
  niche.paras.forEach((para, pi) => {
    para.forEach((seg) => {
      if (seg.t === "text") {
        seg.s.split(/(?<=\s)/).forEach((w) => {
          if (w.length) units.push({ text: w, kind: "text", para: pi, gi: gi++ });
        });
      } else {
        units.push({ text: seg.s, kind: seg.t, para: pi, gi: gi++ });
      }
    });
  });
  return units;
};
const NICHE_UNITS = NICHES.map(unitsOf);
const NICHE_UNIT_TOTAL = NICHE_UNITS.map((u) => u.length);

const plain = (niche: Niche) =>
  niche.paras.map((p) => p.map((s) => s.s).join("")).join(" ");

const segClass = (kind: SegKind) =>
  kind === "pill"
    ? "bg-coral text-white px-2 py-0.5 rounded-md font-medium whitespace-nowrap"
    : kind === "hi"
      ? "bg-coral-soft rounded px-1"
      : "";

// Render a niche's answer up to `shown` units. When animate, each word fades in
// as it mounts (LLM-style streaming); otherwise it renders statically.
const renderAnswer = (idx: number, shown: number, animate: boolean) =>
  NICHES[idx].paras.map((_, pi) => (
    <p key={pi} className="text-sm text-charcoal/90 leading-relaxed">
      {NICHE_UNITS[idx]
        .filter((u) => u.para === pi && u.gi < shown)
        .map((u) =>
          animate ? (
            <motion.span
              key={u.gi}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.22 }}
              className={segClass(u.kind)}
            >
              {u.text}
            </motion.span>
          ) : (
            <span key={u.gi} className={segClass(u.kind)}>
              {u.text}
            </span>
          ),
        )}
    </p>
  ));

const FeaturedVisual = ({ visual }: { visual: Visual }) => {
  if (visual.kind === "image") {
    return (
      <div className="h-24 rounded-lg overflow-hidden border border-charcoal/10 mb-5">
        <img
          src={visual.src}
          alt={visual.alt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
  return (
    <div className="flex items-center gap-3 h-24 p-2.5 rounded-lg border border-charcoal/10 bg-cream-light mb-5">
      <img
        src={visual.src}
        alt=""
        loading="lazy"
        className="h-full aspect-square object-cover rounded-md shrink-0"
      />
      <div className="min-w-0">
        <p className="text-[10px] text-charcoal/45 truncate">{visual.url}</p>
        <p className="text-sm font-medium text-charcoal/90 leading-snug line-clamp-2">
          {visual.title}
        </p>
        <p className="text-[10px] text-coral-dark mt-0.5">[Your Business] Blog</p>
      </div>
    </div>
  );
};

const Skeleton = () => (
  <div className="animate-pulse" aria-hidden="true">
    <div className="h-24 rounded-lg bg-charcoal/10 mb-5" />
    <div className="grid grid-cols-[1fr_120px] gap-4 mb-5">
      <div className="space-y-2.5 pt-1">
        <div className="h-3 rounded bg-charcoal/10 w-11/12" />
        <div className="h-3 rounded bg-charcoal/10 w-full" />
        <div className="h-3 rounded bg-charcoal/10 w-4/5" />
        <div className="h-3 rounded bg-charcoal/10 w-2/3" />
      </div>
      <div className="space-y-2">
        <div className="h-16 rounded-md bg-charcoal/10" />
        <div className="h-16 rounded-md bg-charcoal/10" />
      </div>
    </div>
  </div>
);

const AIOverviewCard = () => {
  const [active, setActive] = useState(0);
  const [queryVisible, setQueryVisible] = useState(NICHES[0].query.length);
  const [unitsShown, setUnitsShown] = useState(NICHE_UNIT_TOTAL[0]);
  const [showShimmer, setShowShimmer] = useState(false);
  const [showResults, setShowResults] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      // Respect prefers-reduced-motion: rest statically on niche #1, results shown.
      setActive(0);
      setQueryVisible(NICHES[0].query.length);
      setUnitsShown(NICHE_UNIT_TOTAL[0]);
      setShowShimmer(false);
      setShowResults(true);
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        timer = setTimeout(resolve, ms);
      });

    const run = async () => {
      // Niche 0 already rendered — brief initial rest, then loop forever.
      await sleep(INITIAL_REST_MS);
      if (cancelled) return;

      let curQuery = NICHES[0].query;
      let n = 0;
      while (!cancelled) {
        n = (n + 1) % NICHES.length;

        // 1. Dismiss the current overview.
        setShowResults(false);
        await sleep(FADE_MS);
        if (cancelled) return;

        // 2. Backspace the current query.
        for (let v = curQuery.length - 1; v >= 0; v--) {
          setQueryVisible(v);
          await sleep(DELETE_MS);
          if (cancelled) return;
        }

        // 3. Switch niche, reset the answer, type the new query.
        setActive(n);
        setUnitsShown(0);
        curQuery = NICHES[n].query;
        for (let v = 1; v <= curQuery.length; v++) {
          setQueryVisible(v);
          await sleep(TYPE_MS);
          if (cancelled) return;
        }

        // 4. "Press enter" → generating shimmer.
        await sleep(SUBMIT_PAUSE_MS);
        if (cancelled) return;
        setShowShimmer(true);
        await sleep(SHIMMER_MS);
        if (cancelled) return;

        // 5. Render results, stream the answer word-by-word.
        setShowShimmer(false);
        setShowResults(true);
        const total = NICHE_UNIT_TOTAL[n];
        for (let u = 1; u <= total; u++) {
          setUnitsShown(u);
          await sleep(WORD_MS);
          if (cancelled) return;
        }

        // 6. Hold, then loop to the next query.
        await sleep(HOLD_MS);
        if (cancelled) return;
      }
    };

    run();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [reduced]);

  const idx = reduced ? 0 : active;
  const niche = NICHES[idx];
  const queryText = reduced ? niche.query : niche.query.slice(0, queryVisible);
  const overviewVisible = reduced || showShimmer || showResults;
  const resultsOn = reduced || showResults;
  const shimmerOn = !reduced && showShimmer;
  const showSearchCursor = !reduced && !showResults && !showShimmer;
  const answerShown = reduced ? NICHE_UNIT_TOTAL[0] : unitsShown;
  const sources = [niche.source, ...SHARED_SOURCES];
  const cites = [niche.cite, ...SHARED_CITES];

  return (
    <div className="bg-white rounded-xl p-6 border border-charcoal/10 shadow-[0_8px_24px_rgba(26,23,20,0.06)]">
      {/* Search bar — the homeowner's query types here, swaps per niche */}
      <div className="flex items-center gap-2.5 mb-4 px-3.5 py-2.5 rounded-full border border-charcoal/15 bg-cream-light">
        <Search className="w-4 h-4 text-charcoal/40 shrink-0" />
        <span className="text-sm text-charcoal/70 whitespace-nowrap overflow-hidden">
          {queryText}
          {showSearchCursor && (
            <span
              aria-hidden="true"
              className="typewriter-cursor inline-block text-charcoal/60"
              style={{ marginLeft: "0.05em" }}
            >
              _
            </span>
          )}
        </span>
      </div>

      {/* AI Overview — generating shimmer, then renders in */}
      <div
        className={`transition-all duration-[450ms] ${
          overviewVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
      >
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

        {/* Results layer + shimmer layer overlap in one cell; results reserves
            the tallest height so the card never reflows between queries. */}
        <div className="grid">
          {/* RESULTS */}
          <div
            className={`col-start-1 row-start-1 ${resultsOn ? "" : "invisible"}`}
            aria-hidden={!resultsOn}
          >
            <FeaturedVisual visual={niche.visual} />

            <div className="grid grid-cols-[1fr_120px] gap-4 mb-5">
              {/* Answer — stacked variants reserve the tallest answer height */}
              <div className="grid">
                {NICHES.map((_, i) => (
                  <div
                    key={i}
                    aria-hidden="true"
                    className="invisible space-y-3 col-start-1 row-start-1"
                  >
                    {renderAnswer(i, NICHE_UNIT_TOTAL[i], false)}
                  </div>
                ))}
                <div className="space-y-3 col-start-1 row-start-1">
                  {renderAnswer(idx, answerShown, !reduced)}
                </div>
                <span className="sr-only">{plain(NICHES[0])}</span>
              </div>

              {/* Source thumbnails (first swaps per niche, with its icon) */}
              <div className="space-y-2">
                {sources.map((s, i) => {
                  const isPrimary = i === 0; // the niche-specific source — image swaps per niche
                  return (
                    <div
                      key={s.domain + s.display}
                      className="bg-cream-light rounded-md p-2 border border-charcoal/10"
                    >
                      <div
                        className={`w-full h-12 rounded-sm mb-1.5 overflow-hidden ${
                          isPrimary ? "ring-1 ring-coral/40" : ""
                        }`}
                      >
                        <img
                          src={s.img}
                          alt=""
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[11px] font-medium text-charcoal/80 leading-tight truncate">
                        {s.display}
                      </p>
                      <p className="text-[9px] text-charcoal/50 leading-tight truncate">
                        {s.domain}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inline citation pills (first swaps per niche) */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {cites.map((c) => (
                <span
                  key={c.label}
                  className="inline-flex items-center px-2 py-0.5 rounded-full bg-cream-light border border-charcoal/15 text-[11px] text-charcoal/70"
                >
                  {c.label}
                  <span className="ml-1 text-charcoal/40">{c.count}</span>
                </span>
              ))}
            </div>

            {/* Show more pill (static) */}
            <button
              type="button"
              className="w-full py-2.5 rounded-full border border-charcoal/15 text-charcoal/70 text-sm font-medium flex items-center justify-center gap-1.5 hover:bg-cream-light transition-colors"
              aria-label="Show more (mock — not interactive)"
            >
              Show more
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {/* Stat strip (static) */}
            <div className="mt-5 pt-4 border-t border-charcoal/10 flex items-baseline gap-2">
              <span
                className="font-display text-coral-dark text-3xl"
                style={{ fontWeight: 700 }}
              >
                Cited
              </span>
              <span className="text-charcoal/60 text-xs">
                by AI before the homeowner clicks a result
              </span>
              <span className="text-charcoal/40 text-xs ml-auto">3 sources agree</span>
            </div>
          </div>

          {/* SHIMMER */}
          <div
            className={`col-start-1 row-start-1 ${shimmerOn ? "" : "invisible"}`}
            aria-hidden="true"
          >
            <Skeleton />
          </div>
        </div>
      </div>
    </div>
  );
};

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

        {/* RIGHT — AI Overview mock card (search-and-render loop) */}
        <div>
          <AIOverviewCard />
        </div>
      </div>
    </section>
  );
};

export default NewBattlefield;
