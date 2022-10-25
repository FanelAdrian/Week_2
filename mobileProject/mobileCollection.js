"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var mobile_1 = require("./mobile");
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileCollection.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    MobileCollection.prototype.totalPriceCalculation = function () {
        var allPrice = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            allPrice = +this.mobiles[i].price;
        }
        return allPrice;
    };
    MobileCollection.prototype.printCollection = function () {
        for (var i = 0; i < this.mobiles.length; i++) {
            console.log("The characteristics of the mobile " + this.mobiles[i].getName() + " are:" + "\n" +
                "Name: " + this.mobiles[i].getName() + "\n" +
                "Trademark: " + this.mobiles[i].getTrademark() + "\n" +
                "Model: " + this.mobiles[i].getModel() + "\n" +
                "Color: " + this.mobiles[i].getColor() + "\n" +
                "Price: " + this.mobiles[i].getPrice() + "\n");
        }
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
// mobileCollectionTest.ts
var samsung = new mobile_1.Mobile("Galaxy Z Flip4", "samsung", "Z Flip", "morado", 1100);
var oppo = new mobile_1.Mobile("Reno8 Pro 5g", "oppo", "Reno Pro ", "verde", 800);
var huawei = new mobile_1.Mobile("HUAWEI Mate Xs 2", "huawei", "Mate Xs", "blanco", 2000);
var apple = new mobile_1.Mobile("iPhone 14 Pro", "Apple", "iPhone", "rojo", 1400);
var myCollection = [samsung, oppo, huawei, apple];
