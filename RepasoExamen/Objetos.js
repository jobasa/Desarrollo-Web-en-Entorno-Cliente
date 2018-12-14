/**
 * Ejercicio: Concesionario
 * Dar de alta coche
 * Dar de baja coche
 * Buscar un coche y mostrarlo por pantalla
 */

const readline = require('readline-sync');

 class Coche {

    constructor(matricula,marca,modelo,color,km){
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.km = km;
        this.reservado = false;
    }

    getMatricula(){
        return this.matricula;
    }

}

let listaCoches = [];
let salir = false;
while(!salir){
    console.log('Bienvenidos al sistema de gestiÃƒÂ³n del concesionario');
    console.log('1) Dar de alta coche');
    console.log('2) Dar de baja un coche');
    console.log('3) Buscar un coche y mostrar informaciÃƒÂ³n');
    console.log('4) Modificar un coche');
    console.log('-1) Salir del sistema');
    let opcion=readline.questionInt('Por favor, seleccione una de estas opciones: ');
    if(opcion===1){
        //Dar de alta el coche
        let matricula=readline.question('Por favor introduce una matricula: ');
        let marca=readline.question('Introduce una marca: ');
        let modelo=readline.question('Introduce un modelo: ');
        let color=readline.question('Introduce un color: ');
        let km = readline.questionFloat('Introduce el num. de km: ');
        /*Crear un objeto COCHE */
        let newCar = new Coche(matricula,marca,modelo,color,km);
        listaCoches.push(newCar);
        console.log(listaCoches);
    } else if(opcion===2){
        //Dar de baja un coche
        let matricula = readline.question('Por favor introduce una matricula:');
        let encontrado = false;
        for(let i=0;i<listaCoches.length;i++){
            let coche = listaCoches[i];
            if(coche.matricula===matricula){
                listaCoches.splice(i,1);
                encontrado = true;
                break;
            }
        }
        if(encontrado){
            console.log('Coche encontrado y borrado del sistema');+
            console.log(listaCoches);
        } else {
            console.log('Coche no encontrado en el sistema');
        }
    } else if(opcion===3){
        //Buscar un coche
        let matricula = readline.question('Por favor introduce una matricula: ');
        for(let coche of listaCoches){
            if(coche.matricula===matricula){
                console.log(coche);
                break;
            }
        }
        /**
         * let arrayCoche = listaCoches.filter( c => c.matricula===matricula );
         * console.log(arrayCoche[0]);
         */
    } else if(opcion===4){
        //ModificaciÃ³n
        let matricula = readline.question('Por favor introduzca una matricula: ');
        let cocheEncontrado = undefined;
        //for(let coche of listaCoches){
        for(let i=0;i<listaCoches.length;i++){
            let coche = listaCoches[i];
            if(coche.matricula === matricula){
                cocheEncontrado = coche;
                break;
            }
        }
        if(cocheEncontrado){
            //Coche encontrado
            let newKm = readline.questionInt('Introduce nuevo numero de km (Actual: ' + cocheEncontrado.km + ' )');
            cocheEncontrado.km = newKm;
            console.log('Valor modificado');
        } else {
            //Coche no ha sido encontrado
            console.log('Coche no encontrado');
        }
    } else if(opcion===-1){
        salir=true;
    }

}