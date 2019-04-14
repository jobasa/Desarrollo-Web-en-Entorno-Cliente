/*Completar el código JavaScript proporcionado para que se añadan nuevos elementos a la lista cada vez que se pulsa sobre el botón.
  Utilizar las funciones DOM para crear nuevos nodos y añadirlos a la lista existente. Al igual que sucede en el ejercicio anterior,
  la acción de pinchar sobre un botón forma parte de los "Eventos" de JavaScript que se ven en el siguiente capítulo. En este ejercicio,
  sólo se debe saber que al pinchar sobre el botón, se ejecuta la función llamada anade(). */

    // var elemento = document.createElement("li");
    // var texto = document.createTextNode("Elemento de prueba");
    // elemento.appendChild(texto);
   
    // var lista = document.getElementById("lista");
    // lista.appendChild(elemento);
   
    // var nuevoElemento = "<li>Texto de prueba</li>";
    // lista.innerHTML = lista.innerHTML + nuevoElemento;


  function anade() {
      var linea = document.createElement("li");
      var contenido = document.createTextNode("Lo logre!");
      linea.appendChild(contenido);

      var lineaTabla = document.getElementsById("lista");
      document.body.insertBefore(linea, lineaTabla);

  }
