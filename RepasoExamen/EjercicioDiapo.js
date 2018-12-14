function maximo(...args){
	let maxValue = undefined;
	for(let value of args){
		if(!maxValue || value > maxValue){
			maxValue = value;
		} 
	}
	return maxValue;
}
console.log(maximo(5,1,89));
console.log(maximo(89,23,-102,0));
