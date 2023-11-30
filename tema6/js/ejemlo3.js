document.addEventListener('DOMContentLoaded', finiciar);

function finiciar(){
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

    function mover(e){
        var nodoTabla = document.getElementsByTagName('table')[0];
        clean(nodoTabla);
        var tbody = nodoTabla.childNodes[0];

        tbody.insertBefore(e.target.parentNode.parentNode.nextElementSibling, e.target.parentNode.parentNode);
    }

    Array.from(document.getElementsByTagName('a')).forEach(element => {
        element.addEventListener('click', mover);
    });
}