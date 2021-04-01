// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	let reversed = '';
	/*
	for (let i = 0; i < str.length; i++) {
		reversed += (str[str.length - 1 - i]);
	}
	*/
	// ES2015 'for of' loop syntax
	for (let character of str) {
		reversed = character + reversed;
	}

	//console.log(reversed);
	return reversed;
}

console.log(reverse('Greetings!'));

module.exports = reverse;
