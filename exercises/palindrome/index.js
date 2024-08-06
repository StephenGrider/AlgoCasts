// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
   let arr = []

     str.split('').forEach((char, i) => {
        arr.push(char)
     })


    let left = 0;
    let right = arr.length-1

    while (left < right) {
        if(arr[left] !== arr[right]) {
            console.log(false)
            return false;
        }
        else{
            left++;
            right--;
        }
    }
    console.log(true)
    return true
}

palindrome('abbb')

module.exports = palindrome;
