/*let pregunta = window.prompt("Elige el numero de piezas del puzzle:")
console.log(pregunta);

let raiz_cuadrada= Math.sqrt(pregunta);
let comprobar = Number.isInteger(raiz_cuadrada);
console.log(comprobar);*/



function getNumberPiecesFromUser() {

    let pregunta;
    let raiz_cuadrada = Math.sqrt(17);

    while (!Number.isInteger(raiz_cuadrada)) {
        pregunta = window.prompt("Elige el numero de piezas del puzzle:")
        raiz_cuadrada = Math.sqrt(pregunta);


    }

    return parseInt(pregunta);




}

let num_piezas = 2;

function getMaxScore(num_piezas) {
    let resultado = num_piezas * 2;
    return resultado;
}

function getScore() {
    let score = document.getElementById("score").textContent;
    score = score.split('Score:');
    score = parseInt(score[1]);
    return score;

}

function updateScore(newScore) {
    let viejoScore = document.getElementById("score").textContent = "Score: " + newScore;
    return viejoScore;

}

function decreaseScore(numero) {
    let puntuacion = getScore();
    let decrementoScore = puntuacion - numero;
    updateScore(decrementoScore);

}

function getNewSizes(width, height) {
    if (width > height) {
        newWidth = (width / height) * 200;
    } else if (height > width) {
        newHeight = (200 * height) / width;
    }
}

array = [0,1,2,3,4];

function shuffle(array) {
    for (let i = array.length; i > 0; i--) {
        let random = Math.floor(Math.random() * i);
        let aux = array[i];
        array[i] = array[random];
        array[random] = aux;
    }
    return array;
}

getNumberPiecesFromUser();
console.log(getScore());
/*console.log(decreaseScore(1));*/
console.log(shuffle(array));