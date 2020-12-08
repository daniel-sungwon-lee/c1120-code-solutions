/* exported student */
var student = {
  firstName:"Daniel",
  lastName: "Lee",
  subject: "JavaScript",
  getFullName: function(){
    return this.firstName + " " + this.lastName
  },
  getIntroduction: function(){
    return "Hello, my name is " + this.getFullName() + " and I am studying " +this.subject +"."
  }
}
