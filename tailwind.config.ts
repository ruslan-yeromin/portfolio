import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-bg': 'linear-gradient(270deg, #fbe2e3, #dbd7fb)',
        'gradient-bg-dark': 'linear-gradient(270deg, #031420, #160324)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.gradient-bg': {
          backgroundSize: '200% 200%',
          animation: 'gradient 5s ease infinite',
        },
        '.gradient-bg-dark': {
          backgroundSize: '200% 200%',
          animation: 'gradient 5s ease infinite',
        },
      }
      addUtilities(newUtilities, ['dark'])
      const newDarkUtilities = {
        '.dark .gradient-bg-dark': {
          background: 'linear-gradient(270deg, #0D3A58, #4B0082)',
          backgroundSize: '200% 200%',
          animation: 'gradient 5s ease infinite',
        },

      }
      addUtilities(newDarkUtilities);
    },
  ],
  darkMode: 'class',
}

export default config
