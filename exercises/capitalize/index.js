// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let finalStr = []
    let unCappedStr = str.split(" ")
    console.log(unCappedStr)
    for ( let word of unCappedStr ) {
        let sliced = word.slice(1)
        finalStr.push(word[0].toUpperCase() + sliced)
    }
    return finalStr.join(' ')
}

module.exports = capitalize;
