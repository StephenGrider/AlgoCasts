// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams (stringA, stringB) {
//   const stringALetters = getLetters(stringA);
//   const stringBLetters = getLetters(stringB);

//   const stringAMap = getCharactesrMap(stringALetters);
//   const stringBMap = getCharactesrMap(stringBLetters);


//   if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) return false;

//   return Object.entries(stringAMap).every(([letter, count]) => stringBMap[letter] === count);
// }

// function getCharactesrMap (string) {
//   const characters = {};

//   for (const character of string) {
//     characters[character] = characters[character] + 1 || 1;
//   }

//   return characters;
// }

// function getLetters (string) {
//   return string.match(/[a-zA-Z]/g).join('');
// }

function anagrams (stringA, stringB) {
  return getCleanString(stringA) === getCleanString(stringB);
}

function getCleanString (str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;