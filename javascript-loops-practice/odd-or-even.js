/* exported oddOrEven */
function oddOrEven(numbers) {
  var newArray =[]
  var i =0
  for (i; i<numbers.length;i++) {
    if (numbers[i] % 2 ===0) {
      newArray.push("even")
    } else {
      newArray.push("odd")
    }
  }
  return newArray
}
