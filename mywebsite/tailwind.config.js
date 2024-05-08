/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
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
        grey: {
          100: "#f5f5f5",
          200: "#E8E8E8",
          500: "#424242",
          600: "#757575",
          700: "#4D4D4D",
          900: "#181818",
        },
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
      fontFamily: {
        monserrat: ["__Montserrat_b1da2a"],
        "eb-garamond": ["__EB_Garamond_c49f4a"],
      },
    },
    colors: {
      white: {
        100: "#FFFFFF",
        200: "#F5F5F5",
      },
      black: {
        900: "#000000",
      },
      grey: {
        100: "#f5f5f5",
        200: "#E8E8E8",
        500: "#424242",
        600: "#757575",
        700: "#4D4D4D",
        900: "#181818",
      },
      gold: {
        400: "#7F774E",
        500: "#80774F",
      },
      yellow: {
        DEFAULT: "#FBEB4F",
      },
      green: {
        500: "#00A769",
      },
      red: {
        300: "#EB5757",
      },
      success: "#00A769",
      destructive: "#EB5757",
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-animate")],
};
export default config;
