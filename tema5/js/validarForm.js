document.addEventListener('DOMContentLoaded', finiciar);

function finiciar(){

    var reg = {
        edad: /^[0-9][0-9]?$/
    };

    var edad = document.getElementById('id_edad');
    edad.addEventListener('keyup', ()=>{
        if (!reg.edad.test(edad.value)) {
            edad.style.border = '3px solid red';
        } else {
            edad.style.border = 'none';
        }
    })

    document.getElementById('id_estudiosRad1').addEventListener('click', ()=>{
        if (document.getElementById('id_estudiosRad1').checked) {
            document.getElementById('selEstudios').style.display = 'block';
        }
    })
    document.getElementById('id_estudiosRad2').addEventListener('click', ()=>{
        if (document.getElementById('id_estudiosRad2').checked) {
            document.getElementById('selEstudios').style.display = 'none';
        }
    })

    document.getElementById('mostrarEquipo').addEventListener('click', ()=>{
        if (document.getElementById('mostrarEquipo').checked) {
            document.getElementById('equiInf').style.display = 'block';
        }
    })
    document.getElementById('ocultarEquipo').addEventListener('click', ()=>{
        if (document.getElementById('ocultarEquipo').checked) {
            document.getElementById('equiInf').style.display = 'none';
        }
    })

    document.getElementById('mostrarMarOrdRad').addEventListener('click', ()=>{
        if (document.getElementById('mostrarMarOrdRad').checked) {
            document.getElementById('nomMarca').style.display = 'block';
        }
    })
    document.getElementById('ocultarMarOrdRad').addEventListener('click', ()=>{
        if (document.getElementById('ocultarMarOrdRad').checked) {
            document.getElementById('nomMarca').style.display = 'none';
        }
    })

    var CPUs = document.getElementById('CPU1');
    var modInt = document.getElementById('modInt');
    var modAMD = document.getElementById('modAMD');

    //despliegue de modelos de cpu
    CPUs.addEventListener('click', ()=>{
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

    modIntSel.addEventListener('click', ()=>{
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

    modAMDSel.addEventListener('click', ()=>{
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

    //validar selects
    document.querySelector('#selEstudios select').addEventListener('click', ()=>{
        if(document.querySelector('#selEstudios select').selectedIndex != 0){
            this.style.border = '1px solid red';
        }
    })
}