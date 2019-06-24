function createRPGCharacter(race) {
    raza = [];
    //STR,SPD,VIT,DEX,MAG
    if (race == 'human') {
        raza.push(8);
        raza.push(4);
        raza.push(0);
        raza.push(0);
        raza.push(1);

    }

    if (race == 'elven') {
        raza.push(6);
        raza.push(0);
        raza.push(1);
        raza.push(3);
        raza.push(0);

    }

    if (race == 'dwarf') {
        raza.push(10);
        raza.push(2);
        raza.push(10);
        raza.push(0);
        raza.push(1);
    }

    if (race == 'mage') {
        raza.push(1);
        raza.push(0);
        raza.push(1);
        raza.push(0);
        raza.push(12);
    }
    return raza;
}

function getHealthPoints(race, razaA) {
    //STR,SPD,VIT,DEX,MAG
    if (race == 'human') {
        let vida = razaA[0] + razaA[2] + 10;
        return vida;
    }

    if (race == 'elven') {
        let vida = razaA[0] + razaA[3] + 5;
        return vida;
    }

    if (race == 'dwarf') {
        let vida = razaA[0] + razaA[2] + 15;
        return vida;
    }

    if (race == 'mage') {
        let vida = razaA[4] + razaA[2] + 3;
        return vida;
    }

    return 0;
}



function getDamage(race, razaA) {
    //STR,SPD,VIT,DEX,MAG
    if (race == 'human') {
        let danyo = Math.round(1.5 * razaA[0] + 0.4 * razaA[3]);
        return danyo;
    }

    if (race == 'elven') {
        let danyo = Math.round(razaA[0] + 1.2 * razaA[3], 0.1 * razaA[4]);
        return danyo;
    }

    if (race == 'dwarf') {
        let danyo = Math.round(2 * razaA[0]);
        return danyo;
    }

    if (race == 'mage') {
        let danyo = Math.round(0.8 * razaA[4] + 0.1 * razaA[3]);
        return danyo;
    }
}


function getDefense(race, razaA) {
    //STR,SPD,VIT,DEX,MAG
    if (race == 'human') {
        let defense = Math.round(razaA[2] + 0.2 * razaA[1]);
        return defense;
    }

    if (race == 'elven') {
        let defense = Math.round(1.3 * razaA[1] + 0.5 * razaA[2]);
        return defense;
    }

    if (race == 'dwarf') {
        let defense = Math.round(1.1 * razaA[2] + 1.1 * razaA[0]);
        return defense;
    }

    if (race == 'mage') {
        let defense = Math.round(0.8 * razaA[4] + 0.3 * razaA[1]);
        return defense;
    }
}



function simulateBattle(firstrace, personajeA, secondrace, personajeB) {

    let puntosAtacante = 0;
    let puntosDefensa=0;
    let atacante = 0;
    let defensa = 0;
    let razaAtacante = 0;
    let razaDefensa = 0;
    let atacanteOLD = 0;
    let razaAtacanteOLD=0;


    puntosA = getHealthPoints(firstrace, personajeA);
    puntosB = getHealthPoints(secondrace, personajeB);

    //Quien es el que ataca y quien es el que defiende en base a la velocidad
    if (personajeA[1] > personajeB[1]) {
        atacante = personajeA;
        defensa = personajeB;
        razaAtacante = firstrace;
        razaDefensa = secondrace;
        puntosAtacante = puntosA;
        puntosDefensa = puntosB;
    } else {
        atacante = personajeB;
        defensa = personajeB;
        razaAtacante = secondrace;
        razaDefensa = firstrace;
        puntosAtacante = puntosB;
        puntosDefensa = puntosA;
    }


    while ((puntosAtacante > 0) || (puntosDefensa > 0)) { //El juego continua mientras tengan puntos de vida el atacante y el defensa

        console.log("ahora defiende: " + razaDefensa);
        //Daño producido
        let danyoProducido = getDamage(razaAtacante, atacante) - getDefense(razaDefensa, defensa);

        //Recalculo la vida del defensa
        let vidaMenos = defensa[2] - danyoProducido;
        defensa[2] = vidaMenos;

        if (getHealthPoints(razaDefensa, defensa) > 0) {
             atacanteOLD = atacante;
             atacante = defensa;
             defensa = atacanteOLD;
             razaAtacanteOLD = razaAtacante;
             razaAtacante = razaDefensa;
             razaDefensa = razaAtacanteOLD;

        }

        puntosAtacante = getHealthPoints(razaAtacante, atacante);
        puntosDefensa = getHealthPoints(razaDefensa, defensa);

    }

    if (puntosAtacante <= 0) {
        console.log("Ha ganado: " + razaDefensa);

    } else {
        console.log("Ha ganado: " + razaAtacante);

    }


}


//let personaje = createRPGCharacter('mage')
//console.log(getHealthPoints('mage',personaje));
//console.log(getDamage('mage',personaje));
//console.log(getDefense('mage', personaje));


let personajeA = createRPGCharacter('human');
let personajeB = createRPGCharacter('human');

simulateBattle('human', personajeA, 'human', personajeB);