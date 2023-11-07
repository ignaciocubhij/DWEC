document.addEventListener('DOMContentLoaded', finiciar);

function finiciar(){
    document.getElementById('enviar').addEventListener('click', validaForm);
    document.getElementById('limpiar').addEventListener('click', limpiaf);
}

function validaForm() {
    limpiarErrores();

    var numero = document.getElementById('numero').value;
    var codPostal = document.getElementById('codPostal').value;

    if (isNaN(parseInt(numero.value)) || numero.value == "") {
        document.getElementById('errorNum').innerHTML = 'Error en el campo numero';
        error = false;
    }
    
    if (((isNaN(parseInt(codPostal.value)) || codPostal.value == "")) || ((codPostal.value.length != 5))) {
        document.getElementById('errorCod').innerHTML = 'Error en el codigo postal';
        error = false;
    }
    
    if(!(error)) document.getElementById("id_miformu").submit();
}

function limpiarErrores(){
    document.getElementById('errorNum').innerHTML = '';
    document.getElementById('errorCod').innerHTML = '';
}

function limpiaf(){
    document.forms[0].reset();
    limpiarErrores();
 }
