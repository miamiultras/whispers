/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      imageRendering: {
        'pixelated': 'pixelated',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.pixel-image': {
          'image-rendering': 'pixelated',
          'width': '100%',
          'height': '100%',
          'object-fit': 'cover',
        },
      });
    },
  ],
}
