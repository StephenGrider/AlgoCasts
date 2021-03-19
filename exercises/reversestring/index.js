// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	reversed = '';

	for (let i = 0; i < str.length; i++) {
		reversed += (str[str.length - 1 - i]);
	}

	//console.log(reversed);
	return reversed;
}

console.log(reverse('Greetings!'));

module.exports = reverse;
