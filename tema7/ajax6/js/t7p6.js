document.addEventListener("DOMContentLoaded", iniciar, false);

function iniciar() {
  document.getElementById("id_ccaa").addEventListener("change", fccaa);
  document
    .getElementById("id_provincia")
    .addEventListener("change", fprovincia);
  document
    .getElementById("id_municipio")
    .addEventListener("change", fmunicipio);

  //Cargamos el select de comunidades autónomas
  var pag = "php/getCcaa.php";
  datos = "nocache=" + Math.random();
  loadDoc(pag, datos, mostrar_ccaa);
}

function limpiarProvincias() {
  var s_provincia = document.getElementById('id_provincia');

  while (s_provincia.options.length > 0) {
    s_provincia.remove(0);
  }

  var option = document.createElement('option');
  option.setAttribute('value', datos.id);
  var texto = document.createTextNode('Elegir una provincia');
  option.appendChild(texto);
  document.getElementById("id_provincia").appendChild(option);
}

function limpiarMunicipios(){
  var s_municipio = document.getElementById('id_municipio');

  while (s_municipio.options.length > 0) {
    s_municipio.remove(0);
  }

  var option = document.createElement('option');
  option.setAttribute('value', datos.id);
  var texto = document.createTextNode('Elegir un municipio');
  option.appendChild(texto);
  document.getElementById("id_municipio").appendChild(option);
}

function mostrar_ccaa(xhttp) {
  var datos = JSON.parse(xhttp.responseText);
  for (let i = 0; i < datos.length; i++) {
    var option = document.createElement('option');
    option.setAttribute('value', datos[i].id);
    option.innerText = datos[i].comunidad;
    document.getElementById("id_ccaa").appendChild(option);
  }
}

function fccaa() {
  var pag = "php/getProvincias.php";
  var id_ccaa = document.getElementById("id_ccaa").options[document.getElementById("id_ccaa").selectedIndex].value;
  datos = "nocache=" + Math.random() + "&ccaa_id=" + encodeURIComponent(id_ccaa);
  loadDoc(pag, datos, mostrar_provincia);
}

function mostrar_provincia(xhttp) {
  limpiarProvincias();
  limpiarMunicipios();

  var datos = JSON.parse(xhttp.responseText);
  for (let i = 0; i < datos.length; i++) {
    var option = document.createElement('option');
    option.setAttribute('value', datos[i].id);
    option.innerText = datos[i].provincia;
    document.getElementById("id_provincia").appendChild(option);
  }
}

function fprovincia() { 
  var pag = "php/getMunicipios.php";
  var id_provincia = document.getElementById("id_provincia").options[document.getElementById("id_provincia").selectedIndex].value;
  datos = "nocache=" + Math.random() + "&provincia_id=" + encodeURIComponent(id_provincia);
  loadDoc(pag, datos, mostrar_municipio);
}

function mostrar_municipio(xhttp) {
  limpiarMunicipios();
  document.getElementById('id_resultado').style.display = 'none';

  var datos = JSON.parse(xhttp.responseText);
  for (let i = 0; i < datos.length; i++) {
    var option = document.createElement('option');
    option.setAttribute('value', datos[i].id);
    option.innerText = datos[i].municipio;
    document.getElementById("id_municipio").appendChild(option);
  }
}

function fmunicipio() {
  var pag = "php/getDatosMunicipio.php";
  var id_municipio = document.getElementById("id_municipio").options[document.getElementById("id_municipio").selectedIndex].value;
  datos = "nocache=" + Math.random() + "&municipio_id=" + encodeURIComponent(id_municipio);
  loadDoc(pag, datos, mostrar_datos_municipio);
}

function mostrar_datos_municipio(xhttp) {
  var datos = JSON.parse(xhttp.responseText);
  document.getElementById('id_resultado').style.display = 'block';
  document.getElementById('id_nombreMun').innerText = datos[0].municipio;
  document.getElementById('id_idMun').innerText = datos[0].id;
  document.getElementById('id_latMun').innerText = datos[0].latitud;
  document.getElementById('id_lonMun').innerText = datos[0].longitud;
}