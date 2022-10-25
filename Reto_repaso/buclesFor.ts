function evenNumbers(num:number) {
    for (let i: number = 0; i < num; i++) {
      if (i % 2 != 0) {
       console.log(i)
      }
    }
  };
  
  evenNumbers(12);

  function myRevert(myArr:number[]) {
    let myArrInver:number[] = [];
    for (let i: number = 0; i < myArr.length - 1; i--) {
        myArrInver.push(i);
    }
  }

let colors:string[] = ["rojo","amarillo","azul","verde","morado","naranja","blanco","negro","morado","añil"];
function isRainbow(colors:string[]) {
    let raimbow:string[] = ["rojo", "naranja", "amarillo","verde","añil","azul","violeta"];
    for(let i:number = 0; i < colors.length; i++){
        if (raimbow.includes(colors[i])){
            console.log(`el color ${colors[i]} esta en el arcoiris.`);
        }else console.log(`el color ${colors[i]} no esta en el arcoiris.`);
    }
}
isRainbow(colors);

let myWords:string[] = ["Ut", "eu", "vestibulum", "nunc", "Proin", "orci", "lectus", "pretium", "sed", "mauris"];

export function add(myWords:string[]): number{
    let number:number[] = [];
for(let i:number = 0; i < myWords.length; i++){
   number.push(myWords[i].length)
}
let longitud = number.reduce((numPalabras, num) => numPalabras + num);
return longitud;
}
console.log(add(myWords));
