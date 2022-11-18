// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//********ANSWER 1********
//split turns it into an array

// function reverse(str) {
//     return str.split('').reverse().join('');
// }




//********ANSWER 2********

// function reverse(str) {
//     let reversed = '';
    
//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;
// }



//********ANSWER 3********
/*reduce array helper is used to take all the different values in an array and 
condense them all down to one singular value. The empty string is the second optional starting argument*/
// str = ['a', 'p', 'p', 'l', 'e']
function reverse(str) {
    
    return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;
