/* 3. Crear una página web que nos muestre el mensaje “Bienvenido a mi página” con
formato H1, nos muestre la plataforma del navegador que estamos utilizando, y con la
ventana de Confirm nos pida si queremos continuar. En caso de que así sea saldrá en
pantalla el mensaje “continuamos…”
*/

document.write("<h1>Bienvenido a mi página</h1>");
document.write("<p>Tu Navegador es: " + navigator.platform + "</p>");

var continuar= confirm('¿Quieres continuar?');

if (continuar==true){
    document.write('continuamos...')

}