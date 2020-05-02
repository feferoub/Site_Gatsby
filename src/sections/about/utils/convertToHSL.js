export default function convertToHsl(color, lightness = 0) {
  if (color === "none" || !color) {
    return "none"
  }
  var r = 0
  var g = 0
  var b = 0
  if (color.includes("rgb") || color.includes("rgba")) {
    var rgb = color
      .replace(/^(rgb|rgba)\(/, "")
      .replace(/\)$/, "")
      .replace(/\s/g, "")
      .split(",")
    r = rgb[0]
    g = rgb[1]
    b = rgb[2]
  } else {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)

    r = parseInt(result[1], 16)
    g = parseInt(result[2], 16)
    b = parseInt(result[3], 16)
  }

  r /= 255
  g /= 255
  b /= 255
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  var h,
    s,
    l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    var d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    // eslint-disable-next-line default-case
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  s = s * 100
  s = Math.round(s)
  l = l * 100 + lightness
  l = Math.round(l)
  h = Math.round(360 * h)

  return "hsl(" + h + ", " + s + "%, " + l + "%)"
}
