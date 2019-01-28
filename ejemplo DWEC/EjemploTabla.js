let table = document.body.firstElementChild;

let tableBody = table.tBodies[0];

let rows = tableBody.rows; // numero de filas de la tabla

for(let row of rows) { // En cada iteración recorro una fila de la tabla
    let cells = row.cells; // celdas de la fila en la que estoy situado 
    let salary = cells[2].textContent; // selecciono la 3ra celda de la fila, las celdas son un array
    if (parseFloat(salary)<0) {
        cells[2].style = 'background-color: red;';
    }
}

