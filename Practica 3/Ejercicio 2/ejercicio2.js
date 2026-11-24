function anyadir(){
    let elemento = document.createElement('li');
    let texto = document.createTextNode('Animal');
    elemento.appendChild(texto);
    document.getElementById('listaelemen').appendChild(elemento);
}

function insertar(){
    document.getElementById('listaelemen');
    let elementos = document.getElementsByTagName('li');
    if (elementos.length >= 1){
        let nuevo = document.createElement('li');
        let texto = document.createTextNode('Animal insertado');
        nuevo.appendChild(texto);

        if(elementos.length > 1){
            document.getElementById('listaelemen').insertBefore(nuevo, elementos[1]);
        }else{
            document.getElementById('listaelemen').appendChild(nuevo);
        }
    }
}

function reemplazar(){
    let lista = document.getElementById('listaelemen');
    let elementos = lista.getElementsByTagName('li');
    
    if (elementos.length > 1) {
        elementos[0].textContent = 'Animal de reemplazo';
    }
}

function borrar(){
    let lista = document.getElementById('listaelemen');
    let elementos = lista.getElementsByTagName('li');

    if (elementos.length >= 1) {
        lista.removeChild(elementos[0]);
    }
}

function clonar() {
    let lista = document.getElementById('listaelemen');
    let nuevoUl = document.createElement('ul');
    nuevoUl.innerHTML = lista.innerHTML;
    let primerBoton = document.querySelector('input');
    document.body.insertBefore(nuevoUl, primerBoton);
}

function sublistaDOM() {
    let lista = document.getElementById('listaelemen');
    let primerLi = lista.getElementsByTagName('li')[0];

    if (primerLi) {
        let ulSublista = document.createElement('ul');

        let li1 = document.createElement('li');
        li1.appendChild(document.createTextNode('Cachorro'));
        ulSublista.appendChild(li1);

        let li2 = document.createElement('li');
        li2.appendChild(document.createTextNode('Cazador'));
        ulSublista.appendChild(li2);

        primerLi.appendChild(ulSublista);
    }
}

function sublistainnerHTML() {
    let lista = document.getElementById('listaelemen');
    let primerLi = lista.getElementsByTagName('li')[0];

    if (primerLi) {
        primerLi.innerHTML += '<ul><li>Cachorro</li><li>Cazador</li></ul>';
    }
}

