import { createContext, useContext, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MonogramCC, Wordmark, Spark, CC_GRADIENT } from "../cobalt/CobaltMarks";

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

/** 06 gradient monogram + divider + wordmark (inherits currentColor for light header / dark overlay).
 *  Nav animation: on hover the monogram springs up and a blue sparkle pops (on-brand). */
export function RefreshLockup({ size = 46 }: { size?: number }) {
  const [hov, setHov] = useState(false);
  const monoH = size / MONO_RATIO;
  const wordH = monoH * 0.9;
  return (
    <motion.span
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      style={{ display: "inline-flex", alignItems: "center", gap: size * 0.2, position: "relative" }}
    >
      <motion.span animate={{ scale: hov ? 1.1 : 1 }} transition={{ type: "spring", stiffness: 320, damping: 14 }} style={{ display: "inline-flex", transformOrigin: "center" }}>
        <MonogramCC width={size} gradient={CC_GRADIENT} />
      </motion.span>
      <AnimatePresence>
        {hov && (
          <motion.span
            initial={{ scale: 0, opacity: 0, rotate: -25 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 340, damping: 13 }}
            style={{ position: "absolute", left: size * 0.74, top: -size * 0.16, pointerEvents: "none" }}
          >
            <Spark size={size * 0.36} color="#3a86ff" />
          </motion.span>
        )}
      </AnimatePresence>
      <span style={{ width: 1.5, height: monoH * 0.78, background: "currentColor", opacity: 0.25 }} />
      <Wordmark height={wordH} color="currentColor" />
    </motion.span>
  );
}
