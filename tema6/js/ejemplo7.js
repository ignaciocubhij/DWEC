var campo = document.getElementById('campo');

document.getElementsByTagName('button')[0].addEventListener('click', (e)=>{
    e.preventDefault();

    if(campo.value === ""){
        alert('inserta algo eb el campo');
    } else {
        var line = document.createElement('li');
        line.textContent = campo.value;
        console.log(line.textContent);
        var lista = document.getElementsByTagName('ul')[0];

        if(lista.length != 0){
            for(let i = 0; i < lista.childNodes.length; i++){
                if (lista.childNodes[i] != campo.value) {
                    lista.appendChild(line);
                }
            }
        } else {
            lista.appendChild(line);
        }

    }

    campo.value = "";
})