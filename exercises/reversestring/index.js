/* --- Directions
    Given a string, return a new string with the reversed
    order of characters
    --- Examples
    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'

    Solution 1:
        str.split('').reverse().join('');

    Solution 2:
        for loop (below)
        for of (new for ES2015)
        let reversed = '';
        for(let char of str) {
            reversed = char + reversed;
        }
        return reversed;

    Solution 3:
        array helper:
        function reverse(str){
            return str.split('').reduce((rev, char)=> char + rev, '')
        }

    Debugger Steps:
        1. Add a 'debugger` statement to your function
        2. Call the function manually
        3. At the terminal, run `node inspect index.js` inside the folder
        4. To continue execution of the file, press 'c' then enter
        5. To launch a repl session, type 'repl' then enter
        6. To exit the repl, press Cmd + C;

*/ 

//O(n) time complexity (aka linear)
function reverse(str) {
    const reverseArray = [];
    const split = str.split("");
    for(let i = split.length - 1; i >= 0; i--){
        reverseArray.push(split[i]);
    }
    return reverseArray.join("");

}

module.exports = reverse;
