
export class Mobile {
    name: string;
    trademark: string;
    model: string;
    color: string;
    price: number;
    constructor(name: string, trademark: string, model: string, color: string, price: number){
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    getName():string {
        return this.name;
    }
    setName(name:string) {
        this.name = name;
    }
    getTrademark():string {
        return this.trademark;
    }
    setTrademark(trademark:string) {
        this.trademark = trademark;
    }
    getModel():string {
        return this.model;
    }
    setModel(model:string) {
        this.model = model;
    }
    getColor():string {
        return this.color;
    }
    setColor(color:string) {
        this.color = color;
    }
    getPrice():number {
        return this.price;
    }
    setPrice(price:number) {
        this.price = price;
    }
    caracteristicas(){
        console.log(`The characteristics of the mobile name are: \n
        Name: ${this.name} 
        Trademark: ${this.trademark} 
        model: ${this.model} 
        Color: ${this.color} 
        Price: ${this.price}`);
        
    }
  }