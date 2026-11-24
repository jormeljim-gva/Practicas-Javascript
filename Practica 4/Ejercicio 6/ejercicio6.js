function mostrarMensaje(evento) {
    if (evento.target.tagName == "BUTTON") {
        alert("Has pulsado sobre un botón");
    }
}

window.onload = function () {
    document.addEventListener("click", mostrarMensaje);
};