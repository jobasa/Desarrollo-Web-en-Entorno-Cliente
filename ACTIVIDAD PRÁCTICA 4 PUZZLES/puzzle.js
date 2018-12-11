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

let num_piezas = 2;
function  getMaxScore(num_piezas) {
 let resultado = num_piezas * 2;
 return resultado;
}

function getScore() {
    let score = document.body.children[1].innerText;
    score = score.split(' ');
    return parseInt(score[1]);

    
}


getNumberPiecesFromUser();

getScore();


