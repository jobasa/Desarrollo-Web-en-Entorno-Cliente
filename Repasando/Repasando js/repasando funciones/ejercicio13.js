// Crea una función llamada withoutVowels que tome por parámetro una cadena de texto llamada text,
// y retorne una nueva cadena de texto donde todas las vocales han sido eliminadas.

function withoutVowels(text) {
    let remplazar = text.replace(["a","e","i","o","u"], " ");
    return remplazar;
}

// let text=["Hola que tal"];
console.log(withoutVowels("Hola que tal"));

