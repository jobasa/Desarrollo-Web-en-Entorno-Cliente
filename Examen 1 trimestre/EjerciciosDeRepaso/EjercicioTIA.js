class Coche {
    constructor(matricula, marca, modelo, color, km) {
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.km = km;
    }

    getMatricula() {
        return this.matricula;
    }

}

let coches = [];

let coche1 = new Coche('12345X', 'Audi', 'R8', 'blanco', '28Km');
let coche2 = new Coche('678910Y', 'Ford', 'Mustang', 'Rojo', '50Km');
let coche3 = new Coche('12974Z', 'Chevrolet', 'Camaro', 'Amarillo', '100Km');


coches.push(coche1);
coches.push(coche2);
coches.push(coche3);


function buscar(matricula, coches) {
    for (let i = 0; i < coches.length; i++) {
        if (matricula == coches[i].getMatricula()) {
            return true;
        }
    }
    return false;
}

if (buscar('12974Z', coches)==true) {
    console.log("Coche encontrado");
    
}else{
    console.log("Coche NO encontrado");
    
}


