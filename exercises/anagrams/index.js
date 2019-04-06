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
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;


// function anagrams(stringA, stringB) {
//     const mappedA = characterMap(stringA);
//     const mappedB = characterMap(stringB);

//     if (Object.keys(mappedA).length !== Object.keys(mappedB).length) {
//         return false;
//     }

//     for(let char in mappedA){
//         if (mappedA[char] !== mappedB[char]) {
//             return false;
//         }
//     }
//     return true;
// }

// function characterMap(string) {
//     const mappedString = {}

//     for(let char of string.replace(/[^\w]/g, '').toLowerCase()){
//         mappedString[char] = mappedString[char] + 1 || 1
//     }

//     return mappedString;
// }