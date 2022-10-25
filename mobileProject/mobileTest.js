"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var oneplus = new mobile_1.Mobile("one plus 7t pro Mclaren", "oneplus", "7t pro", "negro", 500);
var samsung = new mobile_1.Mobile("Galaxy Z Flip4", "samsung", "Z Flip", "morado", 1100);
var oppo = new mobile_1.Mobile("Reno8 Pro 5g", "oppo", "Reno Pro ", "verde", 800);
var huawei = new mobile_1.Mobile("HUAWEI Mate Xs 2", "huawei", "Mate Xs", "blanco", 2000);
var myMobiles = [samsung, oppo, huawei];
// oneplus.setColor("negro anaranjado");
// oneplus.getName();
// oneplus.caracteristicas();
// samsung.caracteristicas();
// oppo.caracteristicas();
// huawei.caracteristicas();
for (var _i = 0, myMobiles_1 = myMobiles; _i < myMobiles_1.length; _i++) {
    var mobil = myMobiles_1[_i];
    mobil.caracteristicas();
}
