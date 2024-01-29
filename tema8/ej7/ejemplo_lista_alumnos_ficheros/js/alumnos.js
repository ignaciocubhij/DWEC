$(document).ready(function () {
    listar_alumnos();
    function listar_alumnos() {
        $.ajax({
            type: 'GET',
            data: { "nocache": Math.random() },
            url: 'php/selectAlumnos.php',
            dataType: 'json',
            success: function (response) {
                $('#id_tbody').empty();
                $(response).each(function (index, elem) {
                    var fila = $('<tr></tr>').appendTo('#id_tbody');
                    $('<td></td>').text(elem.nombre).appendTo(fila);
                    $('<td></td>').text(elem.apellidos).appendTo(fila);
                    $('<td></td>').text(elem.email).appendTo(fila);
                    $('<td></td>').text(elem.telefono).appendTo(fila);
                    $('<td></td>').html(`<button id_pos="${elem.id}">Eliminar</button>`).appendTo(fila);
                })
            }
        })
    }

    $('table').bind('click', function(e){
        if ($(e.target).attr('id_pos')) {
            $.ajax({
                type: 'GET',
                data: { "nocache": Math.random(), "id": $(e.target).attr('id_pos')},
                url: 'php/deleteAlumnos.php',
                success: function(){
                    console.log('Borrado!');
                    listar_alumnos();
                },
                error: function(){
                    console.log('Error al borrar');
                }
            })
        }
    })

    function insertar_alumno(){
        $.ajax({
            type: 'POST',
            data: { "nocache": Math.random(), "nombre": $('#id_nombre').val(), "apellidos": $('#id_apellidos').val(), "email": $('#id_email').val(), "telefono": $('#id_telefono').val()},
            url: 'php/insertAlumnos.php',
            success: function(){
                listar_alumnos();
                $('#id_form1').trigger("reset");
            }
        })
    }

    $('#id_badd').bind('click', function(){
        if ($('#id_nombre').val() !== '' && $('#id_apellidos').val() !== '' && $('#id_email').val() !== '' && $('#id_telefono').val() !== '') {
            insertar_alumno();
        } else {
            alert('No se pueden dejar los campos en blanco');
        }
    })
})