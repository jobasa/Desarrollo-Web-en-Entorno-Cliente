// Crea una función llamada linearSearch que tome un parámetro x de tipo numérico, y un array llamado dataArray.
//  La función deberá devolver cierto en caso de que el valor x se encuentre en dataArray, y falso en caso contrario.
//   No se puede emplear el método/instrucción include definido para los arrays.

// function linearSearch (x, dataArray) {
//         for (let i = 0; i < dataArray.length; i++) {
//             if (x==dataArray[i]) {

//                 return true;
//             };
          
//         }
//         return false; 
// }
// console.log(linearSearch(10, [3,7,4,5,8]));




let dataArray = [3,7,4,5,8];
console.log(dataArray.some(x => x == 9));

