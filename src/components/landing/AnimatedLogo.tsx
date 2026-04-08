import { motion } from "framer-motion";
import { useState, useId } from "react";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg";
}

const CCEmblem = ({ size, isHovered }: { size: string; isHovered: boolean }) => {
  const uid = useId().replace(/:/g, '');
  
  const dims = {
    sm: { w: 36, h: 36, stroke: 9 },
    md: { w: 52, h: 52, stroke: 10 },
    lg: { w: 72, h: 72, stroke: 13 },
  }[size] || { w: 36, h: 36, stroke: 9 };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const actualDims = isMobile ? { w: 28, h: 28, stroke: 7 } : dims;

  const totalDelay = 0.78;

  const vb = 60;
  const r = 16;
  const circumference = 2 * Math.PI * r;
  const arcLen = circumference * 0.75;
  const gapLen = circumference * 0.25;

  const leftCx = 39;
  const rightCx = 21;
  const cy = 30;

  // Hover offsets in viewBox units
  const hoverX = 6;

  return (
    <motion.div
      className="relative z-10 flex-shrink-0"
      style={{ margin: "0 1px" }}
      initial={{ opacity: 0, scale: 0.3, rotate: -90 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: totalDelay, duration: 0.5, type: "spring", stiffness: 200, damping: 15 }}
    >
      <motion.div
        className="relative"
        style={{
          width: actualDims.w,
          height: actualDims.h,
          filter: isHovered
            ? "drop-shadow(0 0 14px rgba(0,209,255,0.7)) drop-shadow(0 0 28px rgba(0,209,255,0.3))"
            : "drop-shadow(0 0 6px rgba(0,209,255,0.35))",
          transition: "filter 0.3s ease",
        }}
      >
        <svg
          viewBox={`0 0 ${vb} ${vb}`}
          width={actualDims.w}
          height={actualDims.h}
          fill="none"
          overflow="visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`sg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e8e8e8" />
              <stop offset="40%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#c0c0c0" />
              <stop offset="100%" stopColor="#e0e0e0" />
            </linearGradient>
            <linearGradient id={`cg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="40%" stopColor="#00d9ff" />
              <stop offset="70%" stopColor="#0090b0" />
              <stop offset="100%" stopColor="#00d9ff" />
            </linearGradient>
            <clipPath id={`ct-${uid}`}>
              <rect x="0" y="0" width={vb} height={cy} />
            </clipPath>
            <clipPath id={`cb-${uid}`}>
              <rect x="0" y={cy} width={vb} height={vb - cy} />
            </clipPath>
          </defs>

          {/* Layer 1: Left C bottom half (behind right C) */}
          <g clipPath={`url(#cb-${uid})`}>
            <motion.g
              animate={{ x: isHovered ? -hoverX : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <circle
                cx={leftCx}
                cy={cy}
                r={r}
                stroke={`url(#sg-${uid})`}
                strokeWidth={actualDims.stroke}
                strokeDasharray={`${arcLen} ${gapLen}`}
                strokeLinecap="round"
                fill="none"
                transform={`rotate(45 ${leftCx} ${cy})`}
              />
            </motion.g>
          </g>

          {/* Layer 2: Right C full (middle layer) */}
          <motion.g
            animate={{ x: isHovered ? hoverX : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <circle
              cx={rightCx}
              cy={cy}
              r={r}
              stroke={`url(#cg-${uid})`}
              strokeWidth={actualDims.stroke}
              strokeDasharray={`${arcLen} ${gapLen}`}
              strokeLinecap="round"
              fill="none"
              transform={`rotate(225 ${rightCx} ${cy})`}
            />
          </motion.g>

          {/* Layer 3: Left C top half (in front of right C — creates weave) */}
          <g clipPath={`url(#ct-${uid})`}>
            <motion.g
              animate={{ x: isHovered ? -hoverX : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <circle
                cx={leftCx}
                cy={cy}
                r={r}
                stroke={`url(#sg-${uid})`}
                strokeWidth={actualDims.stroke}
                strokeDasharray={`${arcLen} ${gapLen}`}
                strokeLinecap="round"
                fill="none"
                transform={`rotate(45 ${leftCx} ${cy})`}
              />
            </motion.g>
          </g>
        </svg>
      </motion.div>

      {/* Idle glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, rgba(0,209,255,0.25) 0%, transparent 70%)" }}
      />
    </motion.div>
  );
};

const AnimatedLogo = ({ size = "sm" }: AnimatedLogoProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const creative = "CREATIVE";
  const core = "CORE";

  const sizeClasses = {
    sm: { desktop: "text-2xl", mobile: "text-lg", glow: "0 0 12px" },
    md: { desktop: "text-[2.15rem]", mobile: "text-xl", glow: "0 0 16px" },
    lg: { desktop: "text-5xl", mobile: "text-3xl", glow: "0 0 24px" },
  };

  const s = sizeClasses[size];

  return (
    <a
      href="/"
      className="flex items-center group relative chrome-shine"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mobile */}
      <div className="md:hidden flex items-center">
        <span className={`${s.mobile} font-display tracking-tight`} style={{ fontWeight: 700 }}>
          <span className="text-foreground">CREATIVE</span>
        </span>
        <CCEmblem size={size} isHovered={false} />
        <span className={`${s.mobile} font-display tracking-tight`} style={{ fontWeight: 700 }}>
          <span className="text-electric" style={{ filter: `drop-shadow(${s.glow} rgba(0,209,255,0.4))` }}>CORE</span>
        </span>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-center">
        {creative.split("").map((letter, i) => (
          <motion.span
            key={`c-${i}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`${s.desktop} font-display tracking-tight text-foreground`}
            style={{ fontWeight: 700 }}
          >
            {letter}
          </motion.span>
        ))}

        <CCEmblem size={size} isHovered={isHovered} />

        {core.split("").map((letter, i) => (
          <motion.span
            key={`o-${i}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (creative.length + 1 + i) * 0.06 }}
            className={`${s.desktop} font-display tracking-tight text-electric transition-all duration-300`}
            style={{
              fontWeight: 700,
              filter: `drop-shadow(${s.glow} rgba(0,209,255,0.4))`,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </a>
  );
};

export default AnimatedLogo;
