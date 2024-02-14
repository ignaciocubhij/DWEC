document.addEventListener('DOMContentLoaded', finiciar);

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

function crear(e) {
    var msg = document.createTextNode(e.target.getAttribute('data-tooltip'));
    var msgBox = document.createElement('div');

    msgBox.appendChild(msg);
    msgBox.classList.add('tooltip');
    e.target.appendChild(msgBox);
}

function destruir(e){
    e.target.removeChild(e.target.querySelector(':first-child'));
}

function mover(e){
    var tooltip = e.target.querySelector(':first-child');
    console.log(e.target.value);
    
    tooltip.style.left = e.clientX + 20 + "px";
    tooltip.style.top = e.clientY + 20 + "px";
}

function cambiar(e){
    if (e.target.nextSibling !== null) {
        e.target.removeChild(e.target.lastChild);
        e.target.nextSibling.after(e.target);
    }
}

function finiciar() {
    clean(document.body);
    var box = document.querySelectorAll('div');

    box.forEach((elem, index) => {
        elem.addEventListener('mouseover', crear);
        elem.addEventListener('mouseout', destruir);
        elem.addEventListener('mousemove', mover);
        elem.addEventListener('click', cambiar);
    })
}