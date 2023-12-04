document.addEventListener('DOMContentLoaded', finiciar);

function finiciar(){
    var regex = {
        cols: /^\d$/,
        rows: /^\d$/
    }
 
    var columnas = document.getElementById('cols');
    var filas = document.getElementById('rows');

    document.getElementsByTagName('button')[0].addEventListener('click', (e)=>{
        e.preventDefault();

        if (regex.cols.test(columnas.value) && regex.rows.test(filas.value)) {
            var tabla = document.createElement('table');
            tabla.style.width = '25%';
            tabla.style.border = '1px solid black';
            document.body.insertAdjacentElement('beforeend', tabla);

            for(let i = 0; i < filas.value; i++){
                var tr = tabla.insertRow();
                for(let j = 0; j < columnas.value; j++){
                    var td = tr.insertCell();
                    td.style.border = '1px solid black';
                    td.appendChild(document.createTextNode(`${i}, ${j}`));
                }
            }
        }
    })
}