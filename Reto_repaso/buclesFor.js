"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function evenNumbers(num) {
    for (var i = 0; i < num; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
;
evenNumbers(12);
function myRevert(myArr) {
    var myArrInver = [];
    for (var i = 0; i < myArr.length - 1; i--) {
        myArrInver.push(i);
    }
}
var colors = ["rojo", "amarillo", "azul", "verde", "morado", "naranja", "blanco", "negro", "morado", "añil"];
function isRainbow(colors) {
    var raimbow = ["rojo", "naranja", "amarillo", "verde", "añil", "azul", "violeta"];
    for (var i = 0; i < colors.length; i++) {
        if (raimbow.includes(colors[i])) {
            console.log("el color ".concat(colors[i], " esta en el arcoiris."));
        }
        else
            console.log("el color ".concat(colors[i], " no esta en el arcoiris."));
    }
}
isRainbow(colors);
var myWords = ["Ut", "eu", "vestibulum", "nunc", "Proin", "orci", "lectus", "pretium", "sed", "mauris"];
function add(myWords) {
    var number = [];
    for (var i = 0; i < myWords.length; i++) {
        number.push(myWords[i].length);
    }
    var longitud = number.reduce(function (numPalabras, num) { return numPalabras + num; });
    return longitud;
}
exports.add = add;
console.log(add(myWords));
