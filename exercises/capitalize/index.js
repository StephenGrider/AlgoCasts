// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	let temp = str;
	for (let i = 0; i < str.length; i++) {
		let firstLet = str.split('');
		console.log(firstLet[0]);
	}
}
capitalize('a short sentence a');

module.exports = capitalize;
