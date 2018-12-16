/*Crea una función que tome un array de números llamado dataArray como parámetro
 y determine si algún elemento del array es múltiplo de 15.*/

 function multiplo(x) {
    return x % 15 === 0;
 }

 dataArray = [1,2,3,4,5,15];
 console.log(dataArray.some(multiplo));
 