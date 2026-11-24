// 4. Escribe un programa que pida al usuario un número y determine si es par o impar.
let numero = prompt('Escribe un numero: ');

if (numero % 2 == 0){
    alert('El numero es par.');
}else if (numero % 2 == 1){
    alert('El numero es impar.');
}else{
    alert('El valor ingresado no es un numero.');
}