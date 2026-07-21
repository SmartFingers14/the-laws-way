import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep authority navy — the spine of the brand
        ink: {
          DEFAULT: "#0B1B34",
          900: "#0A1730",
          800: "#0F2547",
          700: "#16345F",
          600: "#1E4478",
        },
        navy: {
          DEFAULT: "#122A4E",
          light: "#1E3A5F",
        },
        // Muted, editorial gold — never garish
        gold: {
          DEFAULT: "#B08D57",
          light: "#C6A874",
          soft: "#D9C7A3",
          deep: "#8C6B3D",
        },
        cream: {
          DEFAULT: "#F6F3EC",
          50: "#FBFAF6",
          100: "#F3EEE4",
        },
        parchment: "#EFE9DC",
      },
      fontFamily: {
        serif: ["var(--font-garamond)", "Georgia", "serif"],
        sans: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.28em",
      },
      boxShadow: {
        card: "0 20px 50px -24px rgba(11, 27, 52, 0.35)",
        gold: "0 18px 40px -20px rgba(176, 141, 87, 0.55)",
      },
      backgroundImage: {
        "hero-veil":
          "linear-gradient(180deg, rgba(10,23,48,0.72) 0%, rgba(10,23,48,0.55) 45%, rgba(10,23,48,0.85) 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "line-grow": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
