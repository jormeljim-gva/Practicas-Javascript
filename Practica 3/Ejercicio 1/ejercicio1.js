function anyadir(){
    let parrafo = document.createElement('p');
    let texto = document.createTextNode('Párrafo añadido')
    parrafo.appendChild(texto);
    document.getElementById('divisor').appendChild(parrafo);
}

function insertar(){
    document.getElementById('divisor');
    let parrafos = document.getElementsByTagName('p')
    if (parrafos.length >= 1){
        let nuevo = document.createElement('p');
        let texto = document.createTextNode('Párrafo insertado');
        nuevo.appendChild(texto);

        if(parrafos.length > 1){
            document.getElementById('divisor').insertBefore(nuevo, parrafos[1]);
        }else{
            document.getElementById('divisor').appendChild(nuevo);
        }
    }
}

function reemplazar(){
    let divisor = document.getElementById('divisor');
    let parrafos = divisor.getElementsByTagName('p');
    
    if (parrafos.length > 1) {
        parrafos[1].textContent = 'Párrafo reemplazado';
    }
}

function borrar(){
    let divisor = document.getElementById('divisor');
    let parrafos = divisor.getElementsByTagName('p');

    if (parrafos.length >= 1) {
        divisor.removeChild(parrafos[1]);
    }
}

function clonar() {
    let divisor = document.getElementById('divisor');
    /*let nuevoDiv = document.createElement('div');
    nuevoDiv.innerHTML = divisor.innerHTML;
    let botones = document.getElementById('botones');
    document.body.insertBefore(nuevoDiv, botones);*/

    let copia = divisor.cloneNode(true);
    /*let botones = document.getElementById('botones');
    document.body.insertBefore(copia, botones);*/

    document.body.appendChild(copia);
}