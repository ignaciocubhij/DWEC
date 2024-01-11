document.addEventListener('DOMContentLoaded', finiciar);

function finiciar(){
    document.getElementById('id_boton').addEventListener('click', buscar);
}

function buscar(){
    var dni = document.getElementById('id_dni').value;
    loadDoc(`ajax4.php?dni=${encodeURIComponent(dni)}&nocache=${Math.random()}`, mostrar);
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
    xhttp.setRequestHeader('Content-type: application/json');
    xhttp.send();
}

function mostrar(xhttp){
    var resultado = document.getElementById('id_resultado');
    var datos = JSON.parse(xhttp.responseText);
    var salida = ` Nombre: ${datos.nombre}<br> Apellido: ${datos.apellido}<br> Direccion: ${datos.direccion}`;
    resultado.innerHTML = salida;
}