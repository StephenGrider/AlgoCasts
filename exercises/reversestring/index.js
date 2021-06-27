// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // solution 1:

    // turn str into an array

    // call reverse method on the array

    // join the array back into a string
    // return the result
    // return str.split('').reverse().join('');


    // solution 2:

    // create an empty string called reversed
    // let reversed = '';

    // for each character in the provided string
    // take the character and add it to the start of reverse
    // JS adds things to the start
    // for (let character of str) {
    //     reversed = character + reversed;
    // }

    // return the variable reversed
    // return reversed;


    // solution 3:
    // using reduce 
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
