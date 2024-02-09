import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'delay-100',
    'delay-150',
    'delay-200',
    'delay-250',
    'delay-300',
    'delay-350',
    'delay-400',
    'delay-450',
    'delay-500',
    // for dynamic posts
    'text-red-500',
    'text-blue-500',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // functional
        primary: 'var(--color-primary)',
        opposite: 'var(--color-opposite)',
        github: '#6cc644',
        youtube: 'red',
        bauhausRed: '#dc2626',
        bauhausYellow: '#facc15',
        bauhausBlue: '#1e40af',
      },
      transitionDelay: {
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '300': '300ms',
        '350': '350ms',
        '400': '400ms',
        '450': '450ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        flow: 'cubic-bezier(0.000, -0.005, 0.375, 1.005)',
      },
      boxShadow: {
        lightShadow: '-2px 1px 26px 5px rgba(0,0,0,0.20)',
        darkShadow: '-2px 1px 26px 5px rgba(0,0,0,0.40)',
      },
    },
  },
  variants: {},
  plugins: [],
};
export default config;
