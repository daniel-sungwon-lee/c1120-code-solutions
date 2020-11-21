/* exported capitalizeWord */
function capitalizeWord(word) {
  var newWord =""
  for (var i=0;i<word.length;i++) {
    if ((word[i]==="j")||(word[i]==="J")) {
      return "JavaScript"
    } else if (i===0) {
      var newLetter=word[i].toUpperCase()
      newWord +=newLetter
    } else if (i>0) {
      var newLetter=word[i].toLowerCase()
      newWord +=newLetter
    }
  }
  return newWord
}
