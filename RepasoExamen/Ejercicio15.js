/*Crea una clase para representar corredores de maratón dentro de un programa. 
Los corredores tienen un nombre, un apellido, una edad, un club, y una categoría (primera, segunda, o tercera). 
En el momento de creación del corredor, puede que tan solo conozcamos el nombre y el apellido. 
El corredor también tiene marcas realizadas durante la temporada. 
Crea la estructura de clase adecuadas, y además implementa los siguientes métodos:
•	Añadir marca, que permita añadir una marca al corredor
•	Obtener la marca mas baja, que permita obtener la marca más baja del corredor en la temporada
•	Obtener la marca más alta, que permita obtener la marca más alta del corredor en la temporada
•	Un método que nos diga si el corredor es menor de edad*/ 

class corredor {
    constructor(nombre, apellido) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.categoria = undefined;
      this.edad = undefined;
      this.club = undefined;
      this.marcas = [ ]; // new Array();
    }

    anyadirMarca(marca){
        this.marcas.push(marca);
    }

    esMenorEdad(){
        return this.edad < 18;
    }

    menorMarca(){
        let minimo = Infinity;
        for(let marca of this.marcas){
            if (marca<minimo) {
                minimo = marca;
                
            }
        }
        return minimo;
    }

    mayorMarca(){
        //let maximo = ;
        for(let marca of this.marcas){
            if (marca>maximo) {
                maximo = marca;
                
            }
        }
        return minimo;
    }
  }
