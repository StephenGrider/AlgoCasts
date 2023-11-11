// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const strA = stringA.replace(/[^\w]/g, '')?.toLowerCase()
  const strB = stringB.replace(/[^\w]/g, '')?.toLowerCase()

  const mapStr = (str) => {
    const obj = {}
    str.split('').forEach((el) => {
      obj[el] = obj[el] ? obj[el] + 1 : 1
    })
    return obj
  }

  const mapA = mapStr(strA)
  const mapB = mapStr(strB)

  if (Object.keys(mapA).length !== Object.keys(mapB).length) {
    return false
  }

  return Object.keys(mapA).every((key) => {
    return mapA[key] === mapB[key]
  })
}

module.exports = anagrams
