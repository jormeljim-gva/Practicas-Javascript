function numerico(evento) {
    let codigoCaracter = evento.keyCode;
    if (codigoCaracter < 48 || codigoCaracter > 57) {
        evento.preventDefault();
    }
}

window.onload = function () {
    let numeros = document.getElementById("numeros");
    numeros.onkeypress = numerico;
}