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
    const cleanStringA = stringA.replace(/\W/g, '').toLowerCase().split('').sort().join();
    const cleanStringB = stringB.replace(/\W/g, '').toLowerCase().split('').sort().join();
    return cleanStringA === cleanStringB;
}
// function getLetterCount(string) {
//     let letterObject = {};
//     string.toLowerCase().replace(' ', '').split('').map((letter) => {
//         if ((/[a-zA-Z]/).test(letter)) {
//             if (!letterObject[letter]) {
//                 letterObject[letter] = 1;
//             } else {
//                 letterObject[letter]++;
//             }
//         }
//     });
//     return letterObject;
// }
// function anagrams(stringA, stringB) {
//     const letterCountA = getLetterCount(stringA);
//     const letterCountB = getLetterCount(stringB);

//     if (Object.keys(letterCountA).length !== Object.keys(letterCountB).length) return false;

//     for (let key in letterCountA) {
//         if (letterCountA[key] !== letterCountB[key]) return false;
//     }
//     return true;
// }

module.exports = anagrams;