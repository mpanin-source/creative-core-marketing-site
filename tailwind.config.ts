import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        sans: ["Inter", "-apple-system", "sans-serif"],
        body: ["Inter", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        // shadcn baseline (HSL-var resolved via index.css :root)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          secondary: "hsl(var(--accent-secondary))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // === Direction 3 — Editorial cream + coral + forest (Round 7.5) ===
        cream: {
          DEFAULT: "#F5F0E8",
          light: "#FAF6EF",
        },
        charcoal: {
          DEFAULT: "#1A1714",
          light: "#2D2924",
        },
        coral: {
          DEFAULT: "#FF4D2E",
          dark: "#E63E1F",
          soft: "#FFE8E0",
        },
        purple: {
          DEFAULT: "#A78BFA",        // decorative fills, badge backgrounds
          dark: "#6D28D9",           // purple text on cream — 6.26:1 on cream (AA+, R7.6 substitution from #7C3AED which was 5.02:1)
          soft: "#EDE9FE",           // tinted highlight backgrounds
        },
        // Forest aliased to charcoal in Round 7.6 — no green sections remain.
        // Kept as a token name so existing bg-forest / border-forest references render correctly.
        forest: {
          DEFAULT: "#1A1714",        // → charcoal
          light: "#2D2924",          // → charcoal-light
          soft: "#FAF6EF",           // → cream-light
        },
        muted: {
          DEFAULT: "#9A8D7C",
          foreground: "#6E6356",     // shadcn text-muted-foreground compat
          light: "#B5A998",
          dark: "#6E6356",
        },
        white: "#FFFFFF",

        // === Legacy aliases — Round 6/7 token names → Direction 3 ===
        // Any straggling `text-electric`/`bg-navy`/etc. references render in Direction 3 colors.
        navy: { deep: "#1A1714", DEFAULT: "#1A1714" },                              // → charcoal (R7.6)
        slate: { DEFAULT: "#6E6356", dark: "#1A1714", medium: "#6E6356", light: "#9A8D7C" },
        cyan: { DEFAULT: "#FF4D2E", dark: "#E63E1F", bright: "#FF6B52" },           // → coral
        electric: "#FF4D2E",                                                         // → coral
        safety: "#FF4D2E",                                                           // → coral
        success: "#1A1714",                                                          // → charcoal (R7.6, was forest)
        warning: "#E63E1F",                                                          // → coral-dark
        cta: {
          DEFAULT: "#FF4D2E",
          foreground: "#FFFFFF",
          alt: "#E63E1F",
        },
        sage: { DEFAULT: "#1A1714", light: "#2D2924" },                             // → charcoal (R7.6)
        army: { DEFAULT: "#1A1714", dark: "#0A0807" },                              // → charcoal (R7.6)
        stone: { DEFAULT: "#6E6356", dark: "#1A1714" },                             // → muted-dark / charcoal
        "warm-white": "#F5F0E8",                                                     // → cream
        tier: {
          blue: "#FF4D2E",
          "blue-foreground": "#FFFFFF",
          teal: "#E63E1F",
          "teal-foreground": "#FFFFFF",
          green: "#1A1714",
          "green-foreground": "#F5F0E8",
          gold: "#FF4D2E",
          "gold-foreground": "#FFFFFF",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      boxShadow: {
        subtle: "var(--shadow-subtle)",
        card: "var(--shadow-card)",
        elevated: "var(--shadow-elevated)",
        neon: "0 0 15px rgba(255, 77, 46, 0.5)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "ghost-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "ghost-out": {
          from: { opacity: "1", transform: "translateY(0)" },
          to: { opacity: "0", transform: "translateY(-8px)" },
        },
        "trigger-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "ghost-in": "ghost-in 0.4s cubic-bezier(0.32, 0.72, 0.3, 1)",
        "ghost-out": "ghost-out 0.3s cubic-bezier(0.32, 0.72, 0.3, 1)",
        "trigger-pulse": "trigger-pulse 2s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;