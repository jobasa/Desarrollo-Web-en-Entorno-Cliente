let pregunta = window.prompt("Elige el numero de piezas del puzzle:")
console.log(pregunta);

let raiz_cuadrada= Math.sqrt(pregunta);
let comprobar = Number.isInteger(raiz_cuadrada);
console.log(comprobar);

if (pregunta % 1 == 0) {
    return true;
}else{
    return false;
}

function getNumberPiecesFromUser() {
    //while () {
        
    //}
    
}
