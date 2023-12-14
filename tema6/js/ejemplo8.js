const val = {
    num: prompt('numero de botones'),
}

function crearElem(padre, tipo, contenido){
    var elem = document.createElement(tipo);
    elem.textContent = contenido;
    return padre.appendChild(elem);
}

var main = crearElem(document.body, 'div', '');
var output1 = crearElem(main, 'div', '');

function mostrar(e){
    this.total++;
    output1.innerHTML = `${this.textContent}: (${this.total})`;
    output1.style.backgroundColor = this.style.backgroundColor;
}

//crear tantos botones como se indique en el objeto
for(let i = 0; i < val.num; i++){
    var boton = crearElem(main, 'button', `boton ${i+1}`);
    boton.style.backgroundColor = `#${Math.random().toString(16).slice(2,8)}`;
    boton.style.color = `white`;
    boton.total = 0;
    boton.classList.add('btn');
    boton.addEventListener('click', mostrar);
}

function mostrarCont(e){
    output2.innerHTML = '';

    var btns = document.querySelectorAll('.btn');
    var lista = crearElem(output2, 'ul', '');
    btns.forEach((ele, index) => {
        var line = crearElem(lista, 'li', `${ele.textContent}: (${ele.total})`);
        line.style.backgroundColor = ele.style.backgroundColor;
        line.style.color = ele.style.color;
    })
}
    
var output2 = crearElem(main, 'div', '');
var totales = crearElem(main, 'button', 'Totales');
totales.addEventListener('click', mostrarCont);