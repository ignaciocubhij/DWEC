/*Numero de enlaces de la pagina, url a la que enlaza el penultimo enlace de la pagina, cuantos enlaces tinen como url http://prueba, nuemro de enlaces que hay en el tercer parrafo*/

var ej1 = document.getElementsByTagName('a');
console.log(ej1.length);

var ej2 = ej1[ej1.length-1].getAttribute('href');
console.log(ej2);

var cont = 0;

for (let i = 0; i < ej1.length; i++) {
    // Comparar la URL del enlace en lugar del enlace completo
    if (ej1[i].getAttribute('href') === 'http://prueba') {
        cont++;
    }
}

var ej3 = cont;
console.log(ej3);

var thirdParagraph = document.getElementsByTagName('p')[2];
var ej4 = thirdParagraph.getElementsByTagName('a').length;
console.log(ej4);