/* 2.- Crea un formulario básico con el campo dni y el botón enviar. Si el usuario deja el campo
dni vacio saldrá un alert con un mensaje indicándonos que el campo no tiene datos al pulsar el
botón de enviar.
*/
function enviar(){
    let dni = document.getElementById('dni').value.trim();

    if(dni === ''){
        alert('El campo DNI está vacío');
        return false;
    }

    return true;
}