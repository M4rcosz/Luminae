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
      },
    },
    colors: {
      "whiteText": "#f0f0f0",
      "grayText": "#C4C4C4",
      "veryGrayText": "#9D9D9D",
      "notifications": "#d02E00"
    }
  },
  plugins: [],
}
export default config
