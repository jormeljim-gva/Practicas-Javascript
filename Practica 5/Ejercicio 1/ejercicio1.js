function validarFormulario(evento) {

    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;
    let dni = document.getElementById("dni").value;
    let telefono = document.getElementById("telefono").value;
    //let observacion = document.getElementById("observaciones").value;

    if (nombre == "" || apellidos == "" || edad == "" || dni.trim() == "") {
        evento.preventDefault();
        alert("Envío cancelado. Debes rellenar todos los campos obligatorios.");
    } else if (!/^\d{9}$/.test(telefono)) {
        evento.preventDefault();
        alert("El teléfono debe tener exactamente 9 dígitos consecutivos, sin espacios ni guiones.");
    }else {
        alert("Formulario enviado correctamente.");
    }
}
// Como las observaciones se tienen que validar mientras se escribe, le he creado su propia función a parte
// en vez de meterlo en la función validarFormulario pq lo que hay en esa función se comprueba al pulsar enviar.
function validarObservaciones(evento) {
    let observacion = document.getElementById("observaciones").value;
    if (observacion.length > 150) {
        evento.preventDefault();
    }
}

function mostrarAficion() {

    let aficion = document.getElementById("aficion");

    let longitud = aficion.length;
    let indice = aficion.selectedIndex;
    let valor = aficion.options[indice].value;

    alert("La longitud de la lista es " + longitud +
        "\nEl índice seleccionado es el " + (indice + 1) +
        "\nEl valor del índice seleccionado es " + valor);
}

window.onload = function () {

    let formulario = document.getElementById("formulario");
    let nombre = document.getElementById("nombre");
    let aficion = document.getElementById("aficion");
    let observaciones = document.getElementById("observaciones");

    nombre.focus();
    formulario.addEventListener("submit", validarFormulario);
    aficion.addEventListener("change", mostrarAficion);
    observaciones.addEventListener("keypress", validarObservaciones);
}