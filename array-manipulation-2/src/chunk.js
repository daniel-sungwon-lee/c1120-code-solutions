/* exported chunk */
function chunk(array,size) {
  var comArray=[]
  var i =0
  while (i<array.length) {
    var newArray =array.slice(i,size+i)
    comArray.push(newArray)
    i+=size
  }
  return comArray
}
