// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     str = str.split('');
//     let rvStr='';
//     for(let i = str.length -1; i >= 0; i--){
//         rvStr += str[i];
//     }
//     return rvStr;
// }

// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }

// function reverse(str) {
//     return str
//     .split('')
//     .reverse()
//     .join('');
// }

// //Solution #2
function reverse(str){
    let reversed = '';
    for(let character of str){
        reversed = character + reversed;
        debugger;
    }
    return reversed;
}

//solution #3
// function reverse(str){
//     //return str.split('').reduce((rev, char)=> char + rev ,'');
//     debugger;
//     return str.split('').reduce((rev, char)=> {
//         return char + rev;
//     } ,'');
// }
//reverse('asdf');

module.exports = reverse;
// ctrl + C to Exit Test.
// $ node inspect index.js
// $ node --inspect-brk app.js
