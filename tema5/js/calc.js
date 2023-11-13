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

    var numeros;
    var operacion;
    document.getElementsByClassName('exec')[0].addEventListener('click', (e) => {
        e.preventDefault();

        //quitar los operadores del resultado y asignarlo a la variable
        numeros = resultado.value.split(/[\+\-\*\/\%\^]/);

        /* console.log(numeros); */

        //desconstruimos la variable
        var [num1, num2] = numeros;
        /* console.log("nuemros sin parsear", num1, num2); */

        //parseamos los numeros
        parseInt(num1);
        parseInt(num2);
        /* console.log(num1, num2); */

        //dependiendo del contenido del resultado, se hace una cosa u otra
        if (resultado.innerText.includes('*')) {
            operacion = num1 * num2;
            console.log(operacion);
        } else if (resultado.innerText.includes('+')) {
            operacion = num1 + num2;
            console.log(operacion);
        } else if (resultado.innerText.includes('-')) {
            operacion = num1 - num2;
            console.log(operacion);
        } else if (resultado.innerText.includes('/')) {
            operacion = num1 / num2;
            console.log(operacion);
        } else if (resultado.innerText.includes('^')) {
            operacion = Math.pow(num1, num2);
            console.log(operacion);
        } else if (resultado.innerText.includes('%')) {
            operacion = num1 % num2;
            console.log(operacion);
        }

        //reemplazamos el valor del resultado
        document.getElementById('idResultado').value = operacion;
    })

    document.getElementsByClassName('del')[0].addEventListener('click', (e) => {
        e.preventDefault();

        resultado.value = '';
    })
}