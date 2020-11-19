/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = []
  var currentNumber =1
  while (currentNumber < 11) {
    numbers.push(currentNumber)
    currentNumber++
  }
  return numbers
}

function getEvenNumbersToTwenty() {
  evenNumbers = []
  currentNumber = 2
  while (currentNumber < 21) {
    evenNumbers.push(currentNumber)
    currentNumber+=2;
  }
  return evenNumbers
}

function repeatWord(word,times) {
  var count = 1
  var repeated = " "
  while (count < times) {
    repeated += word
    count++;
  }
  return repeated
}

function logEachCharacter(string) {
  for (var i =0; i < string.length; i++) {
    console.log(string[i])
  }
}

function doubleAll(numbers) {
  var doubled = []
  for (var i =0; i < numbers.length; i++) {
    var number = numbers[i] *2
    doubled.push(number)
  }
  return doubled
}

function getKeys(object) {
  var keys = []
  var property
  for (property in object) {
    keys.push(property)
  }
  return keys
}

function getValues(object) {
  var values = []
  var property
  for (property in object) {
    var value = object[property]
    values.push(value)
  }
  return values
}
