
function closestEnemy(charPosition,... enemiesPos){
    //closest --> enemigo mas cercano hasta el momento
    let closest = undefined;
    //la distancia minima observada hasta es momento
    let minDistance = Number.POSITIVE_INFINITY;
	for(let enemy of enemiesPos){
        let distance = Math.abs( enemy[0] - charPosition[0] ) + Math.abs( enemy[1] - charPosition[1]);
        if(distance < minDistance){
            closest = enemy;
            minDistance = distance;
        }
        console.log(enemy);
    }
    return closet;
}

console.log( closestEnemy( [0,0], [5,6], [4,8], [-1,4] ) );
console.log( closestEnemy( [0,0], ))

