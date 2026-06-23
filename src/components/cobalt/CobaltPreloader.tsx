import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COBALT, MonogramCC, Lockup, Spark } from "./CobaltMarks";

/**
 * Entrance animation (kit's "UI transition"):
 * 06 monogram wipes on → sparkle pops → full lockup reveals → fade out to page.
 */
export default function CobaltPreloader() {
  const [wipe, setWipe] = useState(false);
  const [spark, setSpark] = useState(false);
  const [logo, setLogo] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t: number[] = [];
    t.push(window.setTimeout(() => setWipe(true), 150));
    t.push(window.setTimeout(() => setSpark(true), 850));
    t.push(window.setTimeout(() => setLogo(true), 1350));
    t.push(window.setTimeout(() => setDone(true), 2450));
    return () => t.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ position: "fixed", inset: 0, zIndex: 100000, background: COBALT.cream, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {!logo ? (
            <div style={{ position: "relative" }}>
              <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: wipe ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }} transition={{ duration: 0.7, ease: "easeInOut" }}>
                <MonogramCC width={150} color={COBALT.primary} />
              </motion.div>
              <AnimatePresence>
                {spark && (
                  <motion.div initial={{ scale: 0, opacity: 0, rotate: -30 }} animate={{ scale: 1, opacity: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 320, damping: 16 }} style={{ position: "absolute", top: -14, right: -20 }}>
                    <Spark size={26} color={COBALT.primary} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Lockup size={110} color={COBALT.ink} />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
