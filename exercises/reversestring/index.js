// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //ES6 Best
    return str.split('').reduce((reversed, char) => char + reversed, '');

}

module.exports = reverse;

    //old syntax
    // let reversedWord = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     let eachChar = str[i];
    //     reversedWord += eachChar;
    // }
    // return reversedWord;

    //ES6 better
    // let reversedWord = '';
    // for (let char of str) {
    //     reversedWord = char + reversedWord; 
    // }
    // return reversedWord;
