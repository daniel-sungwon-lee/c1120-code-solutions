/* exported flatten */
function flatten(array){
  var newArr = []
  var i =0
  for (i;i<array.length;i++){
    if (Array.isArray(array[i])){
      for (var x =0;x<array[i].length;x++) {
        newArr.push(array[i][x])
      }
    } else if (Array.isArray(array[i])===false){
      newArr.push(array[i])
    }
  }
  return newArr
}
