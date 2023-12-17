/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length)
    return false
  let check = 0
  let string1 = str1.toLowerCase()
  let string2 = str2.toLowerCase()
  for(let i = 0; i < str1.length ; i++){
    for(let j=0; j < str2.length; j++){
      if(string1[i] == string2[j]){
        check++
        break
      }
    }
  }
  if(check == str1.length)
    return true
  else
    return false
}

console.log(isAnagram("Gautam","taMuaG"))

module.exports = isAnagram;

