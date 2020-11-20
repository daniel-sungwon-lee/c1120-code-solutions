/* exported reverse */
function reverse(array){
  var i= 0
  var newArray = []
  for (i;i<array.length;i++) {
    newArray.unshift(array[i])
  }
  return newArray
}
