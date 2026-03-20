import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap } from "lucide-react";

const StickyUrgencyBanner = () => {
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100%-2rem)] max-w-md"
        >
          <div
            className="flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg border border-safety/40 animate-[borderPulse_2s_ease-in-out_infinite]"
            style={{
              background: "hsla(213, 40%, 6%, 0.85)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4), 0 0 12px rgba(255, 107, 0, 0.15)",
            }}
          >
            <p className="text-xs font-bold tracking-wide text-foreground flex items-center gap-2">
              <Zap className="w-4 h-4 text-safety flex-shrink-0" />
              <span>
                SPRING 2026 ROLLOUT:{" "}
                <span className="text-safety">3 SLOTS REMAINING</span>
              </span>
            </p>
            <button
              onClick={() => setDismissed(true)}
              className="flex-shrink-0 p-1 rounded hover:bg-white/10 transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyUrgencyBanner;
