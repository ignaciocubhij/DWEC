document.addEventListener('DOMContentLoaded', finiciar);


function finiciar(){
    document.getElementById('buscar').addEventListener('click', buscar);
}

function buscar(){
    loadDoc('ajax1.txt', mostrar);
}

function loadDoc(url, cFunction){
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cFunction(this);
        }
    }
    xhttp.open('GET', url, true);
    xhttp.send();
}

function mostrar(xhttp){
    var resultado = document.getElementById('destino');
    resultado.innerHTML = xhttp.responseText;
}