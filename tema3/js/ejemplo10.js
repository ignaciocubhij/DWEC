function Persona(nombre, edad, telefono) {
    this.nombre = nombre;
    this.edad = edad;
    this.telefono = telefono;
}

var array = [];
var cuantos, nombre, edad, telefono;
var cont = 0;

do{
    cuantos = prompt('cuantas personas quieres dar de alta?');
} while (isNaN(cuantos) || cuantos <= 0);

while(cont < cuantos){
    
    do {
        nombre = prompt('nombre: ');
    } while (nombre.valueOf.length != 0);
    do {
        edad = prompt('edad: ');
    } while (parseInt(edad) < 1 || parseInt(edad) > 100);
    do {
        telefono = prompt('telefono: ');
    } while (telefono.length != 9);

    array.push(new Persona(nombre, edad, telefono));
    cont++;
}

for(let i = 0; i < array.length; i++){
    if (array[i].nombre.toUpperCase().startsWith('A')) {
        document.getElementById('empiezaA').innerHTML += '<p>Nombre: ' + array[i].nombre + ', edad: ' + array[i].edad + ', Telefono: ' + array[i].telefono + '</p>';
    }
    if (array[i].nombre.toLowerCase().includes('navarro')) {
        document.getElementById('ContNavarro').innerHTML += '<p>Nombre: ' + array[i].nombre + ', edad: ' + array[i].edad + ', Telefono: ' + array[i].telefono + '</p>';
    }
    if (array[i].edad >= 25) {
        document.getElementById('edadMas25').innerHTML += '<p>Nombre: ' + array[i].nombre + ', edad: ' + array[i].edad + ', Telefono: ' + array[i].telefono + '</p>';
    }
    if (array[i].telefono.slice(0, 3) == '921') {
        document.getElementById('tlfSg').innerHTML += '<p>Nombre: ' + array[i].nombre + ', edad: ' + array[i].edad + ', Telefono: ' + array[i].telefono + '</p>';
    }
}