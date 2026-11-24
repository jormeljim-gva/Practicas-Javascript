function cambiarColor() {
    let colores = document.getElementById("colores");
    let parrafo = document.getElementById("parrafo");
    parrafo.style.color = colores.value;
}

window.onload = function () {
    colores.addEventListener("change", cambiarColor);
}       