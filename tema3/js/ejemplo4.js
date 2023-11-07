var miFuncion = () => {
    alert('hola');
}

var miFuncion2 = (callback) => {
    callback();
}

miFuncion2(miFuncion());