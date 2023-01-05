// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversedString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i]
    }

    return reversedString
}

function reverseSimple(str) {


    return str.split('').reverse().join('')
}

console.log(reverse('Greetings!'));
console.log(reverseSimple('Greetings!'));

module.exports = reverse;
