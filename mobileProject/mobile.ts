
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
   public getName():string {
        return this.name;
    }
   public setName(name:string) {
        this.name = name;
    }
   public getTrademark():string {
        return this.trademark;
    }
   public setTrademark(trademark:string) {
        this.trademark = trademark;
    }
   public getModel():string {
        return this.model;
    }
   public setModel(model:string) {
        this.model = model;
    }
   public getColor():string {
        return this.color;
    }
   public setColor(color:string) {
        this.color = color;
    }
   public getPrice():number {
        return this.price;
    }
   public setPrice(price:number) {
        this.price = price;
    }
   public caracteristicas(){
        console.log(`The characteristics of the mobile name are: \n
        Name: ${this.name} 
        Trademark: ${this.trademark} 
        model: ${this.model} 
        Color: ${this.color} 
        Price: ${this.price}`);
        
    }
  }