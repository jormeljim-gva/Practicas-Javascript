function tamanyo() {
    //document.getElementById("parrafo").style.fontSize = "16px";
    this.style.fontSize = "16px";
}

function resetTamanyo() {
    //document.getElementById("parrafo").style.fontSize = "12px";
    this.style.fontSize = "12px";
}

window.onload = function () {
    let parrafo = document.getElementById("parrafo");
    parrafo.onmouseover = tamanyo;
    parrafo.onmouseout = resetTamanyo;
}