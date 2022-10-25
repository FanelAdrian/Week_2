
export class Point {
    private x: number;
    private y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    public getX(): number {
        return this.x;
    }
    public setX(x: number) {
        this.x = x;
    }
    public getY(): number {
        return this.y;
    }
    public setY(y: number) {
        this.y = y;
    }
    public toString() {
        return `(${this.x},${this.y})`;
    }
    public distanceToOrigin(): number {
        let sumRaiz: number = (this.x * this.x) + (this.y * this.y);
        let toOrigin: number = Math.sqrt(sumRaiz);
        return toOrigin;
    }

    public calculateDistance(anotherPoint: Point): number {
        let punto1: number = (anotherPoint.getX() - this.x) * (anotherPoint.getX() - this.x);
        let punto2: number = (anotherPoint.getY() - this.y) * (anotherPoint.getY() - this.y);
        let distance: number = Math.sqrt(punto1 + punto2);
        return distance;
    }

    public calculateQuadrant(): number {
        let cuadrante: number = 0;
        if (this.getX() === 0 && this.getY() === 0) {
            cuadrante = 0
        }
        else if (this.getX() > 0 && this.getY() > 0) {
            cuadrante = 1
        }
        else if (this.getX() < 0 && this.getY() > 0) {
            cuadrante = 2
        }
        else if (this.getX() < 0 && this.getY() < 0) {
            cuadrante = 3
        }
        else if (this.getX() > 0 && this.getY() < 0) {
            cuadrante = 4
        }

        return cuadrante;
    }
    public calculateNearest(points: Point[]): Point {
        let puntos: Point = points[0];
        for (let i = 0; i < points.length; i++) {
            if (points[i].calculateDistance(this) < puntos.calculateDistance(this)) {

                puntos = points[i];
            }
        }
        return puntos;
    }
}
