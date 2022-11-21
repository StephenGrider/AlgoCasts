// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// create character map for stringA and stringB using for loop
// .length to check to see if they have the same amount of characters
// use RegEx to remove spaces and punctuation
// .toLowerCase to make them all the same

const anagrams = (stringA, stringB) => {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap){
        if (aCharMap[char] !== bCharMap[char]){
            return false;
        } 
    }
    return true;
}

const buildCharMap = (str) =>{
    const charMap = {};
    // any character that is not a num, character, cap or lower character, replace with nothing
    for ( let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap 
}



module.exports = anagrams;
