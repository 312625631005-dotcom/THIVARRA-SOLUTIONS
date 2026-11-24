/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        panel: '#050A14',
        blue: '#1E5BFF',
        sky: '#22C7FF',
        silver: '#E6E9EF',
        muted: '#9AA7BD',
        line: '#10233F',
        dark: '#02050c',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        orbitron: ['Orbitron', 'Inter', 'sans-serif'],
        space: ['Space Grotesk', 'Inter', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      animation: {
        'shine': 'shine 8s linear infinite',
        'pulse': 'pulse 5s ease-in-out infinite',
        'spin': 'spin 7s linear infinite',
        'spin-slow': 'spin 14s linear infinite',
        'spin-reverse': 'spin 20s linear infinite reverse',
        'float': 'float 6s ease-in-out infinite',
        'sway': 'sway 9s ease-in-out infinite',
        'grid': 'grid 12s linear infinite',
        'neb': 'neb 40s ease-in-out infinite alternate',
        'loader-word': 'loader-word .55s cubic-bezier(.2,.8,.2,1) forwards',
        'loader-progress': 'loader-progress 1.25s .12s cubic-bezier(.2,.8,.2,1) forwards',
        'loader-pulse': 'loader-pulse 1.1s ease-in-out infinite alternate',
        'blink': 'blink 1s steps(1) infinite',
        'scan': 'scan 1s cubic-bezier(.7,0,.2,1) both',
        'glitch': 'glitch .9s steps(2) 1',
      },
      keyframes: {
        shine: {
          'to': { backgroundPosition: '-250% 0' },
        },
        pulse: {
          '50%': { opacity: '.55', transform: 'scale(1.08)' },
        },
        float: {
          '50%': { transform: 'translateY(-14px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotateY(-9deg)' },
          '50%': { transform: 'rotateY(9deg)' },
        },
        grid: {
          'to': { backgroundPosition: '0 48px, 48px 0' },
        },
        neb: {
          'to': { backgroundPosition: '8% 6%, -6% 4%, 4% -6%, 0 0' },
        },
        'loader-word': {
          'to': { opacity: '1', transform: 'none', filter: 'none' },
        },
        'loader-progress': {
          'to': { transform: 'scaleX(1)' },
        },
        'loader-pulse': {
          'to': { opacity: '.35', boxShadow: '0 0 4px var(--sky)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        scan: {
          '0%': { left: '0', opacity: '1' },
          '99%': { left: 'calc(100% - 3px)', opacity: '1' },
          '100%': { left: '100%', opacity: '0' },
        },
        glitch: {
          '0%, 40%': { textShadow: '3px 0 var(--blue), -3px 0 var(--sky)', transform: 'translateX(-4px)' },
          '20%': { textShadow: '-3px 0 var(--blue), 3px 0 var(--sky)', transform: 'translateX(4px)' },
          '60%, 100%': { textShadow: 'none', transform: 'none' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}