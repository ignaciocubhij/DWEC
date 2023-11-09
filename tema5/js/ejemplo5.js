document.addEventListener('DOMContentLoaded', iniciar, false);

function iniciar() {
    document.getElementById("id_formulario").addEventListener('submit', validaForm);
    document.getElementById('btnVal').addEventListener('click', function () {
        console.log(document.getElementById('miSelect').options[document.getElementById('miSelect').selectedIndex].value);
        console.log(document.getElementById('miSelect').options[document.getElementById('miSelect').selectedIndex].text);
    })
}

function validaForm(evento) {
    evento.preventDefault();

    validaUsu();
    validaClave();
    validaPostal();
    validaCheck();
    
    this.submit();
}

function validaUsu() {
    let usuario = document.getElementById("usuario").value
    if (usuario.length == 0) {
        window.alert("No has escrito nada en el usuario");
    }
}

function validaClave() {
    let clave = document.getElementById("clave").value
    if (clave.length < 6) {
        window.alert("La clave no es válida");
    }
}

function validaPostal() {
    document.getElementById("idCodPostal").addEventListener("keypress", e => {
        if ((isNaN(e.key)) || (e.key == " ")) {
            e.preventDefault();
        }
    })
}

function validaCheck() {
    document.getElementById("submit").disabled = !document.getElementById("submit").disabled;
    console.log(document.getElementById("submit").disabled);
}

function nueva() {
    var siguiente = document.getElementById('miSelect').options.length + 1;
    var opcion = new Option(`opcion${siguiente}`, `option${siguiente}`, false, false);
    document.getElementById('miSelect').options[document.getElementById('miSelect').options.length] = opcion;
}

document.getElementById('newOpt').addEventListener('click', nueva);

var select = document.getElementById('miSelect');
function borrarOpcion() {
    const nombreOpcion = document.getElementById('idOpcBor').value;
    const numeroOpcion = document.getElementById('idNumOpcBor').value;
    
    for (let i = 0; i < select.options.length; i++) {
        var opcion = select.options[i];
        var nombre = opcion.value.substring(0, opcion.value.length - 1);
        var numero = parseInt(opcion.value.substring(opcion.value.length - 1));
        
        if (nombre === nombreOpcion && numero === parseInt(numeroOpcion)) {
            select.remove(i);
        }
    }
}
    document.getElementById('delOpt').addEventListener('click', borrarOpcion);