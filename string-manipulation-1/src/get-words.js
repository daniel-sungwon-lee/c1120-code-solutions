/* exported getWords */
function getWords(string) {
  var i = 0
  var array =[]
  var word = string.split(" ")
  for (i; i<word.length;i++) {
    if ((string.charAt(i)!==" ")&&(string.charAt(i)!=="")){
      array.push(word[i])
    } else {
      return array
    }
  }
  return array
}
