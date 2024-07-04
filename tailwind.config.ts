import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-linear': 'linear-gradient(180deg, #11BCDE 0%, #226DEA 100%)',
      },
      colors: {
        // theme specifiers:
        'custom-theme': '#1364F1',
        'hover-theme': '#2196f3',
        'custom-buttonText': '#ffffff',
        // others:
        'custom-green': '#22C55E',
        'hover-green': "#16a34a",
        'custom-orange': '#fb923c',
        'hover-orange' : '#f97316',
        'custom-red': '#ef4444',
        'hover-red': '#dc2626',
        'custom-pink': '#f472b6',
        'custom-indigo': '#60a5fa',
      }
    },
  },
  plugins: [],
}
export default config
