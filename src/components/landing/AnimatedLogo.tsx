import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg";
}

const CCEmblem = ({ size, isHovered }: { size: string; isHovered: boolean }) => {
  const dims = {
    sm: { w: 28, h: 28, stroke: 3 },
    md: { w: 34, h: 34, stroke: 3.5 },
    lg: { w: 48, h: 48, stroke: 4 },
  }[size] || { w: 28, h: 28, stroke: 3 };

  const totalDelay = 0.78; // after letters finish

  return (
    <motion.div
      className="absolute z-10"
      style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
      initial={{ opacity: 0, scale: 0.3, rotate: -90 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: totalDelay, duration: 0.5, type: "spring", stiffness: 200, damping: 15 }}
    >
      <motion.svg
        width={dims.w}
        height={dims.h}
        viewBox="0 0 60 60"
        fill="none"
        style={{ filter: isHovered
          ? "drop-shadow(0 0 12px rgba(0,209,255,0.7)) drop-shadow(0 0 24px rgba(0,209,255,0.3))"
          : "drop-shadow(0 0 6px rgba(0,209,255,0.4))"
        }}
        animate={isHovered ? { scale: 1.2, y: -4 } : { scale: 1, y: 0 }}
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
        {/* Left C - silver/white */}
        <motion.path
          d="M 28 12 A 18 18 0 1 0 28 48"
          stroke="url(#silver-grad)"
          strokeWidth={dims.stroke}
          strokeLinecap="round"
          fill="none"
          animate={isHovered ? { rotate: -15 } : { rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ transformOrigin: "22px 30px" }}
        />
        {/* Right C - cyan */}
        <motion.path
          d="M 32 12 A 18 18 0 1 1 32 48"
          stroke="url(#cyan-grad)"
          strokeWidth={dims.stroke}
          strokeLinecap="round"
          fill="none"
          animate={isHovered ? { rotate: 15 } : { rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ transformOrigin: "38px 30px" }}
        />
      </motion.svg>
      {/* Glow pulse after entrance */}
      <motion.div
        className="absolute inset-0 rounded-full"
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
      className="flex items-center gap-1 group relative chrome-shine"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mobile: static logo with small emblem */}
      <div className="md:hidden flex items-center relative">
        <span className={`${s.mobile} font-display tracking-tight`} style={{ fontWeight: 700 }}>
          <span className="text-foreground">CREATIVE </span>
          <span className="text-electric" style={{ filter: `drop-shadow(${s.glow} rgba(0,209,255,0.4))` }}>CORE</span>
        </span>
        <CCEmblem size={size} isHovered={false} />
      </div>

      {/* Desktop: animated letter reveal with emblem */}
      <div className="hidden md:flex items-center relative">
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
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: creative.length * 0.06 }}
          className={`${s.desktop} font-display`}
          style={{ fontWeight: 700, width: size === "lg" ? "2rem" : size === "md" ? "1.5rem" : "1rem" }}
        >
          &nbsp;
        </motion.span>
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
        <CCEmblem size={size} isHovered={isHovered} />
      </div>
    </a>
  );
};

export default AnimatedLogo;
