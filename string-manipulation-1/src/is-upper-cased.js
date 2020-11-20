/* exported isUpperCased */
function isUpperCased(word){
  var i = 0
  var letter = word.split("")
  while (i<word.length) {
    if (word[i]===letter[i].toLowerCase()) {
      return false
    }
    i++
  }
  return true
}
