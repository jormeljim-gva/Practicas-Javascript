/* 5.- Crea un documento que al cargarse nos muestre un mensaje de Bienvenida. Pasados 20
segundos nos debe abrir otro nuevo documento.
*/

function iniciarTemporizador() {
    alert("¡Bienvenido al sitio web!");
    setTimeout(abrirDocumento, 2000);
}

function abrirDocumento() {
    window.open("https://www.google.com", "_blank");
}