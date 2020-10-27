// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const wordA = stringA.replace(/[^\w]/g, '').toLowerCase().split('')
//   const wordB = stringB.replace(/[^\w]/g, '').toLowerCase().split('')
//   return wordA.sort().join('') === wordB.sort().join('')
// }

function anagrams(stringA, stringB) {
  const wordA = mapping(stringA)
  const wordB = mapping(stringB)

  if (Object.keys(wordA).length !== Object.keys(wordB).length) {
    return false
  }

  for (let str in wordA) {
    if (wordA[str] !== wordB[str]) {
      return false
    }
  }

  return true

}

function mapping(string) {
  let charMap = {}
  for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}

module.exports = anagrams;
