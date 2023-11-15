document.addEventListener('DOMContentLoaded', finiciar);

function finiciar() {
    //expresiones regulares para validar url
    var regex = {
        url: /^(http|https):\/\/w{3}\.\w+\.[a-z]{2,4}$/,
        email: /\w+(\.\w+)*@(\w+\.)+[a-z]{2,3}/
    }

    var intTxt = document.getElementById('texto');
    var radio1 = document.getElementById('radio1');
    var radio2 = document.getElementById('radio2');

    var oculto = false;

    radio1.addEventListener('click', function(){
        if (radio1.checked) {
            intTxt.style.display = 'none';
            oculto = true;
        } 
    })

    radio2.addEventListener('click', function(){
        if (radio2.checked) {
            intTxt.style.display = 'block';
            oculto = false;
        } 
    })

    comprobar_er("\\w$", "ww");
}

function comprobar_er(er, cadena){
    window.alert(er.test(cadena));
}