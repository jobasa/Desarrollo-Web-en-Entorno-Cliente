// Crea una función llamada isEven para determinar si un número x dado por parámetro es par.
//  La función deberá devolver cierto en caso de que el número sea par, y falso en caso contrario.

function isEven(x) {
    let par = x%2==0;
    return par;
}


console.log(isEven(5));
