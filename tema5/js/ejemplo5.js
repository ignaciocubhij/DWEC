document.addEventListener('DOMContentLoaded', iniciar, false);

function iniciar() {
    document.getElementById("id_formulario").addEventListener('submit', validaForm);
    document.getElementById("idCodPostal").addEventListener("keypress", e => {
        if ((isNaN(e.key)) || (e.key == " ")) {
            e.preventDefault()
        }
    })
}

function validaForm(evento) {
    evento.preventDefault();
    let usuario = document.getElementById("usuario").value
    if (usuario.length == 0) {
        window.alert("No has escrito nada en el usuario")
        return false
    }

    let clave = document.getElementById("clave").value
    if (clave.length < 6) {
        window.alert("La clave no es válida")
        return false
    }
    this.submit();
}