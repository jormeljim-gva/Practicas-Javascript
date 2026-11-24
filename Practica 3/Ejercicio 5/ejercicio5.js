function nuevoElemento() {
    let inputTexto = document.createElement("input");

    inputTexto.setAttribute("type", "text");
    inputTexto.setAttribute("placeholder", "Escribe algo aquí...");
    inputTexto.setAttribute("id", "miCajaTexto");

    document.getElementById("elementos").appendChild(inputTexto);
}

document.addEventListener("DOMContentLoaded", nuevoElemento);