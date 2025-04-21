
const args = process.argv.slice(2);
console.log(args)

let min = 1;
let max = 100;
let resultado;

// Funcion que obtiene nro random

function obtenerRandom(nroMin, nroMax) {

    const minCeiled = Math.ceil(nroMin);
    const maxFloored = Math.floor(nroMax);
    let randomNro = Math.floor(Math.random()*(maxFloored - minCeiled +1) + minCeiled);

    return randomNro;    
}

// Verificar el paso de argumentos 
//console.log(args.length)

if(args.length >= 2){
    // Convertimos el mínimo y máximo a INTEGER
    console.log(typeof(args[0]))
    const parsedMin = parseInt(args[0]);
    console.log(typeof(parsedMin))
        
    const parsedMax = parseInt(args[1]);

    // Evaluar si lo ingresado por el usuario es un NUMERO

    if(Number.isInteger(parsedMin) && Number.isInteger(parsedMax) ){
        if (parsedMin<parsedMax) {
            // asignamos valores a las variables globales
            min = parsedMin
            max = parsedMax
            resultado =obtenerRandom(min,max)
        } else{
            console.log("ERROR: El usuario ingresó en primer lugar un número mayor.")
            console.log("Se usará rango por defecto 1-100.")
            resultado =obtenerRandom(min,max)
        }
    } else{
        console.log("ERROR: El usuario ha ingresado texto.")
        console.log("Se usará rango por defecto 1-100.")
        resultado =obtenerRandom(min,max)
    }
} else{
    console.log("El usuario no ha ingresado un mínimo de 2 parámetros")
    console.log("Se usará rango por defecto 1-100.")
    resultado =obtenerRandom(min,max)
}

console.log(`Nro Random generado entre ${min} y ${max}: ${resultado}`)