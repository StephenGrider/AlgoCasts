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
    const aCharMap = createCharMap(stringA);
    const bCharMap = createCharMap(stringB);

    function createCharMap(str){
        let regex = /[^\w]/g;
        const charMap = {};
        for(let char of str.replace(regex, "").toLowerCase()) {
            charMap[char] = charMap[char] + 1 || 1;
        }

        return charMap;
    }

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for(let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
        return true;
    }



}

module.exports = anagrams;
