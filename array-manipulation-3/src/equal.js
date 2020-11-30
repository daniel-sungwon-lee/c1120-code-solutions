/* exported equal */
function equal(first,second) {
  var firstStr = first.join("")
  var secondStr = second.join("")
  if (firstStr===secondStr){
    return true
  }
  return false
}
