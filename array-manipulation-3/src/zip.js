/* exported zip */
function zip(first,second){
  var subArr =[]
  var array = []
  if (first.length > second.length) {
    for (var i =0;i<second.length;i++){
      subArr.push(first[i],second[i])
      array.push(subArr.splice(0))
    }
  }else if ((first.length<second.length)||(first.length===second.length)){
    for (var i =0;i<first.length;i++){
      subArr.push(first[i], second[i])
      array.push(subArr.splice(0))
    }
  }
  return array
}
