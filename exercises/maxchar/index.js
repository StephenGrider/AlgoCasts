// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {}
  str.split('').forEach((el) => {
    obj[el] = obj[el] ? obj[el] + 1 : 1
  })
  return Object.entries(obj).reduce(
    (max, [key, val]) => {
      return val > max[0] ? [val, key] : [max[0], max[1]]
    },
    [0, '']
  )[1]
}

module.exports = maxChar
