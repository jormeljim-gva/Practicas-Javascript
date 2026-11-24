/* 6. Crear una página con el botón “Hora Actual”.Al pinchar sobre el botón debe salir un
mensaje del tipo:
Buenos días, son las 12:30 horas
El saludo debe variar según la hora del día. Buenos días hasta las 14:00horas, Buenas
tardes hasta las 20:00 y a partir de esta hora debe salir Buenas noches.
*/

function horaActual() {
    let fechaCompleta = new Date();
    let horas = fechaCompleta.getHours();
    let minutos = fechaCompleta.getMinutes().toString().padStart(2, '0');;
    let saludo = '';

    if(horas >= 0 && horas <= 14){
        saludo = 'Buenos días'; 
    }else if(horas <= 20){
        saludo = 'Buenas tardes';
    }else{
        saludo = 'Buenas noches';
    }

    let textoHora = `${saludo}, son las ${horas}:${minutos} horas`;
    document.getElementById('hora').innerHTML = textoHora;
}


