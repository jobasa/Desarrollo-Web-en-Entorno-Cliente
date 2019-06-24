// Genera aleatoriamente la celda donde se encuentra el aventurero
function casillaAventureroAleatoria(fila, columna) {
  let max = fila * columna - 1;
  let min = 0;
  return Math.round(Math.random() * (max - min) + min);
}

//Genera aleatoriamente las celdas de los tesoros
function casillasTesorosAleatorias(fila, columna, posicion_aventurero) {

  let tesoroArray = [];

  for (let i = 0; i < fila * columna; i++) { //para cada casilla
    let numero = Math.random();

    if (posicion_aventurero == i) {

    } else if (numero < 0.25) {

      tesoroArray.push(i);
    }
  }
  return tesoroArray;
}

// Crea la tabla del tablero
function crearTablero(fila, columna) {
  let tabla = document.createElement("table");
  let posicion = 0;

  //filas
  for (let i = 0; i < fila; i++) {
    let tr = document.createElement("tr");
    tabla.appendChild(tr);
    let fila = tabla.lastElementChild;

    //columna
    for (let x = 0; x < columna; x++) {
      let td = document.createElement("td");
      td.style = 'border: 3px solid black; width: 80px; height: 80px;'
      td.id = 'celda' + (posicion++);
      fila.appendChild(td);
      let img = document.createElement('img');
      img.id = 'imagen-' + posicion;
      td.appendChild(img);

    }
  }

  document.getElementsByTagName("body")[0].appendChild(tabla);


}

// Dibuja el aventurero en la celda indicada por parámtero

function dibujarAventurero(id_aventurero) {
  let casillaAventurero = document.getElementById('imagen-'+id_aventurero);
   casillaAventurero.src= "adventurer.png";
}

// Dibuja el tesoro en la celda indicada por parámtero

function dibujarTesoro(id_tesoro) {
let casillaTesoro = document.getElementById('imagen-'+id_tesoro);
casillaTesoro.src="gold.png";
}

// Borra la imagen de la celda indicada por parámetro

function limpiarCasilla(id_casilla) {
 let casillaBlanco = document.getElementById('imagen-'+id_casilla);
 casillaBlanco.src = "";
}


// Función principal del programa que llama al resto de funciones
function iniciarJuego() {

 let num_filas= document.getElementById("i_filas");
 let num_columnas= document.getElementById("i_columnas").textContent;


  crearTablero(5, 5);

  //Donde se encuentra el aventurero al empezar el juego
  let pos_inicial_aventurero = casillaAventureroAleatoria(5, 5);
  dibujarAventurero(pos_inicial_aventurero);
  
  

  //Donde se encuentran los tesoros al empezar el juego
  let pos_inicial_tesoros= casillasTesorosAleatorias(5, 5,  pos_inicial_aventurero);
  
  // Recorrer el array "pos_inicial_tesoros" y para cada celda dibujo el tesoro
  for (let i = 0; i < pos_inicial_tesoros.length; i++) {
    dibujarTesoro(pos_inicial_tesoros[i]);
  }


  // console.log(casillaAventureroAleatoria(5, 6));

}