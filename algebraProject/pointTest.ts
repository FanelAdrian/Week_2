import { Point } from "./point";
let myPoint =  new Point(5,10);
let myPoint2 =  new Point(8,11)
let myPoint3 =  new Point(-9,47);
let anotherPoint = new Point(3,9);

// console.log(myPoint.getX());
// myPoint.setY(15);
// console.log(myPoint.toString());
// console.log(myPoint.distanceToOrigin());
// console.log(myPoint.calculateDistance(anotherPoint));
// console.log(myPoint.calculateQuadrant());
console.log(myPoint.calculateNearest([anotherPoint,myPoint2,myPoint3]));


