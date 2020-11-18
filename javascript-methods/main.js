var numbers = (3,6,9)
var maximumValue = Math.max(numbers)
console.log("value of maximumValue:", maximumValue)
var heroes = ["Batman","Ironman","Spiderman","Wolverine"]
var randomNumber = Math.random(numbers)
randomNumber = randomNumber * heroes.length
randomIndex = Math.floor(randomNumber)
console.log("value of randomIndex:",randomIndex)
var randomHero = heroes[randomIndex]
console.log("value of randomHero:",randomHero)

var library = [
  {
    title: "Brave New World",
    author: "Aldoux Huxley"
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde"
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck"
  }
]
var lastBook = library.pop()
console.log("value of lastBook:",lastBook)
var firstBook = library.shift()
console.log("value of firstBook:",firstBook)
var js = {
  title: "JavaScript for Impatient Programmers",
  author: "Dr. Axel Rauschmayer"
}
var css = {
  title: "CSS Secrets",
  author: "Lea Verou"
}
library.push(js)
library.unshift(css)
library.splice(1,1)
console.log("value of library:",library)

var fullName = "Daniel Lee"
var firstAndLastName = fullName.split(" ")
console.log("value of firstAndLastName:",firstAndLastName)
var firstName = firstAndLastName[0]
var sayMyName = firstName.toUpperCase()
console.log("value of sayMyName:",sayMyName)
