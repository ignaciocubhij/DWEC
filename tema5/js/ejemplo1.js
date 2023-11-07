document.addEventListener('DOMContentLoaded', iniciar);

function adelante(){
    history.forward();
    return true;
}

function atras(){
    history.back();
    return true;
}

function cambiar(){
    location.href = 'https://' + document.getElementById('campo').value;
    return true;
}

function iniciar(){
    document.getElementById('id_adelante').addEventListener('click', adelante);
    document.getElementById('id_atras').addEventListener('click', atras);
    document.getElementById('id_cambiar').addEventListener('click', cambiar);
}