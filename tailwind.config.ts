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
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // functional
        primary: 'var(--color-primary)',
        // neutrals
        black: 'black',
        white: 'white',
        grey: 'grey',
        // colors
        red: 'red',
        blue: 'blue',
        green: 'green',
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
    },
  },
  variants: {},
  plugins: [],
};
export default config;
