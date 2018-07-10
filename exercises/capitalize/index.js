// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
 let capitalized = [];
  //split each word of the string into an array
  //loop through the array and for each word, capitalize the first letter
  str.split(' ').forEach(word => {
      let newWord = word[0].toUpperCase() + word.slice(1);
      capitalized = [...capitalized, newWord];
  });

  return capitalized.join(' ');
  /* Solution 2: using the reduce method
  let capitalized = str.split(' ').reduce(function(cap, word){
    cap.push(word[0].toUpperCase() + word.slice(1));
    return cap;
  },[]);
  */
 /*Solution 3
  let capitalized = '';
  str.split('').forEach(function(char, index){
    if (index === 0 || str[index-1] === ' '){
      capitalized += char.toUpperCase();
    }
    else{
      capitalized += char;
    }
  })
  return capitalized;
  */
}

module.exports = capitalize;
