/*Crea una función que tome como parámetro un array de números llamado dataArray,
 y que devuelva un nuevo array con el resultado de elevar todos los elementos al cuadrado, 
 únicamente manteniendo aquellos cuyo cuadrado es par. 
 Emplea funciones de orden superior (e.g., map, filter, reduce, etc.)*/

function cuadrado(x) {
    return x**2;
}

function par(x) {
    return x%2 == 0;
}

let array = [1,2,3,4,5,6];
let dataArray = array.map(cuadrado);
let pares = dataArray.filter(par)
console.log(dataArray);
console.log(pares);