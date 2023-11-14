document.addEventListener('DOMContentLoaded', iniciar);

function iniciar() {
    var digits = document.querySelectorAll('button:not(.exec, .del)');
    var resultado = document.getElementById('idResultado');

    for (let i = 0; i < digits.length; i++) {
        digits[i].addEventListener('click', (e) => {
            e.preventDefault();
            resultado.value += e.target.innerText;
        })
    };

    let numeros, valor;
    var operacion;

    function calculo(){
        //quitar los operadores del resultado y asignarlo a la variable
        valor = resultado.value;
        numeros = valor.split(/[\+\-\*\/\^]|MOD/);

        //desconstruimos la variable
        var [num1, num2] = numeros;

        //dependiendo del contenido del resultado, se hace una cosa u otra
        switch (true) {
            case valor.includes('*'):
                operacion = parseInt(num1) * parseInt(num2);
                break;
            case valor.includes('+'):
                operacion = parseInt(num1) + parseInt(num2);
                break;
            case valor.includes('-'):
                operacion = parseInt(num1) - parseInt(num2);
                break;
            case valor.includes('/'):
                operacion = parseInt(num1) / parseInt(num2);
                break;
            case valor.includes('^'):
                operacion = Math.pow(parseInt(num1), parseInt(num2));
                break;
            case valor.includes('MOD'):
                operacion = parseInt(num1) % parseInt(num2);
                break;
            default:
                break;
        }        

        //reemplazamos el valor del resultado
        if (isNaN(operacion) || !isFinite(operacion)) {
            document.getElementById('idResultado').value = 'ERROR';
        } else {
            document.getElementById('idResultado').value = operacion;
        }
    }

    document.getElementsByClassName('exec')[0].addEventListener('click', (e) => {
        e.preventDefault();

        calculo();   
    })

    document.getElementsByClassName('del')[0].addEventListener('click', (e) => {
        e.preventDefault();

        resultado.value = '';
    })
}