/*Crea una función que tome como parámetro un array de números llamado dataArray,
y que devuelva un nuevo array con el resultado de elevar todos los elementos al cuadrado,
únicamente manteniendo aquellos cuyo cuadrado es par.Emplea funciones de orden superior(e.g., map, filter, reduce, etc.)*/

function par(x) {
    return x % 2 == 0;
}

function cuadrado(x) {
    return x ** 2;
}

dataArray = [1,2,3,4,5];
let cuadrados = dataArray.map(cuadrado);
let pares = cuadrados.filter(par);
console.log(pares);

