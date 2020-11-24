const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: colors.trueGray,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.lime,
      blue: colors.cyan,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
