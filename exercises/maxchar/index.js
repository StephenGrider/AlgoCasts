// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const strArr = str.split('');
    let charsCount = {};
    let max = 0;
    let charMax = '';

    for(let i = 0; i < strArr.length; i++) {
        charsCount[strArr[i]] = charsCount[strArr[i]] +1 || 1;
    }
    console.log(charsCount);

    for(let char in charsCount) {
        if(charsCount[char] > max){
            max = charsCount[char];
            charMax = char;
        }
    }
    console.log(charMax);
}

maxChar('aaaabbbbccccccd');
module.exports = maxChar;
