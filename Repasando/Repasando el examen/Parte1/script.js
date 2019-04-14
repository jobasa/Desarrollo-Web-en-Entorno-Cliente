function casillaAventureroAleatoria() {

}

function casillasTesorosAleatorias() {

}


function crearTablero(fila, columna) {
  let body = document.getElementsByTagName("body")[0];
  let tabla = document.createElement("table");
  let tbBody = document.createElement("tbody");

  //filas
  for (let i = 0; i < fila; i++) {
    let fila = document.createElement("tr");

    
    //columnas
    for (let x = 0; x < columna; x++) {
      let columna = document.createElement("td");


    }
  fila.appendChild(columna);
  }

  tbBody.appendChild(fila);
  tabla.appendChild(tbBody);
  body.appendChild(tabla);
  return body;
}

// function iniciarJuego () {
//   crearTablero(5,6);
// }