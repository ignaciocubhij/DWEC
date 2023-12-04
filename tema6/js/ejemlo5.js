var div = document.getElementById('page');

let cont = 0;
while(cont < div.classList.length){
    console.log(div.classList.item(cont));
    cont++;
}

console.log('---Quita el segundo elemento de la clase---');

//borra el segundo elemento de la lista de clases
div.classList.remove(div.classList.item(1));

cont = 0;
while(cont < div.classList.length){
    console.log(div.classList.item(cont));
    cont++;
}

console.log('---Añade un elemento a la clase---');

//borra el segundo elemento de la lista de clases
div.classList.add('prueba');

cont = 0;
while(cont < div.classList.length){
    console.log(div.classList.item(cont));
    cont++;
}