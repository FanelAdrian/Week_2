"use strict";
/* Retos de Condicionales

1. Trabajar en la rama repaso1 .En una carpeta nueva. Ej: retos1. Guarda estos retos en un
fichero .js Ej: condicionales.ts

2. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.

La fecha de nacimiento vendrá indicada por dos números: dia y mes.
La cabecera de la función tendrá el siguiente aspecto: function zodiac(day, month)

3. Realizar un procedimiento que dado el nombre de un país te imprima en que continente
estás. (Max 5 países por continente).
La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country)

4. Realizar una función que te imprima por consola el siguiente mensaje:
- “El numero es par”, si el numero introducido como parámetro de entrada es par
- “El numero es impar”, si el numero introducido como parámetro de entrada es impar
La cabecera de la función tendrá el siguiente aspecto: function isEven(number)

5. Subir los cambios a GitHub. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
//function zodiac(day:number, month:string){
var zodiac = function (day, month) {
    if (((day >= 21 && day <= 31) && (month === "marzo")) || ((day <= 20) && (month === "abril"))) {
        console.log("Eres Aries");
    }
    else if (((day >= 21 && day <= 30) && (month === "abril")) || ((day <= 21) && (month === "mayo"))) {
        console.log("Eres Tauro");
    }
    else if (((day >= 22 && day <= 31) && (month === "mayo")) || ((day <= 21) && (month === "junio"))) {
        console.log("Géminis");
    }
    else if (((day >= 22 && day <= 30) && (month === "junio")) || ((day <= 22) && (month === "julio"))) {
        console.log("Eres Cáncer");
    }
    else if (((day >= 23 && day <= 31) && (month === "julio")) || ((day <= 23) && (month === "agosto"))) {
        console.log("Eres leo");
    }
    else if (((day >= 24 && day <= 31) && (month === "agosto")) || ((day <= 23) && (month === "septiembre"))) {
        console.log("Eres Virgo");
    }
    else if (((day >= 24 && day <= 30) && (month === "septiembre")) || ((day <= 23) && (month === "octubre"))) {
        console.log("Eres Libra");
    }
    else if (((day >= 24 && day <= 31) && (month === "octubre")) || ((day <= 22) && (month === "noviembre"))) {
        console.log("Eres Escorpión");
    }
    else if (((day >= 23 && day <= 30) && (month === "noviembre")) || ((day <= 21) && (month === "diciembre"))) {
        console.log("Eres Sagitario");
    }
    else if (((day >= 22 && day <= 31) && (month === "diciembre")) || ((day <= 20) && (month === "enero"))) {
        console.log("Eres Capricornio");
    }
    else if (((day >= 21 && day <= 31) && (month === "enero")) || ((day <= 18) && (month === "febrero"))) {
        console.log("Eres Acuario");
    }
    else if (((day >= 19 && day <= 29) && (month === "febrero")) || ((day <= 20) && (month === "marzo"))) {
        console.log("Eres Piscis");
    }
    else
        console.log("te has inventado esa fecha.");
};
var europa = ["Rumania", "España", "Portugal", "Malta", "Irlanda"];
var asia = ["Irak", "Rusia", "Taiwan", "China", "Corea del Norte"];
var america = ["Peru", "Canada", "Groenlandia", "Puerto Rico", "Barbados"];
var oceania = ["Australia", "Papua Nueva Guinea", "Nueva Zelanda", "Samoa", "Tuvalu"];
var africa = ["Guinea Ecuatorial", "Sudafrica", "Egipto", "Madagascar", "Niger"];
var continent = function (country) {
    // en este caso estamo creando una funcion que puede tener dos valosres y lo indicamos con |.
    var inEurope = europa.find(function (europeCountry) { return country === europeCountry; });
    if (inEurope !== undefined) {
        console.log("Esta en Europa");
    }
    else if (america.find(function (americanCountry) { return country === americanCountry; })) {
        console.log("Esta en America");
    }
    else if (asia.find(function (asianCountry) { return country === asianCountry; })) {
        console.log("Esta en Asia");
    }
    else if (oceania.find(function (oceanianCountry) { return country === oceanianCountry; })) {
        console.log("Esta en Oceanía");
    }
    else if (africa.find(function (africanCountry) { return country === africanCountry; })) {
        console.log("Esta en Africa");
    }
    else
        console.log("No se que país es ese.");
};
continent("Taiwan");
continent("Africa");
continent("Guinea Ecuatorial");
continent("Rumania");
continent("Australia");
continent("Groenlandia");
function isEven(number) {
    if (number % 2 === 0) {
        console.log("El numero es par.");
    }
    else
        console.log("El numero es impar");
}
exports.isEven = isEven;
isEven(25686);
