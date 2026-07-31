import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        ink: "#111111",
        blue: "#2563EB",
        line: "#E7E7E7",
        muted: "#6B7280",
        paper: "#FFFFFF",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(.65,0,.35,1)",
      },
    },
  },
  plugins: [],
};

export default config;
