// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function buildCharMap(string){
  let obj = {};

  for (let char of string.replace(/[^\w]/g, '').toLowerCase()){
    obj[char] = obj[char] + 1 || 1;
  }
  console.log(obj)
  return obj;
}

function anagrams(string1, string2){
  const charMapA = buildCharMap(string1)
  const charMapB = buildCharMap(string2)
  // get keys in array and look at length
  // if different, then diff number of unique letters
  if (Object.keys(charMapA).length !== Object.keys(charMapB).length){
    return false;
  }
  // compare number of each letter, if different, then no way
  // that this is anagram
  for (let char in charMapA){
    if (charMapA[char] !== charMapB[char]){
      return false;
    }
  }
  return true;

}

// anagrams('rail safety', 'fairy tales')
// anagrams('RAIL! SAFETY!', 'fairy tales')
// anagrams('RAIL! SAssFETY!', 'fairyea tales')



module.exports = anagrams;
