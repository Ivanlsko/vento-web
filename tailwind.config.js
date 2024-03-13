// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['satoshi', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular']
    },
    fontSize: {
      sm: ['0.9rem', { lineHeight: '1.389' }],
      base: ['1rem', { lineHeight: '1.4' }],
      xl: ['1.4rem', { lineHeight: '1.393' }],
      '2xl': ['1.5rem', { lineHeight: '1.4' }],
      '3xl': ['2rem', { lineHeight: '1.4' }],
      '4xl': ['2.2rem', { lineHeight: '1.34' }],
      '5xl': ['3.7rem', { lineHeight: '1.243', letterSpacing: '-0.01em' }]
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
