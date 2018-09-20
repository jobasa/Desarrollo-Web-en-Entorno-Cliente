"use strict";
var frase = 'Joan sin Joan no es Joan';
//frase.split hace que lo que hay en frase se haga un array
var array = frase.split(' ');
var wordMap = new Map();
for(let i=0;i<array.length;i++){
    let word = array[i];
    if(wordMap.has(word)){
        let count = wordMap.get(word);
        wordMap.set(word,count+1);
        count++;
    }else{
        wordMap.set(word,1);
    }
}
console.log(wordMap);