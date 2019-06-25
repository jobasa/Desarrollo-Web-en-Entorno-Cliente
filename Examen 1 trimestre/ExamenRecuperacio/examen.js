class PeliculaDVD {
    constructor(titulo, anyo_publicacion, fecha_entrada, estado, duracion, fecha_devolucion, director, actores, genero) {
        this.titulo = titulo;
        this.anyo_publicacion = anyo_publicacion;
        this.fecha_entrada = fecha_entrada;
        this.fecha_devolucion = fecha_devolucion;
        this.estado = estado;
        this.duracion = duracion;
        this.director = director;
        this.actores = actores;
        this.genero = genero;
    }

    prestar(fecha_devolucion) {

        if (this.estado == "prestado") {
            throw Error('Este item ya esta prestado');
        } else {
            this.fecha_devolucion = fecha_devolucion;
        }



    }

    devolver(fecha_devolucion) {
        penalizacion = 0;
        if (DifferenceInDays(this.fecha_devolucion, fecha_devolucion, fecha_devolucion) == 0) {
            penalizacion = 0;
        }

        if (DifferenceInDays(this.fecha_devolucion, fecha_devolucion, fecha_devolucion) < 0) {
            penalizacion = 0;
        }

        if (DifferenceInDays(this.fecha_devolucion, fecha_devolucion, fecha_devolucion) > 2) {
            penalizacion = penalizacion + 2;
        }
        return penalizacion;
    }

    anyadirActor(actor) {
        this.actores.push(actor);
    }

    quitarActor(actor) {
        for (let i = 0; i < this.actores.length; i++) {
            if (this.actores[i]===actor) {
                this.actores[i].splice(actor,1);
            }
            
        }
        
    }

    static peliculas(peliculasA, director) {

        function filtrado(pp) {
            if (pp.director === director) {
                return true;
            } else {
                return false;
            }
        }

        let newArray = peliculasA.filter(filtrado);
        return newArray;


    }

    static mostFrequentDirector(peliculasA){
        let peliculasPordirector = new Map();
        for(let i=0;i<peliculasA.length;i++){ 
            let pelicula = peliculasA[i];
            if(peliculasPordirector.has(pelicula.director)){
                //El director ha aparecido mas de una vez
                let cuantasVecesAntes = peliculasPordirector.get( pelicula.director );
                peliculasPordirector.set( pelicula.director, cuantasVecesAntes + 1 );
            } else{
                //La primera vez que aparece el director
                peliculasPordirector.set( pelicula.director, 1 );
            }
        }
        let masPopular = undefined;
        let numPeliculasMasPopular = 0;
        for( let inventor of peliculasPordirector.keys() ){
            let numPeliculas = peliculasPordirector.get(inventor);
            if(numPeliculas> numPeliculasMasPopular){
                numPeliculasMasPopular = numPeliculas;
                masPopular = inventor;
            }
        }
        return masPopular;
    }

}