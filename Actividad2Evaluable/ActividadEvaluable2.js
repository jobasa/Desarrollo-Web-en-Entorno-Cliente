const readline = require('readline-sync');

class Libro{
    constructor(titulo,numeropaginas,autor){
        this.titulo=titulo;
        this.numeropaginas = numeropaginas;
        this.autor = autor;
        this.reservado = false;
    }
    
}
let listaLibros = [ ];
// Es un FLAG
let salir = false;
// ! operdaor de negacion
while(!salir){
    
console.log('Bienvenido al sistema de gestión del universidad');
console.log('1) Dar de alta un libro');
console.log('2) Dar de baja un libro');
console.log('3) Buscar un libro y mostrar información');
console.log('4) Salir del sistema');
let opcion=readline.questionInt('Por favor, seleccione una de estas opciones: ');

if(opcion===1){
    //Dar de alta un libro
    let titulo=readline.question('Por favor introduce una titulo: ');
    let numeropaginas=readline.question('Por favor introduce un numero de paginas: ');
    let autor=readline.question('Por favor introduce un autor: ');
    let newLibro= new Libro(titulo, numeropaginas, autor);
    listaLibros.push(newLibro);
    console.log(listaLibros);

}else if(opcion===2){
    //Dar de baja un libro
    let titulo=readline.question('Por favor introduce un titulo: ');
    for(let i=0; i<listaLibros.length;i++){
        let libro = listaLibros[i];
        if (libro.titulo===titulo) {
            listaLibros.splice(i);
            encontrado = true;
            break;
        }
    }
    if(encontrado){
        console.log('Libro encontrado y borrado del sistema');
        console.log(listaLibros);
    }
}else if(opcion===3){
    //Buscar un libro y mostrar información
    let titulo=readline.question('Por favor introduce una titulo: ');
    for(let libro of listaLibros){
        if(libro.titulo===titulo){
            console.log(libro);
            break;
        }
    }
    /**
     * let arrayCoche = listaCoches.filter( c => c.matricula===matricula );
     * console.log(arrayCoche[0]);
     */
}else if(opcion===4){
    salir=true;
}
}

