window.onload = function () {

    let colores = document.getElementsByName("colores");
    let parrafo = document.getElementById("parrafo");
    
    for (let i = 0; i < colores.length; i++) {
        colores[i].addEventListener("change", function() {
            parrafo.style.color = colores[i].value;
        });
    }

}