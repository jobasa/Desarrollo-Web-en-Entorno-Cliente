/*Crea una función llamada getMaximum que tomo un array numérico llamado dataArray como parámetro,
 y devuelva el valor mínimo encontrado el dicho array. Emplea la función de orden superior sobre arrays reduce.*/

dataArray = [6, 2, 3, 4, 5];

function minimo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function getMinimum(dataArray) {
    let menor = dataArray.reduce(minimo, 0);
    return menor;
}

console.log(getMinimum(dataArray));