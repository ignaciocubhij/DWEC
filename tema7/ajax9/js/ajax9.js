document.addEventListener('DOMContentLoaded', finiciar);

function finiciar(e) {
    e.preventDefault();
    document.getElementById('id_enviar').addEventListener('submit', insertar);
}

const regex = {
    usuario: /^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#_*])){8,}$/,
    pass: /^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#_*])){8,}$/,
    email: /^(\w+)@([a-zA-Z])+\.([a-zA-Z]){2,3}$/,
    telefono: /^(\d){9}$/
}

const errorMessages = {
    usuario: 'El usuario debe contener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales (#, _ o *)',
    pass: 'La contraseña debe contener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales (#, _ o *)',
    email: 'Ingrese un correo electrónico válido',
    telefono: 'El número de teléfono debe contener exactamente 9 dígitos'
}

function insertar(e) {
    e.preventDefault();
    console.log('insertando...');
    var id_usuario = document.getElementById('id_usuario');
    var id_pass = document.getElementById('id_pass');
    var id_email = document.getElementById('id_email');
    var id_telefono = document.getElementById('id_telefono');

    clearErrorMessage('id_err_usuario');
    clearErrorMessage('id_err_pass');
    clearErrorMessage('id_err_email');
    clearErrorMessage('id_err_telefono');

    validateAndDisplayError(id_usuario, regex.usuario, 'id_err_usuario', errorMessages.usuario);
    validateAndDisplayError(id_pass, regex.pass, 'id_err_pass', errorMessages.pass);
    validateAndDisplayError(id_email, regex.email, 'id_err_email', errorMessages.email);
    validateAndDisplayError(id_telefono, regex.telefono, 'id_err_telefono', errorMessages.telefono);

    if (!hasValidationErrors()) {
        document.getElementById('id_enviar').submit();
        console.log('error');

        loadDoc('ajax9.php', 'POST', 'enviar=1&nocache=' + Math.random() + '&usuario=' + encodeURIComponent(id_usuario.value) + '&pass=' + encodeURIComponent(id_pass.value) + '&email=' + id_email.value + '&telefono=' + id_telefono.value, mostrar);
    }
}

function validateAndDisplayError(input, regex, errorId, errorMessage) {
    if (!regex.test(input.value)) {
        displayErrorMessage(errorId, errorMessage);
    }
}

function displayErrorMessage(errorId, errorMessage) {
    document.getElementById(errorId).innerText = errorMessage;
}

function clearErrorMessage(errorId) {
    document.getElementById(errorId).innerText = '';
}

function hasValidationErrors() {
    return (
        document.getElementById('id_err_usuario').innerText ||
        document.getElementById('id_err_pass').innerText ||
        document.getElementById('id_err_email').innerText ||
        document.getElementById('id_err_telefono').innerText
    );
}

function loadDoc(url, method, params, cFunction) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cFunction(this);
        }
    }

    xhttp.open(method, url, true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(params);
}

function mostrar(xhttp) {
    var resultado = document.getElementById('id_resultado');
    var datos = JSON.parse(xhttp.responseText);
    console.log(datos);
    var salida = datos.message || datos.error || 'Unexpected response';
    resultado.innerHTML = salida;
}