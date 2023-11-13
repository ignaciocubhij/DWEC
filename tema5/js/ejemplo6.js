document.addEventListener('DOMContentLoaded', finiciar);


class Alumno {

    constructor(nombre, apellidos, edad, direccion, localidad, provincia, codPostal, telefono, estudios) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.direccion = direccion;
        this.localidad = localidad;
        this.provincia = provincia;
        this.codPostal = codPostal;
        this.telefono = telefono;
        this.estudios = estudios;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getApellidos() {
        return this.apellidos;
    }

    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }
    getLocalidad() {
        return this.localidad;
    }

    setLocalidad(localidad) {
        this.localidad = localidad;
    }
    getEdad() {
        return this.edad;
    }

    setEdad(edad) {
        this.edad = edad;
    }
    getDireccion() {
        return this.direccion;
    }

    setDireccion(direccion) {
        this.direccion = direccion;
    }
    getProvincia() {
        return this.provincia;
    }

    setProvincia(provincia) {
        this.provincia = provincia;
    }
    getCodigo() {
        return this.codPostal;
    }

    setCodigo(codigo) {
        this.codPostal = codigo;
    }
    getTelefono() {
        return this.telefono;
    }

    setTelefono(telefono) {
        this.telefono = telefono
    }
    getEstudios() {
        return this.estudios;
    }
    
    setEstudios(estudios) {
        this.estudios = estudios;
    }
}

var alumnos = Array();

function finiciar() {
    //expresiones regulares
    const regEx = {
        nombre: /(^[\wñÑ]+$|^[\wñÑ]+\s[\wñÑ]+)$/,
        apellidos: /(^[\wñÑ]+$|^[\wñÑ]+\s[\wñÑ]+)$/,
        edad: /^(?:[1-9][0-9]?|1[01][0-9]|110)$/,
        direccion: /\w+[\/\.][\s\w+]+/,
        localidad: /\w+/,
        provincia: /^(\w+|\w+\s\w+)$/,
        codPostal: /\d{5}/,
        telefono: /\(\+\d{3}\)\d{3}\.\d{3}\.\d{3}/
    }

    //campos
    var nombre = document.getElementById('id_nombre');
    var apellidos = document.getElementById('id_apellidos');
    var edad = document.getElementById('id_edad');
    var direccion = document.getElementById('id_direccion');
    var localidad = document.getElementById('id_localidad');
    var provincia = document.getElementById('id_provincia');
    var codPostal = document.getElementById('id_codPostal');
    var telefono = document.getElementById('id_telefono');
    var estudios = document.getElementById('id_estudios');

    //funcionalidad de los botones
    var chk = document.getElementById('id_terms');
    chk.addEventListener('click', () => {
        document.getElementById('Alta').disabled = !document.getElementById('Alta').disabled;
    })


    var errores = document.getElementsByClassName('error');

    document.getElementById('Limpiar').addEventListener('click', function () {
        e.preventDefault();
        document.forms[0].reset();
    })

    document.getElementById('Alta').addEventListener('click', function (e) {
        e.preventDefault();
    
        if (regEx.nombre.test(nombre.value) && regEx.apellidos.test(apellidos.value) && regEx.edad.test(edad.value) && regEx.direccion.test(direccion.value) && regEx.localidad.test(localidad.value) && regEx.provincia.test(provincia.value) && regEx.codPostal.test(codPostal.value) && regEx.telefono.test(telefono.value) && estudios.selectedIndex != 0) {
            alumnos.push(new Alumno(nombre.value, apellidos.value, edad.value, direccion.value, localidad.value, provincia.value, codPostal.value, telefono.value, estudios.value));
            console.log(alumnos);
            document.getElementById('Alta').disabled = true;
            document.forms[0].reset();
            if (!regEx.nombre.test(nombre.value)) errores[0].style.display = 'none';
            if (!regEx.apellidos.test(apellidos.value)) errores[1].style.display = 'none';
            if (!regEx.edad.test(edad.value)) errores[2].style.display = 'none';
            if (!regEx.direccion.test(direccion.value)) errores[3].style.display = 'none';
            if (!regEx.localidad.test(localidad.value)) errores[4].style.display = 'none';
            if (!regEx.provincia.test(provincia.value)) errores[5].style.display = 'none';
            if (!regEx.codPostal.test(codPostal.value)) errores[6].style.display = 'none';
            if (!regEx.telefono.test(telefono.value)) errores[7].style.display = 'none';
            if (estudios.selectedIndex === 0) errores[errores.length - 1].style.display = 'none';
        } else {
            if (!regEx.nombre.test(nombre.value)) errores[0].style.display = 'block';
            if (!regEx.apellidos.test(apellidos.value)) errores[1].style.display = 'block';
            if (!regEx.edad.test(edad.value)) errores[2].style.display = 'block';
            if (!regEx.direccion.test(direccion.value)) errores[3].style.display = 'block';
            if (!regEx.localidad.test(localidad.value)) errores[4].style.display = 'block';
            if (!regEx.provincia.test(provincia.value)) errores[5].style.display = 'block';
            if (!regEx.codPostal.test(codPostal.value)) errores[6].style.display = 'block';
            if (!regEx.telefono.test(telefono.value)) errores[7].style.display = 'block';
            if (estudios.selectedIndex === 0) errores[errores.length - 1].style.display = 'block';
        }
    });
    
    document.getElementById('Visualizar').addEventListener('click', function (e) {
        e.preventDefault();
        
        document.getElementById('resText').innerHTML = '<tr><th colspan="2">Alumnos</th></tr>';
    
        var cont = 0;
        alumnos.forEach((alum, index) => {
            cont++;
            document.getElementById('resText').innerHTML += '<tr><th colspan="2">Alumno ' + cont + '</th></tr>';
            Object.entries(alum).forEach(([key, value]) => {
                document.getElementById('resText').innerHTML += `<tr><td>${key}</td><td>${value}</td></tr>`;
            });
        });
    });
    document.getElementById('borrar').addEventListener('click', function () {
        e.preventDefault();
        //borra todo el contenido del array
        for(let i = 0; i < alumnos.length; i++){
            alumnos[i].pop();
        }
    })
}