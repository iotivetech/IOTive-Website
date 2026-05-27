/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f8fafc', // Clean slate-50 background (not warm orange-tinted)
          100: '#f1f5f9', // Clean slate-100 tag background
          200: '#e2e8f0', // Clean border
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#f97316', // Vibrant orange accent
          600: '#f38320', // Official Brand Orange primary highlight
          700: '#ea580c', // Hover orange
          800: '#c2410c', // Pressed orange
          900: '#0f172a', // Deep slate for tech footer backgrounds
          950: '#020617',
        },
        purple: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#475569',
          600: '#1e293b', // Deep charcoal/slate text and layouts
          700: '#0f172a',
          800: '#111111', // Official Brand Charcoal
          900: '#111111', // Official Brand Charcoal secondary highlight
          950: '#020617',
        },
        pink: {
          50: '#f0f9ff', // Fresh light ice-blue background (third animated-gradient stop)
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#ff6b35', // Vibrant Coral accent for the glowing orange-to-coral gradients
          700: '#d97706',
          800: '#b45309',
          900: '#78350f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}