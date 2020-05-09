// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function removeNotAlpha (str) {
  return str.replace(/[^\w]/g, '')
}

function buildMap (str) {
  const map = new Map();
  str.split('').forEach((char) => {
    if (!map.has(char)) {
      map.set(char, 1)
    } else {
      map.set(char, map.get(char) + 1)
    }
  });

  return map
}

function anagrams(stringA, stringB) {
  const strA = removeNotAlpha(stringA).toLowerCase()
  const strB = removeNotAlpha(stringB).toLowerCase()

  if (strA.length !== strB.length) return false;

  return strA.split('').sort().join('') === strB.split('').sort().join('')
}

// function anagrams(stringA, stringB) {
//   const strA = removeNotAlpha(stringA).toLowerCase()
//   const strB = removeNotAlpha(stringB).toLowerCase()

//   if (strA.length !== strB.length) return false;

//   // create map
//   const mapA = buildMap(strA)
//   const mapB = buildMap(strB)

//   // compare
//   for (let char of mapA.keys()) {
//     if (mapA.get(char) !== mapB.get(char)) {
//       return false;
//     }
//   }

//   return true
// }

// function anagrams(stringA, stringB) {
//   const strA = removeNotAlpha(stringA).toLowerCase()
//   const strB = removeNotAlpha(stringB).toLowerCase()

//   if (strA.length !== strB.length) return false;

//   // create map
//   const mapA = buildMap(strA)

//   // compare
//   for (let char of strB) {
//     if (mapA.has(char) && mapA.get(char) !== 0) {
//       mapA.set(char, mapA.get(char) - 1)
//     } else {
//       return false;
//     }
//   }

//   return [...mapA.values()].every((v) => v === 0)
// }

module.exports = anagrams;
