import { Person } from "./person";
import { Contacts } from "./contacts";

let pepe: Person = new Person("Pepe", 80);
let maria: Person = new Person("Maria", 60);
let ester: Person = new Person("Ester", 48);

let personas: Contacts = new Contacts([pepe, maria, ester]);


console.log(personas);
personas.printCalendar()