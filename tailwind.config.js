// tailwind.config.js
module.exports = {
  content:[
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        yomogi: ['"Yomogi"', 'sans-serif'], // ← 必ずダブルクォートつきで
      },
    },
  },
  plugins: [],
}
