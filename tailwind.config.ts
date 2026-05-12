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
        green: {
          DEFAULT: '#77DD77',
          light: '#9ae89a',
          dark: '#55c455',
          dim: 'rgba(119,221,119,0.15)',
        },
        bg: {
          DEFAULT: '#050508',
          elevated: '#0c0c14',
          card: '#0f0f18',
        },
      },
      fontFamily: {
        raleway: ['var(--font-raleway)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
      },
      animation: {
        marquee: 'marquee 55s linear infinite',
        'marquee-reverse': 'marquee-reverse 55s linear infinite',
        float: 'float 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 14s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%', opacity: '0.6' },
          '50%': { backgroundPosition: '100% 50%', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
