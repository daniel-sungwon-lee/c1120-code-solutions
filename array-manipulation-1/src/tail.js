/* exported tail */
function tail(array) {
  var i =1
  var newArray = []
  for (i;i<array.length;i++) {
    newArray.push(array[i])
  }
  return newArray
}
