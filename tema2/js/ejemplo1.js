
do {
    var numero = prompt('pon un numero');
    let cont = 0;
    let aux = 0;

    if (numero >= 0) {
        document.write('<table border="1">');
        for (let i = 0; i <= parseInt(numero); i++) {
            if (i % 2 == 0) {
                document.write('<tr><td>' + i + '</td></tr>');
                aux += i;
                cont++;
            }
        }
        document.write('</table>');
        document.write('<p id="res">hay ' + cont + " numeros pares, y suma es: " + aux + '</p>');
    } else {
        alert('introduce un numero positivo');
    }
} while (numero < 0 || isNaN(numero));