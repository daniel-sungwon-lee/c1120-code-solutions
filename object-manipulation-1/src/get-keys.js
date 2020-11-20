/* exported getKeys */
function getKeys(object) {
  var array =[]
  for (var prop in object) {
    array.push(prop)
  }
  return array
}
