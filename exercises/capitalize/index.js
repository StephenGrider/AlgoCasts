// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const isAlphabet = (character) => (/[a-zA-Z]/).test(character);

function capitalize(str) {
    let capitalizedString = '';
    if (isAlphabet(str.charAt(0))) capitalizedString += str.charAt(0).toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (isAlphabet(str.charAt(i)) && !isAlphabet(str.charAt(i - 1))) {
            capitalizedString += str.charAt(i).toUpperCase();
        } else {
            capitalizedString += str.charAt(i)
        } 
        
    }
    return capitalizedString;
}
console.log(capitalize('look, it is working!'))

module.exports = capitalize;
