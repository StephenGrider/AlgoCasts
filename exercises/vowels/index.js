// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vowelsCheck = ['a', 'e', 'i', 'o', 'u']
    let result = 0
    // str.toLowerCase().split("").forEach(char => {
    //     vowelsCheck.find(vowel => vowel == char) ?
    //     result++
    //     :
    //     null
    // })
    str.toLowerCase().split("").forEach(char => {
        if(vowelsCheck.includes(char)) result++
    })

    return result
}

module.exports = vowels;
