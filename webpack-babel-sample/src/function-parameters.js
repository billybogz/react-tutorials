function student(firstName,lastName,course,section,age=0,gender="M",school="STI" ){
  this.firstName = firstName
  this.lastName = lastName
  this.course = course
  this.section = section
  this.age = age
  this.gender = gender
  this.school = school
  //this.enroll = () => console.log("Enrolled to "+school+" - "+course+" - "+section)
  this.enroll = () => console.log(`Enrolled to ${this.school} - ${this.course} - ${this.section}.`)
  this.changeFirstName = (newName) => {
    this.firstName = newName
  }

}
const enrollee = new student("Billy","Labaguis","BSIT","801A",27)
enrollee.enroll()
enrollee.changeFirstName("Tobby")
console.log(enrollee.firstName)
