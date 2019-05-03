// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let outVal = '';
    str = str.split('');
    let chars = {};
    str.forEach((val) => {
        return !chars[val] ? chars[val] = 1 : chars[val]++;
    })
    let count = 0;
    for (val in chars) {
        if (chars[val] >= count) {
            outVal = val;
            count = chars[val];
        }
    }
    console.log(chars, 'CHARS')
    console.log(count, "COUNT")
    console.log(outVal, 'OUTVAL')
    return outVal;
}

module.exports = maxChar;