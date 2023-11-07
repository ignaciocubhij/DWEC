document.addEventListener("DOMContentLoaded", fIniciar);

function fIniciar() {
    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var temperaturas = new Array(), precipitaciones = new Array();

    var temp = 0, lluvia = 0;
    //recorre el array meses
    for (let i = 0; i < meses.length; i++) {
        //el bucle se ejecuta hasta que haya un valor comprendido entre -10 y 40
        do {
            temp = prompt(`Dime temperatura para el mes ${meses[i]}`);
            
            if (temp != "") {
                temperaturas.push(temp);
            }

            for (let j = 0; j < temperaturas.length; j++) {
                console.log(temperaturas);
                if (meses[j] != "Enero") {
                    if (Math.abs(temperaturas[j] - temperaturas[j-1]) == 8) {
                        console.log('hola');
                    }
                }
            }
        } while (parseInt(temp) <= parseInt("-10") || parseInt(temp) >= 40 || temp == "" || temp == null);
    }

    for (let i = 0; i < meses.length; i++) {
        do {
            lluvia = prompt(`Dime lluvia para el mes ${meses[i]}`);
            
            if (lluvia != "") {
                precipitaciones.push(temp);
            }

            for (let j = 0; j < precipitaciones.length; j++) {
                console.log(precipitaciones);
                if (meses[j] != "Enero") {
                    if (Math.abs(precipitaciones[j] - precipitaciones[j-1]) == 8) {
                        console.log('hola');
                    }
                }
            }
        } while (parseInt(lluvia) <= parseInt(0) || parseInt(lluvia) >= 50 || lluvia == "" || lluvia == null);     
    }

    for (let i = 0; i < temperaturas.length; i++) {
        document.getElementById('temp').innerHTML += meses[i] + "|" + temperaturas[i] + "<br>";
        
    }
    document.getElementById('prec').innerHTML += '';
}