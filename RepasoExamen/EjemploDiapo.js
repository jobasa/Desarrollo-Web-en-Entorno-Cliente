/*Creo un objeto*/
let lotrBook = {};
/*Asigna un valor al atributo title */
lotrBook.title = "The Lord of the Rings";
lotrBook["author"] = "Tolkien";
/*Creo un objeto y asigno valores*/
let hpBook = {
    author: "Rowling",
    title: "Harry Potter"
};

/*Atributos privados y ponerlos a false */
lotrBook._read = false;
lotrBook._favourite = false;
/*Mustra todos los atributos del objeto */
console.log(Object.keys(lotrBook));

/*Funcion que marca un atributo a true */
function readBook() {
    this._read = true;
}

/*Asigna una funcion a una variable del objeto */
lotrBook.setRead = readBook;
hpBook.setRead = readBook;

/*Llamar a la funcion */
lotrBook.setRead();

/*console.log(lotrBook._read);*/
/*console.log(lotrBook.toString);*/

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    set Read(x) {
        this._read = x;
    }
}

class ScienceFictionBook extends Book {
    constructor(title, author, subgenre) {
        super(title, author);
        this.subgenre = subgenre;
    }
}
let duneBook = new ScienceFictionBook('Dune', 'John Doe', 'Space');

console.log(duneBook);
console.log(duneBook instanceof Book);
console.log(duneBook instanceof ScienceFictionBook);
console.log(duneBook instanceof Object);