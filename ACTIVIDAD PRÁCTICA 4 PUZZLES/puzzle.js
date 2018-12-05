/*let pregunta = window.prompt("Elige el numero de piezas del puzzle:")
console.log(pregunta);

let raiz_cuadrada= Math.sqrt(pregunta);
let comprobar = Number.isInteger(raiz_cuadrada);
console.log(comprobar);*/



function getNumberPiecesFromUser() {
    
    let pregunta;
    let raiz_cuadrada= Math.sqrt(17);

    while (!Number.isInteger(raiz_cuadrada)) {
        pregunta = window.prompt("Elige el numero de piezas del puzzle:")
        raiz_cuadrada= Math.sqrt(pregunta);

         
    }

    return parseInt(pregunta);
    
    
    
    
}


function  getMaxScore(num_piezas) {
 let resultado = num_piezas * 2;
 return resultado;
}

function getScore() {
    
}

let texto = document.
console.log(texto);

getNumberPiecesFromUser();
getMaxScore(2);

