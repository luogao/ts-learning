import { sayHello } from './greet'
import Student from './Student'

interface Person {
  firstName: string
  lastName: string
}

function showHello(divName: string, name: string) {
  const el = document.getElementById(divName)
  setTimeout(() => {
    el.innerText = sayHello(name)
  }, 300)
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName
}

function showPerson(person: Person) {
  const div = document.createElement('div')
  div.innerHTML = greeter(person)
  document.body.appendChild(div)
}

const student = new Student("Jane", "M.", "User")

const a = [1,2,3,4,5]
console.log(student)
console.log(...a)

showPerson(student)
showHello('greeting', "TypeScript!")
