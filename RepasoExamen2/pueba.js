class PedidoPizza {
    constructor(idPedido, nombreCliente, direccionPedido, tipoMasa, tipoSalsa, toppings){
        this.idPedido = idPedido;
        this.nombreCliente = nombreCliente;
        this.direccionPedido = direccionPedido;
        this.tipoMasa = tipoMasa;
        this.tipoSalsa = tipoSalsa;
        this.toppings = toppings;

        this.validToppings = [ 'ham', 'cheese', 'pineapple', 'chicken', 'salami', 'pepper', 'basil', 'four cheese', 'pork' ];

        if(tipoMasa!== "thin" && tipoMasa!== "thick" && tipoMasa!=="thick with cheese"){
            throw Error('Tipo de masa incorrecta');
        }
        if(tipoSalsa!== "tomato" && tipoSalsa!=="cheese"){
            throw Error('Tipo de salsa incorrecta');
        }
        for(let topping of toppings){
            /*if(topping!=="ham" && topping!=="chicken" && topping!=="pineapple" && topping!=="salami"){
                throw Error('Tipo de topping incorrecto ' + topping);
            }*/
            if(!this.validToppings.includes(topping)){
                throw Error('Tipo de topping incorrect ' + topping);
            }
        }
    }

    getPrice(){
        let precioFinal = 0;
        //Contabilizar masas
        let precioMasa = 0;
        switch(this.tipoMasa){
            case 'thin':
                precioMasa = 3;
                break;
            case 'thick':
                precioMasa = 4;
                break;
            case 'thick with cheese':
                precioMasa = 5;
                break;
            default:
                precioMasa=0;
                break;
        }
        precioFinal =precioFinal + precioMasa;
        //Contabilizar precio salsa
        let precioSalsa = 0;
        if(this.tipoSalsa==="tomato"){
            precioSalsa = 1;
        } else {
            precioSalsa = 1.5;
        }
        precioFinal = precioFinal + precioSalsa;
        
        for(let topping of this.toppings){
            let precioTopping = 0;
            switch(topping){
                case 'ham':
                    precioTopping=1;
                    break;
                case 'chicken':
                    precioTopping=1.3;
                    break;
                case 'four cheese':
                    precioTopping=2;
                    break;
                case 'basil':
                    precioTopping=0.25;
                    break;
                case 'pineapple':
                    precioTopping=0.5;
                    break;
                case 'pork':
                    precioTopping=1.5;
                    break;
                case 'pepper':
                    precioTopping=0.75;
                    break;
                case 'mushrooms':
                    precioTopping=1;
                    break;
                case 'salami':
                    precioTopping=1.25;
                    break;
            }
            precioFinal=precioFinal+precioTopping;
        }
        //Hemos contabilizado todo
        return precioFinal*1.2;
    }

    static isToppingMeat(topping){
        if(topping==="chicken" || topping==='ham' || topping ==="pork" || topping ==='salami'){
            return true;
        }
        return false;
    }
}

let pedido1 = new PedidoPizza(1,'Victor', 'Calle la que sea', 'thin', 'tomato', ['four cheese', 'ham', 'pineapple'] );
let pedido2 = new PedidoPizza(2, 'Paco', 'asdas', 'thick', 'tomato', ['ham', 'four cheese', 'salami'])
let pedido3 = new PedidoPizza(3, 'sfskf', 'sdfksdfks', 'thick', 'cheese', ['basil', 'pineapple', 'chicken', 'pork', 'four cheese']);

console.log(pedido1.getPrice());

/*Dentro del archivo pizza.js, 
fuera de la clase, crea una función que tome un array 
de objetos de tipo pizza y calcule el topping más comúnmente 
empleado en las pizzas. Emplea un map como estructura de datos.*/

function mostFrequentTopping(listOfPizzas){
    //ham -> 2, cheese-> 1, basil->7 
    let mapToppings = new Map();
    for(let pizza of listOfPizzas){
        //console.log(pizza);
        for(let topping of pizza.toppings){
            //Contear los ingredientes
            if(mapToppings.has(topping)){
                let contador = mapToppings.get(topping);
                mapToppings.set(topping, contador+1);
            } else {
                //Es la primera vez que vemos el topping
                mapToppings.set(topping, 1);
            }
        }
    }
    //Habremos contado cuantas veces aparece cada ingrediente
    //ham->3, cheese->1, basil->7
    let mostFrequent = '';
    let maxCounter = 0;
    for(let topping of mapToppings.keys()){
        let contador = mapToppings.get(topping);
        if(contador>maxCounter){
            maxCounter = contador;
            mostFrequent = topping;
        }
    }
    return mostFrequent;

}

console.log( mostFrequentTopping( [pedido1, pedido2, pedido3] ) ); 

//['cheese', 'ham', 'pork', 'pineapple', 'salami']
function isVegetarian(arrayOfTopping){
    return arrayOfTopping.every( ing => !PedidoPizza.isToppingMeat(ing) );
}

function getIdLowerThan(id, arrayOfPizza){
    return arrayOfPizza.filter( pizza => pizza.idPedido < id );
}
console.log(isVegetarian( ['cheese', 'pineapple' ] ));

console.log( getIdLowerThan(3,[pedido1,pedido2,pedido3]) )