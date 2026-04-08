import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg";
}

const CCEmblem = ({ size, isHovered }: { size: string; isHovered: boolean }) => {
  const dims = {
    sm: { w: 22, h: 22 },
    md: { w: 38, h: 38 },
    lg: { w: 52, h: 52 },
  }[size] || { w: 22, h: 22 };

  // Use smaller size on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const actualDims = isMobile ? { w: 18, h: 18 } : dims;

  const totalDelay = 0.78;

  return (
    <motion.div
      className="relative z-10 flex-shrink-0"
      style={{ margin: "0 2px" }}
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
            ? "drop-shadow(0 0 10px rgba(0,209,255,0.7)) drop-shadow(0 0 20px rgba(0,209,255,0.3))"
            : "drop-shadow(0 0 4px rgba(0,209,255,0.35))",
        }}
        animate={isHovered ? { scale: 1.2, y: -3 } : { scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Left C - silver/white */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: "3px solid transparent",
            borderLeftColor: "#d4d4d4",
            borderTopColor: "#e8e8e8",
            borderBottomColor: "#b0b0b0",
            left: -4,
          }}
          animate={isHovered ? { rotate: -20, x: -3 } : { rotate: 0, x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
        {/* Right C - cyan */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: "3px solid transparent",
            borderRightColor: "#00d9ff",
            borderTopColor: "#00f0ff",
            borderBottomColor: "#0090b0",
            right: -4,
            left: 4,
          }}
          animate={isHovered ? { rotate: 20, x: 3 } : { rotate: 0, x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
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
