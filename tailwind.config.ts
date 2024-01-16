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
        "0.75": "3px"
      },
    },
  },
  plugins: [],
}
export default config
