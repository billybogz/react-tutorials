function student(...rest ){
  this.firstName = rest[0]
  this.lastName = rest[1]
  this.course = rest[2]
  this.section = rest[3]
  this.age = rest[4]
  this.gender = rest[5]
  this.school = rest[6]
  this.enroll = () => console.log(`Enrolled to ${this.school} - ${this.course} - ${this.section}.`)
  this.changeFirstName = (newName) => {
    this.firstName = newName
  }

}
const enrollee = new student("Billy","Labaguis","BSIT","801A",27,"M","STI")
enrollee.enroll()
enrollee.changeFirstName("Tobby")
console.log(enrollee.firstName)
