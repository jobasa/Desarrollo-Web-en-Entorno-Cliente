let enlaces = document.body.getElementsByTagName('a');
console.log(enlaces);

let penultimoenlace = document.body.getElementsByTagName('a')[5];
console.log(penultimoenlace);

let enlacesparrafo = document.body.getElementsByTagName('p')[2].getElementsByTagName('a');
console.log(enlacesparrafo);

// Dada una página html, agrega un nuevo nodo de tipo párrafo
let parrafo = document.createElement('p');
document.body.appendChild(parrafo);

//Dada una página html, BORRA un nodo
let texto = document.getElementById("texto2");
texto.parentNode.removeChild(texto);

//Dada una página html, obten el primer enlace dentro del primer párrafo
let primerParrafo = document.body.getElementsByTagName('p')[0];
let primerEnlace= primerParrafo.getElementsByTagName('a')[0];
console.log(primerEnlace);

// Dada una página html, obten el primer enlace de TODOS los párrafos.
let p = document.body.getElementsByTagName('p');
console.log(p);
for (let i = 0; i < p.length; i++) {
    let primerosEnlaces = p[i].getElementsByTagName('a')[0];
    console.log(primerosEnlaces);
}

//let primerEnlaceParrafos= parrafos.getElementsByTagName('a')[0];
//console.log(primerEnlaceParrafos);


