var p = document.getElementById("introduccion");
var elId = p.attributes.getNamedItem("id").nodeValue; //elId = "introduccion"
var elId = p.attributes.item(0).nodeValue; // elId = "introduccion"
p.attributes.getNamedItem("id").nodeValue = "preintroduccion";

var atributo = document.createAttribute("lang");
atributo.nodeValue = "es";
p.attributes.setNamedItem(atributo);

var p = document.getElementById("introduccion");
var elId = p.getAttribute("id"); // elId = "introduccion"
p.setAttribute("id", "preintroduccion");


const div = document.querySelector(".info");
div.textContent;

div.innerHTML = "<strong>Importante</strong>"; // Interpreta el HTML
div.innerHTML; // "<strong>Importante</strong>"
div.textContent;
div.textContent = "<strong>Importante</strong>";

var data = document.querySelector(".data");
data.innerHTML = "<h1>Tema 6</h1>";
console.log(data.textContent);
console.log(data.innerHTML);
console.log(data.outerHTML);