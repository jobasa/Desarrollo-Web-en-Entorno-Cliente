/*Crea una función llamada everyElementGreaterThan que tome por parámetro un número x,
 y un array de datos dataArray. La función devolverá cierto en caso de que TODOS los elementos sean mayores que x,
  y falso en caso contrario (e.g., map, filter, reduce, etc.)*/

function everyElementGreaterThan(x, dataArray) {
    if (x > dataArray) {
        return false;
    } else {
        return true;
    }
}

let dataArray = [1, 2, 3, 4, 5];
console.log(everyElementGreaterThan(6, dataArray));

/*let resultado = dataArray.every(everyElementGreaterThan)*/