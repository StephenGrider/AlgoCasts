// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let arr = []
    

    for(let i = str.length-1; i >= 0; i--) {
        arr.push(str[i])
    }

    let newArr = arr.join('')

    console.log(newArr)
    return newArr
}


module.exports = reverse;
