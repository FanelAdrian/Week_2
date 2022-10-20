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
module.exports = { Person };
