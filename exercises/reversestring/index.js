// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
   let newString = [];
    let stringArray = str.split('')
    let length = stringArray.length;
    for (let item = length -1; item >=0; item--){
        newString.push(stringArray[item])
    } 
    return newString.join("");
   } 

module.exports = reverse;
