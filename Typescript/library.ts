import { Book } from "./book";
export class Library {
    private books: Book[];
    private address: string;
    public manager: string;
    constructor(books: Book[], address: string, manager: string) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    public setbooks(books: Book[]) {
        this.books = books;
    }
    public getbooks(): Book[] {
        return this.books;
    }
    public setadress(address: string) {
        this.address = address;
    }
    public getadress(): string {
        return this.address;
    }
    public setmanager(manager: string) {
        this.manager = manager;
    }
    public getmanager(): string {
        return this.manager;
    }
   public toString(): string {
       let infoLibros:string = "";
        for (let i: number = 0; i < this.books.length; i++) {
           let palabra:string = `Book ${i+1}:
        Title - ${this.books[i].getTitle()}
        Numer of Pages- ${this.books[i].getNPages()}
        IBN - ${this.books[i].getIsbn()}
        Author - ${this.books[i].getAuthor()}
        Editorial - ${this.books[i].getEditorial()}  \n`;
        infoLibros = infoLibros.concat(palabra);

        }
        return infoLibros;

    }
    public getNumberOfBooks(): number {
        return this.books.length;
    }
    public findByAuthor (author:string):Book[] {
        let autor:Book[] = this.books.filter((libro: Book) => author === libro.getAuthor());
        return autor;
    }
}

 

/* let resultado: string = "";
for (let i: number = 0; i < this.books.length; i++) {
    resultado += "Book" + (i + 1) + ": " + this.books[i] + "\n" */