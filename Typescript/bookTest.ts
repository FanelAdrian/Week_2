import { Book } from "./book";

let libroEjemplo: Book = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions"); 
let hary: Book = new Book("Hary Potter", 352, "234763-BC98333", "Ana Inglesa", "Magia Editorial");
let peleponeso: Book = new Book("Peloponeso", 106, "234NB33-BL24733", "Hercules", "Grecia Antigua");

console.log(libroEjemplo.toString());
console.log(hary.getAuthor());
peleponeso.setEditorial("Italia Antigua");
console.log( peleponeso.getEditorial());


