function par(x){
    return x%2 == 0;
}

function suma(a,b){
    return a+b;
}

let array = [1,2,3,4,5,6];
let newArray = array.filter(par);
console.log(newArray);


