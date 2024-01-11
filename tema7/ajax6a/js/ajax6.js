document.addEventListener('DOMContentLoaded', finiciar);

function finiciar(){
    document.getElementById('id_boton').addEventListener('click', buscar);
}

function buscar(){
    loadDoc(`ajax6.php?nocache=${Math.random()}`, mostrar);
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
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send();
}

function mostrar(xhttp){
    var salida = '';
    var resultado = document.getElementById('id_resultado');
    var datos = JSON.parse(xhttp.responseText);
    salida += '<table><tr><td>codigo</td><td>nacionalidad</td><td>productora</td><td>codigo dir</td></tr>';
    for (let i = 0; i < datos.length; i++) {
        salida += `<tr><td>${datos[i].codigoPel}</td><td>${datos[i].nacionalidad}</td><td>${datos[i].productora}</td><td>${datos[i].codigoD}</td></tr>`;
    }
    salida += '</table>';
    resultado.innerHTML = salida;
}