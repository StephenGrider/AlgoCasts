// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
   //Solution 1: reverse the string and check whether it matches the original str
   const reversed = str.split('').reverse().join('');
   return reversed === str;


   /*Solution2 : is to have to pointers, one starting at the beginning and one ending in the middle
   //and compare each character until we find the middle. If we get to the middle, then it
   //means the string is a palindrome.
   let middlePoint = (str.length/2) - 1 ; 
   let i = 0;
   while(i <= middlePoint){
        if (str[i] !== str[str.length-i-1]) return false;
        i++;
   }
   return true;*/
}

module.exports = palindrome;

