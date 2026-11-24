function validarFormulario(evento) {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let email = document.getElementById("email").value;

    if (nombre == "" || apellidos == "" || email == "") {
        evento.preventDefault();
        alert("Envío cancelado. Debes rellenar todos los campos.");
    } else {
        alert("Formulario enviado correctamente.");
    }
}

window.onload = function () {
    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", validarFormulario);
}