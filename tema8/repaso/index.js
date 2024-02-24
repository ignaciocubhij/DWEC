$(document).ready(finiciar);

function finiciar() {
    $('#btn_id_provincia').on('click', accion);
}

function accion(e) {
    e.preventDefault();
    $.ajax({
        method: 'POST',
        url: 'repaso.php',
        data: {"nocache": Math.random(), "provincia": $('#id_provincia').val()},
        dataType: 'json',
        success: function(response) {
            $('#resultado').html('<p>'+response[0].municipio+'</p>');
        },
        error: function(error) {
            console.error(error);
        }
    })
}