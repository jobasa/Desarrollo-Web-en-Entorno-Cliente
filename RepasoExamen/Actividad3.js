/*Crea una función llamada getMinimum que tomo un array numérico llamado dataArray como parámetro, 
y devuelva el valor mínimo encontrado el dicho array. 
Emplea la función de orden superior sobre arrays reduce.*/

dataArray = [6, 2, 3, 4, 5];

function minimo(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

function getMinimum(dataArray) {
    let menor = dataArray.reduce(minimo, 1000);
    return menor;
}

console.log(getMinimum(dataArray));
