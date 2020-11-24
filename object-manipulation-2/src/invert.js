/* exported invert */
function invert(source){
  var newObj= {}
  for (var prop in source){
    newObj[source[prop]]=prop
  }
  return newObj
}
