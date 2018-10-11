const readline = require('readline-sync');
//let edad = rl.question( 'Introduce tu edad: ' );
//console.log('Tu edad es ' +edad);

//Clase de articulos cientififcos
class articuloscientificos {
    constructor(title, author, numpaginas, anyodepublicacion, nummenciones){
        this.title = title;
        this.author = author;
        this.numpaginas = numpaginas;
        this.anyodepublicacion = anyodepublicacion;
        this.nummenciones = nummenciones;
    }
    


}
//Clase de patentes cientificas
class patentescientificas {
    constructor (author, anyodepublicacion, anyovenciminetopatente){
        this.author = author;
        this.anyodepublicacion = anyodepublicacion;
        this.anyovenciminetopatente = anyovenciminetopatente;
    }
}

class articulosderevista extends articuloscientificos {
    constructor( title, author, numpaginas, anyodepublicacion, nummenciones, editorial, calidadrevista ){
        this.title = title;
        this.author = author;
        this.numpaginas = numpaginas;
        this.anyodepublicacion = anyodepublicacion;
        this.nummenciones = nummenciones;
        this.editorial = editorial;
        this.calidadrevista = calidadrevista;
    }
}
class articulosconferencia extends articuloscientificos {
    constructor(title, author, numpaginas, anyodepublicacion, nummenciones, libroconferencia, lugarcelebracion){
        this.title = title;
        this.author = author;
        this.numpaginas = numpaginas;
        this.anyodepublicacion = anyodepublicacion;
        this.nummenciones = nummenciones;
        this.libroconferencia = libroconferencia;
        this.lugarcelebracion = lugarcelebracion;
    }
}
let salir = false;
// ! operdaor de negacion
while(!salir){
    console.log('Bienvenido al sistema de gestión de la universidad');
    console.log('1) Introducir un libro\n');
    console.log('2) Introducir articulo\n');
    console.log('3) Añadir autor\n');
    console.log('4) Salir del sistema');
    let opcion = readline.questionInt('Por favor, seleccione una de estas opciones: ');

    if(opcion===1){
        //Dar de alta un libro
        let =readline.question('Por favor introduce una matrícula: ');
        let marca=readline.question('Por favor introduce una marca: ');
        let modelo=readline.question('Por favor introduce un modelo: ');
        let color=readline.question('Por favor introduce un color: ');
        let km=readline.questionFloat('Por favor introduce el num. de km: ');
        let newCar= new Coche(matricula, marca, modelo, color, km);
        listaCoches.push(newCar);
        console.log(listaCoches);
    } else if(opcion===2){

    } else if(opcion===3){
        //Añadir un autor
        let matricula=readline.question('Por favor introduce una matrícula: ');
        let marca=readline.question('Por favor introduce una marca: ');
        let modelo=readline.question('Por favor introduce un modelo: ');
        let color=readline.question('Por favor introduce un color: ');
        let km=readline.questionFloat('Por favor introduce el num. de km: ');
        let newCar= new Coche(matricula, marca, modelo, color, km);
        listaCoches.push(newCar);
        console.log(listaCoches);
    }else if(opcion===4){
        salir=true;
    }
}