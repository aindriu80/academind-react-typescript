// Primatives: numbers, strings, booleans
// More Complex types: arrays, objects
// Function types, paramaters

// Primitives

let age: number = 25

age = 12

let userName: string

userName = 'Aindriú'

let isInstructor: boolean

isInstructor = true

// More complex types

let hobbies: string[]

hobbies = ['Sports', 'Cooking']

type Person = {
  name: string
  age: number
}

let person: Person

person = {
  name: 'Aindriú',
  age: 41,
}

// person ={
// 	isEmployee:true
// }

let people: Person[]

// Type inference

let course: string | number = 'React - tehe complee guide'

course = 12341
