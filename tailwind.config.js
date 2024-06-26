module.exports = {
  mode: "jit", // Optionally use just in time engine
  purge: ["./src/**/*.{js,jsx,ts,tsx,css}", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
