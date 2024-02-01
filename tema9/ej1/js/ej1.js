document.addEventListener('DOMContentLoaded', finiciar);


function finiciar() {
    var resultado = document.getElementById('resultado');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (objPosition) {
            var lon = objPosition.coords.longitude;
            var lat = objPosition.coords.latitude;

            resultado.innerHTML = "<p><trong>latitud:</strong> " + lat + "</p><p><trong>longitud:</strong> " + lon + "</p>";

            var map = L.map('resultado').setView([lat, lon], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            L.control.scale().addTo(map);
            L.marker([lat, lon], { draggable: true }).addTo(map);
        },

            function (objPositionError) {
                switch (objPositionError.code) {
                    case objPositionError.PERMISSION_DENIED:
                        resultado.innerHTML = "No se ha permitido el acceso a la posicion del usuario";
                        break;
                    case objPositionError.POSITION_UNAVAILABLE:
                        resultado.innerHTML = "No se ha podido acceder a la informacion de tu posicion";
                        break;
                    case objPositionError.TIMEOUT:
                        resultado.innerHTML = "El servicio ha tardado demasiado tiempo en responder";
                        break;
                    default:
                        resultado.innerHTML = "Error desconocido";
                }
            },
            {
                maximumAge: 75000,
                timeout: 15000
            }
        );

    }
}