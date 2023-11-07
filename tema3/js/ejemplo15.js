document.addEventListener('DOMContentLoaded', fIniciar);

function fIniciar() {
    var cadena = prompt('Dime una frase');

    var palabras = cadena.split(' ');

    function numPal(array) {
        return `La frase tiene ${array.length} palabras`;
    }

    document.getElementById('numPal').innerHTML = numPal(palabras);

    function priUlt(array) {
        let primera = '';
        let ult = '';

        for (let i = 0; i < array.length; i++) {
            primera = array[0];
            ult = array[array.length - 1];
        }

        return `La primera palabra es ${primera} y la ultima es: ${ult}`;
    }

    document.getElementById('priUlt').innerHTML = priUlt(palabras);

    function inverso(array) {
        let cadena = '';

        for (let i = array.length - 1; i >= 0; i--) {
            cadena += array[i] + ' ';
        }

        return cadena;
    }

    document.getElementById('inverso').innerHTML = inverso(palabras);
    
    function A_z(array) {
        var aux = array.slice(0, array.length);
        return aux.sort();
    }

    document.getElementById('A_z').innerHTML = A_z(palabras);

    function Z_a(array) {
        var aux = array.slice(0, array.length);
        return aux.reverse();
    }

    document.getElementById('Z_a').innerHTML = Z_a(palabras);

    function palindromo(text) {
        var palabra = '';
        var palabraInversa = '';

        for(let i = 0; i < text.length; i++){
            for(let j = 0; j < text[i].length; j++){
                palabra += text[i][j].toLowerCase();
            }
        }
        for(let i = text.length-1; i >= 0; i--){
            for(let j = text[i].length-1; j >= 0; j--){
                palabraInversa += text[i][j].toLowerCase();
            }
        }

        console.log(palabra);
        console.log(palabraInversa);

        if (palabra === palabraInversa) {
            return "Es palindromo";
        } else {
            return "No es palindromo";
        }
    }

    document.getElementById('palindromo').innerHTML = palindromo(palabras);
}