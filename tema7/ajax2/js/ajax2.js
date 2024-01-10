document.addEventListener('DOMContentLoaded', finiciar);


function finiciar(){
    document.getElementById('buscar').addEventListener('click', buscar);
}

function buscar(){
    loadDoc('ajax2.xml', mostrar);
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
    var xmlDoc = xhttp.responseXML;
    var tabla = `
    <table border="1">
    <tr><td>Titulo</td><td>Artista</td><td>PAIS</td><td>Compañia</td><td>PRECIO</td><td>AÑO</td></tr>
    `;
    var cds = xmlDoc.getElementsByTagName('CD');
    for (let i = 0; i < cds.length; i++) {
        tabla += `<tr>
        <td>${cds[i].getElementsByTagName('TITLE')[0].childNodes[0].nodeValue}</td>
        <td>${cds[i].getElementsByTagName('ARTIST')[0].childNodes[0].nodeValue}</td>
        <td>${cds[i].getElementsByTagName('COUNTRY')[0].childNodes[0].nodeValue}</td>
        <td>${cds[i].getElementsByTagName('COMPANY')[0].childNodes[0].nodeValue}</td>
        <td>${cds[i].getElementsByTagName('PRICE')[0].childNodes[0].nodeValue}</td>
        <td>${cds[i].getElementsByTagName('YEAR')[0].childNodes[0].nodeValue}</td>
        </tr>`;
    }
    tabla += `</table>`;
    resultado.innerHTML = tabla;
}