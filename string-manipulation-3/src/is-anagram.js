/* exported isAnagram */
function isAnagram(firstString,secondString){
  var noSpaceFirst =firstString.replace(/ /gi,"")
  var noSpaceSecond=secondString.replace(/ /gi,"")
  var firstArr= noSpaceFirst.split("")
  var secondArr = noSpaceSecond.split("")
  var sortFirstArr = firstArr.sort()
  var sortSecondArr= secondArr.sort()
  return sortFirstArr.join("")===sortSecondArr.join("")
}
