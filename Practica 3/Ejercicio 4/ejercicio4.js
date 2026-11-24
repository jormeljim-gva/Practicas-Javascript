function numeroImagenes() {
    let imagenes = document.getElementsByTagName("img");
    let cantidad = imagenes.length;
    alert("La cantidad de imágenes en la página es: " + cantidad);
}

function numeroEnlaces() {
    let enlaces = document.getElementsByTagName("a");
    let cantidad = enlaces.length;
    alert("La cantidad de enlaces en la página es: " + cantidad);
}