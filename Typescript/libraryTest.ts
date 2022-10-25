import {Library} from "./library";
import {Book} from "./book";
let libro: Book[] = [new Book("Hary Potter", 352, "234763-BC98333", "Ana Inglesa", "Magia Editorial"), new Book("Peloponeso", 106, "234NB33-BL24733", "Hercules", "Grecia Antigua")];
let agualibro = new Library(libro, "Aguacate", "Claroo");
console.log(agualibro.toString());
console.log(agualibro.findByAuthor("Ana Inglesa"));
