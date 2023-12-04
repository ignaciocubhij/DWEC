const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

datos = [];

if(document.cookie.length === 0){
	avisoCookies.setAttribute('class', 'aviso-cookies activo');
	fondoAvisoCookies.setAttribute('class', 'fondo-aviso-cookies activo');
} else {
	datos.push({'event': 'cookies-aceptadas'});
}

botonAceptarCookies.addEventListener('click', () => {
	avisoCookies.setAttribute('class', 'aviso-cookies');
	fondoAvisoCookies.setAttribute('class', 'fondo-aviso-cookies');

	document.cookie = 'cookies-aceptadas=true';
    document.cookie = `language=${navigator.language}`;

	datos.push({'event': 'cookies-aceptadas'});
});