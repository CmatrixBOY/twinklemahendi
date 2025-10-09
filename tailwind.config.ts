import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
        brand: {
          pistachio: "#95D5B2",
          blush: "#FFD6BA",
          olive: "#2F3E34",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ["Playfair Display", ...defaultTheme.fontFamily.serif],
        body: ["Poppins", "Inter", ...defaultTheme.fontFamily.sans],
        accent: ["Dancing Script", "cursive"],
      },
      boxShadow: {
        glow: "0 25px 60px -35px rgba(149, 213, 178, 0.75)",
        soft: "0 30px 70px -45px rgba(149, 213, 178, 0.65)",
        neu: "0 18px 40px rgba(149, 213, 178, 0.22)",
      },
      dropShadow: {
        glow: "0 8px 24px rgba(149, 213, 178, 0.45)",
        floral: "0 12px 25px rgba(255, 214, 186, 0.35)",
      },
      backgroundImage: {
        "pistachio-mesh":
          "linear-gradient(135deg, hsl(var(--gradient-start)) 0%, hsl(var(--gradient-mid)) 45%, hsl(var(--gradient-end)) 100%)",
        glitter:
          "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.45) 0, transparent 45%)",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.33, 1, 0.68, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "gradient-flow": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        floating: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },
        "particle-drift": {
          "0%": {
            transform: "translate3d(0, 0, 0) scale(0.95)",
            opacity: "0.65",
          },
          "50%": {
            transform: "translate3d(30px, -60px, 0) scale(1.05)",
            opacity: "1",
          },
          "100%": {
            transform: "translate3d(-20px, -120px, 0) scale(0.92)",
            opacity: "0",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
        "gradient-slow": "gradient-flow 18s ease-in-out infinite",
        floating: "floating 6s ease-in-out infinite",
        "particle-drift": "particle-drift 14s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
