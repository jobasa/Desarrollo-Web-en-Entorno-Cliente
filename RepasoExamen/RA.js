/*Una funcion que devuelva cada un array en cada elemento se multplique por 2*/



function multiplicar(dataArray) {
    for (let numeros of dataArray) {
        console.log(numeros);
        
        numeros = numeros * 2;
       
        
    }
    return dataArray;
}
dataArray = [1, 2, 3, 4, 5, 6];
console.log(multiplicar(dataArray));