/* var yt = confirm('Quieres abrir youtube?: ');

if (yt) {
    let ventana = window.open('', "MsgWindow", "width=200,height=100");
    window.document.write('estoy aprendiendo a manejar ventanas');
}

var cerrar = confirm('desea cerrar la ventana?: ');

if (cerrar) {
    window.close();
} */

window.addEventListener('DOMContentLoaded', function () {
    function reloj() {
        var hora;
        var minuto;
        var segundos;
        var reloj = new Date();

        hora = reloj.getHours();
        minuto = reloj.getMinutes();
        segundos = reloj.getSeconds();

        document.getElementById('reloj').innerHTML = `${hora < 10 ? '0' + hora : hora}:${minuto < 10 ? '0' + minuto : minuto}:${segundos < 10 ? '0' + segundos : segundos}`;
    }

    setInterval(reloj, 1000);
})