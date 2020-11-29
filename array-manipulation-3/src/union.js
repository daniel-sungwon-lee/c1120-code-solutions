/* exported union */
function union(first,second){
  var newArr =[]
  for (var i =0;i<first.length;i++){
    newArr.push(first[i])
  }
  for (var i =0;i<second.length;i++){
    if (newArr.includes(second[i])===false){
      newArr.push(second[i])
    }
  }
  return newArr
}
