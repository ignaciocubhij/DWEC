$(document).ready(function () {
    //primero realizar la llamada al select
    listarNotas();

    function listarNotas() {
        $.ajax({
            type: "POST",
            url: "php/selectTarea.php",
            data: { "nocache": Math.random() },
            dataType: "json",
            success: function (respuesta) {
                $('#id_tbody').empty()
                $(respuesta).each(function () {
                    $("<tr></tr>")
                        .append(`<td>${this.id_nota}</td>`)
                        .append(`<td>${this.titulo}</td>`)
                        .append(`<td>${this.descripcion}</td>`)
                        .append(`<td><button name='modificar' class='update' id_mod='${this.id_nota}'>Modificar</button></td>`)
                        .append(`<td><button name='eliminar' class='delete' id_del='${this.id_nota}'>Eliminar</button></td>`)
                        .appendTo("#id_tbody")
                })
            },
            error: function () {
                window.alert("Error listando");
            }
        })
    }

    //buscar nota
    $('#buscarInput').on("keyup", function () {
        $.ajax({
            type: "POST",
            url: "php/buscarTarea.php",
            data: { "nocache": Math.random(), "buscar": $('#buscarInput').val() },
            dataType: "json",
            success: function (respuesta) {
                $('#id_tbody').empty()
                $(respuesta).each(function () {
                    $("<tr></tr>")
                        .append(`<td>${this.id_nota}</td>`)
                        .append(`<td>${this.titulo}</td>`)
                        .append(`<td>${this.descripcion}</td>`)
                        .append(`<td><button name='modificar' class='update' id_mod='${this.id_nota}'>Modificar</button></td>`)
                        .append(`<td><button name='eliminar' class='delete' id_del='${this.id_nota}'>Eliminar</button></td>`)
                        .appendTo("#id_tbody")
                })
            }
        })
    })

    //aparecer el formulario
    $("#id_anadir").click(function () {
        $('#id_form').css('display', 'block');
    })

    
    //funcion de borrar nota
    $('table').on('click', 'button[name="eliminar"]', function () {
        let id_nota = $(this).attr('id_del');

        $.ajax({
            type: 'POST',
            data: { "nocache": Math.random(), "id_nota": id_nota },
            url: 'php/deleteTarea.php',
            dataType: 'json',
            success: function (response) {
                console.log('borrado');
                console.log(response);
                listarNotas();
            },
            error: function () {
                console.log('Error al borrar');
            }
        });
    });


    //funcion de modificar
    $('table').on('click', 'button[name="modificar"]', function () {
        var id_nota = $(this).closest('tr').find('td:first').text();
        var titulo = $(this).closest('tr').find('td:eq(1)').text();
        var descripcion = $(this).closest('tr').find('td:eq(2)').text();
    
        $('#id_titulo').val(titulo);
        $('#id_descripcion').val(descripcion);
    
        $('#id_form').data('id_nota', id_nota);
    
        $('#submit_button').text('Actualizar Nota');
        $('#id_form').css('display', 'block');
    });
    

    //funcion de añadir
    $('#id_form').on('submit', function (e) {
        e.preventDefault();
        let id_nota = $('#id_form').data('id_nota');
    
        let ajaxData = {
            "nocache": Math.random(),
            "titulo": $('#id_titulo').val(),
            "descripcion": $("#id_descripcion").val()
        };
    
        if (id_nota) {
            ajaxData.id_nota = id_nota;
            $.ajax({
                type: "POST",
                url: "php/updateTarea.php",
                data: ajaxData,
                success: function () {
                    console.log('Nota actualizada');
                    listarNotas();
                    $('#id_form').css('display', 'none');
                    $('#id_form').trigger('reset');
                },
                error: function () {
                    console.log("Actualización fallida");
                }
            });
        } else {
            $.ajax({
                type: "POST",
                url: "php/insertTarea.php",
                data: ajaxData,
                success: function () {
                    console.log('Nota insertada');
                    listarNotas();
                    $('#id_form').css('display', 'none');
                    $('#id_form').trigger('reset');
                },
                error: function () {
                    console.log("Inserción fallida");
                }
            });
        }
    });
})