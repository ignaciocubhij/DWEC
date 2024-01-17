document.addEventListener('DOMContentLoaded', finiciar);

function finiciar(e){
    e.preventDefault();
    document.getElementById('id_enviar').addEventListener('submit', insertar);
}

const regex = {
    usuario: /^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#_*])){8,}$/,
    pass: /^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#_*])){8,}$/,
    email: /^(\w+)@([a-zA-Z])+\.([a-zA-Z]){2,3}$/,
    telefono: /^(\d){9}$/
}

function insertar(){
    var id_usuario = document.getElementById('id_usuario').value;
    var id_pass = document.getElementById('id_pass').value;
    var id_email = document.getElementById('id_email').value;
    var id_telefono = document.getElementById('id_telefono').value;

    if (regex.test(id_usuario) && regex.test(id_pass) && regex.test(id_email) && regex.test(id_telefono)) {
        document.getElementById('id_enviar').submit();
        loadDoc('ajax9.php', 'POST', 'nocache='+ Math.random() +'&usuario=' + encodeURIComponent(id_usuario) + '&pass=' + encodeURIComponent(id_pass) + '&email=' + id_email + '&telefono=' + id_telefono, mostrar);
    }
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
    var resultado = document.getElementById('id_enviar');
    var datos = JSON.parse(xhttp.responseText);
    console.log(datos);
    var salida = datos[0];
    resultado.innerHTML = salida;
}