/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A9A3D9',
        background: '#141316',
        surface: 'rgba(28, 27, 31, 0.7)',
        text: '#F8F5F0',
        accent: '#E8DDCF',
      },
    },
  },
  plugins: [],
}
