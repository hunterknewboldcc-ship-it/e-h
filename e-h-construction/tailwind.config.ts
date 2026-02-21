import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'eh-navy': '#003594',      // Cowboys deep blue
        'eh-gold': '#FFD700',      // star shine
        'eh-silver': '#C0C0C0',    // metallic neutrals
        'eh-white': '#FFFFFF',
        'eh-gray': '#D3D3D3',
        'eh-turf': '#006A4E',      // subtle green for outdoors
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
