/* exported capitalize */
function capitalize(word) {
  var newWord = ""
  var i=0
  var letter = word.split("")
  while (i<word.length) {
    if (i===0) {
      var upperCase =letter[i].toUpperCase()
      newWord = newWord + upperCase
    } else{
      var lowerCase = letter[i].toLowerCase()
      newWord = newWord + lowerCase
    }
    i++
  }
  return newWord
}
