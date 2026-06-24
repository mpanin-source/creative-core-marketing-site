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
const WORD_RATIO = 1076 / 290;

/** Shared mask props so an overlay span lines up 1:1 with a CobaltMarks mark. */
const maskCover = (url: string) => ({
  WebkitMaskImage: `url(${url})`,
  maskImage: `url(${url})`,
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
}) as const;

/** 06 gradient monogram + divider + wordmark (inherits currentColor for light header / dark overlay).
 *  Nav animation on hover:
 *   - SIGNAL FLOW: a light pulse sweeps through the CC, a coral→blue line sweeps across the wordmark.
 *   - ORBIT ECHO: a blue node orbits the CC once with a faint ring (mirrors the homepage Six Systems orbit).
 *   - the CC keeps the spring you liked. */
export function RefreshLockup({ size = 46 }: { size?: number }) {
  const [hov, setHov] = useState(false);
  const monoH = size / MONO_RATIO;
  const wordH = monoH * 0.9;
  const wordW = wordH * WORD_RATIO;
  const orbit = size * 0.98; // orbit-ring diameter, centered on the CC

  return (
    <motion.span
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      style={{ display: "inline-flex", alignItems: "center", gap: size * 0.2, position: "relative" }}
    >
      {/* ---- Monogram stage: CC + signal pulse (scale together) + orbit echo ---- */}
      <span style={{ position: "relative", display: "inline-flex", width: size, height: monoH }}>
        <motion.span
          animate={{ scale: hov ? 1.08 : 1 }}
          transition={{ type: "spring", stiffness: 320, damping: 14 }}
          style={{ position: "relative", display: "inline-flex", width: size, height: monoH, transformOrigin: "center" }}
        >
          <MonogramCC width={size} gradient={CC_GRADIENT} />
          {/* SIGNAL FLOW — white shine pulses through the CC shape */}
          <motion.span
            aria-hidden
            initial={false}
            animate={{ backgroundPosition: hov ? ["-60% 0%", "160% 0%"] : "-60% 0%" }}
            transition={hov ? { duration: 1.15, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.3 } : { duration: 0 }}
            style={{
              ...maskCover("/cobalt/monogram.svg"),
              position: "absolute", inset: 0, width: size, height: monoH,
              backgroundImage: "linear-gradient(100deg, transparent 38%, rgba(255,255,255,0.92) 50%, transparent 62%)",
              backgroundSize: "220% 100%", backgroundRepeat: "no-repeat",
              mixBlendMode: "screen", pointerEvents: "none", opacity: hov ? 1 : 0,
            }}
          />
        </motion.span>

        {/* ORBIT ECHO — faint ring + a single node orbiting the CC once */}
        <AnimatePresence>
          {hov && (
            <>
              <motion.span
                aria-hidden
                initial={{ opacity: 0, scale: 0.65 }}
                animate={{ opacity: 0.22, scale: 1 }}
                exit={{ opacity: 0, scale: 0.65 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{
                  position: "absolute", left: "50%", top: "50%",
                  width: orbit, height: orbit, marginLeft: -orbit / 2, marginTop: -orbit / 2,
                  borderRadius: "50%", border: "1.5px solid #3a86ff", pointerEvents: "none",
                }}
              />
              <motion.span
                aria-hidden
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 360, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ rotate: { duration: 1.15, ease: "easeInOut" }, opacity: { duration: 0.25 } }}
                style={{
                  position: "absolute", left: "50%", top: "50%",
                  width: orbit, height: orbit, marginLeft: -orbit / 2, marginTop: -orbit / 2,
                  pointerEvents: "none",
                }}
              >
                <span style={{ position: "absolute", top: -(size * 0.15), left: "50%", marginLeft: -(size * 0.15) }}>
                  <Spark size={size * 0.3} color="#3a86ff" />
                </span>
              </motion.span>
            </>
          )}
        </AnimatePresence>
      </span>

      {/* divider */}
      <span style={{ width: 1.5, height: monoH * 0.78, background: "currentColor", opacity: 0.25 }} />

      {/* ---- Wordmark + signal line sweeping across it ---- */}
      <span style={{ position: "relative", display: "inline-flex", width: wordW, height: wordH }}>
        <Wordmark height={wordH} color="currentColor" />
        <motion.span
          aria-hidden
          initial={false}
          animate={{ backgroundPosition: hov ? ["-40% 0%", "140% 0%"] : "-40% 0%" }}
          transition={hov ? { duration: 1.15, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.3, delay: 0.12 } : { duration: 0 }}
          style={{
            ...maskCover("/cobalt/wordmark.svg"),
            position: "absolute", inset: 0, width: wordW, height: wordH,
            backgroundImage: "linear-gradient(100deg, transparent 42%, #FF4D2E 48%, #3a86ff 54%, transparent 60%)",
            backgroundSize: "220% 100%", backgroundRepeat: "no-repeat",
            pointerEvents: "none", opacity: hov ? 1 : 0,
          }}
        />
      </span>
    </motion.span>
  );
}
