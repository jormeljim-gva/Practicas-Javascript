function muestraReloj(){
    let fechaHora = new Date();
    let horas = fechaHora.getHours();
    let minutos = fechaHora.getMinutes();
    let segundos = fechaHora.getSeconds();
    
    if(horas<10){
        horas = '0' + horas;
    }
    if(minutos<10){
        minutos = '0' + minutos;
    }
    if(segundos<10){
        segundos = '0' + segundos;
    }

    document.getElementById('reloj').innerHTML = horas + ':' + minutos + ':' + segundos;
}

window.onload = function() {
    alert("Página que contiene un reloj digital");
    muestraReloj();
    setInterval(muestraReloj, 1000);
}

window.onbeforeunload = function() {
    alert("Has abandonado la página")
}