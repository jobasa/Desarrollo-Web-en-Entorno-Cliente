class PedidoPizza {
    constructor(id, nombre_cliente, direccion, tipo_masa, tipo_salsa, toppings) {
        this.id = id;
        this.nombre_cliente = nombre_cliente;
        this.direccion = direccion;
        this.tipo_masa = tipo_masa;
        this.tipo_salsa = tipo_salsa;
        this.toppings = toppings;

        let toppingsArray = ["ham", "four cheese", "pineapple", "basil", "pork", "salami", "pepper", "mushrooms", "chicken"];


        if (tipo_masa !== "thin" && tipo_masa !== "thick" && tipo_masa !== "thick with cheese") {
            console.log("Tipo de masa incorrecto, vuelve a introducir otro");
        }

        if (tipo_salsa !== "tomato" && tipo_salsa !== "cheese") {
            console.log("Tipo de salsa incorrecta, vuelve a introducir otra");
        }

        /*Recorro el array para buscar el ingediente pasado como parametro */
        let encontrado = false;
        for (let celda of toppingsArray) {
            if (celda == this.toppings) {
                encontrado = true;
                break;
            } else {
                encontrado = false;
            }
        }

        if (!encontrado) {
            console.log("Ingrediente incorrecto, vuelve a introducir otro");
        }

    }



    getPrice() {
        let precio = 0;
        /*Masa*/
        if (this.tipo_masa === "thin") {
            precio = precio + 3;
        } else if (this.tipo_masa === "thick") {
            precio = precio + 4;
        } else if (this.tipo_masa === "thick with cheese") {
            precio = precio + 5;
        }
        /*Salsa*/
        if (this.tipo_salsa === "tomato") {
            precio = precio + 1;
        } else if (this.tipo_salsa === "cheese") {
            precio = precio + 1.5;
        }
        /*Toppings*/
        if (this.toppings === "ham") {
            precio = precio + 1;
        } else if (this.toppings === "four cheese") {
            precio = precio + 2;
        } else if (this.toppings === "pineapple") {
            precio = precio + 0.5;
        } else if (this.toppings === "basil") {
            precio = precio + 0.25;
        } else if (this.toppings === "pork") {
            precio = precio + 1.5;
        } else if (this.toppings === "salami") {
            precio = precio + 1.25;
        } else if (this.toppings === "pepper") {
            precio = precio + 0.75;
        } else if (this.toppings === "mushrooms") {
            precio = precio + 1;
        } else if (this.toppings === "chicken") {
            precio = precio + 1.3;
        }
        return precio;
    }

    isToppingMeat(toppings) {
        if (toppings === "pork") {
            return true;
        } else if (toppings === "salami") {
            return true;
        } else if (toppings === "chicken") {
            return true;
        } else {
            return false;
        }
    }

}

let pedido = new PedidoPizza(1, "Joan", "Sandoval", "fina", "cheese", "jam");
let resultado = pedido.getPrice();
console.log(resultado);

function isVegetarian(x){
    if (x === "pork") {
        return false;
    } else if (x === "salami") {
        return false;
    } else if (x === "chicken") {
        return false;
    } else {
        return true;
    }
}

let ingredientes = ["mushrooms", "pineapple"];
console.log(ingredientes.every(isVegetarian));



