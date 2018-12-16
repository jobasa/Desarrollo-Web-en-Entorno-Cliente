/*Crea una función llamada everyElementGreaterThan que tome por parámetro un número x,
 y un array de datos dataArray. La función devolverá cierto en caso de que TODOS los elementos sean mayores que x,
  y falso en caso contrario (e.g., map, filter, reduce, etc.)*/

function everyElementGreaterThan(a, b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}

let dataArray = [1, 2, 3, 4, 5];
console.log(dataArray.every(everyElementGreaterThan, 0));
