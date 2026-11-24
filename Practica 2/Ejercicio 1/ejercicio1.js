// Introducir el precio de un artículo. Calcular el iva y el precio total(con el iva incluido) que 
// debe salir redondeado a dos decimales. Debéis utilizar una función.

let precio = parseFloat(prompt('Escribe el precio de un articulo: '));

function calculos(){
    resultadoIva = precio * 0.21;
    total = precio + resultadoIva;
    alert(`El iva es: ${resultadoIva}€
El precio total es: ${total}€`);
} 

if (isNaN(precio)){
    alert('El valor añadido no es válido.');
}else{
    calculos();
}