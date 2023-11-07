let numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (numero) {
    console.log(numero);
});

numeros.forEach(numero => console.log(numero));

numeros.forEach((numero, index) => {
    console.log(`Indice: ${index} Valor: ${numero}`);
});

numeros.forEach((numero, index, arreglo) => {
    console.log(arreglo);
});