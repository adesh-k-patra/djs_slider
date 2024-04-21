/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        background: "#484846",
        dark: "#1c1c1b",
      },
      borderColor: {
        background: "#484846",
        slider: "#353839",
      },
      textColor: {
        background: "#7f7f7f",
      },
      boxShadow: {
        on: "-8px 8px 8px 2px #3b82f6, 0 0 0 1px #3b82f6",
        off: "-8px 8px 8px 2px #ef4444, 0 0 0 1px #ef4444",
        none: "-5px 5px 20px 2px rgb(0,0,0)",
        slider: "0 0 10px 25px #353839 inset",
      },
    },
  },
  plugins: [],
}
