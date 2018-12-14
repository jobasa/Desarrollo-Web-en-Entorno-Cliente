/*Crea una función llamada average que tome por parámetro un array llamado dataArray y calcule la media de los valores almacenados en el array. 
La función deberá devolver la media de dicho vector y undefined en caso de que el array no tenga elementos. 
Emplea funciones de orden superior sobre arrays (e.g., map, filter, reduce, etc.)*/
function suma(a, b) {
    return a + b;
}

function average(dataArray) {
    if (dataArray.length == 0) {
        return undefined;
    } else {
        let media = dataArray.reduce(suma, 0) / dataArray.length;
        return media;
    }
}

let dataArray = [5, 10, 15, 20];
console.log(average(dataArray));