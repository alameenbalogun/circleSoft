/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // your source files
    "./node_modules/flowbite/**/*.js", // add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // add this plugin
  ],
};
