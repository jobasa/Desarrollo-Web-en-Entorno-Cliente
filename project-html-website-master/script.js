/*Bájate el proyecto Web Azure de ejemplo de FloridaOberta 
y haz un script de JS que saque todos los links de la página web.
 Se deberá extraer los hostnames únicos a los que enlaza la página.*/

let link = document.getElementsByTagName("a");
console.log(link);

for (links of link)
console.log(links.hostname);

/*Extraer todas las imágenes dentro de la clase step y 
todos los links (independiente de su posición) en una sola instrucción.*/
let imagen = document.querySelectorAll(".step img, a");
console.log(imagen);

/*Extraer las imágenes precedidas de un elemento de la clase step-icon*/
let imagenes = document.querySelectorAll(".step-icon ~ img");
console.log(imagenes);

/*Elementos con el atributo 
href definido a https://go.microsoft.com/fwlink/?linkid=862126*/
let href = document.querySelectorAll("a[href='https://go.microsoft.com/fwlink/?linkid=862126']");
console.log(href);

