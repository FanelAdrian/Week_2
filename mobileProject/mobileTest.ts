import { Mobile } from "./mobile";
let oneplus: Mobile = new Mobile("one plus 7t pro Mclaren","oneplus", "7t pro","negro",500);
let samsung: Mobile = new Mobile("Galaxy Z Flip4","samsung", "Z Flip","morado",1100);
let oppo: Mobile = new Mobile("Reno8 Pro 5g","oppo", "Reno Pro ","verde",800);
let huawei: Mobile = new Mobile("HUAWEI Mate Xs 2","huawei", "Mate Xs","blanco",2000);
let myMobiles = [samsung, oppo, huawei];

// oneplus.setColor("negro anaranjado");
// oneplus.getName();
// oneplus.caracteristicas();

for (let mobil of myMobiles ){
    mobil.caracteristicas()
}