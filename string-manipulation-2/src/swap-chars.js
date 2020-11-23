/* exported swapChars */
function swapChars(firstIndex, secondIndex, string){
  var array = string.split("")
  array.splice(firstIndex,1,string[secondIndex])
  array.splice(secondIndex,1,string[firstIndex])
  return array.join("")
}
