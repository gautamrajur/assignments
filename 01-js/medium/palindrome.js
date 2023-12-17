/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let mid = Math.floor(str.length / 2);
  let tracker = 0; 
  let str2 = str.toLowerCase().replace(/[^a-z]/g, "");
  for(let i = 0; i < mid; i++){
    if(str2.charAt(i) == str2.charAt(str2.length-(i+1)))
    tracker++
    else
      return false
  }
  return tracker === mid;
}

console.log(isPalindrome("Kayak"))

module.exports = isPalindrome
