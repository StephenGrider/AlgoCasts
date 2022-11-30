// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//                                 Answer 1

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



//                                 Answer 2

// create helper function 
//use .sort() to check if they are anagrams

// const anagrams = (stringA, stringB) => {
//     // return and invoke helper function while passing in the strings to return a boolean
//     return cleanString(stringA) === cleanString(stringB)
// }

// //helper function to make code clean
// const cleanString = (str) => {
//     //use regular expression to get rid of spaces and punctuation
//     //make every character lowercase
//     //use .split to turn it into an array so that you can use the array helper .sort()
//     //join the array back into a single string
//     return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
// }
module.exports = anagrams;
