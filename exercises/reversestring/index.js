// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    console.log('Starting!', str);
    let splitStr = str.split('');
    console.log('Array', splitStr);
    let reverseStrArr = [];
    for(let i=splitStr.length-1; i >= 0; i--){
        reverseStrArr.push(splitStr[i]);
    };
    console.log('Final',reverseStrArr);
    return reverseStrArr.join('');
}

reverse('apple');

// Solution #2

function reverse2(str) {
    console.log('Starting!', str);
    let splitStr = str.split('');
    console.log('Array', splitStr);
    let reverseStrArr = '';
    for(let i=0; i < splitStr.length; i++){
        reverseStrArr=splitStr[i]+reverseStrArr;
    };
    console.log('Final',reverseStrArr);
    return reverseStrArr;
}

reverse2('apple');

// Solution #2 with forOf loop 

function reverse2ForOf(str) {
    let reverseStr = '';
    for(let char of str) {
        reverseStr = char + reverseStr;
    }
    console.log(reverseStr);
    return reverseStr;
}

reverse2ForOf('apple');


// Solution #3

function reverseWithReduce(str) {
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '');
}


module.exports = reverse;
