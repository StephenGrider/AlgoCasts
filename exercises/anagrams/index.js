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
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     const strA = buildCharMap(stringA)
//     const strB = buildCharMap(stringB)

//     if (Object.keys(strA).length !== Object.keys(strB).length) {
//         return false
//     }

//     for (let char in strA) {
//         if (strA[char] !== strB[char]) {
//             return false
//         }
//     }

//     return true
// }

// function buildCharMap(str) {
//     const characterMap = {}
//     const newStr = str.replace(/[^\w]/g, "").toLowerCase()

//     for (let i = 0; i < newStr.length; i++) {
//         if (!characterMap[newStr[i]]) {
//             characterMap[newStr[i]] = 1
//         } else {
//             characterMap[newStr[i]] += 1
//         }
//     }
//     return characterMap
// }