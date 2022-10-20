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
    }
    printHobbies(){
        console.log(this.hobbies);
    }
}
module.exports = { Person };
