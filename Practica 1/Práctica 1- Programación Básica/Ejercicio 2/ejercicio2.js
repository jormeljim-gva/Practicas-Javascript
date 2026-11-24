//2. Almacena en un array los números 7,8,2,9,10. Calcular la suma de los números mayores de 8.

let numeros = [7,8,2,9,10];
let suma = 0;

for (let elemento of numeros){
    if (elemento > 8)
        suma+=elemento;
}

alert('Los números mayores de 8 suman ' + suma);
