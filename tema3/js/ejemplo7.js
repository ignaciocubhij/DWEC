function Libro(titulo, autor, tema) {
    this.titulo = titulo;
    this.autor = autor;
    this.tema = tema;
}

var cuantos;
var cont = 0;
var libros = [];
var titulo, autor, tema;

do {
    cuantos = prompt('cuantos libros quieres?');
} while (isNaN(cuantos) || cuantos <= 0);

while (cont < cuantos) {
    titulo = prompt(`Titulo ${cont + 1}?`);
    autor = prompt(`autor ${cont + 1}?`);
    tema = prompt(`tema ${cont + 1}?`);

    libros.push(new Libro(titulo, autor, tema));
    cont++;
}

document.body.insertAdjacentHTML('afterbegin', '<table border="1" style="margin: 0 auto; width: 50%;"><tr><td>Titulo</td><td>Autor</td><td>Tema</td></tr>');

for (let i = 0; i < libros.length; i++) {
    document.querySelector('table').insertAdjacentHTML('beforeend', `<tr><td>${libros[i].titulo}</td><td>${libros[i].autor}</td><td>${libros[i].tema}</td></tr>`);
}

document.body.insertAdjacentHTML('beforeend', '</table>');