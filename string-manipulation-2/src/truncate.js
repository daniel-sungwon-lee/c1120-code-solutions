/* exported truncate */
function truncate(length,string) {
  var newString= string.substring(0,length)
  var shortString = newString +"..."
  return shortString
}
