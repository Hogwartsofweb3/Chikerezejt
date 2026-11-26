/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#142B4A', light: '#1e3f6b', dark: '#0d1e33' },
        teal: { DEFAULT: '#147D86', light: '#1a9aa5', dark: '#0f5f66' },
        offwhite: '#F7F8F5',
        slate: { DEFAULT: '#465466', light: '#5c6b80', dark: '#333d4d' },
        softgrey: '#E4E9EC',
        gold: '#D6A84B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(20,43,74,0.08), 0 1px 2px -1px rgba(20,43,74,0.08)',
        'card-hover': '0 4px 16px -2px rgba(20,43,74,0.12), 0 2px 4px -2px rgba(20,43,74,0.08)',
      },
    },
  },
  plugins: [],
};
