$(document).ready(function(){
    //llamada al php para traer los registros al select
    $.ajax({
        type: 'GET',
        data: { "nocache": Math.random() },
        url: 'php/selectAsignaturas.php',
        dataType: 'json',
        success: function(response) {
            $(response).each(function(index, elem) {
                $('<option></option>').appendTo('#id_selAsig').text(elem.nombre).attr('value', elem.clave_asignatura);
            })
        }
    })

    $('#id_mostrar').click(function() {
        $.ajax({
            type: 'GET',
            data: { "nocache": Math.random(), 'idAsignatura': $('#id_selAsig option:selected').attr('value') },
            url: 'php/selectAlumnosByAsig.php',
            dataType: 'json',
            success: function(response) {
                $('#id_tbody').empty();
                $(response).each(function(index, elem) {
                    var fila = $('<tr></tr>').appendTo('#id_tbody');
                    $('<td></td>').appendTo(fila).text(elem.clave_alumno);
                    $('<td></td>').appendTo(fila).text(elem.nombre);
                    $('<td></td>').appendTo(fila).text(elem.edad);
                    $('<td></td>').appendTo(fila).text(elem.curso_actual);
                })
            }
        })
    })
})