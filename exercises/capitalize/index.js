// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let outVal;
    let strArr = str.split('');
    strArr[0] = strArr[0].toUpperCase();
    let i = strArr.length;
    while (i > 0) {
        if (strArr[i] === ' ') {
            strArr[i + 1] = strArr[i + 1].toUpperCase();
        }
        i--;
    }
    outVal = strArr.join('');
    return outVal;
}

module.exports = capitalize;