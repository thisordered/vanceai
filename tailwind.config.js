/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    require("./src/libs/themejson")(require("./src/theme/theme.json")),
    require("@tailwindcss/typography"),
  ],
  "postcss-rtlcss": {
    ltrPrefix: '[dir="rtl"]',
    rtlPrefix: '[dir="ltr"]',
  },
};
