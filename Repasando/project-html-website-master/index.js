/*Slecciona la imagen y los links que esten por debajo de la classe .step*/
let imgLink = document.querySelectorAll('.step  img, a ');
/*Extraer las imágenes precedidas de un elemento de la clase step-icon*/
let imgLink2 = document.querySelectorAll('.step-icon > img');
/*El título del documento*/
let titulo = document.getElementsByTagName('title');
/*Elementos con el atributo href definido a https://go.microsoft.com/fwlink/?linkid=862126 */
let link = document.querySelector('a[href^="https://go.microsoft.com/fwlink/?linkid=862126"]');
/*Crear un elemento a(un link) */
var a = document.createElement('a');
var linkText = document.createTextNode("google");
a.appendChild(linkText);
a.title = "google";
a.href = "https://www.google.com/";
document.body.appendChild(a);

console.log(imgLink);
console.log(imgLink2);
console.log(titulo);
console.log(link);