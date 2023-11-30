var input = document.getElementsByTagName('input')[0];
input.setAttribute('id', 'añadir');

document.getElementById('añadir').addEventListener('click', ()=>{
    var elem = document.createElement('li');
    var texto = document.createTextNode('prueba');
    elem.appendChild(texto);
    document.getElementById('lista').insertAdjacentElement('beforeend', elem);
})