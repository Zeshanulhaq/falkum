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
        gold: "#c9a84c",
      },
      fontFamily: {
        arabic: ["Noto Sans Arabic", "Verdana", "sans-serif"],
        sans: ["Verdana", "Geneva", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
