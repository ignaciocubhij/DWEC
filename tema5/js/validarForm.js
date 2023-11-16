document.addEventListener('DOMContentLoaded', finiciar);

function finiciar() {

    var datos = [];
    var reg = {
        edad: /^[0-9][0-9]?$/,
        usoSemana: /^\d$/
    };

    var edad = {
        valor: document.getElementById('id_edad'),
        validar: false
    };
    
    edad.valor.addEventListener('keyup', () => {
        if (!reg.edad.test(edad.valor.value) || isNaN(edad.valor.value)) {
            edad.valor.style.border = '3px solid red';
            edad.validar = false;
        } else {
            edad.valor.style.border = 'none';
            edad.validar = true;
        }
        console.log(edad.valor);
        console.log(edad.validar);
    })

    document.getElementById('id_estudiosRad1').addEventListener('click', (e) => {
        if (e.target.checked) {
            document.getElementById('selEstudios').style.display = 'block';
        }
    })
    document.getElementById('id_estudiosRad2').addEventListener('click', (e) => {
        if (e.target.checked) {
            document.getElementById('selEstudios').style.display = 'none';
        }
    })

    document.getElementById('mostrarEquipo').addEventListener('click', (e) => {
        if (e.target.checked) {
            document.getElementById('equiInf').style.display = 'block';
        }
    })
    document.getElementById('ocultarEquipo').addEventListener('click', (e) => {
        if (e.target.checked) {
            document.getElementById('equiInf').style.display = 'none';
        }
    })

    document.getElementById('mostrarMarOrdRad').addEventListener('click', (e) => {
        if (e.target.checked) {
            document.getElementById('nomMarca').style.display = 'block';
        }
    })
    document.getElementById('ocultarMarOrdRad').addEventListener('click', (e) => {
        if (e.target.checked) {
            document.getElementById('nomMarca').style.display = 'none';
        }
    })

    var CPUs = document.getElementById('CPU1');
    var modInt = document.getElementById('modInt');
    var modAMD = document.getElementById('modAMD');

    //despliegue de modelos de cpu
    CPUs.addEventListener('click', () => {
        if (CPUs.options[CPUs.selectedIndex].value == 'Intel') {
            modInt.style.display = 'block';
            velCi3.style.display = 'none';
            velCi5.style.display = 'none';
            velCi7.style.display = 'none';
            velRy5.style.display = 'none';
            velRy7.style.display = 'none';
        } else {
            modInt.style.display = 'none';
        }
        if (CPUs.options[CPUs.selectedIndex].value == 'AMD') {
            modAMD.style.display = 'block';
            velCi3.style.display = 'none';
            velCi5.style.display = 'none';
            velCi7.style.display = 'none';
            velRy5.style.display = 'none';
            velRy7.style.display = 'none';
        } else {
            modAMD.style.display = 'none';
        }
    })

    //despliegue de velocidades
    var modIntSel = document.querySelector('#modInt select');
    var velCi3 = document.getElementById('velCi3');
    var velCi5 = document.getElementById('velCi5');
    var velCi7 = document.getElementById('velCi7');

    modIntSel.addEventListener('click', () => {
        if (modIntSel.options[modIntSel.selectedIndex].value == 'corei3') {
            velCi3.style.display = 'block';
        } else {
            velCi3.style.display = 'none';
        }
        if (modIntSel.options[modIntSel.selectedIndex].value == 'corei5') {
            velCi5.style.display = 'block';
        } else {
            velCi5.style.display = 'none';
        }
        if (modIntSel.options[modIntSel.selectedIndex].value == 'corei7') {
            velCi7.style.display = 'block';
        } else {
            velCi7.style.display = 'none';
        }
    })

    var modAMDSel = document.querySelector('#modAMD select');
    var velRy5 = document.getElementById('velRy5');
    var velRy7 = document.getElementById('velRy7');

    modAMDSel.addEventListener('click', () => {
        if (modAMDSel.options[modAMDSel.selectedIndex].value == 'ryzen5') {
            velRy5.style.display = 'block';
        } else {
            velRy5.style.display = 'none';
        }

        if (modAMDSel.options[modAMDSel.selectedIndex].value == 'ryzen7') {
            velRy7.style.display = 'block';
        } else {
            velRy7.style.display = 'none';
        }
    })

    //horas de uso semanales
    document.getElementById('id_dSemUso').addEventListener('keyup', (e) => {
        if (!reg.usoSemana.test(e.target.value) || e.target.value > 7 || isNaN(e.target.value)) {
            e.target.style.border = '3px solid red';
        } else {
            e.target.style.border = 'none';
        }
    })

    //otras actividades
    document.getElementById('id_otras').addEventListener('click', (e) => {
        if (e.target.checked) {
            e.target.style.display = 'block';
        } else {
            e.target.style.display = 'none';
        }
    })

    //validar selects
    var selects = document.getElementsByTagName('select');

    for (let i = 0; i < selects.length; i++) {
        selects[i].addEventListener('click', (e) => {
            if (selects[i].style.display == 'block') {
                if (e.target.selectedIndex != 0) {
                    e.target.style.border = '1px solid red';
                    validar = false;
                }
                console.log(e.target);
            }
        })
    }

    /* document.querySelectorAll('input:checked, [display="block"]').forEach(item => {
        console.log(item);
    }) */

    /* console.log(edad.validar && sexHom.validar || sexMuj.validar); */

    document.getElementById('enviaForm').addEventListener('click', (e) => {
        e.preventDefault();

        var sexHom = {
            valor: document.getElementById('sexHom'),
            validar: false
        }
        
        var sexMuj = {
            valor: document.getElementById('sexMuj'),
            validar: false
        }

        if (!sexHom.valor.checked || !sexMuj.valor.checked) {
            sexHom.validar = false;
            sexMuj.validar = false;
            document.getElementById('sexo').innerHTML += '<p class="error">Pon un valor</p>'
        } else {
            sex.sexHom.validar = true;
            sex.sexMuj.validar = true;
            if(sexHom.validar){
                datos.push(sexHom.valor.value);
            } else if(sexMuj.validar){
                datos.push(sexMuj.valor.value);
            }
        }

        /**
         * *como meter los datos en el array
         */

        datos.push(edad.value);
        var ventana = window.open('');
        ventana.document.write('<table>');
        var cont = 0;
        while (cont < datos.length) {
            ventana.document.write('<tr>' + datos[cont] + '</tr>');
            cont++;
        }
        ventana.document.write('</table>');
    })

    document.getElementById('limpiaForm').addEventListener('click', (e) => {
        e.preventDefault();
        document.forms[0].reset();
        document.getElementById('equiInf').style.display = 'none';
    })
}