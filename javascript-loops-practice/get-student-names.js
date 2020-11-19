/* exported getStudentNames */
function getStudentNames(students) {
  var i= 0
  var names = []
  while (i < students.length) {
    for (var prop in students[i]) {
      var value = students[i][prop]
      names.push(value)
    }
    i++
  }
  return names
}
