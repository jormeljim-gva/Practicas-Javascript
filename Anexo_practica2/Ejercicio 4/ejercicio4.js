/* 4.- Introduce un número del 1 al 10. Genera un número aleatoriamente, si el número
introducido en igual al generado que salga un mensaje felicitándonos y si no es así nos debe
avisar que hemos fallado.
*/

function comprobarAcierto() {
    var numIntroducido = parseInt(document.getElementById("numeroUsuario").value, 10);

    if (isNaN(numIntroducido) || numIntroducido < 1 || numIntroducido > 10) {
        alert("Introduce un número válido entre 1 y 10.");
        return;
    }

    var numGenerado = Math.floor(Math.random() * 10) + 1;

    numIntroducido === numGenerado 
        ? alert("¡Felicidades! Has acertado. El número era " + numGenerado)
        : alert("Has fallado. El número generado era " + numGenerado);
}