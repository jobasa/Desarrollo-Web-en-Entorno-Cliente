document.addEventListener("DOMContentLoaded", logicaPrograma);



//Funcion que crea un tabla
function crearTabla(fila, columna) {
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
            td.style = 'border: 3px solid black; width: 80px; height: 80px;';
            td.id = 'celda' + (posicion++);
            fila.appendChild(td);


        }
    }

    document.getElementsByTagName("body")[0].appendChild(tabla);

}


//Funcion para pintar una casilla
function colorearCasilla(id_celda) {
    let coloresArray = ["red", "blue", "yellow"];
    let celda = document.getElementById('celda' + id_celda).style.background = coloresArray[Math.floor(Math.random() * coloresArray.length)];

    return celda;
}

//Funcion que colorea las casillas de la tabla con colores aleatorios
function colorearTabla() {
    for (let i = 0; i < 5 * 5; i++) { //para cada celda
        colorearCasilla(i);

    }
}


function manejadorEventos() {
    for (let i = 0; i < 5 * 5; i++) { //para cada celda


    }
}

//Funcion logica del programa
function logicaPrograma() {
    crearTabla(5, 5);
    colorearCasilla(10);
    colorearTabla();
}