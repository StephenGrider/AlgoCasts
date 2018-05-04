// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0




//================== regex ==================
function vowels(str) {
	const matches = str.match(/[aeiou]/gi)
	return matches ? matches.length : 0;
}

module.exports = vowels;

// ================ iterative ======================
// function vowels(str) {
// 	const vowels = ['a', 'e', 'i', 'o', 'u']
// 	let tempStr = str.split('')
// 	let count = 0
// 	tempStr.forEach(letter => {
// 		if (vowels.includes(letter.toLowerCase())) {
// 			count++
// 		}
// 	})
// 	return count;
// }

// ================ iterative 1 ======================
// function vowels(str) {
	// 	let count = 0;
	// 	const v = ['a', 'e', 'i', 'o', 'u']
// 	const b = 'aeiou'

// 	for (let char of str.toLowerCase()) {
// 		if (b.includes(char)) {
// 			count++
// 		}
// 	}
// 	return count
// }