// Crea una función llamada hasRepeatedWords que tome por parámetro una cadena de texto llamada word y un array de palabras llamado wordsArray.
//  La función deberá devolver cierto si al menos existe una palabra repetida en el array, y falso en caso contrario. No emplear el método includes
//   de los arrays ni otras estructuras de datos que no sean arrays.

let palabras = "Hola que tal";

let wordsArray = palabras.split(" ");

function hasRepeatedWords(word, wordsArray) {
    for (let i = 0; i < wordsArray.length; i++) {
        if (word == wordsArray[i]) {

            return true;
        };

    }
    return false;

}
console.log(hasRepeatedWords("tal", wordsArray));
