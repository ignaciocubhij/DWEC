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
                        .append(`<td><button name='modificar' id='actualizar'>Modificar</button></td>`)
                        .append(`<td><button name='eliminar' id_del='${this.id_nota}'>Eliminar</button></td>`)
                        .appendTo("#id_tbody")
                })
            },
            error: function () {
                window.alert("Error listando");
            }
        })
    }

    $('#buscarInput').on("keyup", function () {
        $.ajax({
            type: "POST",
            url: "php/buscarTarea.php",
            data: { "nocache": Math.random(), "buscar": $('#buscarInput').val() },
            dataType: "json",
            success: function (respuesta) {
                $('#id_tbody').empty(); //modificar
            }
        })
    })

    $("#id_anadir").click(function () {
        $("#id_bAnadir").empty()
        $("<form id='id_form'></form>")
            .append("<input type='text' name='titulo' id='id_titulo' placeholder='Titulo de la Tarea'>")
            .append("<textarea name='descripcion' id='id_descripcion' cols='30' rows='10' placeholder='Descripcion'></textarea>")
            .append(`<input type='button' name='enviar' id='id_conf_anadir' value='Confirmar'/>`)
            .appendTo("#id_bAnadir")
    })

    //funcion de borrar nota
    $('table').on('click', function(){
        $.ajax({
            type: 'POST',
            data: { "nocache": Math.random(), "id_nota": $(this).attr('id_del')},
            url: 'php/deleteTarea.php',
            success: function(response){
                console.log('borrado');
                listarNotas();
            },
            error: function(){
                console.log('Error al borrar');
            }
        });
    });    

    //funcion de actualizar
    function actualizarNota(id, titulo, descripcion) {
        $.ajax({
            type: "POST",
            url: "php/updateTarea.php",
            data: { "nocache": Math.random(), "id_nota": id, "titulo": titulo, "descripcion": descripcion },
            async: true,
            dataType: "json",
            success: function () {
                alert("Nota modificada");
                listarNotas();
            },
            error: function () {
                alert("Modificacion fallida");
            }
        })
    }

    function anadirNota(titulo, descripcion) {
        console.log("Llego");
        $.ajax({
            type: "POST",
            url: "php/insertTarea.php",
            data: { "nocache": Math.random(), "titulo": titulo, "descripcion": descripcion },
            async: true,
            dataType: "json",
            success: function () {
                alert('Nota insertada');
                listarNotas();
            },
            error: function () {
                alert("Inserccion fallida")
            }
        })
    }

    $("#actualizar").on("click", function () { actualizarNota(); });
    $('#id_conf_anadir').on('click', function () { anadirNota(); });

})