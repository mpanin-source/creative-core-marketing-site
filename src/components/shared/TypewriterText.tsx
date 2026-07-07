import { useEffect, useRef, useState } from "react";

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
  /** Render a fixed-position panel in development showing how long each phrase stayed fully typed on screen. */
  debug?: boolean;
  /** Label shown in the debug panel to distinguish multiple instances. */
  debugLabel?: string;
}

const DEFAULT_COLORS = ["text-coral-dark", "text-azure-dark", "text-azure"];

/**
 * Looping typewriter: types each phrase, holds, deletes, advances to the next, repeats forever.
 *
 * Performance notes:
 * - Keystroke updates bypass React and write directly to a text node via a ref, so each
 *   character change is a single `nodeValue` mutation instead of a full component re-render +
 *   reconciliation cycle. This dramatically reduces main-thread work on mobile.
 * - Updates are scheduled inside `requestAnimationFrame` so the browser batches at most one
 *   paint per frame — even if `setTimeout` fires late/early, we never write more than once
 *   per frame.
 * - The outer grid places an invisible spacer sized to the longest phrase in the same cell as
 *   the live text, so per-keystroke width/height never changes ⇒ no ancestor reflow.
 * - `contain: content` + `will-change: contents` on the live span isolates paint to just that
 *   element.
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
  const showDebug = debug && import.meta.env.DEV;
  const [colorIdx, setColorIdx] = useState<number>(0);
  const [reduced, setReduced] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  // "fast" = full-speed, "normal" = default targets, "slow" = throttled device / low battery / save-data
  const [perfTier, setPerfTier] = useState<"fast" | "normal" | "slow">("normal");
  const [debugLog, setDebugLog] = useState<Array<{ phrase: string; ms: number }>>([]);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", onChange);
    const mm = window.matchMedia("(max-width: 768px)");
    setIsMobile(mm.matches);
    const onMM = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mm.addEventListener?.("change", onMM);
    return () => {
      mq.removeEventListener?.("change", onChange);
      mm.removeEventListener?.("change", onMM);
    };
  }, []);

  // Adaptive perf tier: combines static device hints (deviceMemory, cores, save-data,
  // battery level & charging state) with a live rAF probe that measures actual frame
  // time — the only reliable signal for CPU throttling / background throttling.
  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;

    type NavExtra = Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean; effectiveType?: string };
      getBattery?: () => Promise<{
        level: number;
        charging: boolean;
        addEventListener: (t: string, cb: () => void) => void;
        removeEventListener: (t: string, cb: () => void) => void;
      }>;
    };
    const nav = navigator as NavExtra;

    const staticSlowHint = (): boolean => {
      const mem = nav.deviceMemory ?? 8;
      const cores = navigator.hardwareConcurrency ?? 8;
      const saveData = nav.connection?.saveData === true;
      const slowNet = nav.connection?.effectiveType === "2g" || nav.connection?.effectiveType === "slow-2g";
      return saveData || slowNet || mem <= 2 || cores <= 2;
    };

    // Live frame-time probe — samples ~60 frames (~1s). If median frame is >24ms
    // the device / tab is being throttled (battery saver, background, weak CPU).
    const probeFrames = (): Promise<number> =>
      new Promise((resolve) => {
        const samples: number[] = [];
        let last = performance.now();
        const tick = (t: number) => {
          samples.push(t - last);
          last = t;
          if (samples.length < 60) requestAnimationFrame(tick);
          else {
            const sorted = samples.slice(5).sort((a, b) => a - b);
            resolve(sorted[Math.floor(sorted.length / 2)] ?? 16);
          }
        };
        requestAnimationFrame(tick);
      });

    const compute = async () => {
      let battery: Awaited<ReturnType<NonNullable<NavExtra["getBattery"]>>> | null = null;
      try {
        battery = (await nav.getBattery?.()) ?? null;
      } catch {
        battery = null;
      }
      const batterySaver = battery ? !battery.charging && battery.level <= 0.2 : false;
      const medianFrame = await probeFrames();
      if (cancelled) return;

      const isSlow = staticSlowHint() || batterySaver || medianFrame > 24;
      const isFast = !isSlow && medianFrame < 14 && (navigator.hardwareConcurrency ?? 4) >= 8;
      setPerfTier(isSlow ? "slow" : isFast ? "fast" : "normal");
    };

    void compute();

    // Re-evaluate when battery state changes (plug/unplug, level drop).
    let battery: Awaited<ReturnType<NonNullable<NavExtra["getBattery"]>>> | null = null;
    const onBatteryChange = () => void compute();
    nav.getBattery?.().then((b) => {
      if (cancelled) return;
      battery = b;
      b.addEventListener("levelchange", onBatteryChange);
      b.addEventListener("chargingchange", onBatteryChange);
    }).catch(() => {});

    return () => {
      cancelled = true;
      battery?.removeEventListener("levelchange", onBatteryChange);
      battery?.removeEventListener("chargingchange", onBatteryChange);
    };
  }, []);

  // Effective per-keystroke intervals. Mobile gets tighter targets to counteract
  // setTimeout throttling; slow-tier devices/battery-saver back off so we don't
  // burn CPU on a throttled main thread; fast-tier desktops keep the author's targets.
  const mobileType = perfTier === "slow" ? 55 : 28;
  const mobileDelete = perfTier === "slow" ? 35 : 15;
  const desktopType = perfTier === "slow" ? Math.max(typeMs, 90) : typeMs;
  const desktopDelete = perfTier === "slow" ? Math.max(deleteMs, 55) : deleteMs;
  const effTypeMs = isMobile ? Math.min(typeMs, mobileType) : desktopType;
  const effDeleteMs = isMobile ? Math.min(deleteMs, mobileDelete) : desktopDelete;

  useEffect(() => {
    if (reduced || phrases.length === 0) return;
    let cancelled = false;
    let rafId = 0;
    let timerId: ReturnType<typeof setTimeout> | null = null;

    // Direct DOM writer — coalesces to a single write per animation frame so we
    // never touch the DOM more than once between paints even if timers fire early.
    let pendingText: string | null = null;
    const flush = () => {
      rafId = 0;
      if (pendingText !== null && textRef.current) {
        textRef.current.textContent = pendingText;
      }
      pendingText = null;
    };
    const writeText = (value: string) => {
      pendingText = value;
      if (rafId === 0) {
        rafId = requestAnimationFrame(flush);
      }
    };

    const sleep = (ms: number) =>
      new Promise<void>((r) => {
        timerId = setTimeout(r, ms);
      });

    const recordHold = (phrase: string, ms: number) => {
      if (!showDebug) return;
      // eslint-disable-next-line no-console
      console.log(`[${debugLabel}] "${phrase}" held fully-typed for ${ms}ms`);
      setDebugLog((log) => [...log.slice(-phrases.length * 2), { phrase, ms }]);
    };

    // Seed the initial phrase directly (no React state → no reconcile).
    writeText(phrases[0] ?? "");

    const run = async () => {
      const t0 = performance.now();
      await sleep(initialRestMs);
      if (cancelled) return;
      recordHold(phrases[0] ?? "", Math.round(performance.now() - t0));
      let i = 0;
      while (!cancelled) {
        const current = phrases[i];
        if (i !== 0 || initialRestMs === 0) {
          const tHold = performance.now();
          await sleep(holdMs);
          if (cancelled) return;
          recordHold(current, Math.round(performance.now() - tHold));
        }
        // Delete
        for (let j = current.length - 1; j >= 0; j--) {
          if (cancelled) return;
          writeText(current.slice(0, j));
          await sleep(effDeleteMs);
        }
        if (i === phrases.length - 1) {
          await sleep(loopPauseMs);
          if (cancelled) return;
        }
        i = (i + 1) % phrases.length;
        setColorIdx((c) => (c + 1) % colors.length);
        const next = phrases[i];
        // Type
        for (let j = 1; j <= next.length; j++) {
          if (cancelled) return;
          writeText(next.slice(0, j));
          await sleep(effTypeMs);
        }
      }
    };

    run();
    return () => {
      cancelled = true;
      if (timerId !== null) clearTimeout(timerId);
      if (rafId !== 0) cancelAnimationFrame(rafId);
    };
  }, [phrases, colors.length, effTypeMs, effDeleteMs, holdMs, initialRestMs, loopPauseMs, reduced, showDebug, debugLabel]);

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
    <span className={`grid align-baseline max-w-full min-w-0 ${className}`} style={inheritStyle}>
      {/* Spacer reserves height for the tallest (wrapped) phrase — same grid cell as the live text. */}
      <span
        aria-hidden="true"
        className="invisible col-start-1 row-start-1 whitespace-normal break-words"
        style={inheritStyle}
      >
        {longest}
        {showCursor ? "_" : ""}
      </span>
      <span
        className={`col-start-1 row-start-1 whitespace-normal break-words ${color} transition-colors duration-300`}
        style={{
          ...inheritStyle,
          contain: "content",
          willChange: "contents",
        }}
        aria-live="polite"
      >
        {/*
          Live text node written directly via ref. React never re-renders this element
          per keystroke, so there is no reconciliation cost per character.
        */}
        <span ref={textRef} style={inheritStyle}>
          {phrases[0] ?? ""}
        </span>
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
      {showDebug && (
        <span
          className="fixed bottom-3 right-3 z-[9999] max-w-[360px] rounded-md border border-azure/40 bg-black/85 p-3 font-mono text-[11px] leading-snug text-white shadow-xl"
          style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
        >
          <span className="mb-1 block font-semibold text-azure">
            ⏱ {debugLabel} — fully-typed hold (ms)
          </span>
          <span className="mb-1 block text-white/60">
            target: initialRest={initialRestMs} · hold={holdMs}
          </span>
          {debugLog.length === 0 ? (
            <span className="block text-white/50">measuring…</span>
          ) : (
            debugLog.slice(-phrases.length).map((entry, idx) => (
              <span key={idx} className="block">
                <span className="text-azure-dark">{entry.ms}ms</span>{" "}
                <span className="text-white/70">— {entry.phrase}</span>
              </span>
            ))
          )}
        </span>
      )}
    </span>
  );
};

export default TypewriterText;
