/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      lineHeight: {
        "extra-loose": '55px',
      },
      colors: {
        dark: '#1a202c', // Dark background color
        amber: '#FEBA45', // Amber color
        lightAmber: '#ffcc77', // Light Amber color for hover effects, if needed
        darkAmber: '#a93750', // Dark amber color for extra depth
        white: '#ffffff', // White color
        cardBg: '#2D2D2D', // Dark Background for cards
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '10xl': '20rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
