/*Crea una función llamada linearSearch que tome un parámetro x de tipo numérico, y un array llamado dataArray.
La función deberá devolver cierto en caso de que el valor x se encuentre en dataArray, y falso en caso contrario.
No se puede emplear el método / instrucción include definido para los arrays.Emplea la nueva sintaxis de bucles
for.*/
let dataArray = [1, 2, 3, 4, 5];

function linearSearch(x, dataArray) {
    for (let numeros of dataArray) {
        if (x == numeros) {
            return true;
        }
    }
    return false;
}

console.log(linearSearch(4, dataArray));