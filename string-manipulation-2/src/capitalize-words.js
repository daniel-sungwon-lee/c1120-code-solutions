/* exported capitalizeWords */
function capitalizeWords(string){
  var stringArray = []
  string = string.split(" ")
  for (var i=0; i<string.length;i++) {
    var lowerLetters = string[i].substr(1)
    var newWord =string[i] = string[i][0].toUpperCase() + lowerLetters.toLowerCase()
    stringArray.push(newWord)
  }
  return stringArray.join(" ")
}
