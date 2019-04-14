//Array o coleccion de tablas
let celdas = document.getElementsByTagName('table');

//Solo trabajamos con celdas[0] porque solo hay una tabla en el array celdas


//Recorremos las filas de la tabla
for (let i = 1; i < celdas[0].rows.length; i++) {
    //rows[i]=filas cells[2]= celda
    if (celdas[0].rows[i].cells[2].textContent < 0) {

        celdas[0].rows[i].cells[2].style.background = 'red';

    }


    
    // const element = array[i];

}

/**
 * 
 */
//Crear un texto
let texto = document.createElement('p').appendChild(document.createTextNode('Un nuevo texto'));
let tabla = document.getElementsByTagName('table');
document.body.insertBefore(texto, tabla[0]);

//Remplazar un contenido
let numero = document.createElement('td').appendChild(document.createTextNode('19'));
let div = celdas[0].rows[1].cells[2];
celdas[0].rows[1].replaceChild(numero, div);

//Agregar una nueva fila
let fila = document.createElement('tr');
fila.appendChild(document.createElement('td')).appendChild(document.createTextNode('a'));
fila.appendChild(document.createElement('td')).appendChild(document.createTextNode('b'));
fila.appendChild(document.createElement('td')).appendChild(document.createTextNode('c'));

celdas[0].appendChild(fila);

//Insertar codigo HTML adyacente a un nodo de una tabla
celdas[0].insertAdjacentHTML("afterend", "<p>Hola Mundo</p>");
let texto1 = document.createElement('p');
texto1.appendChild(document.createTextNode('Un nuevo texto'));
celdas[0].insertAdjacentElement("afterend",texto1);




