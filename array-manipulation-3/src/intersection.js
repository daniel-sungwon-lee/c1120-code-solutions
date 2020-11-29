/* exported intersection */
function intersection(first,second){
  var newArr = []
  var finalArr=[]
  for (var i =0;i<second.length;i++){
    newArr.push(second[i])
  }
  for (var i =0;i<first.length;i++){
    if (newArr.includes(first[i])){
      var index = newArr.indexOf(first[i])
      var same =newArr.slice(index,index+1)
      finalArr.push(same[0])
    }
  }
  return finalArr
}
