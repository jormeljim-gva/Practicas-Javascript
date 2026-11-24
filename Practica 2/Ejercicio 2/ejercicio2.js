/* 2. Introducir un mes y decir a que estación pertenece:
      Ej: Dime un mes: enero
          Estamos en Invierno
*/

let mes = prompt("Introduce un mes:").toLowerCase();

switch (mes) {
    case "diciembre":
    case "enero":
    case "febrero":
        alert("Invierno");
        break;

    case "marzo":
    case "abril":
    case "mayo":
        alert("Primavera");
        break;

    case "junio":
    case "julio":
    case "agosto":
        alert("Verano");
        break;

    case "septiembre":
    case "octubre":
    case "noviembre":
        alert("Otoño");
        break;

    default:
        alert("Mes no válido");
}