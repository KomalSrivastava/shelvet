// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        wilkysta: ['Wilkysta', ...defaultTheme.fontFamily.sans], // Custom font
        PlayfairDisplay: ['Playfair Display'], // Example other font
      },
    },
  },
  plugins: [],
}
