/* 8. Mostrar en pantalla un documento que nos muestre:
- La URL del documento actual.
- El pathname de la página (corresponde a la cadena que sigue al nombre del
servidor).
- El protocolo utilizado por la página web.
Debéis insertar también un botón para que al pinchar sobre él se cargue la página de
Google.
*/
function irAPagina(){
    location.href = 'https://www.google.com/';
}

document.write(`La URL es: ${location.href}<br>
    El pathname de la página es: ${location.pathname}<br>
    El protocolo utilizado por la página es: ${location.protocol}<br>`);