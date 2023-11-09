class Animal {
    constructor(clase, numPatas, sexo){
        this.clase = clase;
        this.numPatas = numPatas;
        this.sexo = sexo;
    }

    getClase(){
        return this.clase;
    }

    setClase(clase){
        this.clase = clase;
    }

    getNumPatas(){
        return this.numPatas;
    }

    setNumPatas(numPatas){
        this.numPatas = numPatas;
    }

    getSexo(){
        return this.sexo;
    }

    setSexo(sexo){
        this.sexo = sexo;
    }

    toString(){
        return `Animal: Clase -> ${this.clase}, Numero de patas -> ${this.numPatas}, sexo -> ${this.sexo}`;
    }
}

class Perro extends Animal {
    constructor(clase, numPatas, sexo, raza) {
        super(clase, numPatas, sexo);
        this.raza = raza;
    }

    getRaza() {
        return this.raza;
    }

    setRaza(raza) {
        this.raza = raza;
    }

    sonido() {
        return "Guau guau";
    }

    toString() {
        return `Perro: Clase -> ${this.clase}, Numero de patas -> ${this.numPatas}, sexo -> ${this.sexo}, raza -> ${this._raza}`;
    }
}


const animal1 = new Animal('Mamifero', 4, 'Hembra');
const perro1 = new Perro('Mamifero', 4, 'Macho', 'Cocker');

document.getElementById('animal').innerHTML += animal1.toString();
document.getElementById('perro').innerHTML += perro1.toString();
document.getElementById('animal').innerHTML += '<br>La clase del animal es: ' + animal1.getClase();