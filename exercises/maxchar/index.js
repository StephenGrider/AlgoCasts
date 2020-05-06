// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   const charsMap = str.split('').reduce((map, char) => {
//     map[char] = map[char] ? map[char] + 1 : 1
//     return map
//   }, {})


//   const maxNumber = Math.max(...Object.values(charsMap))
//   return Object.keys(charsMap).find((k) => charsMap[k] === maxNumber)
// }

function maxChar(str) {
  const charsMap = str.split('').reduce((map, char) => {
    map[char] = map[char] ? map[char] + 1 : 1
    return map
  }, {})

  return Object.entries(charsMap).sort((a, b) => b[1] > a[1])[0][0]
}

module.exports = maxChar;
