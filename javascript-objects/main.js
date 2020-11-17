/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: "Daniel",
  lastName: "Lee",
  age: 23
};
var fullName = student.firstName + " " + student.lastName;
console.log("value of fullName:",fullName);
student.livesInIrvine = false;
student.previousOccupation = "student"
console.log("value of student.livesInIrvine:",student.livesInIrvine)
console.log("value of student.previousOccupation:",student.previousOccupation)
console.log("value of student:",student)

var vehicle = {
  make: "Mercedes",
  model: "E63 AMG",
  year: "2019"
};
vehicle["color"] = "Black";
vehicle["isConvertable"]=false;
console.log("value of vehicle color:",vehicle["color"]);
console.log("value of vehicle isConvertable:",vehicle["isConvertable"]);
console.log("value of vehicle:",vehicle);

var pet = {
  name: "Pepper",
  type: "Dog"
};
delete pet.name;
delete pet.type;
console.log("value of pet:",pet);
