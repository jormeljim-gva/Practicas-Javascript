function detenerEvento(evento) {
    evento.stopPropagation();
    alert("Se ha detenido la propagación del evento");
}

function mostrarMensajeCaja() {
    alert("Se ha hecho clic en la caja");
}

window.onload = function () {
    let caja = document.getElementById("caja");
    let boton = document.getElementById("boton");

    caja.addEventListener("click", mostrarMensajeCaja);
    boton.addEventListener("click", detenerEvento);
}