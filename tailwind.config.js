/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#DC2626',
          'red-dark': '#991B1B',
          'red-light': '#F87171',
          gold: '#F59E0B',
          'gold-light': '#FBBF24',
          'gold-dark': '#D97706',
          navy: '#0B1329',
          'navy-card': '#111C38',
          'navy-border': '#1E2D56',
          industrial: '#0E1726',
          steel: '#64748B'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 25px -5px rgba(220, 38, 38, 0.4)',
        'glow-gold': '0 0 25px -5px rgba(245, 158, 11, 0.35)',
        'card-dark': '0 10px 30px -10px rgba(2, 6, 23, 0.7)',
        'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 2px 1px rgba(255, 255, 255, 0.05)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
