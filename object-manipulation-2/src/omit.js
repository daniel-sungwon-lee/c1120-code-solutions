/* exported omit */
function omit(source,keys){
  var newObj = {}
  Object.assign(newObj,source)
  for (var i=0;i<keys.length;i++) {
    for (var prop in newObj) {
      if(keys[i]===prop){
        delete newObj[prop]
      }
    }
  }
  return newObj
}
