function enviar(){
    let dni = document.getElementById('dni').value.trim();

    if(dni === ''){
        alert('El campo DNI está vacío');
        return false;
    }

    return true;
}