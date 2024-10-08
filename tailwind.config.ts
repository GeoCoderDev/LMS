import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sxs: "0px",
      xs: "300px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "max-xs": { max: "200px" },
      "max-sm": { max: "480px" },
      "max-md": { max: "768px" },
      "max-lg": { max: "976px" },
      "max-xl": { max: "1440px" },
      "pseudo-portrait": { raw: "(max-aspect-ratio: 1.4/1)" },
      portrait: { raw: "(orientation: portrait)" },
      landscape: { raw: "(orientation: landscape)" },
      "small-height": { raw: "(min-aspect-ratio: 2.55/1)" },
      "more-double-height": {raw:"(max-aspect-ratio: 1/2)"}
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      }
    },
  },
  plugins: [],
};
export default config;
