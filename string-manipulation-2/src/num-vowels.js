/* exported numVowels */
function numVowels(string) {
  var vowelCount = 0
  var vowels = "aeiouAEIOU"
  for (var i =0;i<string.length;i++) {
    if (vowels.indexOf(string[i])!==-1) {
      vowelCount+=1
    }
  }
  return vowelCount
}
