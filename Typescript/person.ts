export class Person {
    public name: string;
    public age: number;
    private address: string;

    constructor(nombre: string, edad: number) {
        this.name = nombre;
        this.age = edad;
        this.address = "no indicada";
    }
    public printName() {
        console.log(this.name);
    }
    public yearOfBirth(currentYear: number):number {
        return currentYear - this.age;
    }
    public setAddress(address: string) {
        this.address = address;
    }
    public getAddress():string {
        return this.address;
    }
}



