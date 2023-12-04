var libros = [
    {title: "libro1", author: 'autor1', alreadyRead: true}, {title: "libro2", author: 'autor2', alreadyRead: false}
]

libros.map(libro => ()=>{
    var p = document.createElement('p').textContent = libro.author;
    document.body.innerHTML = p;
})