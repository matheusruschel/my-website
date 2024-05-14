import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dePixelBreit: ["DePixelBreit"],
        chicago: ["Chicago", "sans-serif"],
        "chicago-pix": ["pix Chicago", "sans-serif"],
        apple: ["Apple Garamond Light", "sans-serif"]
      },
      boxShadow: {
        sharp: '1px 1px 0px 1px rgba(0, 0, 0, 0.6)',
        "sharp-blur": '-1px -1px 1px 2px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1280px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "panel-gray": "#d8d8d8",
        "background-purple": "#4D5C8F"
      },
      minWidth: {
        'screen-min': '800px',
      }
    },
  },
  plugins: [],
};
export default config;
