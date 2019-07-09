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

    const aObj = charMap(stringA);
    const bObj = charMap(stringB);
    
    if (Object.keys(aObj).length !== Object.keys(bObj).length){
        return false
    }
    for(let char in aObj){
        if (aObj[char] !== bObj[char]){
            return false
        }
    }
    return true
}

function charMap(str) {

    modifiedStr = str.replace(/[^\w]/g).toLowerCase()
    charObj = {}

    for( let char of modifiedStr){
        if (charObj[char] === undefined){
            charObj[char] = 1 
        }
        else {
            charObj[char]++
        }
    }
    return charObj
}




module.exports = anagrams;
