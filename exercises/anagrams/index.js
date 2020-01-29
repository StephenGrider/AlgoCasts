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
    // let longerString
    // let strA = stringA.replace(/[^\w]/g, "").toLowerCase().split("")
    // let strB = stringB.replace(/[^\w]/g, "").toLowerCase().split("")
    // strA.length >= strB.length ? longerString = strA : longerString = strB
    // let strAobj = {}
    // let strBobj = {}

    // for (let i = 0; i < longerString.length; i++) {
    //     if(strAobj[strA[i]] && strA[i] !== undefined){
    //         strAobj[strA[i]] = strAobj[strA[i]] + 1
    //     }else if(!strAobj[strA[i]] && strA[i] !== undefined){
    //         strAobj[strA[i]] = 1
    //     }else if(strA[i] === undefined){
    //         return false
    //     }

    //     if(strBobj[strB[i]] && strB[i] !== undefined){
    //         strBobj[strB[i]] = strBobj[strB[i]] + 1
    //     }else if(!strBobj[strB[i]] && strB[i] !== undefined){
    //         strBobj[strB[i]] = 1
    //     }else if(strB[i] === undefined){
    //         return false
    //     }
    // }

    // for (const char in strAobj) {
    //     if(strAobj[char] !== strBobj[char]){
    //         return false
    //     }
    // }

    // return true

    return sortedStr(stringA) === sortedStr(stringB)
}

function sortedStr(str){
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
}

module.exports = anagrams;
