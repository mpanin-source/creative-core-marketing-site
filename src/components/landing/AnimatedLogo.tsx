import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg";
}

const CCEmblem = ({ size, isHovered }: { size: string; isHovered: boolean }) => {
  const dims = {
    sm: { w: 24, h: 24, stroke: 2.5 },
    md: { w: 30, h: 30, stroke: 3 },
    lg: { w: 42, h: 42, stroke: 3.5 },
  }[size] || { w: 24, h: 24, stroke: 2.5 };

  const totalDelay = 0.78;

  return (
    <motion.div
      className="relative z-10 flex-shrink-0 mx-1"
      initial={{ opacity: 0, scale: 0.3, rotate: -90 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: totalDelay, duration: 0.5, type: "spring", stiffness: 200, damping: 15 }}
    >
      <motion.svg
        width={dims.w}
        height={dims.h}
        viewBox="0 0 60 60"
        fill="none"
        style={{
          filter: isHovered
            ? "drop-shadow(0 0 12px rgba(0,209,255,0.7)) drop-shadow(0 0 24px rgba(0,209,255,0.3))"
            : "drop-shadow(0 0 6px rgba(0,209,255,0.4))",
        }}
        animate={isHovered ? { scale: 1.25, y: -3 } : { scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <defs>
          <linearGradient id="silver-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e8e8e8" />
            <stop offset="40%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#b0b0b0" />
            <stop offset="100%" stopColor="#d4d4d4" />
          </linearGradient>
          <linearGradient id="cyan-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00d9ff" />
            <stop offset="40%" stopColor="#00f0ff" />
            <stop offset="60%" stopColor="#0090b0" />
            <stop offset="100%" stopColor="#00d9ff" />
          </linearGradient>
        </defs>
        {/* Left C - silver/white, opens to the right */}
        <motion.path
          d="M 34 10 A 20 20 0 1 0 34 50"
          stroke="url(#silver-grad)"
          strokeWidth={dims.stroke}
          strokeLinecap="round"
          fill="none"
          animate={isHovered ? { x: -4, rotate: -12 } : { x: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ transformOrigin: "center" }}
        />
        {/* Right C - cyan, opens to the left */}
        <motion.path
          d="M 26 10 A 20 20 0 1 1 26 50"
          stroke="url(#cyan-grad)"
          strokeWidth={dims.stroke}
          strokeLinecap="round"
          fill="none"
          animate={isHovered ? { x: 4, rotate: 12 } : { x: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ transformOrigin: "center" }}
        />
      </motion.svg>
      {/* Glow pulse on entrance */}
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
      {/* Mobile: static logo with small emblem */}
      <div className="md:hidden flex items-center">
        <span className={`${s.mobile} font-display tracking-tight`} style={{ fontWeight: 700 }}>
          <span className="text-foreground">CREATIVE</span>
        </span>
        <CCEmblem size={size} isHovered={false} />
        <span className={`${s.mobile} font-display tracking-tight`} style={{ fontWeight: 700 }}>
          <span className="text-electric" style={{ filter: `drop-shadow(${s.glow} rgba(0,209,255,0.4))` }}>CORE</span>
        </span>
      </div>

      {/* Desktop: animated letter reveal with emblem between words */}
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

        {/* CC Emblem sits between the words */}
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
