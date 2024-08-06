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

   
    let arr1 = stringA.replace(/[^a-zA-z]/g, '').split("")
    let arr2 = stringB.replace(/[^a-zA-z]/g, '').split("")
    
    let sorted1 = arr1.sort().join('').toLowerCase()
    let sorted2 = arr2.sort().join('').toLowerCase()
    
    console.log(sorted1)
    console.log(sorted2)

    if(sorted1 === sorted2){
        console.log(true)
        return true
    }
    else {
        console.log(false)
        return false
    }
}

anagrams('rail safety', 'fairy tales')
anagrams('RAIL! SAFETY!', 'fairy tales')
anagrams('Hi there', 'Bye there')
anagrams('Hi! Whoa!', 'Whoa! Hi!')

module.exports = anagrams;
