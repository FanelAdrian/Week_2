export class Vector {
    private elements: number[];
    constructor(n: number, k: number) {
        this.elements = [];
        for (let i:number = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random()*k));
        }
    }
    public print(){
        console.log(this.elements);
        
    }
    public add(v1: Vector):Vector{
        for (let i = 0; i < v1.elements.length; i++) {
            v1.elements[i] = this.elements[i] + v1.elements[i]
        }
        return v1;
    }
    public subs(v1:Vector):Vector{
        for (let i = 0; i < v1.elements.length; i++) {
            v1.elements[i] = this.elements[i] - v1.elements[i]
        }
        return v1;
    }
    public mult(v1:Vector):Vector{
        for (let i = 0; i < v1.elements.length; i++) {
            v1.elements[i] = this.elements[i] * v1.elements[i]
        }
        return v1;
    }
    multNumber(n: number): Vector{
        let vector: Vector = new Vector(this.elements.length,10);
        for (let i = 0; i < this.elements.length; i++) {
            vector.elements[i] = this.elements[i] * n[i];
    }
    return vector;
    }
}

