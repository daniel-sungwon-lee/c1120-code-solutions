/* exported toObject */
function toObject(keyValuePair) {
  var object={}
  var key = keyValuePair[0]
  object[key] = keyValuePair[1]
  return object
}
