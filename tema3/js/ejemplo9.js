var gato1 = {
    vidas: 9,
    saltos: () => {
        this.vidas--;
        console.log('Gato1: ' + this.vidas);
    }
}

gato1.saltos();

var gato2 = {
    vidas: 9,
    saltos: function() {
        this.vidas--;
        console.log('Gato2: ' + this.vidas);
    }
}

gato2.saltos();


//comprobacion de metodos de arrays
var array = ["a", "b", "c", "d", "e", "f"];

array.copyWithin(3, 0, 2);
console.log(array);
array.copyWithin(4, 0, 5);
console.log(array);