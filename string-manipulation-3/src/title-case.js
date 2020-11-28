/* exported titleCase */
function titleCase(title){
  var arr = title.split(" ")
  var newTitle = []
  var minorWords = ["and","or","nor","but","a","an","the","as","at","by","for","in","of","on","per","to"]
  for (var i =0;i<arr.length;i++){
    if ((arr[i].substring(1,4)==="ava")&&(arr[i][arr[i].length-1]!==":")){
      newTitle.push("JavaScript")
    } else if ((arr[i].length===3)&&(arr[i].substr(1)==="pi")) {
      newTitle.push(arr[i].toUpperCase())
    } else if ((minorWords.indexOf(arr[i])!==-1)&&(i!==0)&&(arr[i-1][arr[i-1].length-1]!==":")){
      newTitle.push(arr[i].toLowerCase())
    } else if ((i!==0)&&(arr[i-1][arr[i-1].length-1]===":")){
      newTitle.push(arr[i].substr(0,1).toUpperCase() + arr[i].substr(1).toLowerCase())
    } else if ((arr[i][arr[i].length-1]===":")&&(arr[i].substr(1,3)==="ava")){
      newTitle.push("JavaScript:")
    } else if (arr[i].indexOf("-")!==-1) {
      var hyphenIndex = arr[i].indexOf("-")
      var beforeHyphen=arr[i][0].toUpperCase()+arr[i].substring(1,hyphenIndex).toLowerCase()
      var afterHyphen=arr[i].substr(hyphenIndex+1,1).toUpperCase() + arr[i].substr(hyphenIndex+2).toLowerCase()
      newTitle.push(beforeHyphen+"-"+afterHyphen)
    } else {
      var firstLetter = arr[i][0].toUpperCase()
      var remainingLetters = arr[i].substr(1).toLowerCase()
      var word = firstLetter + remainingLetters
      newTitle.push(word)
    }
  }
  return newTitle.join(" ")
}
