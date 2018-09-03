// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// *** V1 ***
function vowels(str) {
    let count = 0;
    const allVowels = ['a', 'o', 'e', 'i', 'u'];

    for (let char of str.toLowerCase()) {
        if (allVowels.includes(char)) {
            count++;
        }
    }
    return count
}

// *** V2 ***
function vowels(str) { //g means check all chars, i - case insensitive
    const matches = str.match(/[aieou]/gi);
    return matches ? matches.length : 0
}

module.exports = vowels;
