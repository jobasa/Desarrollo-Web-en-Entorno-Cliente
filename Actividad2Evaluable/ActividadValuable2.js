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
            let opcion = readline.questionInt('Por favor selecciona una de estas opciones: ');
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
                console.log('¿Que tipo de articulo quieres registrar');
                console.log('1) Articulo de revista');
                console.log('2) Articulo de conferencia');
                let opcion = readline.questionInt('Por favor selecciona una de estas opciones: ');
                
                if(opcion === 1){
                    //Articulo revistas
                    let titulo = readline.question('Por favor introduce un titulo: ');
                    let numAutores = readline.question('¿Cuantos autores tiene?: ');
                    let autor = [];
                    for(let i = 0; i < numAutores; i++){
                        autor[i] = readline.question('Por favor introduce un autor: ');
                }
                let numPaginas = readline.question('Por favor introduce un numero de paginas: ');
                let anyoPublicacion = readline.questionInt('Por favor introduce un anyo de publicacion: ');
                let numMenciones = readline.question('Por favor introduce un numero de menciones: ');
                let editorial = readline.question('Por favor introduce una editorial: ');
                let factorImpact = readline.questionFloat('Por favor introduce un factor de impacto: ');
                let newArticuloRevista = new articulosRevista(titulo, autor,numPaginas,anyoPublicacion, editorial, numMenciones,factorImpact);
                listaRevista.push(newArticuloRevista);
                console.log(listaRevista);
                console.log('Registro realizado con exito!');
                
            }
                if(opcion === 2){
                    //Articulo de conferencia
                    let titulo = readline.question('Por favor introduce un titulo: ');
                    let numAutores = readline.question('¿Cuantos autores tiene?: ');
                    let autor = [];
                    for(let i = 0; i < numAutores; i++){
                        autor[i] = readline.question('Por favor introduce un autor: ');
                }
                let numPaginas = readline.question('Por favor introduce un numero de paginas: ');
                let anyoPublicacion = readline.questionInt('Por favor introduce un anyo de publicacion: ');
                let numMenciones = readline.question('Por favor introduce un numero de menciones: ');
                let nomConferencia = readline.question('Por favor introduce el nombre de la conferencia: ');
                let lugarCelebracion = readline.question('Por favor introduce el lugar de celebracion: ');
                let newArticuloConferencia = new articulosConferencia(titulo,autor,numPaginas,anyoPublicacion,numMenciones,nomConferencia,lugarCelebracion);
                listaConferencia.push(newArticuloConferencia);
                console.log(listaConferencia);
                console.log('Registro realizado con exito');
                }
        }else if(opcion===2){
            //Dar de baja

        }else if(opcion===3){
            //Modificar
            console.log('¿Que quieres modificar?\n');
            console.log('1) Autores');
            console.log('2) Articulos cientificos');
            console.log('3) Patentes cientificas');
            let opcion = readline.questionInt('Por favor selecciona una de estas opciones: ');

            if(opcion===1){
                //Autores
                if(opcion === 1){
                    console.log('¿Que quieres modificar?\n');
                    console.log('1) Nombre');
                    console.log('2) Apellidos');
                    let opcion = readline.questionInt('Por favor seleccione una de estas opciones: ');
                    
                    //Nombre
                    if(opcion===1){
                        for(let i = 0; i < listaAutor.length; i++){
                            let autor = listaAutor[i];
                            if(autor.nombre === opcion){
                                let nuevoNombre = readline.question('Introduce un nuevo nombre: ');
                                autor.nombre = nuevoNombre;
                                console.log(listaAutor);
                                console.log('Nombre modificado con exito!');
                                break;
                            } else {
                                console.log('No se ha encontrado el autor');
                                salir = true;
                            }
                        }
                    }

                    //Apellido
                    if(opcion===2){
                        for(let i = 0; i < listaAutor.length; i++){
                            let autor = listaAutor[i];
                            if(autor.apellidos === opcion){
                                let nuevoApellido = readline.question('Introduce un nuevo apellido: ');
                                autor.apellidos= nuevoApellido;
                                console.log(listaAutor);
                                console.log('Apellido modificado con exito!');
                                break;
                            }else{
                                console.log('Nose se ha encontado el autor');
                                salir = true;
                            }
                        }
                    }

                }

            }
            if(opcion===2){
             //Articulos cientificos
            }
    

        }else if(opcion===4){
            console.log('Se ha salido con exito!');
            salir=true;
        }
    }
}