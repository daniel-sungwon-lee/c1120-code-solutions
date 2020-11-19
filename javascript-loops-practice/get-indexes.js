/* exported getIndexes */
function getIndexes(array){
  var indexes = []
  var i =0
  while (i<array.length) {
    var value = array[i]
    var index = array.indexOf(value);
    indexes.push(index);
    i++;
  }
  return indexes;
}
