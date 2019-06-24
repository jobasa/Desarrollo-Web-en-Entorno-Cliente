function average(dataArray) {
    if (dataArray == 0) {
        return undefined;
    } else {

        suma = 0;
        for (let i = 0; i < dataArray.length; i++) {
            suma = suma + dataArray[i];

        }
    }

    return suma / dataArray.length;
}

console.log(average([5, 7, 8, 9]));