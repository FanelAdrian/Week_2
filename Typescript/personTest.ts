import { Person } from "./person";

let persona: Person = new Person("Paco", 65);
console.log(persona);
console.log(persona.yearOfBirth(2022));
persona.printName();
console.log(persona.getAddress());