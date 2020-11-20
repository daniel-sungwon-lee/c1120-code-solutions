/* exported getValues */
function getValues(object) {
  var array =[]
  for (var prop in object) {
    array.push(object[prop])
  }
  return array
}
