/*Crea una función llamada circumferenceArea que tome como parámetro 
el radio de la circunferencia radius y devuelva el área de la circunferencia.*/


let radio = 15;
function circumferenceArea(radio) {
    areaCircum = 3.14*radio**2;
    return areaCircum;
    

}
console.log(circumferenceArea(radio));
