import { createContext, useContext, type ReactNode } from "react";
import { MonogramCC, Wordmark, CC_GRADIENT } from "../cobalt/CobaltMarks";

/**
 * Logo-variant context for the isolated /cobalt-refresh prototype.
 * Default "current" → live site logo unchanged. When the provider wraps a route,
 * AnimatedLogo renders the new 06 lockup recolored to the CURRENT coral brand.
 */
const Ctx = createContext<"current" | "new06">("current");
export const useLogoVariant = () => useContext(Ctx);
export const LogoVariantProvider = ({ children }: { children: ReactNode }) => (
  <Ctx.Provider value="new06">{children}</Ctx.Provider>
);

const MONO_RATIO = 796 / 517;

/** 06 monogram (coral) + divider + wordmark. Wordmark/divider inherit currentColor so the
 *  lockup works on light header (charcoal) AND the dark mobile overlay (cream). */
export function RefreshLockup({ size = 46 }: { size?: number }) {
  const monoH = size / MONO_RATIO;
  const wordH = monoH * 0.9;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: size * 0.2 }}>
      <MonogramCC width={size} gradient={CC_GRADIENT} />
      <span style={{ width: 1.5, height: monoH * 0.78, background: "currentColor", opacity: 0.25 }} />
      <Wordmark height={wordH} color="currentColor" />
    </span>
  );
}
