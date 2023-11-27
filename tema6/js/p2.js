/*Numero de enlaces de la pagina, url a la que enlaza el penultimo enlace de la pagina, cuantos enlaces tinen como url http://prueba, nuemro de enlaces que hay en el tercer parrafo*/

var ej1 = document.getElementsByTagName('a');
console.log(ej1.length);

var ej2 = ej1.childNodes[ej1.childNodes.length-1].getAttribute();
console.log(ej2);

var ej3;

function clean(node) {
	for (var n = 0; n < node.childNodes.length; n++) {
		var child = node.childNodes[n];
		if(child.nodeType === 8 || (child.nodeType === 3 && !/\S/.test(child.nodeValue))) {
			node.removeChild(child);
			n--;
		} else if (child.nodeType === 1) {
			clean(child);
		}
	}
}
var ej4 = clean(document.body.childNodes);
console.log(ej4);