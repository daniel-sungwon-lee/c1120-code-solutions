/* exported isLowerCased */
function isLowerCased(word){
  var i =0
  var letter = word.split("")
  while (i<word.length) {
    if (word[i]===letter[i].toUpperCase()) {
      return false
    } else{
      return true
    }
    i++
  }
}
