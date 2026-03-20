import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap } from "lucide-react";

const JUNE_1 = new Date("2026-06-01T00:00:00");

const getTimeRemaining = (target: Date) => {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
};

const formatCountdown = (t: ReturnType<typeof getTimeRemaining>) =>
  `${t.days}D ${String(t.hours).padStart(2, "0")}H ${String(t.mins).padStart(2, "0")}M ${String(t.secs).padStart(2, "0")}S`;

const StickyUrgencyBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  const [time, setTime] = useState(getTimeRemaining(JUNE_1));

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeRemaining(JUNE_1)), 1000);
    return () => clearInterval(interval);
  }, []);

  const tickerText = `⚡ NEXT HVAC PREP WINDOW CLOSES IN ${formatCountdown(time)} • LANDSCAPING LAUNCH DEADLINE: APRIL 15`;

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
            {/* Top border with pulse */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-safety/60 animate-[borderPulse_2s_ease-in-out_infinite]" />

            {/* Scrolling ticker */}
            <div className="flex-1 overflow-hidden whitespace-nowrap">
              <div className="inline-flex animate-[tickerScroll_20s_linear_infinite]">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 font-mono text-xs tracking-wider text-safety/90 mx-8"
                  >
                    {tickerText}
                  </span>
                ))}
              </div>
            </div>

            {/* Dismiss */}
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
