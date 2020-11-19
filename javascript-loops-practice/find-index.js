/* exported findIndex */
function findIndex (array, value) {
  var i =0
  for (i;i<array.length;i++) {
    if (array[i] ===value) {
      return i
    }
  }
  return -1
}
