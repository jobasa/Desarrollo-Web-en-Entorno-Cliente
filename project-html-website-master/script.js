/*Bájate el proyecto Web Azure de ejemplo de FloridaOberta 
y haz un script de JS que saque todos los links de la página web.
 Se deberá extraer los hostnames únicos a los que enlaza la página.*/

let link = document.getElementsByTagName("a");
console.log(link);

for (links of link)
console.log(links.hostname);

let imagen = document.getElementsByTagName("img");
console.log(imagen);