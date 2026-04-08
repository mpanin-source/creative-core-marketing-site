import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg";
}

const CCEmblem = ({ size, isHovered }: { size: string; isHovered: boolean }) => {
  const dims = {
    sm: { w: 28, h: 28, stroke: 5 },
    md: { w: 44, h: 44, stroke: 7 },
    lg: { w: 60, h: 60, stroke: 8 },
  }[size] || { w: 28, h: 28, stroke: 5 };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const actualDims = isMobile ? { w: 22, h: 22, stroke: 4 } : dims;

  const totalDelay = 0.78;

  // Using circle + stroke-dasharray for reliable C shapes
  const vb = 60;
  const r = 16;
  const circumference = 2 * Math.PI * r; // ~100.53
  const arcLen = circumference * 0.75; // 75% visible = C shape
  const gapLen = circumference * 0.25; // 25% gap

  // Left C center, Right C center — offset for overlap
  const leftCx = 23;
  const rightCx = 37;
  const cy = 30;

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
        }}
        animate={isHovered ? { scale: 1.12, y: -1 } : { scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <svg
          viewBox={`0 0 ${vb} ${vb}`}
          width={actualDims.w}
          height={actualDims.h}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e8e8e8" />
              <stop offset="40%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#c0c0c0" />
              <stop offset="100%" stopColor="#e0e0e0" />
            </linearGradient>
            <linearGradient id="cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="40%" stopColor="#00d9ff" />
              <stop offset="70%" stopColor="#0090b0" />
              <stop offset="100%" stopColor="#00d9ff" />
            </linearGradient>
            <filter id="cyan-glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Clip paths for weaving effect */}
            <clipPath id="clip-top">
              <rect x="0" y="0" width={vb} height={cy} />
            </clipPath>
            <clipPath id="clip-bottom">
              <rect x="0" y={cy} width={vb} height={cy} />
            </clipPath>
          </defs>

          {/* Layer 1: Left C bottom half (behind right C) */}
          <motion.circle
            cx={leftCx}
            cy={cy}
            r={r}
            stroke="url(#silver-grad)"
            strokeWidth={actualDims.stroke}
            strokeDasharray={`${arcLen} ${gapLen}`}
            strokeLinecap="round"
            fill="none"
            clipPath="url(#clip-bottom)"
            transform={`rotate(135 ${leftCx} ${cy})`}
            animate={isHovered ? { x: -6 } : { x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />

          {/* Layer 2: Right C full (middle layer) */}
          <motion.circle
            cx={rightCx}
            cy={cy}
            r={r}
            stroke="url(#cyan-grad)"
            strokeWidth={actualDims.stroke}
            strokeDasharray={`${arcLen} ${gapLen}`}
            strokeLinecap="round"
            fill="none"
            filter="url(#cyan-glow)"
            transform={`rotate(-45 ${rightCx} ${cy})`}
            animate={isHovered ? { x: 6 } : { x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />

          {/* Layer 3: Left C top half (in front of right C) */}
          <motion.circle
            cx={leftCx}
            cy={cy}
            r={r}
            stroke="url(#silver-grad)"
            strokeWidth={actualDims.stroke}
            strokeDasharray={`${arcLen} ${gapLen}`}
            strokeLinecap="round"
            fill="none"
            clipPath="url(#clip-top)"
            transform={`rotate(135 ${leftCx} ${cy})`}
            animate={isHovered ? { x: -6 } : { x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
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
