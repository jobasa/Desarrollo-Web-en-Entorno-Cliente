/*12.Crea una función que simule el lanzamiento de un dado de 6 caras un número 
 determinado de veces recogido en un parámetro llamado n. 
 La función deberá devolver cuantas veces ha aparecido cada una de las caras del dado en los experimentos. 
 Emplea la estructura de datos map. */

function simularLanzamientoDados(n) {
    let resultadoTiradas = new Map();
    //Inicializamos contadores
    for (let cara = 1; cara <= 6; cara++) {
        resultadoTiradas.set(cara,0);
        
    }
    for (let i = 0; i < n; i++) {
       let resultadDado = Math.floor(Math.random() * 6) + 1;
       //console.log(resultadDado);
       let contador = resultadoTiradas.get(resultadDado);
       resultadoTiradas.set(resultadDado, contador + 1);

        
    }
    console.log(resultadoTiradas);
    return resultadoTiradas;
}
 
//Lanzar dado numero de veces
simularLanzamientoDados(100);


 /*let myMap = new Map();
 myMap.set('cara1', 1);
 myMap.set('cara2', 2);
 myMap.set('cara3', 3);
 myMap.set('cara4', 4);
 myMap.set('cara5', 5);
 myMap.set('cara6', 6);
let compras1 = myMap.get('cara1');
let compras2 = myMap.get('cara2');
let compras3 = myMap.get('cara3');
let compras4 = myMap.get('cara4');
let compras5 = myMap.get('cara5');
let compras6 = myMap.get('cara6');
console.log(compras1,compras2,compras3,compras4,compras5,compras6);
myMap.keys();*/


