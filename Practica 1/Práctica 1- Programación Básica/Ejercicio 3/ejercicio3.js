/*3. Introducir un mes y decir a que estación pertenece:
    Ej. Dime un mes: enero
        Estamos en invierno.
*/

let mes = prompt('Escribe un mes: ').toLowerCase();

if (mes == 'diciembre' || mes == 'enero' || mes == 'febrero'){
    alert('Estamos en invierno.');
}else if(mes == 'marzo' || mes == 'abril' || mes == 'mayo'){
    alert('Estamos en primavera.');
}else if(mes == 'junio' || mes == 'julio' || mes == 'agosto'){
    alert('Estamos en verano.');
}else if(mes == 'septiembre' || mes == 'octubre' || mes == 'noviembre'){
    alert('Estamos en otoño.');
}else{
    alert('Mes incorrecto.');
}
