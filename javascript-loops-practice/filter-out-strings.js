/* exported filterOutStrings */
function filterOutStrings(values) {
  var i =0
  var newArray = []
  for (i;i<values.length;i++) {
    if (typeof values[i] !== "string") {
      newArray.push(values[i])
    }
  }
  return newArray
}
