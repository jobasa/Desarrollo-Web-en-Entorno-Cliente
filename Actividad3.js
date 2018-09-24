let frase1 = 'Joan sin Joan no es Joan';
let frase2 = 'Gaspar sin Gaspar no es Gaspar';

wordsIn1 = new Set();
for(let word of frase1.split(' ') ) {
    wordsIn1.add(word);
	
}
let wordsIn2 = new Set();
for(let word of frase2.split(' ') ) {
    wordsIn2.add(word);
	
}
let setToIterate = null;
let setToCheck = null;

if( wordsIn1.size < wordsIn2){
    setToIterate = wordsIn1;
    setToCheck = wordsIn2;
}else{
    setToIterate = wordsIn2;
    setToCheck =  wordsIn1;
}

let counter = 0;
for(let word of setToIterate){
    if(setToCheck.has(word)){
        
    }
}
console.log(wordsIn1);
console.log(wordsIn2);