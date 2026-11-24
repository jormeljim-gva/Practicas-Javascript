function tamanyo(evento) {
    switch (evento.type) {
        case "mouseover":
            //document.getElementById("parrafo").style.fontSize = "16px";
            this.style.fontSize = "16px";
            break;
        case "mouseout":
            //document.getElementById("parrafo").style.fontSize = "12px";
            this.style.fontSize = "12px";
            break;
    }
}

window.onload = function () {
    let parrafo = document.getElementById("parrafo");
    parrafo.addEventListener("mouseover", tamanyo);
    parrafo.addEventListener("mouseout", tamanyo);
}