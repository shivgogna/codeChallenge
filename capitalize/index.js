// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//SOLUTION 1
function capitalize(str) {
    str = str.split(' ');
    let sent = [];
    for(let i = 0; i < str.length; i++) {
      sent.push(str[i][0].toUpperCase() + str[i].slice(1));
    }
    return sent.join(' ');
  }