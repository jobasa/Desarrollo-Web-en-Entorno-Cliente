    const readline = require('readline-sync');


    //Clase Publicaciones
    class publicaciones{
        constructor(titulo,...autores){
            this.titulo = titulo;
            this.autores = autores;
            
        }
    }

    //clase autor
    class autor{
        constructor(nombre, apellidos, dni, correoelectronico){
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.dni = dni;
            this.correoelectronico = correoelectronico;
        }
    }

    //clase articulos cientificos
    class articulosCientificos extends publicaciones {
        constructor(titulo,autores,numPaginas,anyoPublicacion,numMenciones){
            super(titulo,...autores);
            this.numPaginas = numPaginas;
            this.anyoPublicacion = anyoPublicacion;
            this.numMenciones = numMenciones;
        }
    }

    //clase articulos de revista
    class articulosRevista extends articulosCientificos {
        constructor(titulo,autores,numPaginas,anyoPublicacion,numMenciones,editorial,factorImpact){
            super(titulo,autores,numPaginas,anyoPublicacion,numMenciones);
            this.editorial = editorial;
            this.factorImpact = factorImpact;
        }
    }

    //clase articulos de conferencia
    class articulosConferencia extends articulosCientificos {
        constructor(titulo,autores,numPaginas,anyoPublicacion,numMenciones,nomConferencia,lugarCelebracion){
            super(titulo,autores,numPaginas,anyoPublicacion,numMenciones);
            this.nomConferencia = nomConferencia;
            this.lugarCelebracion = lugarCelebracion;
        }
    }


    //Arrays
    let listaAutor = [ ];
    let listaConferencia = [ ];
    let listaRevista = [ ];
    // Es un FLAG
    let salir = false;
    // ! operdaor de negacion
    while(!salir){
        console.log('\nBienvenido al sistema de producción cientifica\n');
        console.log('1) Dar de alta\n');
        console.log('2) Dar de baja\n');
        console.log('3) Modificar\n');
        console.log('4) Salir del sistema');
        let opcion = readline.questionInt('Por favor, seleccione una de estas opciones: ');

        if(opcion===1){
            //Dar de alta 
            console.log('¿Que quieres dar de alta?\n');
            console.log('1) Autores');
            console.log('2) Articulos cientificos');
            console.log('3) Patentes cientificas');
            let opcion = readline.questionInt('Por favor seleccione una de estas opciones: ');
            if(opcion === 1){
                let nombre = readline.question('Por favor introduce un nombre: ');
                let apellidos = readline.question('Por favir introduce los apellidos: ');
                let dni=readline.question('Por favor introduce un DNI: ');
                let correoelectronico=readline.question('Por favor introduce un correo electronico: ');
                let newAutor = new autor(nombre,apellidos, dni, correoelectronico);
                listaAutor.push(newAutor);
                console.log(listaAutor);
                console.log('Autor registrado con exito!');
            }
            if(opcion === 2){
                console.log('¿Que tipo de articulo desea registrar');
                console.log('1) Articulo de revista');
                console.log('2) Articulo de conferencia');
                let opcion = readline.questionInt('Por favor seleccione una de estas opciones: ');
                
                if(opcion === 1){
                    let titulo = readline.question('Por favor introduce un titulo: ');
                    let numAutores = readline.question('¿Cuantos autores tiene?: ');
                    let autor = [];
                    for(let i = 0; i < numAutores; i++){
                        autor[i] = readline.question('Por favor introduce un autor: ');
                }
                let numPaginas = readline.question('Por favor introduce una numero de paginas: ');
                let anyoPublicacion = readline.questionInt('Por favor introduce un anyo de publicacion: ');
                let numMenciones = readline.question('Por favor introduce un numero de menciones: ');
                let editorial = readline.question('Por favor introduce una editorial: ');
                let factorImpacto = readline.questionFloat('Por favor introduce factor de impacto: ');
                let newArticuloRevista = new articulosRevista(titulo, autor,numPaginas,anyoPublicacion, editorial, numMenciones,factorImpacto);
                listaRevista.push(newArticuloRevista);
                console.log(listaRevista);
                console.log('Registro se ha realizado con exito');
                
            }
        }else if(opcion===2){
            //Dar de baja un libro
            let titulo=readline.question('Por favor introduce un titulo: ');
            for(let i=0; i<listaLibro.length;i++){
                let libro = listaLibro[i];
                if (libro.titulo===titulo) {
                    listaLibro.splice(i);
                    encontrado = true;
                    break;
                }
            }
            if(encontrado){
                console.log('Libro encontrado y borrado del sistema');
                console.log(listaLibros);
            }
        }else if(opcion===3){


        }else if(opcion===4){
            salir=true;
        }
    }
}