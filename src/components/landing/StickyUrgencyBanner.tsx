import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const StickyUrgencyBanner = () => {
  const [dismissed, setDismissed] = useState(false);

  const tickerText = "⚡ NOW ACCEPTING: 3 FLORIDA HOME SERVICE CLIENTS • ONE CLIENT PER NICHE PER COUNTY • $497 LAUNCH-READY WEBSITE OR FULL AGENCY TIERS";

  // Repeat enough times to guarantee seamless fill
  const copies = Array.from({ length: 8 }, (_, i) => i);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 z-[9999]"
        >
          <div
            className="relative h-10 flex items-center overflow-hidden"
            style={{
              background: "hsla(213, 40%, 6%, 0.9)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-safety/60 animate-[borderPulse_2s_ease-in-out_infinite]" />

            <div className="flex-1 overflow-hidden whitespace-nowrap">
              <div className="ticker-seamless">
                {copies.map((i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 font-mono text-xs tracking-wider text-safety/90 mx-8"
                  >
                    {tickerText}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setDismissed(true)}
              className="flex-shrink-0 p-2 mr-2 rounded hover:bg-white/10 transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-3 h-3 text-muted-foreground" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyUrgencyBanner;
