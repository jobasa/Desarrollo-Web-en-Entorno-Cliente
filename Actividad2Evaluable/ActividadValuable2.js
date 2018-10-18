    const readline = require('readline-sync');


    //Clase Publicaciones
    class publicaciones{
            /** 
            * @param {String} titulo 
            * @param  {Array} autores 
            */
        constructor(titulo,...autores){
            this.titulo = titulo;
            this.autores = autores;
            
        }
    }

    //clase autor
    class autor{
            /** 
            * @param {String} nombre 
            * @param {String} apellidos 
            * @param {Integer} dni
            * @param {string} correoelectronico
            */
        constructor(nombre, apellidos, dni, correoelectronico){
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.dni = dni;
            this.correoelectronico = correoelectronico;
        }
    }

    //clase articulos cientificos
    class articulosCientificos extends publicaciones {
            /** 
             * @param {String} titulo 
             * @param {Array} autores 
             * @param {String} numPaginas 
             * @param {Integer} anyoPublicacion 
             * @param {Integer} numMenciones 
             */
        constructor(titulo,autores,numPaginas,anyoPublicacion,numMenciones){
            super(titulo,...autores);
            this.numPaginas = numPaginas;
            this.anyoPublicacion = anyoPublicacion;
            this.numMenciones = numMenciones;
        }
    }

    //clase articulos de revista
    class articulosRevista extends articulosCientificos {
            /**
            * @param {String} titulo 
            * @param {Array} autores 
            * @param {String} numPaginas 
            * @param {Integer} anyoPublicacion 
            * @param {Integer} numMenciones 
            * @param {String} editorial 
            * @param {Integer} factorImpact 
            */
        constructor(titulo,autores,numPaginas,anyoPublicacion,numMenciones,editorial,factorImpact){
            super(titulo,autores,numPaginas,anyoPublicacion,numMenciones);
            this.editorial = editorial;
            this.factorImpact = factorImpact;
        }
    }

    //clase articulos de conferencia
    class articulosConferencia extends articulosCientificos {
               /**
                * @param {String} titulo 
                * @param {Array} autores 
                * @param {String} numPaginas 
                * @param {Integer} anyoPublicacion 
                * @param {Integer} numMenciones 
                * @param {String} nomConferencia 
                * @param {String} lugarCelebracion 
                */ 
        constructor(titulo,autores,numPaginas,anyoPublicacion,numMenciones,nomConferencia,lugarCelebracion){
            super(titulo,autores,numPaginas,anyoPublicacion,numMenciones);
            this.nomConferencia = nomConferencia;
            this.lugarCelebracion = lugarCelebracion;
        }
    }

    //Clase patentes cientificas
    class patenteCientifica extends publicaciones{
           /** 
            * @param {String} titulo 
            * @param {Array} autores 
            * @param {Integer} anyoPublicacion 
            * @param {String} anyoVencimiento 
            */ 
           constructor(titulo,autores,anyoPublicacion,anyoVencimiento){
                super(titulo,...autores);
                this.anyoPublicacion = anyoPublicacion;
                this.anyoVencimiento = anyoVencimiento
           }
    }  


    //Arrays
    let listaAutor = [ ];
    let listaConferencia = [ ];
    let listaRevista = [ ];
    let listaPatentes = [ ];
    // Es un FLAG
    let salir = false;
    // ! operdaor de negacion

    //Busquedas
    var buscarAutor = " ";
    var buscarAnyoPublicacion = " ";

    function busqueda(elemento){

        if (buscarAutor.length > 0 && buscarAnyoPublicacion.length > 0){
            if(elemento.autores == buscarAutor && elemento.anyoPublicacion == buscarAnyoPublicacion){
                return elemento;
            }
        }else if (buscarAutor.length > 0){
            if(elemento.autores == buscarAutor){
                return elemento;
            }
        }else if (buscarAnyoPublicacion.length > 0){
            if(elemento.anyoPublicacion == buscarAnyoPublicacion){
                return elemento;
            }
        }else {
            console.log('Error, los parametros introducidos no son validos');  
        }  
    }




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
                if(opcion == 3){
                    //Patentes
                    let titulo = readline.question('Por favor introduce un titulo: ');
                    let numAutores = readline.question('¿Cuantos autores tiene?');
                    let autor = [ ];
                    for(let i = 0; i < numAutores; i++){
                        autor[i] = readline.question('Por favor introduce un autor: ');
                    }
                    let anyoPublicacion = readline.questionInt('Por favor introduce un anyo de publicacion: ');
                    let anyoVencimiento = readline.question('Por favor introduce un anyo de vencimiento: ');
                    let newPatente = new PatenteCientifica(titulo,autor, anyoPublicacion,anyoVencimiento);
                    listaPatentes.push(newPatente);
                    console.log(listaPatentes);
                    console.log('Registro realizado con exito');

                }
        }else if(opcion===2){
            //Dar de baja
            if(opcion === 2){
                console.log('¿Que quieres dar de baja?\n');
                console.log('1) Autores');
                console.log('2) Articulos cientificos');
                console.log('3) Patentes cientificas');
                let opcion = readline.questionInt('Por favor seleccione una de estas opciones: ');
                
                //Autores
                if(opcion === 1){
                    let opcion = readline.question('Introduce el nombre del autor: ');
                    for(let i = 0; i < listaAutor.length; i++){
                        let autor = listaAutor[i];
                        if(autor.nombre === opcion){
                            listaAutor.splice(i,1);
                            console.log(listaAutor);
                            console.log('Autor eliminado con exito!');
                            break;
                        }
                    }

                }
                //Articulos
                if(opcion === 2){
                    console.log('¿Que tipo de articulo quieres dar de baja?\n');
                    console.log('1) Articulo de revista\n');
                    console.log('2) Articulo de conferencia\n');
                    console.log('3) Patentes cientificas\n');
                    let opcion = readline.questionInt('Por favor selecciona una de estas opciones: ');
                    
                    //Articulo de revista
                    if(opcion === 1){
                        let opcion = readline.question('Introduce el titulo del articulo de revista: ');
                        for(let i = 0; i < listaRevista.length; i++){
                            let revista = listaRevista[i];
                            if(revista.titulo === opcion){
                                console.log(listaRevista);
                                console.log('Articulo borrado con exito!');
                                break;
                            }  
                        }
                    }
                    //Articulo de conferencia
                    if(opcion === 2){
                        let opcion = readline.question('Introduce el titulo del articulo de conferencia: ');
                        for(let i = 0; i < listaConferencia.length; i++){
                            let conferencia = listaConferencia[i];
                            if(conferencia.titulo === opcion){
                                listaConferencia.splice(i,1);
                                console.log('Articulo borrado con exito!');
                                break;
                            }
  
                        }
                    }
                    //Patentes cientificas
                    if(opcion === 3){
                        let opcion = readline.question('Introduce el titulo de la patente: ');
                        for(let i = 0; i < listaPatentes.length; i++){
                            let patente = listaPatentes[i];
                            if(patente.titulo === opcion){
                                listaPatentes.splice(i,1);
                                console.log(listaPatentes);
                                console.log('Patente borrada con exito!');
                                break;
                            }

                        }

                }
                

                }
            }
            
        }else if(opcion===3){
            //Modificar
            console.log('¿Que quieres modificar?\n');
            console.log('1) Autores');
            console.log('2) Articulos cientificos');
            console.log('3) Patentes cientificas');
            let opcion = readline.questionInt('Por favor selecciona una de estas opciones: ');

            if(opcion===1){
                //Modificar Autores
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
            
            //Modificar Articulos cientificos
            if(opcion===2){
                    console.log('¿Que tipo de articulo desea modificar?\n');
                    console.log('1) Articulo de revista\n');
                    console.log('2) Articulo en conferencia\n');
                    let opcion = readline.questionInt('Por favor selecciona una de estas opciones: ');

                //Modificar revista

            }
    

        }else if(opcion===4){
            console.log('Se ha salido con exito!');
            salir=true;
        }
    }
}