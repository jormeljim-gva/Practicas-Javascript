function numeroEnlaces() {
    let enlaces = document.getElementsByTagName("a");
    let cantidad = enlaces.length;
    document.getElementById("resultado").innerHTML = "<p>Número de enlaces: " + cantidad + "</p>";
}

function referenciaEnlaces() {
    let enlaces = document.getElementsByTagName("a");
    let referencias = "";
    for (let i = 0; i < enlaces.length; i++) {
        let href = enlaces[i].getAttribute("href");

        referencias += "<li>" + href + "</li>";
    }
    document.getElementById("resultado").innerHTML = "<p>Referencias de los enlaces:</p><ul>" + referencias + "</ul>";
}

function referenciaEnlacesPorParrafo() {
    let parrafos = document.getElementById("parrafos").getElementsByTagName("p");
    let resultado = "";
    for (let i = 0; i < parrafos.length; i++) {
        let enlaces = parrafos[i].getElementsByTagName("a");
        let referencias = "";
        for (let j = 0; j < enlaces.length; j++) {
            let href = enlaces[j].getAttribute("href");
            referencias += "<li>" + href + "</li>";
        }
        resultado += "<p>Parrafo " + (i + 1) + ":</p><ul>" + referencias + "</ul>";
    }
    document.getElementById("resultado").innerHTML = resultado;
}

function parrafosVerdes() {
    let parrafos = document.getElementById("parrafos").getElementsByTagName("p");
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = "green";
    }
}

function desactivarColor() {
    let parrafos = document.getElementById("parrafos").getElementsByTagName("p");
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = "";
    }
}