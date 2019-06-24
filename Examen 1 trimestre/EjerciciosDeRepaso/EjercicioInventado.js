function Array(data_Array) {
    suma = 0;
    for (let i = 0; i < data_Array.length; i++) {
        suma = suma + data_Array[i];

    }
    return suma;
}

console.log(Array([0, 1, 3, 4, 5]));