/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // Warm cream system — inspired by b-egg.farm
        cream: {
          50:  '#fdfcf9',
          100: '#f5f3ed',   // primary bg
          200: '#eeebe2',   // alt section bg
          300: '#e0ddd5',   // borders / dividers
          400: '#ccc8be',   // disabled states
          500: '#a09d97',   // faint text
        },
        // Warm near-black ink system
        ink: {
          900: '#111110',   // headings / dark sections
          800: '#1a1917',   // primary text
          700: '#3d3b37',   // secondary text
          500: '#6b6860',   // muted text
          300: '#a09d97',   // faint text
          100: '#c8c5bf',   // very faint
        },
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Keep gray-950 for any remaining dark elements
        gray: {
          950: '#030712',
        },
      },
    },
  },
  plugins: [],
}
