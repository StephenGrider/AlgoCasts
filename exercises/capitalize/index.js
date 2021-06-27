// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // Make an empty array 'words'
    const words = []

    // for of loop iterates everything

    // Split the input string by spaces to get an array
    // and iterate the array
    for (let word of str.split(' ')) {
        // we are pushing (the 0th index of the word in uppercase + the rest of the word)
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    // return the array 'words' but joined as a string with spaces in between
    return words.join(' ');
}

module.exports = capitalize;
