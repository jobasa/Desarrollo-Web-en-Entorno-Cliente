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

array = [0, 1, 2, 3, 4];

function shuffle(array) {
    /* Barajar los elementos de un array */
    for (let i = array.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * i);
        let aux = array[i];
        array[i] = array[random];
        array[random] = aux;
    }
    return array;
}

function pieceNumberToRowsColumns(numPiezas, piezas) {
    /*Array con las posiciones */
    let posicion = [];
    /*La raiz cuadrada del número que te pasan*/
    let dimension = Math.sqrt(piezas);

    let fila = Math.floor(numPiezas / dimension);
    let columna = numPiezas % dimension;

    posicion.push(fila);
    posicion.push(columna);

    return posicion;
}

function createPuzzleLayout(totalPiezas, anchuraPuzzle, alturaPuzzle, direccionPuzzle) {
    /* Raiz cuadrada del número que se introducirá */
    let dimension = Math.sqrt(totalPiezas);
    /* Creación de una tabla */
    let tabla = document.createElement('table');
    tabla.setAttribute("id", "tablero");
    /* Situar la tabla en el body */
    let posicionTabla = document.body.lastChild.previousElementSibling.previousElementSibling;
    /* Crear el tbody de la tabla */
    let tbody = document.createElement('tbody');

    tabla.appendChild(tbody);
    posicionTabla.appendChild(tabla);


    let contador = 0;

    for (let i = 0; i < dimension - 1; i++) {
        /* creación de fila */
        let tr = document.createElement('tr');
        tabla.appendChild(tr);


        for (let x = 0; x < dimension; x++) {
            /* Creación de columna*/
            let td = document.createElement('td');

            td.style = 'border: 3px solid black;';
            td.width = anchuraPuzzle / dimension;
            td.height = alturaPuzzle / dimension;
            td.style.backgroundImage = 'url(' + direccionPuzzle + ')';
            td.setAttribute('id', 'piece' + contador);
            contador++;
            tr.appendChild(td);

        }

    }
}

function pieceToOffset(pieza, anchura, altura, numeroPiezas) {
    let arraypiezas = [];
    let posicion = pieceNumberToRowsColumns(pieza, numeroPiezas);
    /* Devuelve la anchura de la pieza */
    let anchuraPieza = anchura / Math.sqrt(numeroPiezas);
    /* Devuelve la altura de la pieza */
    let alturaPieza = altura / Math.sqrt(numeroPiezas);

    /* Poner el resultado en el arrayPiezas */
    arraypiezas.push(anchuraPieza * posicion[0] * (-1));
    arraypiezas.push(alturaPieza * posicion[1] * (-1));

    return arraypiezas;
}

function createReferenceSolution(anchura, altura, numPiezas) {
    /* Array que contiene el desplazamiento(offset) de las piezas */
    let arrayDesplazamiento = [];
    for (let i = 0; i < numPiezas; i++) {
        arrayDesplazamiento.push(pieceToOffset(i, anchura, altura, numPiezas));
    }
    return arrayDesplazamiento;


}

function drawContentPuzzle(arrayDesplazamientos) {
    for (let i = 0; i < arrayDesplazamientos; i++) {
        document.getElementById('piece' + [i]).style.backgroundPosition = arrayDesplazamientos[i][0] + 'px ' + arrayDesplazamientos[i][1] + 'px';

    }
}

function checkIfSolution(solucion, estadoActual) {
    for (let i = 0; i < solucion.length; i++) {
        if (solucion[i] !== estadoActual[i]) {
            return false;
        }

    }
    return true;
}

function initGame(imageURL, numberOfPieces) {
    let img = new Image();
    img.addEventListener('load', function () {
        gameLogic(img, numberOfPieces);
    });
    img.src = imageURL;
}

function gameLogic(image, num_piezas) {
    updateScore(getMaxScore(num_piezas));
    let altura = image.height;
    let anchura = image.width;
    let imagen = image.src.split('/');
    let ultimaPosicionImg = imagen[imagen.length - 1];

    let movimientos = createReferenceSolution(anchura, altura, num_piezas);
    shuffle(movimientos);
    createPuzzleLayout(num_piezas, anchura, altura, ultimaPosicionImg);
    drawContentPuzzle(movimientos);

    let columnas = document.getElementsByTagName('td');

    arraySolucion = [];
    for (let i = 0; i < columnas.length; i++) {
        arraySolucion.push(createReferenceSolution(anchura, altura, num_piezas)[i]);

    }


    let arrayClick = [];
    let arrayPosicionActualizada = [];

    for (let i = 0; i < columnas.length; i++) {
        columnas[i].addEventListener('click', function testear() {
            if (arrayClick.length == 1) {
                arrayClick.push(columnas[i]);
                let posicion1 = arrayClick[0].style.backgroundPosition;
                arrayClick[0].style.backgroundPosition = arrayClick[1].style.backgroundPosition;
                arrayClick[1].style.backgroundPosition = posicion1;
                arrayClick[0].style.borderColor = 'black';
                arrayClick[1].style.borderColor = 'black';

                updateScore(getScore() - 1);
                arrayClick = [];

                let actualizado = document.getElementsByTagName('td');
                for (let x = 0; x < actualizado.length; x++) {
                    arrayPosicionActualizada.push(actualizado[x].style.backgroundPosition);

                }

                if (checkIfSolution(arraySolucion, arrayPosicionActualizada) == true) {
                    arrayPosicionActualizada = [];
                } else {
                    console.log(arrayPosicionActualizada);
                    console.log(arraySolucion);
                    arrayPosicionActualizada = [];
                }




            } else if (columnas[i].style.borderColor == 'red') {
                columnas[i].style.borderColor = 'black';
            } else {
                columnas[i].style.borderColor = 'red';
                arrayClick.push(columnas[i]);
                console.log(arrayClick);
            }
        })

    }

}

initGame('cat.jpg', getNumberPiecesFromUser());

getNumberPiecesFromUser();
console.log(getScore());
/*console.log(decreaseScore(1));*/
console.log(shuffle(array));
createPuzzleLayout(9, 958, 1277, 'cat.jpg');