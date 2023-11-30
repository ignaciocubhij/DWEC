document.addEventListener('DOMContentLoaded', finiciar);

function finiciar() {
    var datos = [];
    var reg = {
        edad: /^[0-9][0-9]?$/,
        usoSemana: /^\d$/,
        nomMarca: /^\w+$/,
        txtOtras: /^\w+$/
    };

    var flags = {
        edad: false,
        sexo: false,
        estudios: false
    }

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
    var txtOtras = document.getElementById('otrasText');
    document.getElementById('id_otras').addEventListener('click', (e) => {
        if (e.target.checked) {
            txtOtras.style.display = 'block';
        } else {
            txtOtras.style.display = 'none';
        }
    })

    txtOtras.addEventListener('keyup', (e) => {
        if (!reg.txtOtras.test(txtOtras.value)) {
            e.target.style.border = '3px solid red';
        } else {
            e.target.style.border = 'none';
        }
    })

    // validar selects
    var selects = document.querySelectorAll('div:has(select)');
    var newSelects = Array.from(selects);

    var validarSelects = (e) => {
        var item = e.currentTarget;
        var selectElement = item.querySelector('select');

        if (selectElement && item.style.display === 'block' || selectElement) {
            if (selectElement.selectedIndex === 0) {
                selectElement.style.border = '3px solid red';
                return false;
            } else {
                selectElement.style.border = 'none';
                return true;
            }
        }
    }

    newSelects.forEach(item => {
        item.addEventListener('change', validarSelects);
    });



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
                document.getElementById('error_edad').innerHTML = 'Pon un numero valido';
                flags.edad = false;
            } else {
                edad.style.border = 'none';
                document.getElementById('error_edad').innerHTML = '';
                flags.edad = true;
            }

            actualizarEstadoBoton();
        })
    } else {
        console.error('no existe el elemento edad');
        flags.edad = false;
    }

    if (sexo) {
        sexo.addEventListener('change', () => {
            if (sexo.querySelector('input:checked') !== null) {
                flags.sexo = true;
            }
            actualizarEstadoBoton();
        });
    } else {
        console.error('no existe el elemento sexo');
    }

    if (estudios) {
        estudios.addEventListener('change', () => {
            if (estudios.querySelector('input:checked') !== null) {
                flags.estudios = true;
            }
            actualizarEstadoBoton();
        });
    } else {
        console.error('no existe el elemento estudios');
    }

    if (estudiosSel) {
        estudiosSel.addEventListener('change', () => {
            actualizarEstadoBoton();
        })
    } else {
        console.error('no existe el elemento estudiosSel');
    }

    if (ordenador) {
        ordenador.addEventListener('change', () => {
            actualizarEstadoBoton();
        });
    } else {
        console.error('no existe el elemento ordenador');
    }

    if (tipo) {
        tipo.addEventListener('change', () => {
            actualizarEstadoBoton();
        })
    } else {
        console.error('no existe el elemento tipo');
    }

    if (antiguedad) {
        antiguedad.addEventListener('change', () => {
            actualizarEstadoBoton();
        })
    } else {
        console.error('no existe el elemento antiguedad');
    }

    if (marcaSN) {
        marcaSN.addEventListener('change', () => {
            actualizarEstadoBoton();
        })
    } else {
        console.error('no existe el elemento marcaSN');
    }

    if (nomMarca) {
        nomMarca.addEventListener('keyup', (e) => {
            if (!reg.nomMarca.test(nomMarca.value)) {
                e.target.style.border = '3px solid red';
            } else {
                e.target.style.border = 'none';
            }
        })
    }

    function actualizarEstadoBoton() {

        if (
            flags.edad &&
            flags.sexo &&
            flags.estudios &&
            (
                estudios.querySelector('input:checked').value === 'No' ||
                (estudios.querySelector('input:checked').value === 'Si' && estudiosSel.selectedIndex !== 0)
            ) &&
            (
                ordenador.querySelector('input:checked').value === 'No' ||
                ordenador.querySelector('input:checked').value === 'Si'
            )
        ) {
            // validar segundo fieldset
            document.getElementById('enviaForm').disabled = false;
        } else if (
            ordenador.querySelector('input:checked').value === 'Si' &&
            validarSelects() &&
            nomMarca &&
            dSemUso &&
            txtOtras
        ) {
            document.getElementById('enviaForm').disabled = false;
        } else {
            document.getElementById('enviaForm').disabled = true;
        }        
    }

    document.getElementById('enviaForm').addEventListener('click', (e) => {
        e.preventDefault();

        if (!document.getElementById('enviaForm').disabled) {
            // Solo procede si el botón de enviar no está deshabilitado

            // Crear una nueva ventana
            var ventana = window.open('', '_blank');

            // Construir la tabla con los datos
            var tablaHTML = '<table border="1">';
            tablaHTML += '<tr><th>Dato</th></tr>';

            // Agregar datos al array
            if (ordenador.querySelector('input:checked').value === 'Si' && validarSelects && nomMarca && dSemUso && txtOtras) {
                datos.push(edad.value, sexo.querySelector('input:checked').value, estudios.querySelector('input:checked').value, (estudios.querySelector('input:checked').value === 'Si') ? estudiosSel.value : ' ', ordenador.querySelector('input:checked').value, nomMarca.value, dSemUso.value, txtOtras.value);
            } else if (flags.edad && sexo && (estudios.querySelector('input:checked').value === 'No' || (estudios.querySelector('input:checked').value === 'Si' && estudiosSel.selectedIndex !== 0)) && ordenador.querySelector('input:checked').value === 'No' || ordenador.querySelector('input:checked').value === 'Si') {
                datos.push(edad.value, sexo.querySelector('input:checked').value, estudios.querySelector('input:checked').value, (estudios.querySelector('input:checked').value === 'Si') ? estudiosSel.value : ' ', ordenador.querySelector('input:checked').value);
            }


            // Agregar filas de datos a la tabla
            for (var i = 0; i < datos.length; i++) {
                tablaHTML += '<tr><td>' + datos[i] + '</td></tr>';
            }

            tablaHTML += '</table>';

            // Escribir la tabla en la nueva ventana
            ventana.document.write(tablaHTML);
        }
    });


    document.getElementById('LimpiaForm').addEventListener('click', (e) => {
        e.preventDefault();
        document.forms[0].reset();
        document.getElementById('equiInf').style.display = 'none';
        document.getElementById('enviaForm').disabled = true;
    })
}