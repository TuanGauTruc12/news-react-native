/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#1877f2',
        'light-color': "#fff",
        'black-color': '#000'
      },
    },
  },
  plugins: [],
};
