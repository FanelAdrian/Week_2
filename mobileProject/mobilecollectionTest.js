"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobileCollection_1 = require("./mobileCollection");
var mobile_1 = require("./mobile");
var oneplus = new mobile_1.Mobile("one plus 7t pro Mclaren", "oneplus", "7t pro", "negro", 500);
var samsung = new mobile_1.Mobile("Galaxy Z Flip4", "samsung", "Z Flip", "morado", 1100);
var oppo = new mobile_1.Mobile("Reno8 Pro 5g", "oppo", "Reno Pro ", "verde", 800);
var huawei = new mobile_1.Mobile("HUAWEI Mate Xs 2", "huawei", "Mate Xs", "blanco", 2000);
var myMobiles1 = [samsung, oppo, huawei];
var myMobiles2 = new mobileCollection_1.MobileCollection(myMobiles1);
console.log(myMobiles2.getMobiles());
console.log(myMobiles2.getTotalPrice());
myMobiles2.printCollection();
