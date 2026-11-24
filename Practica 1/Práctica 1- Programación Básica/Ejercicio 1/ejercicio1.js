//1. Introduir 5 numeros. Calcular la suma de todos ellos. Decir cuantos de ellos son mayores de 100.

let suma = 0; 
let mayorCien = 0;

for (let i = 1; i<=5; i++){ 
    const numero = parseInt(prompt('Introduce un número: '));
    suma+=numero;

    if (numero > 100) mayorCien++; 
}

alert(`Suma: ${suma} \n ${mayorCien} son mayores de 100`);
console.log('Suma :' + suma + ' y ' + mayorCien + ' mayores de 100');