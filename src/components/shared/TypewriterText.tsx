import { useEffect, useState } from "react";

interface TypewriterTextProps {
  phrases: string[];
  /** Tailwind text-color classes cycled in parallel with phrases. Length should match phrases or it wraps. */
  colors?: string[];
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
  initialRestMs?: number;
  /** Extra pause after the final phrase deletes, before restarting at phrase 0. */
  loopPauseMs?: number;
  /** Optional className applied to the wrapper span (excluding color). */
  className?: string;
  /** Show blinking cursor "_". */
  showCursor?: boolean;
  /** Render a fixed-position panel showing how long each phrase stayed fully typed on screen. */
  debug?: boolean;
  /** Label shown in the debug panel to distinguish multiple instances. */
  debugLabel?: string;
}

const DEFAULT_COLORS = ["text-coral-dark", "text-azure-dark", "text-azure"];

/**
 * Looping typewriter: types each phrase, holds, deletes, advances to the next, repeats forever.
 * Color rotates in parallel with the active phrase. Respects prefers-reduced-motion (renders
 * the first phrase static with no animation).
 */
const TypewriterText = ({
  phrases,
  colors = DEFAULT_COLORS,
  typeMs = 60,
  deleteMs = 35,
  holdMs = 2200,
  initialRestMs = 2200,
  loopPauseMs = 2000,
  className = "",
  showCursor = true,
  debug = false,
  debugLabel = "typewriter",
}: TypewriterTextProps) => {
  const longest = phrases.reduce((a, b) => (a.length >= b.length ? a : b), "");
  const [text, setText] = useState<string>(phrases[0] ?? "");
  const [colorIdx, setColorIdx] = useState<number>(0);
  const [reduced, setReduced] = useState<boolean>(false);
  const [debugLog, setDebugLog] = useState<Array<{ phrase: string; ms: number }>>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced || phrases.length === 0) return;
    let cancelled = false;
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    const recordHold = (phrase: string, ms: number) => {
      if (!debug) return;
      // eslint-disable-next-line no-console
      console.log(`[${debugLabel}] "${phrase}" held fully-typed for ${ms}ms`);
      setDebugLog((log) => [...log.slice(-phrases.length * 2), { phrase, ms }]);
    };

    const run = async () => {
      // Phrase 0 starts pre-typed; its on-screen-full duration === initialRestMs.
      const t0 = performance.now();
      await sleep(initialRestMs);
      recordHold(phrases[0] ?? "", Math.round(performance.now() - t0));
      let i = 0; // current phrase index; phrase 0 already held above
      while (!cancelled) {
        const current = phrases[i];
        // Hold (skip first hold since initialRest already covered phrase 0)
        if (i !== 0 || initialRestMs === 0) {
          const tHold = performance.now();
          await sleep(holdMs);
          if (cancelled) return;
          recordHold(current, Math.round(performance.now() - tHold));
        }
        // Delete
        for (let j = current.length - 1; j >= 0; j--) {
          if (cancelled) return;
          setText(current.slice(0, j));
          await sleep(deleteMs);
        }
        // If we just deleted the final phrase, pause before restarting the loop.
        if (i === phrases.length - 1) {
          await sleep(loopPauseMs);
          if (cancelled) return;
        }
        // Advance + color cycle
        i = (i + 1) % phrases.length;
        setColorIdx((c) => (c + 1) % colors.length);
        const next = phrases[i];
        // Type
        for (let j = 1; j <= next.length; j++) {
          if (cancelled) return;
          setText(next.slice(0, j));
          await sleep(typeMs);
        }
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [phrases, colors.length, typeMs, deleteMs, holdMs, initialRestMs, loopPauseMs, reduced]);

  const color = colors[colorIdx % colors.length] ?? "";

  // Inherit parent's font-family, weight, size, tracking, and line-height so the
  // animated text visually matches the surrounding heading rather than the global
  // `p, span` body-font reset in index.css.
  const inheritStyle = {
    fontFamily: "inherit",
    fontWeight: "inherit" as const,
    fontSize: "inherit",
    letterSpacing: "inherit",
    lineHeight: "inherit",
  };

  return (
    <span className={`inline-grid align-baseline ${className}`} style={inheritStyle}>
      {/* Spacer reserves width of longest phrase — same grid cell as the live text. */}
      <span
        aria-hidden="true"
        className="invisible col-start-1 row-start-1 whitespace-pre"
        style={inheritStyle}
      >
        {longest}
        {showCursor ? "_" : ""}
      </span>
      <span
        className={`col-start-1 row-start-1 ${color} transition-colors duration-300`}
        style={inheritStyle}
        aria-live="polite"
      >
        {text}
        {showCursor && (
          <span
            aria-hidden="true"
            className="typewriter-cursor inline-block"
            style={{ ...inheritStyle, marginLeft: "0.05em" }}
          >
            _
          </span>
        )}
      </span>
    </span>
  );
};

export default TypewriterText;
