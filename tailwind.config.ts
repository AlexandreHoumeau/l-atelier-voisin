module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        momo: "var(--font-momo)",
        lexend: "var(--font-lexend)",
      },
    },
  },
  plugins: [],
};
