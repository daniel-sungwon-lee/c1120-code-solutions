/* exported addSuffixToAll */
function addSuffixToAll(words,suffix) {
  var newArray = []
  var i=0
  while (i<words.length) {
    var withSuffix = words[i] + suffix;
    newArray.push(withSuffix)
    i++
  }
  return newArray
}
