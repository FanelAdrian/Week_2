/* Retos de Bucles While

1. Guardar estos retos en un nuevo fichero. Ej: buclesWhile.ts

1. Realizar una función que te devuelva si existe un numero par en el array de números que
introduces como parámetro de entrada.
La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)

2. Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
todos los nombres empiezan por M.
La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)

3. Subir los cambios a GitHub. */
var number = [1, 2, 3, 4, 5, 6, 7, 8, 65, 44, 37, 9];
function hasEven(myNums) {
    var i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 == 0) {
            return true;
        }
        else
            false;
        i++;
    }
}
hasEven(number);
var palabrasM = ["Muspendisse", "Monsequat", "Mante", "Mellentesque", "Muisque", "Mistique", "Magna"];
function startWithM(myNames) {
    var i = 0;
    var withM = true;
    while (i < myNames.length) {
        if (myNames[i][0] !== "M") {
            withM = false;
        }
        return withM;
        i++;
    }
}
console.log(startWithM(palabrasM));
