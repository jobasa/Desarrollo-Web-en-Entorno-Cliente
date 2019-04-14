/* Número de enlaces de la página */
let link = document.getElementsByTagName('a');
console.log(link);

/* Dirección a la que enlaza el penúltimo enlace */
let ultimoEnlace = document.getElementsByTagName('a')[5];
console.log(ultimoEnlace);

/*Numero de enlaces que enlazan a http://prueba */
let enlaces = document.querySelectorAll('a[tppabs^="http://prueba"]');
console.log(enlaces);

/*Número de enlaces del tercer párrafo */
let p = document.getElementsByTagName('p')[2].getElementsByTagName('a');
console.log(p);




