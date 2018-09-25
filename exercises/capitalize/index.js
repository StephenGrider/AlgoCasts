// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// *** V1 ***
function capitalize(str) {
    let words = []
    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ')
}
// comments:
// create 'result' which is the first char of the input string capitalied
// for each char in the string
//  if the char to the left a space
// capitalize it and add it to 'result'
//  else
// add it to 'result'

// *** V2 ***
function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i]
        }
    }
    return result;
}


module.exports = capitalize;
