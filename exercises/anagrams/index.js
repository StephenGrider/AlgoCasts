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
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;

// SOLUTION 1:
// function anagrams(stringA, stringB) {
//   let newMapA = buildMap(stringA);
//   let newMapB = buildMap(stringB);

//   if (Object.keys(newMapA).length !== Object.keys(newMapB).length) {
//     return false;
//   }

//   for (let char in newMapA) {
//     if (newMapA[char] !== newMapB[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function buildMap(str) {
//   let map = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     if (map[char]) {
//       map[char] += 1;
//     } else {
//       map[char] = 1;
//     }
//   }

//   return map;
// }
