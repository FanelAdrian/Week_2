import { Mobile } from "./mobile"
export class MobileCollection {
    private mobiles: Mobile[];
    private totalPrice: number;
    constructor(mobiles: Mobile[]) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation()
    }
    public getMobiles(): Mobile[] {
        return this.mobiles;
    }
    setMobiles(mobiles: Mobile[]) {
        this.mobiles = mobiles;
    }
    public getTotalPrice(): number {
        return this.totalPrice;
    }
    public setTotalPrice(totalPrice: number) {
        this.totalPrice = totalPrice;
    }
    public totalPriceCalculation(): number {
        let allPrice: number = 0;
        for (let i: number = 0; i < this.mobiles.length; i++) {
            allPrice = + this.mobiles[i].price;
        } return allPrice;
    }
    public printCollection(): void {
        for (let i = 0; i < this.mobiles.length; i++) {
            console.log("The characteristics of the mobile " + this.mobiles[i].getName() + " are:" + "\n" +
                "Name: " + this.mobiles[i].getName() + "\n" +
                "Trademark: " + this.mobiles[i].getTrademark() + "\n" +
                "Model: " + this.mobiles[i].getModel() + "\n" +
                "Color: " + this.mobiles[i].getColor() + "\n" +
                "Price: " + this.mobiles[i].getPrice() + "\n"
            )
        }
    }
}

// mobileCollectionTest.ts

let samsung: Mobile = new Mobile("Galaxy Z Flip4", "samsung", "Z Flip", "morado", 1100);
let oppo: Mobile = new Mobile("Reno8 Pro 5g", "oppo", "Reno Pro ", "verde", 800);
let huawei: Mobile = new Mobile("HUAWEI Mate Xs 2", "huawei", "Mate Xs", "blanco", 2000);
let apple: Mobile = new Mobile("iPhone 14 Pro", "Apple", "iPhone", "rojo", 1400);
let myCollection: Mobile[] = [samsung, oppo, huawei, apple];