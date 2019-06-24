/* PON EL CODIGO DE LA CLASE A PARTIR DE AQUÍ */
class ReservationSlot {
    constructor(autor, clase_reserva, fecha_reserva, hora_inicio, duracion, descripcion) {
        this.autor = autor;
        this.clase_reserva = clase_reserva;
        this.fecha_reserva = fecha_reserva;
        this.hora_inicio = hora_inicio;
        this.duracion = duracion;
        this.descripcion = descripcion;

        if (this.hora_inicio < '08' || this.hora_inicio > '21') {
            throw Error('Horario incorrecto, vuelva a introducir otro.');
        } else {
            console.log('Aula reservada!');

        }

        if (this.duracion > 180 || this.duracion < 0) {
            throw Error('Te has pasado con la duración. Elije otra.');

        } else {
            console.log('Aula reservada!');

        }


    }

    getEndTime() {
        let horas = parseInt(this.hora_inicio) + parseInt(this.duracion / 60);
        let minutos = this.duracion % 60;
        let hora = (horas + ":" + minutos);
        return hora;
    }

    static overlaps(ReservationSlot1, ReservationSlot2) {


        if (ReservationSlot1.clase_reserva != ReservationSlot2.clase_reserva || ReservationSlot1.fecha_reserva != ReservationSlot2.fecha_reserva) {
            //Distinta aula
            console.log("No solapan!");

            return false;
        } else {
            //Cuando es el mismo aula
            if (ReservationSlot1.getEndTime() < ReservationSlot2.hora_inicio) { //No solapa
                console.log("No solapan!");

                return false;
            }

            if (ReservationSlot2.getEndTime() < ReservationSlot1.hora_inicio) { //No solapa
                console.log("No solapan!");
                return false;
            }
            // Si solapan
            console.log("Si que solapan!");

            return true;
        }


    }
}

//let reserva = new ReservationSlot('Joan', 'Informatica', '18/06/2019', '09', '90','tutoria');
//let reserva2 = new ReservationSlot('Joan', 'Informatica', '19/06/2019', '10', '90','tutoria');
//console.log(ReservationSlot.overlaps(reserva,reserva2));



/* FIN DEL CÓDIGO DE LA CLASE */

/* PON EL CÓDIGO DEL EJERCICIO 3 A PARTIR DE AQUÍ */

function getMostPopularUser(ReservationSlotA) {
    let popular = 0;
    for (let i = 0; i < ReservationSlotA.length; i++) {
        for (let x = i + 1; x < ReservationSlotA.length; x++) {
            if (ReservationSlotA[i].autor == ReservationSlotA[x].autor) {
                //   let author= parseInt(ReservationSlotA[i].autor)
                //  popular = popular + (author + 1);

                //return popular;
                // if (ReservationSlotA[i].autor>0) {
                //  return ReservationSlotA[i].autor;
                //}


            }

        }


    }
}

let array = ["pepe", "rosa", "rosa", "diego", "roberto", "rosa"];
console.log(getMostPopularUser(array));


/* FIN DEL EJERCICIO 3 */

/* PON EL CÓDIGO DEL EJERCICIO 4 A PARTIR DE AQUÍ */
function delayReservation(minutos, ReservationSlotA) {

    if (minutos < 0) {
        throw Error('Cantidad de minutos equivocada, introduzca otra');
    }
    //Funcion que recibe un objeto de tipo ReservationSlot(que es la classe) 
    function retrasar(ReservationSlot) {

        ReservationSlot.hora_inicio = parseInt(ReservationSlot.hora_inicio) + parseInt(minutos / 60);
        return ReservationSlot;

    }
    //Recorre una array atraves de la funcion de orden superior MAP
    //Syntaxis=> let newArray=array.map(nombre_funcion);
    let newArray = ReservationSlotA.map(retrasar);
    return newArray;
}

//let reserva = new ReservationSlot('Joan', 'Informatica', '18/06/2019', '08', '90', 'tutoria');
//let reserva2 = new ReservationSlot('Joan', 'Informatica', '19/06/2019', '16', '90', 'tutoria');
//let reserva3 = new ReservationSlot('Joan', 'Informatica', '20/06/2019', '18', '90', 'tutoria');
//console.log(delayReservation(180, [reserva, reserva2, reserva3]));


function getReservationsFromUser(nombre_usuario, ReservationSlotA) {
    function filtrar(ReservationSlot) {
        return nombre_usuario==ReservationSlot.autor;
    }
    let newArray = ReservationSlotA.filter(filtrar);
    return newArray;
}
//let reserva = new ReservationSlot('Joan', 'Informatica', '18/06/2019', '08', '90', 'tutoria');
//let reserva2 = new ReservationSlot('Raquel', 'Informatica', '19/06/2019', '16', '90', 'tutoria');
//let reserva3 = new ReservationSlot('Joan', 'Informatica', '20/06/2019', '18', '90', 'tutoria');
//console.log(getReservationsFromUser('Raquel', [reserva, reserva2, reserva3]));



/* FIN DEL EJERCICIO 4 */

if (typeof (module) !== 'undefined' && module.exports) {
    exports.ReservationSlot = ReservationSlot;
    exports.getMostPopularUser = getMostPopularUser;
    exports.delayReservations = delayReservations;
    exports.getReservationsFromUser = getReservationsFromUser;
}

if (document.body.hasChildNodes()) {
    /* PON AQUÍ EL CÓDIGO DEL EJERCICIO 5 */
    // Pon aquí el código para cambiar la tabla
    let table = document.getElementsByTagName("table");
    let casillas = document.getElementsByTagName("tr");
    console.log(casillas);
    for (let i = 0; i < casillas.length; i++) {
        for (let x = i+1; x < casillas.length; x++) {
            if (casillas[i]==casillas[i]) {
                casillas.style.background="red";
            }
            
        }

        
    }
    
    //Pon aquí tu código para cambiar el código del párrafo, de forma que muestre el usuario que más reservas ha realizado

    /* FIN DEL EJERCICIO 5 */
}