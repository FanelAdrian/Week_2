let  {Person} = require("./person");
let {Contacts} = require("./contacts");

let pepe = new Person("Pepe", 80, 1.79, 1968);
let maria = new Person("Maria", 60, 1.63, 2000);
let ester = new Person("Ester", 48, 1.59, 2008);

let personas = new Contacts;
personas.person = [pepe, maria, ester];

console.log(personas);

