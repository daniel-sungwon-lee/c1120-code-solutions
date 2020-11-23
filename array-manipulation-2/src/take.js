/* exported take */
function take(array,count){
  var newArray = []
  for (var i=0;i<count;i++) {
    if (array.length>0) {
      var values =array[i]
      newArray.push(values)
    }
  }
  return newArray
}
