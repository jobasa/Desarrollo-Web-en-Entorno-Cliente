let table = document.body.firstElementChild;

let tableBody = table.tBodies[0];

let rows = tableBody.rows;

for(let row of rows) {
    let cells = row.cells;
    let salary = cells[2].textContent;
    if (parseFloat(salary)<0) {
        cells[2].style = 'background-color: red;';
    }
}

