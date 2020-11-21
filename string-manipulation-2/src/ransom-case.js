/* exported ransomCase */
function ransomCase(string) {
  var newString = ""
  var stringLetters = string.split("")
  for (var i=0;i<stringLetters.length;i++){
    if ((i%2)===0) {
      var newLetter = stringLetters[i].toLowerCase()
      newString += newLetter
    } else {
      var newLetter =stringLetters[i].toUpperCase()
      newString += newLetter
    }
  }
  return newString
}
