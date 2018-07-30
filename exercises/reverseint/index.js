// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   const string = n.toString().split('').reverse().join('')
//   const sign = Math.sign(n) === -1 ? '-' : ''
//   const newNumber = parseInt(sign + string)
//   return newNumber;
// }

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('')
  // string -> integer and multiplying by -1 or 1, whichever is returned by Math.sign()
  return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;
