const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

datos = [];

if (document.cookie.length === 0) {
	avisoCookies.setAttribute('class', 'aviso-cookies activo');
	fondoAvisoCookies.setAttribute('class', 'fondo-aviso-cookies activo');
} else {
	datos.push({ 'event': 'cookies-aceptadas' });
}

botonAceptarCookies.addEventListener('click', () => {
	avisoCookies.setAttribute('class', 'aviso-cookies');
	fondoAvisoCookies.setAttribute('class', 'fondo-aviso-cookies');

	document.cookie = 'cookies-aceptadas=true';
	document.cookie = `language=${navigator.language}`;

	datos.push({ 'event': 'cookies-aceptadas' });
});


//Ejemplo de cache

document.addEventListener('DOMContentLoaded', () => {

	/* Se define un nombre para la caché (simpleCache).
	Se especifica una lista de recursos (resourcesToCache) que se deben almacenar en la caché.
	Se utiliza la API de caché para abrir la caché y agregar cada recurso.*/

	const cacheName = 'simpleCache';

	const resourcesToCache = [
		'/',
		'/area/DWEC/tema6/js/app.js',
		'/area/DWEC/tema6/js/ejemlo2.js',
		'/area/DWEC/tema6/js/p2.js',
	];

	/*Se manejan las promesas para asegurar que todos los recursos se agreguen correctamente. */
	const promises = resourcesToCache.map((resource) => {
		return caches.open(cacheName)
			.then((cache) => cache.add(new Request(resource)))
			.catch((error) => console.error(`Error adding ${resource} to cache:`, error));
	});

	Promise.all(promises)
		.then(() => console.log('Resources added to cache'))
		.catch((error) => console.error('Error adding resources to cache:', error));

	//Se intenta obtener un recurso desde la caché (caches.match(resourceUrl)).
	const resourceUrl = '/area/DWEC/tema6/js/p2.js';
	caches.match(resourceUrl).then((cacheResponse) => {
		//Si el recurso está en la caché, se muestra un mensaje en la consola y se ejecuta una función (displayScript) que agrega el script al documento.
		if (cacheResponse) {
			console.log('Found in cache:', resourceUrl);
			//Si la solicitud es exitosa, se almacena el recurso en la caché y se ejecuta la misma función (displayScript) para agregar el script al documento.
			displayScript(cacheResponse);
		} else {
			//Si el recurso no está en la caché, se realiza una solicitud de red (fetch) para obtener el recurso.
			console.log('Not in cache. Fetching:', resourceUrl);
			fetch(resourceUrl)
				.then((fetchResponse) => {
					if (!fetchResponse.ok) {
						throw new Error(`Failed to fetch: ${fetchResponse.statusText}`);
					}
					return fetchResponse.clone();
				})
				.then((clonedResponse) => {
					caches.open(cacheName).then((cache) => {
						cache.put(resourceUrl, clonedResponse);
					});
					displayScript(clonedResponse);
				})
				.catch((error) => console.error('Error fetching resource:', error));
		}
	});

	//Función para mostrar el script en el documento:
	function displayScript(response) {
		response.text().then((scriptContent) => {
			const script = document.createElement('script');
			script.textContent = scriptContent;
			document.getElementById('output').appendChild(script);
		});
	}
});