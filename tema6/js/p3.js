document.getElementById('enlace').addEventListener('click', (e) => {
    document.getElementById('adicional').setAttribute('class', 'visible');
    e.target.remove();
})