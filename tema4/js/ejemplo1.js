window.addEventListener('DOMContentLoaded', tabla);

function tabla() {
    var fecha = new Date();
    const meses = [['Enero', 31], ['Febrero', 28], ['Marzo', 31], ['Abril', 30], ['Mayo', 31], ['Junio', 30], ['Julio', 31], ['Agosto', 31], ['Septiembre', 30], ['Octubre', 31], ['Noviembre', 30], ['Diciembre', 31]];
    const diaSem = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

    var factual = fecha;
    var cont = 1;
    var numFila = 1;

    var table = '<table border="2">';
    table += '<tr><th colspan="7">' + factual.toLocaleDateString() + '</th></tr>';
    table += '<tr>';
    for (let i = 0; i < diaSem.length; i++) {
        if (i === 5 || i === 6) {
            table += '<th style="background-color: magenta;">' + diaSem[i] + '</th>';
        } else {
            table += '<th>' + diaSem[i] + '</th>';
        }
    }
    table += '</tr>';

    let faux = new Date(fecha.getFullYear(), fecha.getMonth(), 1);
    var primerDia = faux.getDay();
    if (primerDia === 0) primerDia = 7;

    let dayCounter = 1; // Día de la semana

    do {
        table += '<tr>';
        for (let c = 1; c <= 7; c++) {
            if (c === 6 || c === 7) {
                table += '<td style="background-color: magenta;">';
            } else {
                table += '<td>';
            }
            if (dayCounter >= primerDia && cont <= meses[factual.getMonth()][1]) {
                if (cont == factual.getDate()) {
                    table += '<b>' + cont + '</b>';
                } else {
                    table += cont;
                }
                cont++;
            }
            table += '</td>';
            dayCounter++;
        }
        table += '</tr>';
        numFila++;
    } while (cont <= meses[factual.getMonth()][1]);

    table += '</table>';

    document.getElementById('res').innerHTML = table;
}