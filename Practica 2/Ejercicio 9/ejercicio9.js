/* 9. Crear una página que contendrá el botón Abrir. Al pinchar sobre el botón debe aparecer
otra ventana que contendrá, a su vez, el botón Cerrar. Al pinchar sobre él debemos
volver a la página inicial.
*/

let nuevaVentana;

function crearVentana() {
    nuevaVentana = window.open("", "pagina2", "toolbar=yes, location=no,menubar=yes" + "width=300,height=700");
    nuevaVentana.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <script src="ejercicio9.js"></script>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ventana 2</title>
        </head>
        <body>
            <button type="button" onclick="window.close()">Cerrar</button>
            
            <noscript>
                <p>JavaScript está desactivado. Actívalo para utilizar esta página.</p>
            </noscript>
            
        </body>
        </html>
    `);
}