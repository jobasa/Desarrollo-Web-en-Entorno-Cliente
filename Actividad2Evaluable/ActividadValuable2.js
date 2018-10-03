const rl = require('readline-sync');
let edad = rl.question( 'Introduce tu edad: ' );
console.log('Tu edad es ' +edad);

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

while(true){

    let opcion = rl.question('Introduce la accion a realizar:\n' + 
        '1) Introducir libro\n' + 
        '2) Introducir articulo\n' + 
        '3) AÃ±adir autor\n' +
        '4) Salir');
    if(opcion==='1'){
        
    } else if(opcion==='2'){

    } else if(opcion==='3'){

    }else if(opcion==='4'){

    }
}