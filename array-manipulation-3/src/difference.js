/* exported difference */
function difference(first,second){
  var newArr = []
  for (var i =0;i<first.length;i++){
    newArr.push(first[i])
  }
  for (var i =0;i<second.length;i++){
    if (newArr.includes(second[i])){
      newArr.splice(newArr.indexOf(second[i]),1)
    } else {
      newArr.push(second[i])
    }
  }
  return newArr
}
