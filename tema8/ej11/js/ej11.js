$(document).ready(function () {
    //primero realizar la llamada al select
    listarNotas();

    function listarNotas() {
        $.ajax({
            type: "POST",
            url: "php/selectTarea.php",
            data: { "nocache": Math.random() },
            async: true,
            dataType: "json",
            success: function (respuesta) {
                $('#id_tbody').empty()
                $(respuesta).each(function () {
                    $("<tr></tr>")
                        .append(`<td>${this.id_nota}</td>`)
                        .append(`<td>${this.titulo}</td>`)
                        .append(`<td>${this.descripcion}</td>`)
                        .append(`<td><button id='${this.id_nota}'>Modificar</button></td>`)
                        .append(`<td><button id='${this.id_nota}'>Eliminar</button></td>`)
                        .appendTo("#id_tbody")
                })
            },

            error: function () {
                window.alert("Se ha reproducido un error");
            }
        })
    }

    $("#id_anadir").click(function () {
        $("#id_bAnadir").empty()
        $("<form></form>")
            .append("<input type='text' name='titulo' id='id_titulo' placeholder='Titulo de la Tarea'>")
            .append("<textarea name='descripcion' id='id_descripcion' cols='30' rows='10'></textarea>")
            .appendTo("#id_bAnadir")
    })

    //funcion de borrar nota
    function borrarNota(id) {
        $.ajax({
            type: "POST",
            url: "php/selectTarea.php",
            data: {"nocache": Math.random() },
            async: true,
            dataType: "json",
            success: function (respuesta) {
                $('#id_tbody').empty();
                $(respuesta).each(function () {
                    $("<tr></tr>")
                        .append(`<td>${this.id_nota}</td>`)
                        .append(`<td>${this.titulo}</td>`)
                        .append(`<td>${this.descripcion}</td>`)
                        .append(`<td><button id='${this.id_nota}'>Modificar</button></td>`)
                        .append(`<td><button id='${this.id_nota}'>Eliminar</button></td>`)
                        .appendTo("#id_tbody")
                })
            },

            error: function () {
                window.alert("Se ha reproducido un error");
            }
        })
    }
})