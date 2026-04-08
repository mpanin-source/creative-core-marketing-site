import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg";
}

const CCEmblem = ({ size, isHovered }: { size: string; isHovered: boolean }) => {
  const dims = {
    sm: { w: 28, h: 28, stroke: 4 },
    md: { w: 44, h: 44, stroke: 5 },
    lg: { w: 60, h: 60, stroke: 6 },
  }[size] || { w: 28, h: 28, stroke: 4 };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const actualDims = isMobile ? { w: 22, h: 22, stroke: 3 } : dims;

  const totalDelay = 0.78;

  // SVG viewBox is 60x60, we scale via width/height
  // Two C arcs (~270° each), offset so they overlap in center
  // Interlock achieved by layering: leftC-top, rightC-top, rightC-bottom, leftC-top (already drawn)
  // Actually: draw left-C bottom half, right-C full, left-C top half

  const vb = 60;
  const r = 18; // radius
  const sw = actualDims.stroke;
  const leftCx = 22;
  const rightCx = 38;
  const cy = 30;

  // Arc helper: create a ~270° C-shape arc (open on one side)
  // Left C opens to the right, Right C opens to the left
  // We split each into top half and bottom half for weaving

  // Left C: center at (leftCx, cy), opens right (gap at 0°/east)
  // Top half: from bottom (270°) counter-clockwise to top... let's use SVG arc commands
  // Actually let's think in terms of start/end angles

  // Left C (opens right, gap ~45° on each side of east):
  //   Goes from 45° to 315° (CW) = 270° arc
  //   Split at 180° (west/left point): top half 45°→180°, bottom half 180°→315°

  // Right C (opens left, gap ~45° on each side of west/180°):
  //   Goes from 225° to 135° (CW, crossing 0°) = 270° arc  
  //   Split at 0°/360° (east/right point): top half 225°→360°, bottom half 0°→135°

  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const px = (cx: number, angle: number) => cx + r * Math.cos(toRad(angle));
  const py = (angle: number) => cy + r * Math.sin(toRad(angle));

  // Left C paths (opens to right, gap around 0°)
  // Full arc from 50° down to 310° going clockwise = but SVG arcs...
  // Let's define with M and A commands
  
  // Left C - top half: from 310° (upper-right area) going CCW to 180° (left)
  const leftTopStart = { x: px(leftCx, 310), y: py(310) };
  const leftTopEnd = { x: px(leftCx, 180), y: py(180) };
  const leftTopPath = `M ${leftTopStart.x} ${leftTopStart.y} A ${r} ${r} 0 0 0 ${leftTopEnd.x} ${leftTopEnd.y}`;

  // Left C - bottom half: from 180° (left) going CCW to 50° (lower-right area)  
  const leftBottomStart = { x: px(leftCx, 180), y: py(180) };
  const leftBottomEnd = { x: px(leftCx, 50), y: py(50) };
  const leftBottomPath = `M ${leftBottomStart.x} ${leftBottomStart.y} A ${r} ${r} 0 0 0 ${leftBottomEnd.x} ${leftBottomEnd.y}`;

  // Right C - top half: from 180° going CW (sweep=1) to 230°... 
  // Right C opens to the left (gap around 180°)
  // Arc from 230° CW through 360°/0° to 130° = 260° arc
  // Top half: 230° CW to 0° 
  const rightTopStart = { x: px(rightCx, 230), y: py(230) };
  const rightTopEnd = { x: px(rightCx, 360), y: py(360) };
  const rightTopPath = `M ${rightTopStart.x} ${rightTopStart.y} A ${r} ${r} 0 0 1 ${rightTopEnd.x} ${rightTopEnd.y}`;

  // Right C - bottom half: 0° CW to 130°
  const rightBottomStart = { x: px(rightCx, 0), y: py(0) };
  const rightBottomEnd = { x: px(rightCx, 130), y: py(130) };
  const rightBottomPath = `M ${rightBottomStart.x} ${rightBottomStart.y} A ${r} ${r} 0 0 1 ${rightBottomEnd.x} ${rightBottomEnd.y}`;

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
            ? "drop-shadow(0 0 12px rgba(0,209,255,0.7)) drop-shadow(0 0 24px rgba(0,209,255,0.3))"
            : "drop-shadow(0 0 5px rgba(0,209,255,0.35))",
        }}
        animate={isHovered ? { scale: 1.15, y: -2 } : { scale: 1, y: 0 }}
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
          </defs>

          {/* Layer order for weaving: left-bottom, right-full-top, left-top (on top) */}
          {/* This creates the illusion: left C is in front at top, behind at bottom */}

          {/* 1. Left C - bottom half (behind right C) */}
          <motion.path
            d={leftBottomPath}
            stroke="url(#silver-grad)"
            strokeWidth={sw}
            strokeLinecap="round"
            fill="none"
            animate={isHovered ? { x: -8, rotate: -15 } : { x: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformOrigin: `${leftCx}px ${cy}px` }}
          />

          {/* 2. Right C - top half */}
          <motion.path
            d={rightTopPath}
            stroke="url(#cyan-grad)"
            strokeWidth={sw}
            strokeLinecap="round"
            fill="none"
            filter="url(#cyan-glow)"
            animate={isHovered ? { x: 8, rotate: 15 } : { x: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformOrigin: `${rightCx}px ${cy}px` }}
          />

          {/* 3. Right C - bottom half */}
          <motion.path
            d={rightBottomPath}
            stroke="url(#cyan-grad)"
            strokeWidth={sw}
            strokeLinecap="round"
            fill="none"
            filter="url(#cyan-glow)"
            animate={isHovered ? { x: 8, rotate: 15 } : { x: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformOrigin: `${rightCx}px ${cy}px` }}
          />

          {/* 4. Left C - top half (in front of right C) */}
          <motion.path
            d={leftTopPath}
            stroke="url(#silver-grad)"
            strokeWidth={sw}
            strokeLinecap="round"
            fill="none"
            animate={isHovered ? { x: -8, rotate: -15 } : { x: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformOrigin: `${leftCx}px ${cy}px` }}
          />
        </svg>
      </motion.div>

      {/* Entrance glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ delay: totalDelay + 0.3, duration: 0.8, ease: "easeOut" }}
        style={{ background: "radial-gradient(circle, rgba(0,209,255,0.4) 0%, transparent 70%)" }}
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
