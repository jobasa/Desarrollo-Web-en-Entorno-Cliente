class PedidoPizza {
    constructor(id_pedido, nombre_cliente, direccion_pedido, tipo_massa, tipo_salsa, toppings) {
        this.id_pedido = id_pedido;
        this.nombre_cliente = nombre_cliente;
        this.direccion_pedido = direccion_pedido;
        this.tipo_massa = tipo_massa;
        this.tipo_salsa = tipo_salsa;
        this.toppings = toppings;

        /*let toppingsA = ["ham", "four cheese", "pineapple", "basil", "pork", "salami", "pepper", "mushrooms", "chicken"];*/


        if (this.tipo_massa != "thin" && this.tipo_massa != "thick" && this.tipo_massa != "thick filled with cheese") {
            throw Error('Tipo de masa incorrecto, porfavor introduzca otro');

        }

        if (this.tipo_salsa != "tomato" && this.tipo_salsa != "cheese") {
            throw Error('Tipo de salsa incorrecto, porfavor introduzca otro');
        }

        //Recorrer el array para ver si el ingrediente esta
       /* for (let i = 0; i < toppingsA.length; i++) {

            if (toppingsA[i] == this.toppings) {
                return true;
            }

        }
        throw Error('Ingrediente erroneo, vuelve a introducir otro');*/
        /* Correccion */
        for(let topping of toppings){
            if (topping!=="ham" && topping!=="four cheese" && topping!=="pineapple" && topping!=="basil" && topping!=="pork" && topping!=="salami" && topping!=="pepper" && topping!=="mushrooms" && topping!=="chicken") {
                throw Error('Ingrediente erroneo, vuelve a introducir otro');
            }
        }

    }

    getPrice() {
        let precioFinal = 0;


        //Masa
        let precioMasa =0;
        if (this.tipo_massa == "thin") {
            precioMasa = precioMasa+3;
        }
        if (this.tipo_massa == "thick") {
            precioMasa =precioMasa+ 4;
        }
        if (this.tipo_massa== "thick with cheese") {
            precioMasa=precioMasa+5;
        }
        precioFinal= precioFinal+ precioMasa;
        
        


        //Salsa
        let precioSalsa = 0;
        if (this.tipo_salsa=="tomato") {
            precioSalsa=precioSalsa+1;
        }
        if (this.tipo_salsa=="cheese") {
            precioSalsa=precioSalsa+1.5;
        }
        precioFinal = precioFinal + precioSalsa;
        


        //Toppings
        for(let topping of this.toppings){
            let precioTopping = 0; 
            if (topping=="ham") {
                precioTopping=precioTopping+1;
            }
            if (topping=="four cheese") {
                precioTopping=precioTopping+2;
            }
            if (topping=="pineapple") {
                precioTopping=precioTopping+0.5;
            }
            if (topping=="basil") {
                precioTopping=precioTopping+0.25;
            }
            if (topping=="pork") {
                precioTopping=precioTopping+1.5;
            }
            if (topping=="salami") {
                precioTopping=precioTopping+1.25;
            }
            if (topping=="pepper") {
                precioTopping=precioTopping+0.75;
            }
            if (topping=="mushrooms") {
                precioTopping=precioTopping+1;
            }
            if (topping=="chicken") {
                precioTopping=precioTopping+1.3;
            }
            precioFinal = precioFinal + precioTopping;
            
        }
        
        return precioFinal= precioFinal*1.2;
        
    }

    static isToppingMeat(toppings){
        if (toppings=="ham" || toppings=="pork" || toppings=="salami" || toppings=="chicken") {
            return true;
        }else{
            return false;
        }
    }

}

function toppingMasComun(pizzaA) {
      //ham -> 2, cheese-> 1, basil->7 
      let mapToppings = new Map();
      for(let pizza of pizzaA){
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

function isVegetarian(toppingsA) {
    
    function todos(topping) {
           
    if (topping=="ham") {
        return false;      
    }
    if (topping=="pork") { 
        return false;
    }
    if (topping=="salami") {
        return false;
    }
    if (topping=="chicken") {
        return false;
    }
    return true;
    }

    let array = toppingsA.every(todos);
    return array;

}
//let ingredientes = ["four cheese", "pineapple", "basil"];
//console.log(isVegetarian(ingredientes));



function getIdLowerThan(pizzasA,id) {
    
    //funcion de filtrado que se aplica a un objeto
    function filtrado(pp) {
        if (pp.id_pedido < id) {
            return true;
        }else{
            return false;
        }
    }

let newArray= pizzasA.filter(filtrado);
return newArray;

}


let pizza = new PedidoPizza(1, "Joan", "C/Sandoval", "thin", "tomato",["pork","mushrooms"]);
console.log(pizza.getPrice());

//let pizza2 = new PedidoPizza(2, "Julia", "C/Xabia", "thick", "tomato", "salami");
//let pizza3 = new PedidoPizza(3, "Raquel", "C/Aldaia", "thick filled with cheese", "tomato", "chicken");

//let array= [pizza,pizza2,pizza3];
//console.log(getIdLowerThan(array,2));



//let result = pizza.isToppingMeat("chicken");
//let newArray=["four cheese","pineapple","basil","pepper","mushrooms"];
//console.log(newArray.every(isVegetarian));
//console.log(result);
