import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, Wrench, ArrowRight } from "lucide-react";

const getTimeRemaining = (target: Date) => {
  const now = new Date().getTime();
  const diff = target.getTime() - now;
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
};

const APRIL_15 = new Date("2026-04-15T00:00:00");
const JUNE_1 = new Date("2026-06-01T00:00:00");

const CountdownDigit = ({ value, color }: { value: number; color: "safety" | "electric" }) => {
  const colorClass = color === "safety" ? "text-safety" : "text-electric";
  return (
    <span className={`font-mono text-sm md:text-base font-bold tabular-nums ${colorClass} animate-[digitPulse_2s_ease-in-out_infinite]`}>
      {String(value).padStart(2, "0")}
    </span>
  );
};

const CountdownUnit = ({ value, label, color }: { value: number; label: string; color: "safety" | "electric" }) => (
  <div className="flex flex-col items-center">
    <CountdownDigit value={value} color={color} />
    <span className="text-[9px] text-muted-foreground/60 uppercase tracking-wider mt-0.5">{label}</span>
  </div>
);

const StickyUrgencyBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  const [executeTime, setExecuteTime] = useState(getTimeRemaining(APRIL_15));
  const [prepTime, setPrepTime] = useState(getTimeRemaining(JUNE_1));

  useEffect(() => {
    const interval = setInterval(() => {
      setExecuteTime(getTimeRemaining(APRIL_15));
      setPrepTime(getTimeRemaining(JUNE_1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

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
            className="relative"
            style={{
              background: "hsla(213, 40%, 6%, 0.92)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "0 -4px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Split top border: orange left, blue right */}
            <div className="absolute top-0 left-0 right-0 h-[2px] flex">
              <div className="w-1/2 bg-safety/70" />
              <div className="w-1/2 bg-electric/70" />
            </div>

            <div className="max-w-6xl mx-auto px-4 py-3">
              {/* Desktop layout */}
              <div className="hidden md:flex items-center justify-between gap-4">
                {/* Zone 1: Execute Now */}
                <div className="flex items-center gap-4 flex-1">
                  <Zap className="w-4 h-4 text-safety flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-display text-xs text-safety uppercase tracking-wider" style={{ fontWeight: 700 }}>
                      EXECUTE NOW: LANDSCAPING & PEST CONTROL
                    </span>
                    <span className="text-[10px] text-muted-foreground/70">April 15 Launch Deadline</span>
                  </div>
                  <div className="flex items-center gap-1.5 ml-auto">
                    <CountdownUnit value={executeTime.days} label="D" color="safety" />
                    <span className="text-safety/50 text-xs font-mono">:</span>
                    <CountdownUnit value={executeTime.hours} label="H" color="safety" />
                    <span className="text-safety/50 text-xs font-mono">:</span>
                    <CountdownUnit value={executeTime.mins} label="M" color="safety" />
                    <span className="text-safety/50 text-xs font-mono">:</span>
                    <CountdownUnit value={executeTime.secs} label="S" color="safety" />
                  </div>
                </div>

                {/* Divider */}
                <div className="w-px h-10 bg-border/30 flex-shrink-0" />

                {/* Zone 2: Prep Now */}
                <div className="flex items-center gap-4 flex-1">
                  <Wrench className="w-4 h-4 text-electric flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-display text-xs text-electric uppercase tracking-wider" style={{ fontWeight: 700 }}>
                      PREP NOW: HVAC & POOL SERVICES
                    </span>
                    <span className="text-[10px] text-muted-foreground/70">June 1 Summer Prep Window</span>
                  </div>
                  <div className="flex items-center gap-1.5 ml-auto">
                    <CountdownUnit value={prepTime.days} label="D" color="electric" />
                    <span className="text-electric/50 text-xs font-mono">:</span>
                    <CountdownUnit value={prepTime.hours} label="H" color="electric" />
                    <span className="text-electric/50 text-xs font-mono">:</span>
                    <CountdownUnit value={prepTime.mins} label="M" color="electric" />
                    <span className="text-electric/50 text-xs font-mono">:</span>
                    <CountdownUnit value={prepTime.secs} label="S" color="electric" />
                  </div>
                </div>

                {/* Book Audit button */}
                <button
                  onClick={scrollToContact}
                  className="flex-shrink-0 btn-safety px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 group"
                >
                  Book Audit
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>

                {/* Dismiss */}
                <button
                  onClick={() => setDismissed(true)}
                  className="flex-shrink-0 p-1.5 rounded hover:bg-white/10 transition-colors"
                  aria-label="Dismiss banner"
                >
                  <X className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              </div>

              {/* Mobile layout: stacked */}
              <div className="flex md:hidden flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-safety" />
                    <span className="font-display text-[10px] text-safety uppercase tracking-wider" style={{ fontWeight: 700 }}>
                      EXECUTE: LANDSCAPING & PEST
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CountdownUnit value={executeTime.days} label="D" color="safety" />
                    <span className="text-safety/50 text-[10px] font-mono">:</span>
                    <CountdownUnit value={executeTime.hours} label="H" color="safety" />
                    <span className="text-safety/50 text-[10px] font-mono">:</span>
                    <CountdownUnit value={executeTime.mins} label="M" color="safety" />
                    <span className="text-safety/50 text-[10px] font-mono">:</span>
                    <CountdownUnit value={executeTime.secs} label="S" color="safety" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-3.5 h-3.5 text-electric" />
                    <span className="font-display text-[10px] text-electric uppercase tracking-wider" style={{ fontWeight: 700 }}>
                      PREP: HVAC & POOL
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CountdownUnit value={prepTime.days} label="D" color="electric" />
                    <span className="text-electric/50 text-[10px] font-mono">:</span>
                    <CountdownUnit value={prepTime.hours} label="H" color="electric" />
                    <span className="text-electric/50 text-[10px] font-mono">:</span>
                    <CountdownUnit value={prepTime.mins} label="M" color="electric" />
                    <span className="text-electric/50 text-[10px] font-mono">:</span>
                    <CountdownUnit value={prepTime.secs} label="S" color="electric" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={scrollToContact}
                    className="flex-1 btn-safety px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5"
                  >
                    Book Audit
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setDismissed(true)}
                    className="flex-shrink-0 p-2 rounded hover:bg-white/10 transition-colors"
                    aria-label="Dismiss banner"
                  >
                    <X className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyUrgencyBanner;