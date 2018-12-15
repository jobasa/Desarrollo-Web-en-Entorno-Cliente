toppings =

class PedidoPizza {
    constructor(id, nombre_cliente, direccion, tipo_masa, tipo_salsa, toppings) {
        this.id = id;
        this.nombre_cliente = nombre_cliente;
        this.direccion = direccion;
        this.tipo_masa = tipo_masa;
        this.tipo_salsa = tipo_salsa;
        this.toppings = toppings;
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
}

let pedido = new PedidoPizza(1, "Joan", "Sandoval", "thick", "cheese", "four cheese");
let resultado = pedido.getPrice();
console.log(resultado);