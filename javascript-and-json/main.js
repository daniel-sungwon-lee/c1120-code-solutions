var books = [
  {
    isbn: "9780060850524",
    title: "Brave New World",
    author: "Aldous Huxley"
  },
  {
    isbn: "9780141439570",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde"
  },
  {
    isbn:"9780399501487",
    title: "Lord of the Flies",
    author: "William Golding"
  }
]
console.log("Books:",books)
console.log("Typeof Books:",typeof books)

var jsonString=JSON.stringify(books)
console.log("JSON String:",jsonString)
console.log("Typeof JSON String:", typeof jsonString)

var student = '{"name":"Daniel","id":33333}'
console.log("String:",student)
console.log("Typeof String:",typeof student)

var obj = JSON.parse(student)
console.log("Object:",obj)
console.log("Typeof Object:",typeof obj)
