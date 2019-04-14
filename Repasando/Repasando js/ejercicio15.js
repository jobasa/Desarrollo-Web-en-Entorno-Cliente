// Realiza un programa que lea números positivos del teclado hasta el
// usuario introduzca un número negativo o 0. Una vez realizado esto, el
// programa deberá calcular la media de los números introducidos e
// imprimir la información por pantalla.
var numero;
numero = Number(prompt('Introduce un numero: ', ' '));
var contador = 0;
var cifra = 0;


while (numero > 0) {
    contador = contador + 1;
    cifra = (cifra + numero);
    numero = Number(prompt('Introduce un numero: ', ' '));
}

var media = (cifra / contador);
console.log(media);