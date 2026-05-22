/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-ivory': 'oklch(97% 0.005 80)',
        'warm-charcoal': 'oklch(22% 0.015 80)',
        'soft-ash': 'oklch(55% 0.01 80)',
        'warm-surface': 'oklch(93% 0.006 80)',
        'cobalt-signal': 'oklch(52% 0.13 250)',
        'cobalt-deep': 'oklch(47% 0.14 250)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'prose': '70ch',
      },
    },
  },
  plugins: [],
};
