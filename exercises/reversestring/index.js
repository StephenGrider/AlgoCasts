// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
	let newStr = ''
	for (let char of str) {
		debugger
		newStr = char + newStr
	}
	return newStr;
}

reverse('bradley')

// 1
// function reverse(str) {
// 	return str.split('').reverse().join('')
// }

// 2
// function reverse(str) {
// 	let newStr = ''
// 	for (let char of str) {
// 		newStr = char + newStr
// 	}
// 	return newStr;
// }

// 3
// function reverse(str) {
// 	return str.split('').reduce((reversed, character) => {
// 		return reversed = character + reversed
// 	}, '')
// }

// 4
// function reverse(str) {
// 	return str.split('').reduce((reversed, character) => reversed = character + reversed, '')
// }

// 5
// function reverse(str) {
// 	return str.split('').reduce((acc, cv) => acc = cv + acc, '')
// }

// 6
// function reverse(str) {
// 	return str.split('').reduce((acc, cv) => acc = cv + acc, '')
// }


module.exports = reverse;
