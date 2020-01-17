// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let lettersArray = str.toLowerCase().split('')
    let vowelsArray = ['a', 'e', 'i', 'o', 'u']
    let counter = 0

    for (let i = 0; i < lettersArray.length; i++){
        for (let j = 0; j < vowelsArray.length; j++){
            if (lettersArray[i] === vowelsArray[j]){
                counter++
            }
            else {
                counter
            }
        }
    }
    return counter
}

module.exports = vowels;
