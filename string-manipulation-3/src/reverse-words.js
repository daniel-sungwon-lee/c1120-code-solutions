/* exported reverseWords */
function reverseWords(string){
  var arr = string.split(" ")
  for (var i =0;i<arr.length;i++){
    var wordArr=arr[i].split("")
    var reversedWordArr=wordArr.reverse()
    var reversedString=reversedWordArr.join("")
    arr.splice(i,1,reversedString)
  }
  return arr.join(" ")
}
