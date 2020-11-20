/* exported reverseWord */
function reverseWord(word) {
  var newString=""
  var lastLetter = word.length -1
  for (lastLetter;lastLetter>=0;lastLetter--) {
    newString= newString + word[lastLetter]
  }
  return newString
}
