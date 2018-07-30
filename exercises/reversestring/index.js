// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('')
// }

// function reverse(str) {
//   const strArray = str.split('');
//   let reversedArray = new Array(str.length)
//   for (let i = str.length - 1; i >= 0; i--){
//     reversedArray.push(strArray[i])
//   }
//   return reversedArray.join('')

// }

// function reverse(str){
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//     console.log(reversed);
//   }
// }

function reverse(str){
  let rev = str.split('').reduce(((reversed, character) => character + reversed), '')
  return rev;
}
module.exports = reverse;
