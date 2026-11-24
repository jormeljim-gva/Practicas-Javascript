/* 6.- Partiendo de la cadena de texto: cadena=”2+2”, utilizando la función eval ejecuta la cadena
para nos muestre la suma.
*/

function calcularCadena() {
    var cadena = "2+2";

    var resultado = eval(cadena);

    document.getElementById("resultadoEval").textContent = 
        "Cadena evaluada: '" + cadena + "' --> Resultado: " + resultado;
}