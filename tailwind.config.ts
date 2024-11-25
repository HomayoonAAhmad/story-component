import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./gcui/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/*",
    "./containers/*.{js,ts,jsx,tsx,mdx}",
    "./Layout/*.{js,ts,jsx,tsx,mdx",
    "./stories/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          700: "#610f36",
          800: "#4a0c2c",
          900: "#340822",
          600: "#7b1e52",
          500: "#8e2363",
          400: "#a12873",
          300: "#b42d83",
          200: "#c63293",
          100: "#d837a3",
          50: "#e93cb3",
        },
      },
      transitionTimingFunction: {
        slip: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      backgroundImage: {
        "gradient-shadow":
          "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%)",
        "gradient-light":
          "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)",
        "bg-svg": "url('/assets/images/bg.svg')",
        "bg-cherry": "url('/assets/images/cherry-pattern.png')",
        "bg-gilace": "linear-gradient(135deg, #7E1B56 0%, #3E0340 100%)",
      },
      animation: {
        comeFromBottom:
          "comeFromBottom 0.32s cubic-bezier(.24,1.32,.87,1.04) forwards",
        goToBottom: "goToBottom 0.32s cubic-bezier(.24,1.32,.87,1.04)",
        comeFromRight: "comeFromRight 0.3s cubic-bezier(.03,.56,.59,1.23)",
        backToRight: "backToRight 0.3s cubic-bezier(.03,.56,.59,1.23) forwards",
        fadeIn: "fadeIn 0.3s linear",
        fadeOut: "fadeOut 0.3s linear forwards",
        flashUp: "flashUp 0.3s linear",
        flashDown: "flashDown 0.3s linear forwards",
        dropDown: "dropDown 0.3s cubic-bezier(.68,.04,.61,1.16)",
        dropUp: "dropUp 0.3s cubic-bezier(.68,.04,.61,1.16)",
        bounceToBottom: "bounceToBottom 0.3s cubic-bezier(.53,-0.61,.82,.91)",
        bounceFromBottom: "bounceFromBottom 0.3s cubic-bezier(.03,.56,.8,1.67)",
        dampingSwing: "dampingSwing 3s ease-in-out alternate",
        onTheEarth: "onTheEarth 5s cubic-bezier(0.42, 0, 0.58, 1) infinite",
      },
      fontFamily: {
        sans: [
          "Vazirmatn",
          "Inter var",
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [
    function (api: PluginAPI) {
      const { addUtilities } = api;
      addUtilities({
        ".no-spinner": {
          "-webkit-appearance": "none",
          "-moz-appearance": "textfield",
        },
        ".no-spinner::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
          margin: "0",
        },
        ".no-spinner::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: "0",
        },
      });
    },
  ],
};

export default config;
