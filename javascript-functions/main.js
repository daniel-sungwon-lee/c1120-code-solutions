function convertMinutesToSeconds(minutes) {
  var seconds = minutes *60
  return seconds
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(5)
console.log("convertMinutesToSecondsResult:",convertMinutesToSecondsResult)

function greet(name) {
  var greeting = "Hey" + ", " + name
  return greeting
}
var greetResult = greet("Daniel")
console.log("greetResult:",greetResult)

function getArea(width, height) {
  var area = width * height
  return area
}
var getAreaResult = getArea(3,35)
console.log("getAreaResult:",getAreaResult)

function getFirstName(person) {
  var firstName = person.firstName
  return firstName
}
var getFirstNameResult = getFirstName({firstName: "Darth", lastName: "Vader"})
console.log("getFirstNameResult:",getFirstNameResult)

function getLastElement(array) {
  var lastElement = array[array.length-1]
  return lastElement
}
var getLastElementResult = getLastElement(["flour","butter","eggs","sugar"])
console.log("getLastElementResult:",getLastElementResult)
