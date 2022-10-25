export class Point{
    private x: number;
    private y: number;
    constructor (x:number, y:number){
        this.x = x;
        this.y = y;
    }
   public getX():number {
        return this.x;
    }
   public setX(x:number) {
        this.x = x;
    }
   public getY():number {
        return this.y;
    }
   public setY(y:number) {
        this.y = y;
    }
    public toString(){
        return `(${this.x},${this.y})`;
    }
}