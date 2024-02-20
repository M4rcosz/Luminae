import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": "10px",
        "3xs": "8px"
      },
      spacing: {
        "0.75": "3px",
        "Mobile": "20px",
        "Tablet": "60px",
      },
      colors: {
        "whiteText": "#f0f0f0",
        "grayText": "#C4C4C4",
        "veryGrayText": "#9D9D9D",
        "notifications": "#d02E00"
      },
      animation: {
        "popUp": "fadeInOut 3s linear forwards",
        "rightFadeInOut": "rightFadeInOut .2s linear forwards",
        "rightFadeInOutReverse": "rightFadeInOutReverse .2s linear forwards"
      },
      keyframes: {
        "fadeInOut": {
          "0%": {
            display: "block",
            opacity: "0%",
            top: "100px",
          },
          "10%": {
            opacity: "100%",
            top: "48px",
          },
          "90%": {
            opacity: "100%",
            top: "48px",
          },
          "100%": {
            display: "none",
            opacity: "0%",
            top: "-48px",
          }
        },
        "rightFadeInOut": {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "rightFadeInOutReverse": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(100%)",
          }
        }
      }
    },


  },
  plugins: [],
}
export default config
