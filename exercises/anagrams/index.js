// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples

function anagrams(stringA, stringB) {
	const check = (arr) => arr.split('').filter(l => l.match(/[a-zA-Z]/)).sort().map(el => el.toLowerCase())
	return check(stringA).join('') == check(stringB).join('')
}

anagrams('RAIL! SAFETY!', 'fairy tales')
anagrams('Hi there', 'Bye there')
anagrams('rail safety', 'fairy tales')
anagrams('hello', 'llohe')
anagrams('Whoa! Hi!', 'Hi! Whoa!')

module.exports = anagrams;
