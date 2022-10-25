"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    Point.prototype.toString = function () {
        return "(".concat(this.x, ",").concat(this.y, ")");
    };
    Point.prototype.distanceToOrigin = function () {
        var sumRaiz = (this.x * this.x) + (this.y * this.y);
        var toOrigin = Math.sqrt(sumRaiz);
        return toOrigin;
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var punto1 = (anotherPoint.getX() - this.x) * (anotherPoint.getX() - this.x);
        var punto2 = (anotherPoint.getY() - this.y) * (anotherPoint.getY() - this.y);
        var distance = Math.sqrt(punto1 + punto2);
        return distance;
    };
    Point.prototype.calculateQuadrant = function () {
        var cuadrante = 0;
        if (this.getX() === 0 && this.getY() === 0) {
            cuadrante = 0;
        }
        else if (this.getX() > 0 && this.getY() > 0) {
            cuadrante = 1;
        }
        else if (this.getX() < 0 && this.getY() > 0) {
            cuadrante = 2;
        }
        else if (this.getX() < 0 && this.getY() < 0) {
            cuadrante = 3;
        }
        else if (this.getX() > 0 && this.getY() < 0) {
            cuadrante = 4;
        }
        return cuadrante;
    };
    Point.prototype.calculateNearest = function (points) {
        var puntos = points[0];
        for (var i = 0; i < points.length; i++) {
            if (points[i].calculateDistance(this) < puntos.calculateDistance(this)) {
                puntos = points[i];
            }
        }
        return puntos;
    };
    return Point;
}());
exports.Point = Point;
