// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let answer = {}
    let answerChar = ""
    let answerCharNum = 0
    for (const char of str) {
        answer[char] = answer[char] + 1 || 1
        if(answer[char] > answerCharNum) answerChar = char
    }
    return answerChar
}

module.exports = maxChar;
