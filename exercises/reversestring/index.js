// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // let answer = str.split('').reverse().join('')

    // let answer = str.split('').reduce((reversed, char) => {
    //     return char + reversed
    // }, '')

    // let answer = str.split('').reduce((reversed, char) => char + reversed, '')

    let answer = ''
    for (let i = 0; i < str.length; i++) {
        answer += str[str.length - i - 1]
    }
    return answer
}

module.exports = reverse;
