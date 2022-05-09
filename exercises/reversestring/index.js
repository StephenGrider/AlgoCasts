// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//function reverse(str) {
    // if (str.length === 1) {
    //     return str;
    // }
     
    // let reversedStr = '';

    // for (let i = str.length-1; i >= 0; i--) {
    //     reversedStr += str[i];
    // }
    // or
    //for (character of str) {
        //reversedStr += character;
    //}
    //return reversedStr;
//}
    // using reverse for the array
function reverse(str) {
    // const arr = str.split('');
    // arr.reverse();
    // return reversedStr = arr.join('');
    // or in one line:
    return str.split('').reverse().join('');  
}

//module.exports = reverse('Greetings!'); //- if you want to run only this file
module.exports = reverse;