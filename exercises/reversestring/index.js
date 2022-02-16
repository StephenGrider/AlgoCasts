// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



function reverse(str) {
    let arr = str.split("");
    let arrReversed = arr.reverse();
    let strReversed = arrReversed.join("");
    return strReversed;

}



module.exports = reverse;
