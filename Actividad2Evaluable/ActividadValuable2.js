    const readline = require('readline-sync');


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
    //Clase libro
    class Libro{
        constructor(nombre, numeropaginas, author){
            this.nombre = nombre;
            this.numeropaginas = numeropaginas;
            this.author = author;
            
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

    let listaLibro = [ ];
    let listaAutor = [ ];
    // Es un FLAG
    let salir = false;
    // ! operdaor de negacion
    while(!salir){
        console.log('Bienvenido al sistema de gestión de la universidad');
        console.log('1) Introducir un libro\n');
        console.log('2) Borrar un libro\n');
        console.log('3) Añadir autor\n');
        console.log('4) Salir del sistema');
        let opcion = readline.questionInt('Por favor, seleccione una de estas opciones: ');

        if(opcion===1){
            //Dar de alta un libro
            let nombre=readline.question('Por favor introduce una titulo: ');
            let numeropaginas=readline.question('Por favor introduce un numero de paginas: ');
            let author=readline.question('Por favor introduce un autor: ');
            let newLibro= new Libro(nombre,numeropaginas, author);
            listaLibro.push(newLibro);
            console.log(listaLibro);
        }else if(opcion===2){
            //Dar de baja un coche
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
            //Añadir autor
            let nombre=readline.question('Por favor introduce un nombre: ');
            let apellidos=readline.question('Por favor introduce un apellido: ');
            let dni=readline.question('Por favor introduce un DNI: ');
            let correoelectronico=readline.question('Por favor introduce un correo electronico: ')
            let newAutor= new autor(nombre,apellidos, dni, correoelectronico);
            listaAutor.push(newAutor);
            console.log(listaAutor);

        }else if(opcion===4){
            salir=true;
        }
    }