let  {Person} = require("./person");

let pepe = new Person("Pepe", 80, 1.79, 1968);
let maria = new Person("Maria", 60, 1.63, 2000);
let ester = new Person("Ester", 48, 1.59, 2008);

console.log(pepe.calcular_imc());

console.log(pepe.calcular_imc());
console.log(pepe.edad());
ester.printAll();

