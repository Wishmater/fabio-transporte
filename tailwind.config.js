import { screens } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'xs': '390px',
      'xxs': '321px',
      ...screens,
    },
    extend: {
      colors: {
        "pantone": "#0F4366",
      },
      fontFamily: {
        display: 'Montserrat',
      }
    },

  },
}

