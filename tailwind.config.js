// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#1E4E79",
//         primaryDark: "#122F49",
//         secondary: "#9BCFE5",
//         secondaryDark: "#364850",
//       },
//       backgroundImage: {},
//       container: {
//         screens: {
//           "2xl": "1320px",
//           xl: "1140px",
//           lg: "960px",
//         },
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  plugins: [],
};

export default config;
