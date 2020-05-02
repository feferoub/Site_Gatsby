import Typography from "typography"
import ivringTheme from "typography-theme-irving"

// const typography = new Typography({
//   baseFontSize: "18px",
//   baseLineHeight: 1.45,
//   headerFontFamily: ["Lobster", "serif"],
//   bodyFontFamily: ["Lobster", "sans-serif"],
//   spanFontFamily: ["Baloo Paaji 2", "sérif"],
// })
const typography = new Typography(ivringTheme)

// Insert styles directly into the <head>
typography.injectStyles()

export default typography
