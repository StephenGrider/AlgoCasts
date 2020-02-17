// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return (str.split("")).reverse().join("")
// }

// another way
function reverse(str){
    // let endpoint = str.length - 1
    let reversed = ""
    // for(let i = endpoint; i > -1; i--)
    // {
    //     reversed += str[i]
    // }
    for(let character of str){
        reversed = character + reversed
    }
    return reversed
}


module.exports = reverse;
