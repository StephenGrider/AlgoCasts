// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = '';
//Solution 1: make a copy of the str and transform it into an array. pop each value fomr the copied array 
//onto the new string
/*
    let strCopy = [...str.split("")]; 
    while (strCopy.length > 0){
        reversedStr += strCopy.pop();
    }
    */

  //Solution 2: iterate through the array concatenate each value to the new string using forEach.
   /* str.split('').forEach(function(val){
        reversed = val + reversed; 
    })
    return reversed;
*/
    //solution 3: use reduce function 
    return str.split("").reduce((reversed, char) => {
        return char + reversed;
    }, '');

    /* Solution 4: use the reduce array method to reverse the string.
    return str.split('').reverse().join('');
    */
}

module.exports = reverse;
