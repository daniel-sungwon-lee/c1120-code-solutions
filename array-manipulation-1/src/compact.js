/* exported compact */
function compact(array) {
  var i =0
  var newArray =[]
  for (i;i<array.length;i++) {
    if (Boolean(array[i])===true) {
      newArray.push(array[i])
    }
  }
  return newArray
}
