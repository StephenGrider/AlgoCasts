// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // let outVal = '';
    // let chars = {};
    // let count = 0;

    // str.split('').forEach((val) => {
    //     return !chars[val] ? chars[val] = 1 : chars[val]++;
    // })

    // for (val in chars) {
    //     if (chars[val] >= count) {
    //         outVal = val;
    //         count = chars[val];
    //     }
    // }

    // return outVal;

    //************INSTRUCTOR SOLUTION************* */

    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char
        }
    }
    return maxChar;
}

module.exports = maxChar;