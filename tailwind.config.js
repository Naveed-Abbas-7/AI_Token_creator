/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Helvetica: ["Helvetica Neue"],
        Roboto: ["Roboto"],
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [require("daisyui")],
};
