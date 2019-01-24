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
//   let newStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   let newStringB = stringB.replace(/[^\w]/g, '').toLowerCase();
//   let countA = {};
//   let countB = {};
//   let result = false;

//   for (let char of newStringA) {
//     if (!countA[char]) {
//       countA[char] = 1;
//     } else {
//       countA[char]++;
//     }
//   }
//   for (let char of newStringB) {
//     if (!countB[char]) {
//       countB[char] = 1;
//     } else {
//       countB[char]++;
//     }
//   }
//   for (let charA in countA) {
//     if (countB[charA] === countA[charA]) {
//       result = true;
//     } else {
//       result = false;
//     }
//   }

//   for (let charB in countB) {
//     if (countA[charB] === countB[charB]) {
//       result = true;
//     } else {
//       result = false;
//     }
//   }

//   return result;
// }

function anagrams(stringA, stringB) {
  let newStringA = stringA
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  let newStringB = stringB
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  if (newStringB === newStringA) {
    return true;
  } else {
    return false;
  }
}

module.exports = anagrams;
