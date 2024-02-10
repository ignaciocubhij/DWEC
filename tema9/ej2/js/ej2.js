document.addEventListener('DOMContentLoaded', finiciar);

function finiciar(){
    let alt = navigator.geolocation.getCurrentPosition(
        function(response){
            console.log(response);
            document.querySelector('#coords').innerText += response.coords.latitude;
            document.querySelector('#coords').innerText += response.coords.longitude;
            document.querySelector('#prec').innerText += response.coords.accuracy;
        },
        function(error) {
            console.error(error);
        }
    );

}