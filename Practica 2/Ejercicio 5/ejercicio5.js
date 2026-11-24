/* 5. Crear una página con el botón “Fecha Actual”. Al pinchar sobre el botón debe salir la
fecha actual del sistema pero con el día y el mes en letra. Ejemplo:
 Lunes, 15 de Octubre de 2012
*/

function fechaActual(){
    let fecha = new Date();

    let dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    let diasTexto = dias[fecha.getDay()];
    let diaNumero = fecha.getDay();
    let mesTexto = meses[fecha.getMonth()];
    let anyo = fecha.getFullYear();

    let textoFecha = `${diasTexto}, ${diaNumero} de ${mesTexto} de ${anyo}`;
    document.getElementById("fechaHoy").innerHTML = textoFecha;  
}


