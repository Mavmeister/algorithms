// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// TODO: How to account for duplicates? Currently this prints the first in the obj
function maxChar(str) {
    const charMap = {}
    let maxCount = 0;
    let maxChar = '';
    for (let char of str){
        // charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
        charMap[char] = charMap[char] + 1 || 1;
    }
    for (let key in charMap){
        if (charMap[key] > maxCount){
            maxCount = charMap[key];
            maxChar = key
        }
    }
    return maxChar;
}
module.exports = maxChar; 
