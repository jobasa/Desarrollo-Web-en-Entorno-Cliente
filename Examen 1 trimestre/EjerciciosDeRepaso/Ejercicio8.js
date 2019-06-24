function linearSearch(x, dataArray) {
    for (let i = 0; i < dataArray.length; i++) {
        if (x == dataArray[i]) {
            return true;
        }

    }
    return false;
}

console.log(linearSearch(3,[1,2,3,4,5]));
