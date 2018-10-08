class Student {
  fullname: string
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullname = firstName + " " + middleInitial + " " + lastName
  }
}

export default Student