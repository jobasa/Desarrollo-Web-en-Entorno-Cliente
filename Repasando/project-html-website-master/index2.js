/*Slecciona la imagen y los links que esten por debajo de la classe .step*/
let link = document.querySelectorAll('.step img,a');
console.log(link);

/*Extraer las imágenes precedidas de un elemento de la clase step-icon*/
let img = document.querySelectorAll('.step-icon > img');
console.log(img);

/*El título del documento*/
let titulo = document.getElementsByTagName("title");
console.log(titulo);

/*Elementos con el atributo href definido a https://go.microsoft.com/fwlink/?linkid=862126 */
 let href = document.querySelector('a[href^="https"]');
console.log(href);

/*Crear un elemento a(un link) */
let link2 = document.createElement("a");
let text = document.createTextNode("youtube");
link2.text="youtube";
link2.href="https://www.youtube.com/";
document.body.appendChild(link2);

/**
 * 
 */
//Crear un texto
let texto = document.createElement('p').appendChild(document.createTextNode('Un nuevo texto'));
let div = document.getElementsByClassName('"success-text');
document.getElementsByClassName('content-body').insertBefore(texto, div);






