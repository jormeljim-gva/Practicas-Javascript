//5. Introducir el precio de un artículo. Calcular el iva y el precio total (con el iva incluido) que debe salir redondeado a 2 decimales.

let precio = parseFloat(prompt('Escribe el precio de un articulo: '));
let iva = precio * 0.21;
let precioTotal = precio + iva;

if (isNaN(precio)){
    alert('El valor añadido no es válido.');
}else{
    alert('El iva es: ' + iva.toFixed(2) + ' y el precio total es ' + precioTotal.toFixed(2));
}
