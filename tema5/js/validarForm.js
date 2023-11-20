"use strict";

document.addEventListener('DOMContentLoaded', finiciar);

function finiciar() {
    var datos = [];
    var reg = {
        edad: /^[0-9][0-9]?$/,
        usoSemana: /^\d$/
    };

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

    // despliegue de modelos de CPU
    CPUs.addEventListener('change', () => {
        if (CPUs.value == 'Intel') {
            modInt.style.display = 'block';
            velCi3.style.display = 'none';
            velCi5.style.display = 'none';
            velCi7.style.display = 'none';
            velRy5.style.display = 'none';
            velRy7.style.display = 'none';
        } else {
            modInt.style.display = 'none';
        }

        if (CPUs.value == 'AMD') {
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

    // despliegue de velocidades
    var modIntSel = document.querySelector('#modInt select');
    var velCi3 = document.getElementById('velCi3');
    var velCi5 = document.getElementById('velCi5');
    var velCi7 = document.getElementById('velCi7');

    modIntSel.addEventListener('change', () => {
        velCi3.style.display = modIntSel.value === 'corei3' ? 'block' : 'none';
        velCi5.style.display = modIntSel.value === 'corei5' ? 'block' : 'none';
        velCi7.style.display = modIntSel.value === 'corei7' ? 'block' : 'none';
    })

    var modAMDSel = document.querySelector('#modAMD select');
    var velRy5 = document.getElementById('velRy5');
    var velRy7 = document.getElementById('velRy7');

    modAMDSel.addEventListener('change', () => {
        velRy5.style.display = modAMDSel.value === 'ryzen5' ? 'block' : 'none';
        velRy7.style.display = modAMDSel.value === 'ryzen7' ? 'block' : 'none';
    })

    // horas de uso semanales
    var dSemUso = document.getElementById('id_dSemUso');
    dSemUso.addEventListener('keyup', (e) => {
        if (!reg.usoSemana.test(e.target.value) || e.target.value > 7 || isNaN(e.target.value)) {
            e.target.style.border = '3px solid red';
        } else {
            e.target.style.border = 'none';
        }
    })

    // otras actividades
    document.getElementById('id_otras').addEventListener('click', (e) => {
        if (e.target.checked) {
            document.getElementById('otrasText').style.display = 'block';
        } else {
            document.getElementById('otrasText').style.display = 'none';
        }
    })

    // validar selects
    var selects = document.getElementsByTagName('select');

    Array.from(selects).forEach(item => {
        item.addEventListener('change', (e)=>{
            if (item.style.display == 'block') {
                if (e.target.selectedIndex != 0) {
                    e.target.style.border = '1px solid red';
                }
                console.log(e.target);
                console.log(typeof(selects));
            }
        })
    })
    
    var edad = document.getElementById('id_edad');
    var sexo = document.getElementById('sexo');
    var estudios = document.getElementById('estudios');
    var estudiosSel = document.getElementById('id_estudiosSel');
    var ordenador = document.getElementById('ordenador');
    var tipo = document.getElementById('tipoOrdSel');
    var antiguedad = document.getElementById('antOrdSel');
    var marcaSN = document.getElementById('marcaSN');
    var nomMarca = document.getElementById('id_nomMarca');
    var RAM = document.getElementById('idSelRAM');
    var HDD = document.getElementById('idSelHDD');
    var pulgadas = document.getElementById('idSelPulg');
    var internet = document.getElementById('internetSel');
    var propComp = document.getElementById('propComp');
    var hDiaUso = document.getElementById('id_selHDiaUso');
    var actRea = document.getElementById('actRea');

    if (edad) {
        edad.addEventListener('input', () => {
            if (!reg.edad.test(edad.value) || isNaN(edad.value)) {
                edad.style.border = '3px solid red';
            } else {
                edad.style.border = 'none';
            }

            actualizarEstadoBoton();
            console.log(edad);
        })
    } else {
        console.error('no existe el elemento edad');
    }

    if (sexo) {
        sexo.addEventListener('change', () => {
            actualizarEstadoBoton();
            console.log(sexo);
        });
    } else {
        console.error('no existe el elemento sexo');
    }

    if (estudios) {
        estudios.addEventListener('change', () => {
            actualizarEstadoBoton();
            console.log(estudios);
        });
    } else {
        console.error('no existe el elemento estudios');
    }

    if (estudiosSel) {
        estudiosSel.addEventListener('change', ()=>{
            actualizarEstadoBoton();
            console.log(estudiosSel);
        })
    } else {
        console.error('no existe el elemento estudiosSel');
    }

    if (ordenador) {
        ordenador.addEventListener('change', () => {
            actualizarEstadoBoton();
            console.log(ordenador);
        });
    } else {
        console.error('no existe el elemento ordenador');
    }

    if(tipo){
        tipo.addEventListener('change', ()=>{
            actualizarEstadoBoton();
            console.log(tipo);
        })
    } else {
        console.error('no existe el elemento tipo');
    }

    if(antiguedad){
        antiguedad.addEventListener('change', ()=>{
            actualizarEstadoBoton();
            console.log(antiguedad);
        })
    } else {
        console.error('no existe el elemento antiguedad');
    }

    if(marcaSN){
        marcaSN.addEventListener('change', ()=>{
            actualizarEstadoBoton();
            console.log(marcaSN);
        })
    } else {
        console.error('no existe el elemento marcaSN');
    }

    function actualizarEstadoBoton() {

        if (edad && sexo && (estudios.querySelector('input:checked').value === 'No' || (estudios.querySelector('input:checked').value === 'Si' && estudiosSel.selectedIndex !== 0)) && ordenador.querySelector('input:checked').value === 'No' || ordenador.querySelector('input:checked').value === 'Si') {
            //validar segundo fieldset
            document.getElementById('enviaForm').disabled = false;
        } else {
            document.getElementById('enviaForm').disabled = true;
        }
    }

    document.getElementById('enviaForm').addEventListener('click', (e) => {
        e.preventDefault();

        // como meter los datos en el array
        datos.push(edad.value, sexo.querySelector('input:checked').value, estudios.querySelector('input:checked').value === 'No' ? estudios.querySelector('input:checked').value : estudios.querySelector('input:checked').value + ': ' + estudiosSel.value, ordenador.querySelector('input:checked').value, tipo.value, antiguedad.value, marcaSN.querySelector('input:checked').value, marcaSN.querySelector('input:checked').value === 'Si' ? nomMarca.value : '', CPUs.value, CPUs.value === 'Intel' ? modIntSel.value : CPUs.value === 'AMD' ? modAMDSel.value : '', modIntSel.value === 'corei3' ? velCi3.value : modIntSel.value === 'corei5' ? velCi5.value : modIntSel.value === 'corei7' ? velCi7.value : modAMDSel.value === 'ryzen5' ? velRy5.value : modAMDSel.value === 'ryzen7' ? ryzen7.value : '', RAM.value, HDD.value, pulgadas.value, internet.value, propComp.querySelector('input:checked').value, dSemUso.value, hDiaUso.value, actRea.querySelectorAll('input:checked') === 'otras' ? document.getElementById('otrasText').value : '');
        var ventana = window.open('');
        ventana.document.write('<table>');
        var cont = 0;
        while (cont < datos.length) {
            ventana.document.write('<tr>' + datos[cont] + '</tr><br>');
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