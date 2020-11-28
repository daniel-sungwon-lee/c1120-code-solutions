/* exported isPalindromic */
function isPalindromic(string){
  var noSpace = string.replace(/ /gi,"")
  var arr = noSpace.split("")
  var reversedArr= arr.reverse()
  var reversedString=reversedArr.join("")
  return noSpace===reversedString
}
