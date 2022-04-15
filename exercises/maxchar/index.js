// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let mostFrequent = "";
    let highestCount = 0;
    str.split('').map((letter) => {
        let count = 0;
        for (const i of str) {
            if (letter === i) {
                count++;
            }
        }
        if (count > highestCount) {
            highestCount = count;
            mostFrequent = letter;
        }
    })
    // return mostFrequent;
    // let wordObj = {};
    // let mostFrequent = str.charAt(0);
    // let highestCount = 0;

    // for (const letter of str) {
    //     wordObj[letter] = wordObj[letter] + 1 || 1;
    // }
    // for (const key in wordObj) {
    //     if (highestCount < wordObj[key]) {
    //         highestCount = wordObj[key];
    //         mostFrequent = key;
    //     }
    // }
    return mostFrequent;
}

module.exports = maxChar;
