class articuloscientificos {
    constructor(title, author, numpaginas, anyodepublicacion, nummenciones){
        this.title = title;
        this.author = author;
        this.numpaginas = numpaginas;
        this.anyodepublicacion = anyodepublicacion;
        this.nummenciones = nummenciones;
    }
    


}

class articulosderevista extends articuloscientificos {
    constructor( editorial, calidadrevista ){
        this.editorial = editorial;
        this.calidadrevista = calidadrevista;
    }
}