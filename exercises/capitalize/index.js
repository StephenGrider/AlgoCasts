// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	let newStr = ''
	let arr = str.split(' ')
	for (i = 0; i < arr.length; i++) {
		newStr += (arr[i][0].toUpperCase() + arr[i].substr(1) + ' ')
	}
	return newStr.trim();
}
capitalize('The new dog has an attitude problem.')

module.exports = capitalize;
