// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const character = {}
    let max = 0
    let maxChar = ''


    for (let i = 0; i < str.length; i++) {
        if (!character[str[i]]) {
            character[str[i]] = 1
        } else {
            character[str[i]] += 1
        }
    }

    for (let char in character) {
        if (character[char] > max) {
            max = character[max]
            maxChar = char
        }
    }

    return maxChar
}

module.exports = maxChar;
