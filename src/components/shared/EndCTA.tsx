import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

import { CALENDLY_URL as CALENDLY } from "@/config/site";
import { openCalendlyPopup, isCalendlyUrl } from "@/lib/calendly";
import { GlowOrb } from "@/components/cobalt-refresh/patterns";

export interface EndCTAProps {
  /** Main H2 headline rendered in charcoal. */
  headline: string;
  /** Optional second line rendered in coral underneath the headline. */
  headlineAccent?: string;
  /** Supporting paragraph below the headline. */
  subhead: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  /** Optional outline CTA. Internal hrefs (starts with "/") use Link, external uses <a>. */
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  /** Show the "Territory exclusive" pill + moat statement. Default true. */
  showMoatStatement?: boolean;
  /** Which side the blue glow orb sits on. Used to alternate across pages. Default "left". */
  glowSide?: "left" | "right";
  /** When true, drops its own background + tightens top padding so it visually merges
   *  with the section above. Glow is also pulled upward to bridge the seam. */
  seamless?: boolean;
}

const SecondaryCTA = ({ text, href }: { text: string; href: string }) => {
  const className =
    "inline-flex items-center justify-center px-7 py-3.5 rounded-md border-2 border-charcoal/40 text-charcoal hover:bg-charcoal/5 font-medium transition-colors";
  if (href.startsWith("/")) {
    return (
      <Link to={href} className={className}>
        {text}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {text}
    </a>
  );
};

const EndCTA = ({
  headline,
  headlineAccent,
  subhead,
  primaryCtaText = "Book a strategy call",
  primaryCtaHref = CALENDLY,
  secondaryCtaText,
  secondaryCtaHref,
  showMoatStatement = true,
  glowSide = "left",
}: EndCTAProps) => {
  return (
    <section className="relative overflow-x-clip bg-cream py-28 md:py-32 px-6">
      <GlowOrb color="#3a86ff" opacity={0.4} size={900} top="-20%" left={glowSide === "left" ? "-5%" : "105%"} animated />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2
          className="font-display text-4xl md:text-6xl text-charcoal mb-2 leading-tight"
          style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          {headline}
        </h2>
        {headlineAccent && (
          <h2
            className="font-display text-4xl md:text-6xl text-coral-dark mb-6 leading-tight"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            {headlineAccent}
          </h2>
        )}
        <p className="text-lg text-charcoal/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          {subhead}
        </p>

        {/* Primary coral CTA — dominant. Secondary outline CTA optional. */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={primaryCtaHref}
            target={primaryCtaHref.startsWith("http") ? "_blank" : undefined}
            rel={primaryCtaHref.startsWith("http") ? "noopener noreferrer" : undefined}
            onClick={(e) => {
              if (isCalendlyUrl(primaryCtaHref)) {
                e.preventDefault();
                void openCalendlyPopup(primaryCtaHref);
              }
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-coral hover:bg-coral-dark text-white font-medium transition-colors shadow-sm"
          >
            {primaryCtaText}
            <ArrowRight className="w-4 h-4" />
          </a>
          {secondaryCtaText && secondaryCtaHref && (
            <SecondaryCTA text={secondaryCtaText} href={secondaryCtaHref} />
          )}
        </div>

        {showMoatStatement && (
          <div className="flex flex-col items-center gap-4">
            <span
              className="inline-block px-3 py-1 rounded-full bg-coral-soft text-coral-dark text-xs uppercase tracking-[0.15em] font-medium"
              style={{ boxShadow: "0 0 18px rgba(255, 77, 46, 0.18)" }}
            >
              Territory exclusive
            </span>
            <p className="text-sm text-muted-dark italic max-w-xl mx-auto leading-relaxed flex items-start justify-center gap-2">
              <MapPin className="w-4 h-4 text-coral-dark flex-shrink-0 mt-0.5" />
              <span>
                One client per niche, per county. When your spot is taken, your competitors lose access to us —
                and the systems we build for you.
              </span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EndCTA;
