/* 4. Crear un programa que nos permita redimensionar la pantalla con el método resize a
500x500 en caso de que sea Internet Explorer, si es otro navegador que salga el
mensaje “Operación no permitida con este navegador”.
*/
let navegador = navigator.userAgent;

if (navegador.indexOf('Internet Explorer')){
    window.resizeTo(500,500);
}else{
    alert("Operación no permitida con este navegador");
}