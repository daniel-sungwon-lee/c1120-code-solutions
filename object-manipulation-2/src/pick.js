/* exported pick */
function pick(source,keys){
  var newObj= {}
  var i = 0
  for(i;i<keys.length;i++) {
    for (var prop in source) {
      if ((source[prop]!==undefined)&&(keys[i]===prop)) {
        newObj[keys[i]] = source[prop]
      }
    }
  }
  return newObj
}
