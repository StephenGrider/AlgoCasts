// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // stack solution O(n)
  let arr = str.split('');
  let mid = arr.length / 2;
  let stack = [];
  let i;

  //push half of string into stack
  for (i = 0; i < mid; i++) {
    stack.push(arr[i]);
  }

  // check if string is odd, skip middle character
  if (arr.length % 2 === 1) {
    i++;
  }

  //compare stack and rest of string
  for (i; i < arr.length; i++) {
    if (arr[i] !== stack.pop()) {
      return false;
    }
  }
  return true;

  //easy solution
  //   return (
  //     str ===
  //     str
  //       .split('')
  //       .reverse()
  //       .join('')
  //   );
}

module.exports = palindrome;
