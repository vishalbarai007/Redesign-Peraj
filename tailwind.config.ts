import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1360px"
      }
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
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        // Official Peraj Color Palette tokens
        peraj: {
          navy: {
            DEFAULT: "#102A43",
            deep: "#001D2D",
            dark: "#0B1D3A",
            light: "#1F3B5C",
            surface: "#F0F4F8",
          },
          teal: {
            DEFAULT: "#007F73",
            dark: "#005575",
            hover: "#00675D",
            light: "#E6F4F1",
          },
          gold: {
            DEFAULT: "#B58B45",
            light: "#D4AF37",
            soft: "#F9F6F0",
          },
          charcoal: {
            DEFAULT: "#243746",
            muted: "#5B7083",
            subtle: "#8899A6",
          },
          cream: "#FAF8F5",
          offwhite: "#F7F8FA",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["var(--font-heading)", "Forum", "Georgia", "serif"],
        heading: ["var(--font-heading)", "Forum", "Georgia", "serif"],
        forum: ["var(--font-heading)", "Forum", "Georgia", "serif"],
        inter: ["var(--font-sans)", "Inter", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(16, 42, 67, 0.04)",
        card: "0 10px 30px -10px rgba(16, 42, 67, 0.08)",
        "card-hover": "0 20px 40px -15px rgba(16, 42, 67, 0.12)",
        teal: "0 10px 25px -5px rgba(0, 127, 115, 0.25)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
