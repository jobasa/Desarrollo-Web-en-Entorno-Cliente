class Corredores {
    constructor(nombre, apellido, edad, club, categoria, marcas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.club = club;
        this.categoria = categoria;
        this.marcas = marcas;
    }

    añadirMarca(marcas) {
        this.marcas.push(marcas);
    }

    marcaBaja() {
        function comparar(a, b) {
            if (a>b) {
                return b;
            } else {
                return a;
            }
        }
        let marcaMenor = this.marcas.reduce(comparar);
        return marcaMenor;
    }

    marcaAlta() {
        function comparar(a, b) {
            if (a<b) {
                return b;
            } else {
                return a;
            }
        }
        let marcaMayor = this.marcas.reduce(comparar);
        return marcaMayor;
    }

    menoredad() {
        if (this.edad < 18) {
            return true;
        } else {
            return false;
        }
    }
}

let atleta = new Corredores("Joan", "Banyuls", "17", "Xabia", "Alevin", [10.4, 9.5]);
let resultado = atleta.menoredad();
let resultado2 = atleta.marcaBaja();
let resultado3 = atleta.marcaAlta();
console.log(resultado);
console.log(resultado2);
console.log(resultado3);

