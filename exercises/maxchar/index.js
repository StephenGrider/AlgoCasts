// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // Method One - turns out big, long, messy
    // jest tests took almost 5 seconds
    var chars = str.split("");
    var letter_count = {};
    var max_index = -1;
    // loop to count
    for (var i = 0; i < chars.length; i++)
    {
        var max_count = 0;
        if (letter_count[chars[i]] == undefined)
        {
            letter_count[chars[i]] = 0;
        }
        letter_count[chars[i]] += 1;

        // Get the index of largest int in letter_count
        if(letter_count[chars[i]] > max_count)
        {
            max_count = letter_count[chars[i]];
            max_index = i;
        }
    }

    // return chars[index]
    return chars[max_index];

    // Method Two - Using a Map
    // Turns out above method is pretty much the solution
}

module.exports = maxChar;
