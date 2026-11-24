function cambiarNegrita() {
    let negrita = document.getElementById("negrita");
    let parrafo = document.getElementById("parrafo");

    if (negrita.checked) {
        parrafo.style.fontWeight = "bold";
    } else {
        parrafo.style.fontWeight = "normal";
    }
}

function cambiarCursiva() {
    let cursiva = document.getElementById("cursiva");
    let parrafo = document.getElementById("parrafo");

    if (cursiva.checked) {
        parrafo.style.fontStyle = "italic";
    } else {
        parrafo.style.fontStyle = "normal";
    }
}

window.onload = function () {
    let negrita = document.getElementById("negrita");
    let cursiva = document.getElementById("cursiva");

    negrita.addEventListener("change", cambiarNegrita);
    cursiva.addEventListener("change", cambiarCursiva);
}