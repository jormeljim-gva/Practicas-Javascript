function cancelarEnlace(evento) {
    evento.preventDefault();
    alert("Se ha cancelado la navegación del enlace");
}

window.onload = function () {
    let enlace = document.getElementById("enlace");
    enlace.onclick = cancelarEnlace;
}