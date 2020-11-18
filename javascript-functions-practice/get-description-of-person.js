/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var name = person.name
  var occupation = person.occupation
  var birthPlace = person.birthPlace
  var descriptionOfPerson = name+ " is a "+occupation+ " from "+birthPlace +"."
  return descriptionOfPerson
}
