document.addEventListener('DOMContentLoaded', finiciar);


class Alumno {

    constructor(nombre, apellidos, edad, direccion, localidad, provincia, cod_postal, telefono, estudios) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.direccion = direccion;
        this.localidad = localidad;
        this.provincia = provincia;
        this.cod_postal = cod_postal;
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
        return this.cod_postal;
    }

    setCodigo(codigo) {
        this.cod_postal = codigo;
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

function finiciar() {
    //expresiones regulares
    const regEx = {
        nombre: /(^[\wñÑ]+$|^[\wñÑ]+\s[\wñÑ]+)$/,
        apellidos: /(^[\wñÑ]+$|^[\wñÑ]+\s[\wñÑ]+)$/,
        edad: /^(?:[1-9][0-9]?|1[01][0-9]|110)$/,
        direccion: /\w+[\/\.][\s\w+]+/,
        localidad: /\w+/,
        provincia: /^(\w+|\w+\s\w+)$/,
        cod_postal: /\d{5}/,
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


    var alumnos = Array();
    var errores = document.getElementsByTagName('p');

    document.getElementById('Alta').addEventListener('click', function (e) {
        e.preventDefault();

        console.log(regEx.nombre.test(nombre.value));
        console.log(regEx.apellidos.test(apellidos.value));
        console.log(regEx.edad.test(edad.value));
        console.log(regEx.localidad.test(localidad.value));
        console.log(regEx.direccion.test(direccion.value));
        console.log(regEx.cod_postal.test(codPostal.value));
        console.log(regEx.telefono.test(telefono.value));
        console.log(regEx.provincia.test(provincia.value));

        if(regEx.nombre.test(nombre.value) && regEx.apellidos.test(apellidos.value) && regEx.edad.test(edad.value) && regEx.direccion.test(direccion.value) && regEx.localidad.test(localidad.value) && regEx.provincia.test(provincia.value) && regEx.cod_postal.test(codPostal.value) && regEx.telefono.test(telefono.value) && estudios.selectedIndex != 0){
            alumnos.push(new Alumno(nombre.value, apellidos.value, edad.value, direccion.value, localidad.value, provincia.value, codPostal.value, telefono.value, estudios.value));
        } else {
            for(let key in errores){
                errores[key].style.display = 'block';
            }
        }
    })
    document.getElementById('Limpiar').addEventListener('click', function () {
        document.forms[0].reset();
    })

    document.getElementById('Visualizar').addEventListener('click', function () {
        //visualizar en el div los datos obtenidos
        document.getElementById('res').innerHTML = res;
    })
    document.getElementById('borrar').addEventListener('click', function () {
        //borra todo el contenido del array
        for(let i = 0; i < alumnos.length; i++){
            alumnos[i].pop();
        }
    })
}