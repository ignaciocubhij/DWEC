document.addEventListener('DOMContentLoaded', finiciar);

function finiciar(){
    document.getElementById('id_boton').addEventListener('click', buscar);
}

function buscar(){
    var nombre = document.getElementById('nombre').value;
    loadDoc(`comprobarDisponibilidad.php?login=${encodeURIComponent(nombre)}}`, mostrar);
    console.log(nombre);
}

function loadDoc(url, cFunction){
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cFunction(this);
        }
    }
    xhttp.open('POST', url, true);
    xhttp.setRequestHeader('Content-type', 'text/txt');
    xhttp.send();
}

function mostrar(xhttp){
    var resultado = document.getElementById('id_resultado');
    var datos = JSON.parse(xhttp.responseText);
    var salida = `Disponible: ${datos.disponible}`;
    resultado.innerHTML = salida;
    console.log(datos);
}