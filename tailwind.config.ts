import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        "brand-bg": "#09101b",
        "brand-surface": "#0f1a2b",
        "brand-beige": "#edcfa1",
        "brand-gold": "#bf8b55",
        "brand-gold-dark": "#8f7e64",
        "brand-gold-light": "#fee6a2",
        "brand-border": "#1a2942",
      },
      fontFamily: {
        sans: ["STIX Two Text", "serif"],
        arabic: ["Almarai", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #8f7e64 0%, #bf8b55 50%, #fee6a2 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
