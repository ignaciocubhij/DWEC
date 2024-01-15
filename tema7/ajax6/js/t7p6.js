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

function limpiarProvincias() {
  var s_provincia = document.getElementById('id_provincia');

  while (s_provincia.options.length > 0) {
    s_provincia.remove[0];
  }

  var option = document.createElement('option');
  option.setAttribute('value', datos[i].id);
  var texto = document.createTextNode('Elegir una provincia');
  option.appendChild(texto);
  document.getElementById("id_provincia").appendChild(option);
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

function fprovincia() { }

function fmunicipio() { }
