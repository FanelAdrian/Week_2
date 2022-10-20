/* 1.4. Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe
tener como mínimo 2 parámetros de entrada. */

class Person {

    constructor(nombre, peso, altura, añoNacimiento) {
        this.name = nombre;
        this.age;
        this.yearOfBirth = añoNacimiento;
        this.nationality;
        this.hairColor;
        this.eyesColor;
        this.ethnicity;
        this.weight = peso;
        this.height = altura;
        this.hobbies = ["comer", "dormir", "jugar"];
    }
    calcular_imc() {
        return this.weight / (this.height * this.height);
    }
    edad(){
        return 2022 - this.yearOfBirth;
    }
    printAll() {
        for (let persona in this){
            console.log(`${persona} - ${this[persona]}`)
        }
   /*  printAll() {
        console.log("Nombre - " + this.name);
        console.log("Edad - " +  this.age);
        console.log("Año de nacimiento - " + this.yearOfBirth);
        console.log("Nacionalidad - " + this.nationality);
        console.log("Color de pelo - " + this.hairColor);
        console.log("Color de ojos - " + this.eyesColor);
        console.log("Peso - " + this.weight);
        console.log("Etnia - " + this.ethnicity);
        console.log("Altura - " +  this.height); */
    }
    printHobbies(){
        console.log(this.hobbies);
    }
}

/* Reto 2
Utilizando la clase Person definida en el punto anterior, haz que se pueda calcular el IMC
(índice de mas corporal) de cualquier persona que se haya creado como un objeto de la
clase. */

let pepe = new Person("Pepe", 80, 1.79, 1968);
console.log(pepe.calcular_imc());

/* Reto 3
Añadir el atributo yearOfBirth a la clase Person e implementar el método edad que tome
como parámetro el año y calcule la edad de la persona. */

let maria = new Person("Maria", 60, 1.63, 2000);
console.log(pepe.edad());

/* Reto 4
Añadir un método que se denomine printAll que muestre por consola cada uno de los
atributos de la clase Person seguido por “-” y el valor del atributo. */

let ester = new Person("Ester", 48, 1.59, 2008);
ester.printAll();

/* Reto 5
Añadir el atributo hobbies a la clase Person, que es un array de strings, y crear un método
denominado printHobbies, que muestre por consola las aficiones de la persona. */
ester.printHobbies();

/* Reto 6

• Guardar la clase Person en un fichero con extensión .js (person.js).
• Modificar ese fichero para exportar la clase.
• Importar la clase en otro fichero denominado personTest.js.
• Crear un objeto de la clase Persona y probar todos sus atributos y métodos.
• Sube todos los cambios a tu rama “dia1” */