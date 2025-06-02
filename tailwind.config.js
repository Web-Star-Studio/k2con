/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-orange': {
          DEFAULT: '#f59e0b',
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
          light: '#fbbf24',
          dark: '#d97706',
          bright: '#fcd34d',
          subtle: '#fed7aa',
          muted: '#ffedd5',
          glow: 'rgba(245, 158, 11, 0.3)',
        },
        gray: {
          850: '#172033',
          950: '#0a0e1a',
        }
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-source-sans)', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-orange': 'linear-gradient(135deg, var(--brand-orange) 0%, var(--brand-orange-light) 100%)',
        'gradient-orange-subtle': 'linear-gradient(135deg, var(--gray-850) 0%, rgba(245, 158, 11, 0.05) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(245, 158, 11, 0.3)',
        'glow-lg': '0 0 40px rgba(245, 158, 11, 0.4)',
        'glow-xl': '0 0 60px rgba(245, 158, 11, 0.5)',
        'dark': '0 4px 16px rgba(0, 0, 0, 0.3)',
        'dark-lg': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'dark-xl': '0 20px 40px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'grid-move': 'gridMove 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(245, 158, 11, 0.6)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gridMove: {
          '0%': { backgroundPosition: '0% 0%, 100% 100%, 0 0, 0 0' },
          '100%': { backgroundPosition: '100% 100%, 0% 0%, 60px 60px, 60px 60px' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
} 