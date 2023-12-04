document.addEventListener('DOMContentLoaded', finiciar);

function getStyle(elemento, propiedadCss) {
    var valor = "";
    if (document.defaultView && document.defaultView.getComputedStyle) {
        valor = document.defaultView.getComputedStyle(elemento, '').getPropertyValue(propiedadCss);
    }
    else if (elemento.currentStyle) {
        propiedadCss = propiedadCss.replace(/\-(\w)/g, function (strMatch, p1) {
            return p1.toUpperCase();
        });
        valor = elemento.currentStyle[propiedadCss];
    }
    return valor;
}

function finiciar(){
    var parrafo = document.getElementById("parrafo");
    var color = getStyle(parrafo, 'color');
    console.log(color);          
}