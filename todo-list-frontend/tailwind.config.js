/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", ...defaultTheme.fontFamily.sans];
        aclonica: ["Aclonica", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};
