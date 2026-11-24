/* 3.- Crear un caja de texto con un valor inicial de 0, y dos botones : Sumar e Inicializar. Cada
vez que pinchemos sobre el botón Sumar se irá incrementando el valor del campo de 10 en 10,
si pinchamos sobre el botón Inicializar el valor del campo pasará a ser 0.
*/

function sumar() {
    let valor = document.getElementById('contador');

    let valorEntero = parseInt(valor.value, 10);
    valor.value = valorEntero + 10;
}

function inicializar() {
    document.getElementById("contador").value = 0;

}