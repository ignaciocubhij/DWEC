document.addEventListener("DOMContentLoaded", fIniciar);

function fIniciar() {
    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

    var temperaturas = new Array();
    var precipitaciones = new Array();

    for (let i = 0; i < meses.length; i++) {
        var temp;
        do {
            temp = prompt(`Dime temperatura para el mes ${meses[i]}`);

            if (isValidInput(temp, temperaturas, i)) {
                temperaturas.push(temp);
                break;
            } else {
                alert("Ingresa una temperatura válida entre -10 y 40, y asegúrate de que la diferencia no sea mayor a 8 grados respecto al mes anterior.");
            }
        } while (true);
    }

    for (let i = 0; i < meses.length; i++) {
        var lluvia;
        do {
            lluvia = prompt(`Dime lluvia para el mes ${meses[i]}`);

            if (isValidInput(lluvia, precipitaciones, i)) {
                precipitaciones.push(lluvia);
                break;
            } else {
                alert("Ingresa una cantidad de lluvia válida entre 0 y 50, y asegúrate de que la diferencia no sea mayor a 8 respecto al mes anterior.");
            }
        } while (true);
    }

    for (let i = 0; i < temperaturas.length; i++) {
        var barCharacter = "|";
        var absValue = Math.abs(temperaturas[i]);

        document.getElementById('temp').innerHTML += meses[i] + " " + barCharacter.repeat(absValue) + temperaturas[i] + "<br>";
    }

    // Display precipitation data
    for (let i = 0; i < precipitaciones.length; i++) {
        var barCharacter = "|";
        var absValue = Math.abs(precipitaciones[i]);

        document.getElementById('prec').innerHTML += meses[i] + " " + barCharacter.repeat(absValue) + precipitaciones[i] + "<br>";
    }

    // Function to check if the input is valid
    function isValidInput(input, array, index) {
        return (
            input !== "" &&
            input !== null &&
            (parseInt(input) > -10 && parseInt(input) < 40) &&
            (index === 0 || Math.abs(input - array[index - 1]) <= 8)
        );
    }
}