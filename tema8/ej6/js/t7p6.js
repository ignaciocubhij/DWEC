$(document).ready(function() {
  $("#id_ccaa").bind("change", fccaa);
  $("#id_provincia").bind("change", fprovincia);
  $("#id_municipio").bind("change", fmunicipio);

  //Cargamos el select de comunidades autónomas
  var pag = "php/getCcaa.php";
  datos = {"nocache": Math.random()};
  $.ajax({
    url: pag,
    type: "POST",
    data: datos,
    dataType: "json",
    success: function (response) {
      $(response).each(function(){
        $("<option></option>").val(this.id).text(this.comunidad).appendTo('#id_ccaa')
      })
    }
  });
  
  function limpiarProvincias() {
    var s_provincia = $('#id_provincia');
    
    while (s_provincia[0].options.length > 0) {
      s_provincia[0].remove(0);
    }
    
    var option = $("<option></option>");
    option.attr('value', datos.id);
    var texto = document.createTextNode('Elegir una provincia');
    option.append(texto);
    $("#id_provincia").append(option);
  }
  
  function limpiarMunicipios(){
    var s_municipio = $('#id_municipio');
    
    while (s_municipio[0].options.length > 0) {
      s_municipio[0].remove(0);
    }
    
    var option = $("<option></option>");
    option.attr('value', datos.id);
    var texto = document.createTextNode('Elegir un municipio');
    option.append(texto);
    $("#id_municipio").append(option);
  }
  
 function fccaa() {
    limpiarProvincias();
    limpiarMunicipios();
    $('#id_resultado').css('display', 'none');
    var pag = "php/getProvincias.php";
    var id_ccaa = $("#id_ccaa option:selected").val();
    datos = {"nocache": Math.random(), "ccaa_id": $('#id_ccaa').val()};
    $.ajax({
      url: pag,
      type: "POST",
      data: datos,
      dataType: "json",
      success: function (response) {
        $(response).each(function(){
          $("<option></option>").val(this.id).text(this.provincia).appendTo('#id_provincia')
        })
      }
    });
  }
  
  function fprovincia() { 
    limpiarMunicipios();
    $('#id_resultado').css('display', 'none');
    var pag = "php/getMunicipios.php";
    var id_provincia = $("#id_provincia option:selected").val();
    datos = {"nocache": Math.random(), "provincia_id": $('#id_provincia').val()};
    $.ajax({
      url: pag,
      type: "POST",
      data: datos,
      dataType: "json",
      success: function (response) {
        $(response).each(function(){
          $("<option></option>").val(this.id).text(this.municipio).appendTo('#id_municipio')
        })
      }
    });
  }
  
  function fmunicipio() {
    $('#id_resultado').css('display', 'block');
    var pag = "php/getDatosMunicipio.php";
    var id_municipio = $("#id_municipio option:selected").val();
    datos = {"nocache": Math.random(), "municipio_id": $('#id_municipio').val()};
    $.ajax({
      url: pag,
      type: "POST",
      data: datos,
      dataType: "json",
      success: function (response) {
        
        $('#id_nombreMun').text(response[0].municipio);
        $('#id_idMun').text(response[0].id);
        $('#id_latMun').text(response[0].latitud);
        $('#id_lonMun').text(response[0].longitud);
      }
    });
  }
});