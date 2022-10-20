let  {Person} = require("./person");
let pepe = new Person("Pepe", 80, 1.79, 1968);
let maria = new Person("Maria", 60, 1.63, 2000);
let ester = new Person("Ester", 48, 1.59, 2008);

let contactos = [pepe, maria, ester];

class Contacts {
    constructor() {
        this.person = contactos;
    }
    contactos(){
        return contactos;
    }
}
module.exports = {Contacts};